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
        position: "relative",
        background: "#f3f0e9",
        color: "#242321",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", width: 56, height: 56, alignItems: "center", justifyContent: "center", border: "2px solid #242321", fontSize: 17 }}>DS</div>
        <div style={{ display: "flex", color: "#b94726", fontSize: 22, letterSpacing: 2.5 }}>
          MATERIALS · PROCESS · RELIABILITY
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 80, fontWeight: 500, letterSpacing: -4 }}>
          Diwakar Shukla
        </div>
        <div style={{ display: "flex", marginTop: 14, color: "#66625c", fontSize: 31 }}>
          Materials tell the story. Process makes it repeatable.
        </div>
      </div>
      <div style={{ position: "absolute", display: "flex", width: 320, height: 320, top: 100, right: 74, border: "2px solid #cbc4b7", borderRadius: "50%" }}>
        <div style={{ position: "absolute", display: "flex", width: 210, height: 45, top: 100, left: 55, background: "#d4d0c6", border: "1px solid #66625c", transform: "rotate(-8deg)" }} />
        <div style={{ position: "absolute", display: "flex", width: 210, height: 22, top: 151, left: 55, background: "#b94726", transform: "rotate(-8deg)" }} />
        <div style={{ position: "absolute", display: "flex", width: 210, height: 70, top: 178, left: 55, background: "#9fa39d", border: "1px solid #66625c", transform: "rotate(-8deg)" }} />
      </div>
    </div>,
    size,
  );
}
