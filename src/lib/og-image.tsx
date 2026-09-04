import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Shared renderer for per-route Open Graph share images. Each route's
 * opengraph-image.tsx calls this with its own eyebrow/title/description so
 * the share preview matches that page instead of the generic site-wide
 * image.
 */
export function buildOgImage({
  eyebrow = "Konstantinos Zitis",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05060a",
          color: "#f2f3f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#4fd8e8",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 1000,
            backgroundImage:
              "linear-gradient(100deg, #4f7cff 0%, #8b6bff 55%, #4fd8e8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            maxWidth: 900,
            color: "#9aa0b2",
          }}
        >
          {description}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
