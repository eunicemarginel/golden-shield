import Link from "next/link";

export function Card({
  href,
  title,
  description,
  eyebrow,
}: {
  href: string;
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
    >
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
    </Link>
  );
}
