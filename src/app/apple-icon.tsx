import { ImageResponse } from "next/og";

// Same heatmap-grid mark as icon.tsx, scaled for Apple's touch-icon size.
export const size = { width: 180, height: 180 };
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

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Square, no radius/transparency: iOS applies its own mask, and a
          // transparent source renders as black on the home screen.
          background: "#0B0B0F",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {GRID.map((row, r) => (
            <div key={r} style={{ display: "flex", gap: 6 }}>
              {row.map((step, c) => (
                <div
                  key={c}
                  style={{
                    display: "flex",
                    width: 22,
                    height: 22,
                    borderRadius: 5,
                    background: step === 0 ? EMPTY : RAMP[step - 1],
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
