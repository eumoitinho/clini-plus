"use client";

import type { LocalVideoTrack, LocalAudioTrack, RemoteVideoTrack, RemoteAudioTrack, Track as TwilioTrack } from "twilio-video";
import { Track } from "./Track";

type AttachableTrack = LocalVideoTrack | LocalAudioTrack | RemoteVideoTrack | RemoteAudioTrack;

type RemoteTrackInfo = {
  participantSid: string;
  participantIdentity: string;
  trackSid: string;
  kind: TwilioTrack.Kind;
  track: AttachableTrack;
};

type Props = {
  localVideoTrack: LocalVideoTrack | null;
  remoteTracks: RemoteTrackInfo[];
};

export function VideoRoom({ localVideoTrack, remoteTracks }: Props) {
  const remoteVideoTracks = remoteTracks.filter(t => t.kind === "video");

  if (!localVideoTrack && remoteVideoTracks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
        Sala de vídeo (Twilio) será renderizada aqui.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {localVideoTrack && (
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="aspect-video bg-slate-950">
            <Track track={localVideoTrack} className="h-full w-full" />
          </div>
          <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-600">Você</div>
        </div>
      )}

      {remoteVideoTracks.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {remoteVideoTracks.map(t => (
            <div key={t.trackSid} className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="aspect-video bg-slate-950">
                <Track track={t.track} className="h-full w-full" />
              </div>
              <div className="border-t border-slate-200 px-4 py-2 text-xs text-slate-600">
                {t.participantIdentity}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
