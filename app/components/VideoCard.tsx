type VideoCardProps = {
  label: string;
  src: string;
};

export function VideoCard({ label, src }: VideoCardProps) {
  return (
    <div className="video-card" aria-label={label}>
      <video src={src} autoPlay loop muted playsInline preload="metadata" />
    </div>
  );
}
