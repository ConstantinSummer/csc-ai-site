"use client";

import { useSyncExternalStore } from "react";

/**
 * Renders the site's own email/phone only after hydration, assembled from
 * split parts. This keeps the real address/number out of the server-
 * rendered HTML (what a basic scraper or crawler fetches), so plain-text
 * scraping of the page source doesn't pick it up.
 *
 * This is NOT bulletproof against a scraper that fully renders JavaScript
 * (e.g. a headless browser) — nothing client-side can fully prevent that.
 * It stops the common case: regex/HTML scrapers that read raw page source.
 */

const EMAIL_USER = ["i", "n", "f", "o"];
const EMAIL_DOMAIN = ["c", "s", "c", ".", "c", "o", "m", ".", "g", "r"];

const PHONE_DISPLAY = ["+", "3", "0", " ", "6", "9", "7", " ", "2", "5", "5", " ", "2", "5", "5", "9"];
const PHONE_HREF = ["+", "3", "0", "6", "9", "7", "2", "5", "5", "2", "5", "5", "9"];

const emptySubscribe = () => () => {};

// Returns false on the server and on the very first client render (so
// hydration matches), then true once mounted in the browser — without
// ever calling setState from an effect.
function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ObfuscatedEmail({ className }: { className?: string }) {
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <span className={className} aria-hidden="true">
        &middot;&middot;&middot;
      </span>
    );
  }

  const email = `${EMAIL_USER.join("")}@${EMAIL_DOMAIN.join("")}`;

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}

export function ObfuscatedPhone({ className }: { className?: string }) {
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <span className={className} aria-hidden="true">
        &middot;&middot;&middot;
      </span>
    );
  }

  const display = PHONE_DISPLAY.join("");
  const href = PHONE_HREF.join("");

  return (
    <a href={`tel:${href}`} className={className}>
      {display}
    </a>
  );
}
