import Link from "next/link";
import { Check, Layers } from "lucide-react";
import type { KanjiGroup } from "@/lib/kanji";
import { Button } from "@/components/ui/button";
import { KanjiCover } from "./kanji-cover";

/** One school grade as a card: cover, progress, and a button to learn from it. Same shape as a grammar deck card. */
export function KanjiCard({ group, learned, total, canLearn }: { group: KanjiGroup; learned: number; total: number; canLearn: boolean }) {
  const pct = total === 0 ? 0 : Math.round((learned / total) * 100);
  const done = total > 0 && learned >= total;
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <KanjiCover group={group} className="block aspect-[400/190] w-full" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="text-h3 font-semibold text-foreground">{group.title} kanji</h2>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${group.title} learned`}>
          <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-auto flex items-end justify-between gap-3">
          <ul className="grid gap-1 text-meta text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Check className="size-3.5 shrink-0" aria-hidden />
              {done ? "Every kanji learned" : `${learned}/${total} (${pct}%) learned`}
            </li>
            <li className="flex items-center gap-1.5">
              <Layers className="size-3.5 shrink-0" aria-hidden />
              {total} kanji
            </li>
          </ul>
          {canLearn && (
            <Button size="sm" nativeButton={false} render={<Link href={`/kanji/learn?group=${group.id}`} prefetch={false} />}>
              Learn
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
