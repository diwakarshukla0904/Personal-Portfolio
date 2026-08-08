import { ImageResponse } from "next/og";

export const alt = "Diwakar Shukla — Materials & Process Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fbfaf6",
        color: "#162421",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", color: "#096a5a", fontSize: 24, letterSpacing: 3 }}>
        MATERIALS · SEMICONDUCTORS · MANUFACTURING
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 78, fontWeight: 600, letterSpacing: -4 }}>
          Diwakar Shukla
        </div>
        <div style={{ display: "flex", marginTop: 18, color: "#4d5d58", fontSize: 34 }}>
          Materials &amp; Process Engineer
        </div>
      </div>
    </div>,
    size,
  );
}
