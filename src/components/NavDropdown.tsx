"use client";

import { useRef, useState, type ReactNode } from "react";
import { Link } from "next-view-transitions";

export type NavDropdownItem = { title: string; slug: string };

export function NavDropdown({
  label,
  href,
  items,
  linkClassName,
  underline,
}: {
  label: string;
  href: string;
  items: NavDropdownItem[];
  linkClassName: string;
  underline: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <Link href={href} className={linkClassName}>
        {label}
        {underline}
      </Link>

      {open && items.length > 0 && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
          <div className="w-[min(92vw,760px)] rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`${href}/${item.slug}`}
                  className="rounded-lg px-2 py-1.5 text-sm leading-snug text-white/80 transition-colors hover:bg-white/5 hover:text-gold-bright"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function MobileNavAccordion({
  label,
  href,
  items,
  active,
  onNavigate,
}: {
  label: string;
  href: string;
  items: NavDropdownItem[];
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={onNavigate}
          className={`flex-1 rounded-lg px-3 py-2.5 text-sm ${
            active ? "font-semibold text-gold-bright" : "font-medium text-white/85"
          }`}
        >
          {label}
        </Link>
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={`Toggle ${label} submenu`}
            className="p-2.5 text-white/60"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      {expanded && (
        <div className="ml-3 flex flex-col gap-1 border-l border-white/10 py-1 pl-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${href}/${item.slug}`}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
