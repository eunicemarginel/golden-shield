export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Drop a looping background video at public/media/hero-loop.mp4 (and an
          optional poster frame at public/media/hero-poster.jpg) to activate. */}
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
    </div>
  );
}
