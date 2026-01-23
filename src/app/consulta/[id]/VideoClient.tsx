"use client";

import { useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

import { VideoControls } from "@/components/video/VideoControls";
import { VideoPreview } from "@/components/video/VideoPreview";
import { VideoRoom } from "@/components/video/VideoRoom";
import { useVideo } from "@/hooks/useVideo";

type Props = {
  consultaId: string;
};

export function VideoClient({ consultaId }: Props) {
  const { data: session } = useSession();

  const identity = useMemo(() => {
    if (session?.user?.email) {
      return session.user.email;
    }
    return `user-${Math.random().toString(36).slice(2, 8)}`;
  }, [session]);

  const room = useMemo(() => `consulta-${consultaId}`, [consultaId]);

  const {
    connected,
    isConnecting,
    error,
    localAudioTrack,
    localVideoTrack,
    remoteTracks,
    acquireLocalTracks,
    connect,
    disconnect,
    toggleMute,
    toggleCamera
  } = useVideo({ identity, room });

  useEffect(() => {
    acquireLocalTracks().catch(() => {});
  }, [acquireLocalTracks]);

  if (!session) {
    return (
      <div className="rounded-2xl bg-yellow-50 p-6 text-center text-yellow-800 border border-yellow-200">
        <p className="font-medium">Voce precisa estar logado para acessar a sala de consulta.</p>
        <a href="/login" className="mt-2 inline-block text-sm underline">Fazer login</a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!connected ? (
        <>
          <VideoPreview localVideoTrack={localVideoTrack} />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={connect}
              disabled={isConnecting}
              className="rounded-full bg-brand-700 px-6 py-3 text-sm font-bold text-white hover:bg-brand-800 disabled:opacity-60"
            >
              {isConnecting ? "Conectando..." : "Entrar na sala"}
            </button>

            <VideoControls
              micEnabled={!!localAudioTrack?.isEnabled}
              cameraEnabled={!!localVideoTrack?.isEnabled}
              onToggleMute={toggleMute}
              onToggleCamera={toggleCamera}
              onLeave={disconnect}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </>
      ) : (
        <>
          <VideoRoom localVideoTrack={localVideoTrack} remoteTracks={remoteTracks} />

          <VideoControls
            micEnabled={!!localAudioTrack?.isEnabled}
            cameraEnabled={!!localVideoTrack?.isEnabled}
            onToggleMute={toggleMute}
            onToggleCamera={toggleCamera}
            onLeave={disconnect}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}
        </>
      )}
    </div>
  );
}
