import type { ReactNode } from "react";

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ink-border bg-ink-surface/80 p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
