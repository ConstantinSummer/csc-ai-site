import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          Konstantinos Zitis
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            backgroundImage:
              "linear-gradient(100deg, #4f7cff 0%, #8b6bff 55%, #4fd8e8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CSC AI Solutions
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            maxWidth: 900,
            color: "#9aa0b2",
          }}
        >
          Τεχνητή Νοημοσύνη που δουλεύει για την επιχείρησή σας
        </div>
      </div>
    ),
    { ...size }
  );
}
