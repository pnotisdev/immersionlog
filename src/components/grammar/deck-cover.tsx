import type { GrammarDeck } from "@/lib/grammar/types";

/** One hue per level, so the five covers read as a set and each deck is recognisable at a glance. */
const HUES: Record<string, string> = {
  N5: "#2f9e6b",
  N4: "#2f7fc4",
  N3: "#7b5cd6",
  N2: "#d1782a",
  N1: "#c23a5b",
};

const W = 400;
const H = 190;
const TILE_H = 34;
const GAP = 10;
const ROW = TILE_H + GAP;

/** Wide characters take about a full em; the rest about half. Good enough to size a tile around a pattern. */
function textWidth(s: string, size: number): number {
  let w = 0;
  for (const ch of s) w += ch.charCodeAt(0) > 0x2000 ? size : size * 0.55;
  return w;
}

/**
 * A deck's cover: rows of pale tiles, each one a real pattern from the deck, behind a level badge.
 * Drawn as SVG from the deck's own points, so there is no image to keep in step with the content,
 * and it takes its colours from opacity over the page rather than fixed light/dark values.
 */
export function DeckCover({ deck, className }: { deck: GrammarDeck; className?: string }) {
  const hue = HUES[deck.level] ?? "#c6491f";
  const patterns = deck.points.map((p) => p.title.replace(/^〜/, "")).filter((t) => t.length > 0 && t.length <= 8);
  const size = 15;

  const rows: { x: number; y: number; w: number; text: string }[] = [];
  for (let r = 0; r < Math.ceil(H / ROW) + 1; r++) {
    let x = -((r * 53) % 110);
    for (let i = 0; x < W && patterns.length > 0; i++) {
      const text = patterns[(r * 11 + i * 3) % patterns.length];
      const w = Math.round(textWidth(text, size) + 28);
      rows.push({ x, y: r * ROW - 12, w, text });
      x += w + GAP;
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${deck.level} grammar`} className={className}>
      <rect width={W} height={H} fill={hue} fillOpacity={0.1} />
      {rows.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={t.w} height={TILE_H} rx={9} fill={hue} fillOpacity={0.13} />
          <text
            x={t.x + t.w / 2}
            y={t.y + TILE_H / 2 + 5}
            textAnchor="middle"
            fontSize={size}
            fill={hue}
            fillOpacity={0.5}
            fontFamily="var(--font-sans), system-ui, sans-serif"
          >
            {t.text}
          </text>
        </g>
      ))}
      <g transform={`translate(${W / 2 - 96} ${H / 2 - 44})`}>
        <rect width={88} height={88} rx={14} fill={hue} />
        <text x={44} y={40} textAnchor="middle" fontSize={30} fontWeight={700} fill="#fff" fontFamily="var(--font-sans), system-ui, sans-serif">
          {deck.level}
        </text>
        <text x={44} y={70} textAnchor="middle" fontSize={22} fontWeight={700} fill="#fff" fontFamily="var(--font-sans), system-ui, sans-serif">
          文法
        </text>
      </g>
      <text x={W / 2 + 6} y={H / 2 - 2} fontSize={30} fontWeight={700} fill={hue} fontFamily="var(--font-sans), system-ui, sans-serif">
        {deck.level}
      </text>
      <text x={W / 2 + 6} y={H / 2 + 28} fontSize={22} fontWeight={600} fill={hue} fillOpacity={0.85} fontFamily="var(--font-sans), system-ui, sans-serif">
        Grammar
      </text>
    </svg>
  );
}
