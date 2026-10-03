"use client";

import { useMemo } from "react";
import { RotateCcw } from "lucide-react";
import { scrambled, tilesFromBoundaries, type Tile } from "@/lib/grammar/tiles";
import type { GrammarSentence } from "@/lib/grammar/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** One tile's text, with furigana when it's on. */
function TileText({ tile, furigana }: { tile: Tile; furigana: boolean }) {
  return (
    <span lang="ja">
      {tile.tokens.map((t, i) =>
        t.ruby && furigana ? (
          <ruby key={i} className="[ruby-align:center]">
            {t.text}
            <rt className="text-[0.5em] font-normal text-muted-foreground">{t.ruby}</rt>
          </ruby>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </span>
  );
}

/**
 * Put a sentence back together from its tiles: tap a tile to place it, tap a placed one
 * to take it back. The parent decides what "Check" means; this only reports the order.
 * Keyed by the sentence so a new one starts fresh.
 */
export function BuildBoard({
  sentence,
  boundaries,
  furigana,
  disabled,
  placed,
  onPlaced,
  onSubmit,
  checking,
}: {
  sentence: GrammarSentence;
  boundaries: number[];
  furigana: boolean;
  /** Locked once answered. */
  disabled: boolean;
  /** Tile ids in the order placed. */
  placed: number[];
  onPlaced: (ids: number[]) => void;
  onSubmit: () => void;
  checking: boolean;
}) {
  const tiles = useMemo(() => tilesFromBoundaries(sentence, boundaries), [sentence, boundaries]);
  const pool = useMemo(() => scrambled(tiles, sentence.id), [tiles, sentence.id]);
  const byId = new Map(tiles.map((t) => [t.id, t]));
  const left = pool.filter((t) => !placed.includes(t.id));
  const complete = placed.length === tiles.length;

  const chip = "rounded-md border bg-surface px-3 py-2 text-lg leading-[2] transition-colors";
  return (
    <div className="grid w-full max-w-xl gap-4">
      <div
        aria-label="Your sentence"
        className={cn("flex min-h-16 flex-wrap items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border p-3", placed.length > 0 && "border-solid")}
      >
        {placed.length === 0 && <span className="text-sm text-dim">Tap the pieces in order</span>}
        {placed.map((id) => (
          <button key={id} type="button" disabled={disabled} onClick={() => onPlaced(placed.filter((p) => p !== id))} className={cn(chip, "hover:border-primary disabled:opacity-100")}>
            <TileText tile={byId.get(id)!} furigana={furigana} />
          </button>
        ))}
      </div>
      <div className="flex min-h-14 flex-wrap items-center justify-center gap-2">
        {left.map((t) => (
          <button key={t.id} type="button" disabled={disabled} onClick={() => onPlaced([...placed, t.id])} className={cn(chip, "hover:border-primary hover:bg-accent/40")}>
            <TileText tile={t} furigana={furigana} />
          </button>
        ))}
      </div>
      {!disabled && (
        <div className="flex justify-center gap-2">
          <Button type="button" disabled={!complete || checking} onClick={onSubmit}>
            {checking ? "Checking…" : "Check"}
          </Button>
          <Button type="button" variant="ghost" disabled={placed.length === 0 || checking} onClick={() => onPlaced([])}>
            <RotateCcw /> Clear
          </Button>
        </div>
      )}
    </div>
  );
}
