import { Link } from "next-view-transitions";
import { PhotoSlot, type MediaLike } from "@/components/PhotoSlot";

export function Card({
  href,
  title,
  description,
  eyebrow,
  image,
  size = "sm",
}: {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
  image?: MediaLike;
  size?: "sm" | "lg";
}) {
  const isLarge = size === "lg";

  return (
    <Link
      href={href}
      className={`group flex overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg hover:shadow-gold/10 ${
        isLarge
          ? "sm:col-span-2 sm:row-span-2 flex-col sm:flex-row"
          : "flex-col"
      }`}
    >
      <PhotoSlot
        image={image}
        label={`${title} photo`}
        aspect={isLarge ? "aspect-[16/10] sm:aspect-auto" : "aspect-[16/10]"}
        className={`rounded-none border-x-0 border-t-0 ${
          isLarge
            ? "sm:w-1/2 sm:self-stretch sm:border-r sm:border-t-0 sm:rounded-l-2xl sm:rounded-tr-none"
            : "rounded-t-2xl"
        }`}
      />
      <div className="flex flex-1 flex-col justify-center p-6">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h3
          className={`mt-2 font-semibold text-foreground group-hover:text-gold ${
            isLarge ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          {description}
        </p>
        <span className="mt-4 text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
