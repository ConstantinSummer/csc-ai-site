"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Content is visible by default — this is what gets server-rendered and
  // what stays on screen if JS never loads or hydration fails. The
  // scroll-triggered fade-in below is a progressive enhancement layered on
  // top, never a precondition for visibility.
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Only animate elements that are NOT already in view on mount — that
    // avoids hiding above-the-fold content (which would otherwise flash
    // visible-then-hidden) while still giving below-the-fold sections
    // their scroll-reveal effect.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9;
    if (alreadyInView) return;

    setAnimate(true);
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        animate
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: `${delayMs}ms`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
