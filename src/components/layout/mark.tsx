import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * The favicon's mark (src/app/icon.tsx) reused as an inline logo glyph — the same
 * diagonal 5x5 heatmap grid ("a streak building"). Square-cut, not the favicon's
 * rounded corners — closer to a block/terminal-character grid, which is as far as
 * "ascii style" goes at 14-22px: actual "█" glyphs were tried first, but the
 * character isn't square in any monospace font (narrower than tall), so it collapsed
 * into blurry vertical bars instead of a grid at icon sizes — a plain colored cell
 * is the crisp, font-independent way to get the same pixel-grid read. Colors are the
 * fixed dark ramp from icon.tsx, not the theme's --viz-seq-* tokens — this is the
 * brand mark, meant to look the same everywhere, the same way --d-anime etc. stay
 * fixed across light/dark (see globals.css).
 */
const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
const EMPTY = "#2A2A33";
const GRID = [
  [1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [5, 4, 3, 2, 1],
];

/**
 * `size` is the mark's overall width/height; cells and gap are derived from it in CSS
 * rather than in JS, so a caller can pass an em-relative length ("0.92em") and have the
 * mark scale with whatever type it is locked up with — which is what the oversized
 * landing-page footer lockup needs. A plain number still means pixels.
 *
 * Every cell carries `data-mark-cell` so a caller can animate the grid filling in one
 * square at a time (see landing-motion.tsx); nothing depends on it otherwise.
 */
export function Mark({ size = 16, className }: { size?: number | string; className?: string }) {
  const length = typeof size === "number" ? `${size}px` : size;
  const cell = "calc(var(--mark-size) / 5.6)";
  return (
    <span
      aria-hidden
      className={cn("inline-grid shrink-0 select-none align-middle", className)}
      style={
        {
          "--mark-size": length,
          gridTemplateColumns: `repeat(5, ${cell})`,
          gridAutoRows: cell,
          gap: `calc(${cell} * 0.22)`,
        } as CSSProperties
      }
    >
      {GRID.flat().map((step, i) => (
        <span
          key={i}
          data-mark-cell
          style={{ width: cell, height: cell, background: step === 0 ? EMPTY : RAMP[step - 1] }}
        />
      ))}
    </span>
  );
}

/** Mark + wordmark, the lockup used in every header and footer. */
export function Wordmark({
  markSize = 16,
  className,
  textClassName,
}: {
  markSize?: number | string;
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark size={markSize} />
      <span className={cn("tracking-tight", textClassName)}>
        immersion<span className="text-dim">log</span>
      </span>
    </span>
  );
}
