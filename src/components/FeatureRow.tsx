import { Link } from "next-view-transitions";
import { PhotoSlot, type MediaLike } from "@/components/PhotoSlot";

export function FeatureRow({
  href,
  eyebrow,
  title,
  description,
  image,
  reverse = false,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  image?: MediaLike;
  reverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <PhotoSlot
        image={image}
        label={`${title} photo`}
        aspect="aspect-[4/3]"
        className={`transition-transform duration-300 group-hover:scale-[1.02] ${reverse ? "lg:order-2" : ""}`}
        sizes="(min-width: 1024px) 640px, 100vw"
      />
      <div className={reverse ? "lg:order-1" : ""}>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground group-hover:text-gold">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-foreground-muted">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
