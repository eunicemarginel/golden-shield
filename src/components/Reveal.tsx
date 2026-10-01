"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  // For above-the-fold content (hero text, etc.) that's visible on load
  // with no scrolling needed: the normal opacity-0-until-JS-hydrates
  // animation measurably delays LCP, since the browser can't count text
  // as "painted" until Framer Motion mounts and animates it in. This
  // renders it plainly, full opacity, from the very first paint instead.
  immediate?: boolean;
}) {
  if (immediate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
