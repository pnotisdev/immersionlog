import { ImageResponse } from "next/og";
import { getPublicUser } from "@/lib/ranking-queries";

export const alt = "immersionlog profile";
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

/** Cuts a bio to one clean line for the OG card rather than truncating mid-word. */
function truncateBio(bio: string, max: number): string {
  if (bio.length <= max) return bio;
  const cut = bio.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

/**
 * This route handler never calls requireUser() — metadata file conventions like
 * opengraph-image are their own Route Handlers, not part of the page's component tree,
 * so they don't inherit src/app/(profile)/layout.tsx's session check (which itself
 * doesn't redirect either — see that file). That's intentional: link-unfurling bots
 * (Slack, Discord, iMessage, etc.) fetch this unauthenticated, the same way they would
 * for any public site's OG image. getPublicUser already returns null for a private or
 * nonexistent profile, in which case this just renders the generic card instead of
 * leaking whether that username exists.
 */
export default async function Image({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const user = await getPublicUser(username);

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
        {/* The heatmap grid, not a gradient orb (redesign.md §1.6, §5). */}
        <div style={{ position: "absolute", right: 96, top: 96, display: "flex", flexDirection: "column", gap: 14 }}>
          {GRID.map((row, r) => (
            <div key={r} style={{ display: "flex", gap: 14 }}>
              {row.map((step, c) => (
                <div key={c} style={{ display: "flex", width: 40, height: 40, borderRadius: 8, background: step === 0 ? EMPTY : RAMP[step - 1] }} />
              ))}
            </div>
          ))}
        </div>

        {user ? (
          // A real flex container, not a bare Fragment: Satori (the renderer behind
          // ImageResponse) needs an actual element to group multiple stacked children —
          // a Fragment here silently collapsed them onto one row instead of a column.
          <div style={{ display: "flex", flexDirection: "column", paddingLeft: 96, paddingRight: 96 }}>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#EDEDF2", letterSpacing: -1, maxWidth: 1000 }}>
              {user.name}
            </div>
            <div style={{ display: "flex", marginTop: 16, fontSize: 32, color: "#E0552E" }}>@{user.username}</div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#A0A0AE", maxWidth: 820 }}>
              {user.bio ? truncateBio(user.bio, 90) : "Tracking immersion time on immersionlog"}
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
