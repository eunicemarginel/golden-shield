export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The poster paints immediately as the LCP element; preload="none"
          stops the browser eagerly fetching the full video and competing
          for bandwidth with it on slower mobile connections. */}
      <link rel="preload" as="image" href="/media/hero-poster.jpg" fetchPriority="high" />
      {/* Drop a looping background video at public/media/hero-loop.mp4 (and an
          optional poster frame at public/media/hero-poster.jpg) to activate. */}
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
    </div>
  );
}
