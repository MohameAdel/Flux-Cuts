"use client";

import { useEffect, useRef } from "react";

type VideoCardProps = {
  label: string;
  src: string;
  poster?: string;
};

export function VideoCard({ label, src, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="video-card" aria-label={label}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
