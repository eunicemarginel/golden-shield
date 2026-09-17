"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, animate } from "motion/react";

/**
 * Animates the numeric portion of a stat value (e.g. "7+", "100%", "24/7")
 * from 0 up to its target once scrolled into view, preserving any
 * non-numeric prefix/suffix (the "+", "%", "/7") as static text.
 */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);

  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const prefix = match ? "" : value;

  useEffect(() => {
    // The server-rendered markup already shows the real target value (so
    // crawlers/no-JS clients always see the correct number) — only reset to
    // 0 here, once JS has actually taken over, right before animating up.
    if (!isInView || !match || shouldReduceMotion) return;
    if (ref.current) ref.current.textContent = "0";
    const controls = animate(motionValue, target, {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, match, motionValue, shouldReduceMotion, target]);

  if (!match) {
    return <>{prefix}</>;
  }

  return (
    <>
      <span ref={ref}>{target}</span>
      {suffix}
    </>
  );
}
