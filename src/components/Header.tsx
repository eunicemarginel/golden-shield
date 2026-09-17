"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { primaryNav, secondaryNav } from "@/lib/nav";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Routes whose top section is a dark "command center" band the transparent
// nav can sit over. Detail pages ([slug] routes) start with a plain light
// background, so they always get the opaque nav.
const DARK_HERO_ROUTES = new Set([
  "/",
  "/services",
  "/products",
  "/industries",
  "/enforcement-and-compliance",
  "/ai-security-services",
  "/blog",
  "/careers",
  "/about",
  "/faq",
  "/contact-us",
]);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const transparent = DARK_HERO_ROUTES.has(pathname) && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-ink/85 backdrop-blur-md"
      }`}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-gold-dark via-gold-bright to-gold-dark" />
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/brand/gss-logo.png"
            alt="Golden Shield Security Services"
            width={496}
            height={135}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-evenly px-10 lg:flex">
          {[...primaryNav, ...secondaryNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              className={`group relative py-1 text-sm whitespace-nowrap transition-colors ${
                isActivePath(pathname, item.href)
                  ? "font-semibold text-gold-bright"
                  : "font-medium text-white/85 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-gold-bright transition-transform duration-200 group-hover:scale-x-100 ${
                  isActivePath(pathname, item.href) ? "scale-x-100" : ""
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="/contact-us" variant="primary">
            Free Security Assessment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 ${
                  isActivePath(pathname, item.href)
                    ? "font-semibold text-gold-bright"
                    : "font-medium text-white/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact-us" variant="primary" className="mt-2">
              Free Security Assessment
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
