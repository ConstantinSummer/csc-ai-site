import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060a",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="9" cy="12" r="3" fill="#4f7cff" />
          <circle cx="31" cy="10" r="3" fill="#8b6bff" />
          <circle cx="30" cy="30" r="3" fill="#4fd8e8" />
          <circle cx="10" cy="29" r="3" fill="#4f7cff" />
          <line
            x1="9"
            y1="12"
            x2="31"
            y2="10"
            stroke="#4f7cff"
            strokeWidth="1.5"
          />
          <line
            x1="31"
            y1="10"
            x2="30"
            y2="30"
            stroke="#8b6bff"
            strokeWidth="1.5"
          />
          <line
            x1="30"
            y1="30"
            x2="10"
            y2="29"
            stroke="#4fd8e8"
            strokeWidth="1.5"
          />
          <line
            x1="10"
            y1="29"
            x2="9"
            y2="12"
            stroke="#4f7cff"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
