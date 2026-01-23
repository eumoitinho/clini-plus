"use client";

import type { LocalVideoTrack } from "twilio-video";
import { Track } from "./Track";

type Props = {
  localVideoTrack: LocalVideoTrack | null;
};

export function VideoPreview({ localVideoTrack }: Props) {
  if (!localVideoTrack) {
    return (
      <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-600">
        Pré-visualização da câmera (permita acesso para visualizar).
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="aspect-video bg-slate-950">
        <Track track={localVideoTrack} className="h-full w-full" />
      </div>
    </div>
  );
}
