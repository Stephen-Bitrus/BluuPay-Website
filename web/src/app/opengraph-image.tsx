import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0014ce",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: 2 }}>BLUUPAY</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 650, lineHeight: 1.05 }}>Know your numbers.</div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>Sell Smarter. Grow Faster.</div>
        </div>
      </div>
    ),
    size,
  );
}
