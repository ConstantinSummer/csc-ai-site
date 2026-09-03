export default function GlowOrb({
  className = "",
  color = "var(--accent-blue)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background: color,
        opacity: 0.18,
      }}
    />
  );
}
