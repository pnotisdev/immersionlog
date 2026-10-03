import Link from "next/link";
import { Check, Layers } from "lucide-react";
import { deckPath } from "@/lib/grammar/paths";
import type { GrammarDeck } from "@/lib/grammar/types";
import { Button } from "@/components/ui/button";
import { DeckCover } from "./deck-cover";

/** One level as a card: cover, progress, and the two things you do with a deck: learn from it, or look through it. */
export function DeckCard({
  deck,
  learned,
  total,
  canLearn,
}: {
  deck: GrammarDeck;
  learned: number;
  total: number;
  /** New points are available today (the daily limit isn't used up) and this deck has some left. */
  canLearn: boolean;
}) {
  const pct = total === 0 ? 0 : Math.round((learned / total) * 100);
  const done = total > 0 && learned >= total;

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <Link href={deckPath(deck)} className="block" aria-label={`Browse ${deck.title}`}>
        <DeckCover deck={deck} className="block aspect-[400/190] w-full" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="text-h3 font-semibold text-foreground">{deck.level} grammar</h2>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${deck.level} learned`}
        >
          <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-auto flex items-end justify-between gap-3">
          <ul className="grid gap-1 text-meta text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Check className="size-3.5 shrink-0" aria-hidden />
              {done ? "Every point learned" : `${learned}/${total} (${pct}%) learned`}
            </li>
            <li className="flex items-center gap-1.5">
              <Layers className="size-3.5 shrink-0" aria-hidden />
              {total} points
            </li>
          </ul>
          <div className="flex shrink-0 gap-2">
            {canLearn && (
              <Button size="sm" nativeButton={false} render={<Link href={`/grammar/learn?deck=${deck.id}`} prefetch={false} />}>
                Learn
              </Button>
            )}
            {learned > 0 && (
              <Button size="sm" variant="outline" nativeButton={false} render={<Link href={`/grammar/practice?deck=${deck.id}`} prefetch={false} />}>
                Practise
              </Button>
            )}
            <Button size="sm" variant="outline" nativeButton={false} render={<Link href={deckPath(deck)} />}>
              Browse
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
