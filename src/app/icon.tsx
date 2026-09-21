import { ImageResponse } from "next/og";

// The heatmap is the most ownable object in the product; its own grid is the mark,
// not a wordmark abbreviation (redesign.md §3.3, §5 Phase 5). Cell colors are the
// same validated sequential ramp the real heatmap uses, so this literally is a
// (fixed, illustrative) slice of one.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const EMPTY = "#1A1A22";
const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
// Ascending diagonal — reads as a streak building, not a random scatter.
const GRID = [
  [1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [5, 4, 3, 2, 1],
];

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
          // No border-radius: favicon/PWA consumers apply their own corner treatment —
          // a pre-rounded source image just leaves mismatched padding once masked.
          background: "#0B0B0F",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {GRID.map((row, r) => (
            <div key={r} style={{ display: "flex", gap: 16 }}>
              {row.map((step, c) => (
                <div
                  key={c}
                  style={{
                    display: "flex",
                    width: 64,
                    height: 64,
                    borderRadius: 12,
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
