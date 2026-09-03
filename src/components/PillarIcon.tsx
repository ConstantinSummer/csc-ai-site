import type { ReactElement } from "react";

type IconProps = {
  className?: string;
};

/** Custom app window with a small autonomous agent path running inside it. */
function DevelopmentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect
        x="4"
        y="7"
        width="32"
        height="26"
        rx="4"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <path d="M4 14h32" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.4" />
      <circle cx="9" cy="10.5" r="1" fill="currentColor" fillOpacity="0.5" />
      <circle cx="13" cy="10.5" r="1" fill="currentColor" fillOpacity="0.5" />
      <path
        d="M11 26l5-6 4 4 6-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="26" r="2" fill="currentColor" />
      <circle cx="16" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="24" r="2" fill="currentColor" />
      <circle cx="26" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

/** Diagnostic scan / roadmap read-out — audit & readiness. */
function AuditIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect
        x="7"
        y="5"
        width="20"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <path
        d="M12 13h10M12 19h10M12 25h6"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="27"
        cy="27"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M32 32l4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M27 23.5v3.5l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Chat bubble broadcasting outward — visibility to AI chatbots. */
function VisibilityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M8 12a5 5 0 0 1 5-5h11a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5H16l-6 5v-5.5A5 5 0 0 1 8 21z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="16" r="1.6" fill="currentColor" />
      <circle cx="20" cy="16" r="1.6" fill="currentColor" />
      <circle cx="25.5" cy="16" r="1.6" fill="currentColor" />
      <path
        d="M29 8.5c1.6 1.2 2.6 3 2.6 5"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32.5 5.5c2.6 2 4.3 5 4.3 8.3"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Open book with an upward growth line — team upskilling. */
function TrainingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 12c-2.2-1.8-6-2.8-11-2.4v18.5c5-.5 8.8.4 11 2.2 2.2-1.8 6-2.7 11-2.2V9.6C26 9.2 22.2 10.2 20 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 12v18"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.4"
      />
      <path
        d="M24 20l3.5-4 2.5 2.5L34.5 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 13h4v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS: Record<string, (props: IconProps) => ReactElement> = {
  "ai-development": DevelopmentIcon,
  "ai-readiness-audit": AuditIcon,
  "geo-aeo-visibility": VisibilityIcon,
  "team-training": TrainingIcon,
};

export default function PillarIcon({
  slug,
  colorVar,
  size = "md",
}: {
  slug: string;
  colorVar: string;
  size?: "md" | "lg" | "xl";
}) {
  const Icon = ICONS[slug];
  if (!Icon) return null;

  const box =
    size === "xl" ? "h-20 w-20" : size === "lg" ? "h-16 w-16" : "h-14 w-14";
  const iconSize =
    size === "xl" ? "h-11 w-11" : size === "lg" ? "h-9 w-9" : "h-8 w-8";

  return (
    <div
      aria-hidden="true"
      className={`flex ${box} shrink-0 items-center justify-center rounded-2xl border border-border`}
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${colorVar} 18%, transparent), transparent 75%)`,
        color: colorVar,
      }}
    >
      <Icon className={iconSize} />
    </div>
  );
}
