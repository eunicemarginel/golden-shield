import { Link } from "next-view-transitions";
import { PhotoSlot, type MediaLike } from "@/components/PhotoSlot";

export function Card({
  href,
  title,
  description,
  eyebrow,
  image,
}: {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
  image?: MediaLike;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
    >
      <PhotoSlot
        image={image}
        label={`${title} photo`}
        aspect="aspect-[16/10]"
        className="rounded-none rounded-t-2xl border-x-0 border-t-0"
        imageClassName="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="flex flex-1 flex-col p-6">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-gold">
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
