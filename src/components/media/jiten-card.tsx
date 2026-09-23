"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { ChevronRight, ExternalLink, Search } from "lucide-react";
import { toast } from "sonner";
import { linkJitenDeck, listJitenSubDecks, searchJitenForItem, unlinkJitenDeck } from "@/actions/import";
import { formatNumber } from "@/lib/format";
import type { JitenCandidate } from "@/lib/sources/jiten";
import type { JitenStats } from "@/lib/sources/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STAT_LABELS: Record<string, string> = {
  characterCount: "Character count",
  wordCount: "Word count",
  uniqueKanji: "Unique kanji",
  difficulty: "Jiten difficulty",
};

/**
 * Jiten.moe stats for an item from any source, and the picker that attaches them.
 * Stats live in metadata.jiten (merged in by linkJitenDeck); they're Jiten's numbers
 * and are shown as such, never folded into the community difficulty vote.
 */
export function JitenCard({
  mediaItemId,
  stats,
  deckUrl,
  defaultQuery,
}: {
  mediaItemId: string;
  stats: JitenStats | null;
  deckUrl: string | null;
  defaultQuery: string;
}) {
  const [picking, setPicking] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function unlink() {
    startTransition(async () => {
      const res = await unlinkJitenDeck(mediaItemId);
      if (!res.ok) toast.error(res.error);
      else router.refresh();
    });
  }

  return (
    <div className="grid gap-3">
      {stats ? (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
            {stats.characterCount != null && <Stat label="Characters" value={formatNumber(stats.characterCount)} />}
            {stats.wordCount != null && <Stat label="Words" value={formatNumber(stats.wordCount)} />}
            {stats.uniqueKanji != null && <Stat label="Unique kanji" value={formatNumber(stats.uniqueKanji)} />}
            {stats.difficulty != null && <Stat label="Jiten difficulty" value={`${stats.difficulty.toFixed(2)} / 5`} />}
          </dl>
          {stats.fromSeries?.length ? (
            <p className="text-xs text-muted-foreground">
              {stats.fromSeries.map((k) => STAT_LABELS[k] ?? k).join(", ")} {stats.fromSeries.length === 1 ? "is" : "are"} for the whole series.
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            {deckUrl && (
              <a href={deckUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                View deck on Jiten.moe <ExternalLink className="size-3" />
              </a>
            )}
            <span className="flex-1" />
            <Button size="sm" variant="ghost" onClick={() => setPicking((p) => !p)} disabled={pending}>
              Relink
            </Button>
            <Button size="sm" variant="ghost" onClick={unlink} disabled={pending}>
              Unlink
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">Character counts and a difficulty estimate from Jiten.moe.</p>
          {!picking && (
            <Button size="sm" variant="outline" onClick={() => setPicking(true)}>
              Link Jiten.moe deck
            </Button>
          )}
        </div>
      )}
      {picking && <JitenPicker mediaItemId={mediaItemId} defaultQuery={defaultQuery} onDone={() => setPicking(false)} />}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="font-medium tabular-nums">{value}</dd>
    </div>
  );
}

function JitenPicker({ mediaItemId, defaultQuery, onDone }: { mediaItemId: string; defaultQuery: string; onDone: () => void }) {
  const router = useRouter();
  const [q, setQ] = useState(defaultQuery);
  const [pending, startTransition] = useTransition();
  const [results, setResults] = useState<JitenCandidate[] | null>(null);
  // Drilled into a deck's volumes/episodes.
  const [parent, setParent] = useState<{ deck: JitenCandidate; items: JitenCandidate[]; total: number } | null>(null);

  function search(e?: FormEvent) {
    e?.preventDefault();
    startTransition(async () => {
      const res = await searchJitenForItem(mediaItemId, q);
      if (!res.ok) return void toast.error(res.error);
      setParent(null);
      setResults(res.data);
    });
  }

  function open(deck: JitenCandidate, offset = 0) {
    startTransition(async () => {
      const res = await listJitenSubDecks(deck.deckId, offset);
      if (!res.ok) return void toast.error(res.error);
      setParent((p) => ({ deck, total: res.data.total, items: offset > 0 && p ? [...p.items, ...res.data.items] : res.data.items }));
    });
  }

  function link(deck: JitenCandidate) {
    startTransition(async () => {
      const res = await linkJitenDeck(mediaItemId, deck.deckId);
      if (!res.ok) return void toast.error(res.error);
      toast.success(`Linked “${deck.title}”`);
      onDone();
      router.refresh();
    });
  }

  const list = parent ? parent.items : results;

  return (
    <div className="grid gap-2 rounded-md border p-2">
      <form onSubmit={search} className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" aria-label="Search Jiten.moe" lang="ja" />
      </form>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => search()} disabled={pending || q.trim().length < 1}>
          {pending && !list ? "Searching…" : "Search Jiten.moe"}
        </Button>
        <Button size="sm" variant="ghost" onClick={onDone} disabled={pending}>
          Cancel
        </Button>
      </div>

      {parent && (
        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <button type="button" className="hover:text-foreground" onClick={() => setParent(null)}>
            ← All results
          </button>
          <Button size="xs" variant="outline" onClick={() => link(parent.deck)} disabled={pending}>
            Link the whole series
          </Button>
        </div>
      )}

      {list && list.length === 0 && <p className="px-1 text-sm text-muted-foreground">No decks found. Try a shorter or Japanese title.</p>}
      {list && list.length > 0 && (
        <ul className="grid max-h-80 gap-0.5 overflow-y-auto">
          {list.map((d) => (
            <li key={d.deckId} className="flex items-center gap-3 rounded-md p-1.5 hover:bg-muted/50">
              <div className="h-12 w-8 shrink-0 overflow-hidden rounded-sm bg-muted">
                {d.coverUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={d.coverUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium" lang="ja">
                  {d.title}
                </div>
                <div className="truncate text-xs text-muted-foreground">
                  {[
                    d.titleNative,
                    d.typeLabel,
                    d.characterCount != null ? `${formatNumber(d.characterCount)} chars` : null,
                    d.difficulty != null ? `${d.difficulty.toFixed(2)}/5` : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
              </div>
              {d.childrenDeckCount > 0 && (
                <Button size="xs" variant="ghost" onClick={() => open(d)} disabled={pending}>
                  {d.childrenDeckCount} parts <ChevronRight />
                </Button>
              )}
              <Button size="xs" variant="outline" onClick={() => link(d)} disabled={pending}>
                Link
              </Button>
            </li>
          ))}
        </ul>
      )}
      {parent && parent.items.length < parent.total && (
        <Button size="sm" variant="ghost" onClick={() => open(parent.deck, parent.items.length)} disabled={pending}>
          Load more ({parent.items.length} of {parent.total})
        </Button>
      )}
    </div>
  );
}
