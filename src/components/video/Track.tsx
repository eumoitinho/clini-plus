"use client";

import { useEffect, useRef } from "react";
import type { LocalVideoTrack, LocalAudioTrack, RemoteVideoTrack, RemoteAudioTrack } from "twilio-video";

type AttachableTrack = LocalVideoTrack | LocalAudioTrack | RemoteVideoTrack | RemoteAudioTrack;

type Props = {
  track: AttachableTrack;
  className?: string;
};

export function Track({ track, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const element = track.attach();
    element.style.width = "100%";
    element.style.height = "100%";
    element.style.objectFit = "cover";

    container.appendChild(element);

    return () => {
      track.detach().forEach(el => el.remove());
    };
  }, [track]);

  return <div ref={containerRef} className={className} />;
}
