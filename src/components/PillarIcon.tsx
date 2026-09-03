const PATHS: Record<string, string> = {
  // Code brackets with a small AI "node" — custom development
  "ai-development":
    "M9 7 4 12l5 5 M15 7l5 5-5 5 M12 4l-1.5 16 M11 12h.01 M13 12h.01",
  // Radar / diagnostic scan — readiness audit
  "ai-readiness-audit":
    "M12 12 3.5 8.8 M12 12v9 M12 12 20.5 8.8 M12 3v3 M4.5 12H3 M21 12h-1.5 M6.3 6.3l1 1 M17.7 6.3l-1 1",
  // Chat bubble with signal waves — GEO / AEO visibility
  "geo-aeo-visibility":
    "M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.2-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z M9 11a3 3 0 0 1 6 0",
  // Open book — training / upskilling
  "team-training":
    "M3 5.5C4.5 4.6 7 4 9 4.4c1.2.2 2.3.7 3 1.3 0.7-.6 1.8-1.1 3-1.3 2-.4 4.5.2 6 1.1v13c-1.5-.9-4-1.5-6-1.1-1.2.2-2.3.7-3 1.3-0.7-.6-1.8-1.1-3-1.3-2-.4-4.5.2-6 1.1v-13Z M12 5.7v13",
};

export default function PillarIcon({
  slug,
  colorVar,
}: {
  slug: string;
  colorVar: string;
}) {
  const d = PATHS[slug];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={colorVar}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
