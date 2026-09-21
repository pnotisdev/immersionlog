import { ImageResponse } from "next/og";

export const alt = "immersionlog: track every hour of Japanese you consume";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const EMPTY = "#1A1A22";
const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
const GRID = [
  [1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [5, 4, 3, 2, 1],
];

// Static branding card — no per-request data, so this is generated once and cached
// (see the "Good to know" on statically-optimized images in
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0F",
        }}
      >
        {/* The heatmap grid, not a gradient orb — the identity lives in the actual
            product surface, not atmospheric decoration (redesign.md §1.6, §5). */}
        <div style={{ position: "absolute", right: 96, top: 96, display: "flex", flexDirection: "column", gap: 14 }}>
          {GRID.map((row, r) => (
            <div key={r} style={{ display: "flex", gap: 14 }}>
              {row.map((step, c) => (
                <div key={c} style={{ display: "flex", width: 40, height: 40, borderRadius: 8, background: step === 0 ? EMPTY : RAMP[step - 1] }} />
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 96, paddingRight: 96 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#EDEDF2", letterSpacing: -2 }}>
            immersion<span style={{ color: "#7A7A88" }}>log</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#A0A0AE", maxWidth: 780 }}>
            Track every hour of Japanese you consume
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
