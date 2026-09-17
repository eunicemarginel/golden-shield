"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from "next-view-transitions";
import { PhotoSlot, type MediaLike } from "@/components/PhotoSlot";

type Pillar = {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  image?: MediaLike;
};

export function WhatWeDoShowcase({ pillars }: { pillars: Pillar[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      pillars.length - 1,
      Math.max(0, Math.floor(progress * pillars.length)),
    );
    setActive(index);
  });

  return (
    <div ref={wrapperRef} style={{ height: `${pillars.length * 70}vh` }}>
      <div className="sticky top-28 grid items-center gap-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.href}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active === index ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <PhotoSlot
                image={pillar.image}
                label={`${pillar.title} photo`}
                aspect="aspect-[4/3]"
                className="absolute inset-0 h-full w-full"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {pillars.map((pillar, index) => {
            const isActive = active === index;
            return (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex gap-4 transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : 0.4 }}
              >
                <span
                  className={`font-mono text-sm transition-colors ${
                    isActive ? "text-gold" : "text-foreground-muted"
                  }`}
                >
                  0{index + 1}
                </span>
                <div>
                  {pillar.eyebrow && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {pillar.eyebrow}
                    </span>
                  )}
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground group-hover:text-gold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-foreground-muted">
                    {pillar.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
