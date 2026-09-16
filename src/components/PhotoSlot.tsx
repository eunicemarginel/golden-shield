import Image from "next/image";

export type MediaLike = {
  url?: string | null;
  alt?: string | null;
} | null | undefined;

export function PhotoSlot({
  image,
  label,
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(min-width: 1024px) 400px, 100vw",
}: {
  image?: MediaLike;
  label: string;
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  if (image?.url) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspect} ${className}`}>
        <Image
          src={image.url}
          alt={image.alt || label}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gold/40 bg-surface px-4 text-center ${aspect} ${className}`}
    >
      <span aria-hidden className="text-2xl">
        📷
      </span>
      <span className="text-xs font-medium text-foreground-muted">{label}</span>
      <span className="text-[0.65rem] text-foreground-muted/70">
        Add via /admin &rarr; Media
      </span>
    </div>
  );
}
