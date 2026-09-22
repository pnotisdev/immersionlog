import { ImageResponse } from "next/og";
import { formatDuration } from "@/lib/format";
import { yearRange } from "@/lib/dates";
import { getGroupTotals } from "@/lib/progression-queries";
import { getPublicUser } from "@/lib/ranking-queries";

export const alt = "immersionlog Immersion Report";
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

/**
 * Same unauthenticated, private-safe shape as the profile's own OG image
 * (src/app/(profile)/u/[username]/opengraph-image.tsx) — see that file's comment for why.
 * This route only ever sees the route param `year`; a custom ?from=&to= range on the
 * report page itself can't be reflected here (this Next version's opengraph-image
 * convention doesn't receive searchParams — see the plan doc), so the image always
 * shows the whole named year's totals.
 */
export default async function Image({ params }: { params: Promise<{ username: string; year: string }> }) {
  const { username, year } = await params;
  const user = await getPublicUser(username);
  let totals = null;
  if (user && /^\d{4}$/.test(year)) {
    const range = yearRange(Number(year), user.timezone);
    totals = await getGroupTotals(user.id, range.from, range.to);
  }

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B0B0F" }}>
        <div style={{ position: "absolute", right: 96, top: 96, display: "flex", flexDirection: "column", gap: 14 }}>
          {GRID.map((row, r) => (
            <div key={r} style={{ display: "flex", gap: 14 }}>
              {row.map((step, c) => (
                <div key={c} style={{ display: "flex", width: 40, height: 40, borderRadius: 8, background: step === 0 ? EMPTY : RAMP[step - 1] }} />
              ))}
            </div>
          ))}
        </div>

        {user && totals ? (
          <div style={{ display: "flex", flexDirection: "column", paddingLeft: 96, paddingRight: 96 }}>
            <div style={{ display: "flex", fontSize: 32, color: "#E0552E" }}>{year} Immersion Report</div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 64, fontWeight: 700, color: "#EDEDF2", letterSpacing: -1, maxWidth: 1000 }}>
              {user.name}
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 56, fontWeight: 700, color: "#EDEDF2" }}>{formatDuration(totals.total)}</div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 28, color: "#A0A0AE" }}>
              {formatDuration(totals.reading)} reading · {formatDuration(totals.listening)} listening
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#EDEDF2", letterSpacing: -1 }}>
            immersion<span style={{ color: "#7A7A88" }}>log</span>
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
