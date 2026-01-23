"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Video, {
  LocalAudioTrack,
  LocalTrack,
  LocalVideoTrack,
  Participant,
  RemoteAudioTrack,
  RemoteParticipant,
  RemoteTrackPublication,
  RemoteVideoTrack,
  Room,
  Track
} from "twilio-video";

type AttachableTrack = LocalVideoTrack | LocalAudioTrack | RemoteVideoTrack | RemoteAudioTrack;

type RemoteTrackInfo = {
  participantSid: string;
  participantIdentity: string;
  trackSid: string;
  kind: Track.Kind;
  track: AttachableTrack;
};

type Options = {
  identity: string;
  room: string;
};

async function fetchTwilioToken(identity: string, room: string) {
  const url = new URL("/api/twilio/token", window.location.origin);
  url.searchParams.set("identity", identity);
  url.searchParams.set("room", room);

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? "Failed to fetch Twilio token");
  }

  const data = (await res.json()) as { token: string };
  if (!data?.token) throw new Error("Token not returned by server");
  return data.token;
}

function trackFromPublication(pub: RemoteTrackPublication): RemoteVideoTrack | RemoteAudioTrack | null {
  return (pub.track as RemoteVideoTrack | RemoteAudioTrack) ?? null;
}

export function useVideo({ identity, room }: Options) {
  const [error, setError] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [roomState, setRoomState] = useState<Room | null>(null);
  const [localAudioTrack, setLocalAudioTrack] = useState<LocalAudioTrack | null>(null);
  const [localVideoTrack, setLocalVideoTrack] = useState<LocalVideoTrack | null>(null);
  const [remoteTracks, setRemoteTracks] = useState<RemoteTrackInfo[]>([]);

  const roomRef = useRef<Room | null>(null);

  const connected = !!roomState;

  const localTracks = useMemo(() => {
    return [localAudioTrack, localVideoTrack].filter(Boolean) as LocalTrack[];
  }, [localAudioTrack, localVideoTrack]);

  const upsertRemoteTrack = useCallback(
    (participant: RemoteParticipant, track: RemoteVideoTrack | RemoteAudioTrack) => {
      setRemoteTracks(prev => {
        const idx = prev.findIndex(p => p.trackSid === track.sid);
        const next: RemoteTrackInfo = {
          participantSid: participant.sid,
          participantIdentity: participant.identity ?? "Unknown",
          trackSid: track.sid,
          kind: track.kind,
          track
        };
        if (idx === -1) return [...prev, next];
        const copy = [...prev];
        copy[idx] = next;
        return copy;
      });
    },
    []
  );

  const removeRemoteTracksByParticipant = useCallback((participantSid: string) => {
    setRemoteTracks(prev => prev.filter(t => t.participantSid !== participantSid));
  }, []);

  const removeRemoteTrackBySid = useCallback((trackSid: string) => {
    setRemoteTracks(prev => prev.filter(t => t.trackSid !== trackSid));
  }, []);

  const bindParticipant = useCallback(
    (participant: Participant) => {
      // Only track remote participants.
      if (participant === roomRef.current?.localParticipant) return;

      const remote = participant as RemoteParticipant;

      remote.tracks.forEach(publication => {
        const track = trackFromPublication(publication as unknown as RemoteTrackPublication);
        if (track) upsertRemoteTrack(remote, track);
      });

      const onSubscribed = (track: RemoteVideoTrack | RemoteAudioTrack) => upsertRemoteTrack(remote, track);
      const onUnsubscribed = (track: RemoteVideoTrack | RemoteAudioTrack) => removeRemoteTrackBySid(track.sid);

      remote.on("trackSubscribed", onSubscribed);
      remote.on("trackUnsubscribed", onUnsubscribed);

      return () => {
        remote.off("trackSubscribed", onSubscribed);
        remote.off("trackUnsubscribed", onUnsubscribed);
      };
    },
    [removeRemoteTrackBySid, upsertRemoteTrack]
  );

  const acquireLocalTracks = useCallback(async () => {
    setError(null);

    if (localAudioTrack && localVideoTrack) {
      return [localAudioTrack, localVideoTrack] as LocalTrack[];
    }

    const tracks = await Video.createLocalTracks({ audio: true, video: true });
    const audio = tracks.find(t => t.kind === "audio") as LocalAudioTrack | undefined;
    const video = tracks.find(t => t.kind === "video") as LocalVideoTrack | undefined;

    if (audio) setLocalAudioTrack(audio);
    if (video) setLocalVideoTrack(video);
    return tracks as LocalTrack[];
  }, [localAudioTrack, localVideoTrack]);

  const connect = useCallback(async () => {
    if (roomRef.current) return;
    setIsConnecting(true);
    setError(null);

    try {
      const createdTracks = await acquireLocalTracks();
      const token = await fetchTwilioToken(identity, room);

      const tracks = (createdTracks?.length ? createdTracks : [localAudioTrack, localVideoTrack].filter(Boolean)) as LocalTrack[];

      const newRoom = await Video.connect(token, {
        name: room,
        tracks
      });

      roomRef.current = newRoom;
      setRoomState(newRoom);

      const participantUnsubscribers: Array<() => void> = [];

      newRoom.participants.forEach(p => {
        const unsub = bindParticipant(p);
        if (unsub) participantUnsubscribers.push(unsub);
      });

      const onParticipantConnected = (p: RemoteParticipant) => {
        const unsub = bindParticipant(p);
        if (unsub) participantUnsubscribers.push(unsub);
      };

      const onParticipantDisconnected = (p: RemoteParticipant) => {
        removeRemoteTracksByParticipant(p.sid);
      };

      newRoom.on("participantConnected", onParticipantConnected);
      newRoom.on("participantDisconnected", onParticipantDisconnected);

      newRoom.once("disconnected", () => {
        participantUnsubscribers.forEach(fn => fn());
        newRoom.off("participantConnected", onParticipantConnected);
        newRoom.off("participantDisconnected", onParticipantDisconnected);
        roomRef.current = null;
        setRoomState(null);
        setRemoteTracks([]);
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to connect";
      setError(message);
    } finally {
      setIsConnecting(false);
    }
  }, [acquireLocalTracks, bindParticipant, identity, localAudioTrack, localVideoTrack, removeRemoteTracksByParticipant, room]);

  const disconnect = useCallback(() => {
    roomRef.current?.disconnect();
  }, []);

  const toggleMute = useCallback(() => {
    if (!localAudioTrack) return;
    if (localAudioTrack.isEnabled) localAudioTrack.disable();
    else localAudioTrack.enable();
  }, [localAudioTrack]);

  const toggleCamera = useCallback(() => {
    if (!localVideoTrack) return;
    if (localVideoTrack.isEnabled) localVideoTrack.disable();
    else localVideoTrack.enable();
  }, [localVideoTrack]);

  useEffect(() => {
    return () => {
      roomRef.current?.disconnect();
      localAudioTrack?.stop();
      localVideoTrack?.stop();
    };
  }, [localAudioTrack, localVideoTrack]);

  return {
    connected,
    isConnecting,
    error,
    room: roomState,
    localAudioTrack,
    localVideoTrack,
    localTracks,
    remoteTracks,
    acquireLocalTracks,
    connect,
    disconnect,
    toggleMute,
    toggleCamera
  };
}
