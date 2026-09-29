import type { KanjiGroup } from "@/lib/kanji";

/** One hue per group, warm to cool as the kanji get harder, so the seven covers read as a set. */
const HUES: Record<string, string> = {
  "grade-1": "#2f9e6b",
  "grade-2": "#3a9a9a",
  "grade-3": "#2f7fc4",
  "grade-4": "#5b6bd6",
  "grade-5": "#7b5cd6",
  "grade-6": "#d1782a",
  secondary: "#c23a5b",
};

const W = 400;
const H = 190;
const CELL = 46;
const GAP = 8;

/**
 * A group's cover: a field of pale tiles, each one of its own kanji, behind a badge. Drawn
 * as SVG from the group's data (no image files), in opacity over the page so it suits light and dark.
 */
export function KanjiCover({ group, className }: { group: KanjiGroup; className?: string }) {
  const hue = HUES[group.id] ?? "#c6491f";
  const cols = Math.ceil(W / (CELL + GAP)) + 1;
  const rows = Math.ceil(H / (CELL + GAP)) + 1;
  const pool = group.kanji.slice(0, 120);

  const tiles: { x: number; y: number; c: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = pool[(r * 17 + c * 5) % pool.length];
      tiles.push({ x: c * (CELL + GAP) - (r % 2) * 24, y: r * (CELL + GAP) - 10, c: ch.c });
    }
  }
  const font = "var(--font-sans), system-ui, sans-serif";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${group.title} kanji`} className={className}>
      <rect width={W} height={H} fill={hue} fillOpacity={0.1} />
      {tiles.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={CELL} height={CELL} rx={9} fill={hue} fillOpacity={0.13} />
          <text x={t.x + CELL / 2} y={t.y + CELL / 2 + 8} textAnchor="middle" fontSize={24} fill={hue} fillOpacity={0.5} fontFamily={font}>
            {t.c}
          </text>
        </g>
      ))}
      <g transform={`translate(${W / 2 - 96} ${H / 2 - 44})`}>
        <rect width={88} height={88} rx={14} fill={hue} />
        <text x={44} y={58} textAnchor="middle" fontSize={group.badge.length > 2 ? 34 : 38} fontWeight={700} fill="#fff" fontFamily={font}>
          {group.badge}
        </text>
      </g>
      <text x={W / 2 + 6} y={H / 2 - 2} fontSize={26} fontWeight={700} fill={hue} fontFamily={font}>
        {group.id === "secondary" ? "Secondary" : group.title}
      </text>
      <text x={W / 2 + 6} y={H / 2 + 28} fontSize={22} fontWeight={600} fill={hue} fillOpacity={0.85} fontFamily={font}>
        Kanji
      </text>
    </svg>
  );
}
