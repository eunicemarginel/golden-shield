"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { primaryNav, secondaryNav } from "@/lib/nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/brand/logo-full.png"
            alt="Golden Shield Security Services"
            width={678}
            height={260}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-evenly px-10 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="/contact-us" variant="primary">
            Get a Free Assessment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact-us" variant="primary" className="mt-2">
              Get a Free Assessment
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
