"use client";

import { useEffect } from "react";

/**
 * When the page is opened with a #hash (e.g. coming from an internal link
 * elsewhere on the site), first render at the top of the page — so the
 * visitor notices there's more content here — then smoothly scroll down
 * to the referenced section after a short pause.
 */
export default function ScrollToHash({ delayMs = 700 }: { delayMs?: number }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;

    window.scrollTo({ top: 0, behavior: "auto" });

    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return null;
}
