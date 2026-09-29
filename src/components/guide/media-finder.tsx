"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { formatNumber } from "@/lib/format";
import type { FinderItem, FinderMedium } from "@/lib/guide-media";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Difficulty } from "@/components/guide/media-table";

const MEDIA: FinderMedium[] = ["Anime", "Film", "Drama", "Manga", "Book", "Visual novel", "Game"];

const BANDS = [
  { label: "Easiest", hint: "under 1.5", min: 0, max: 1.5 },
  { label: "Easy", hint: "1.5–2.5", min: 1.5, max: 2.5 },
  { label: "Medium", hint: "2.5–3.5", min: 2.5, max: 3.5 },
  { label: "Hard", hint: "3.5 and up", min: 3.5, max: Infinity },
];

const LENGTHS = [
  { label: "Short", hint: "under 60,000 characters: a film or one season", min: 0, max: 60_000 },
  { label: "Medium", hint: "60,000–300,000: a novel or a few volumes", min: 60_000, max: 300_000 },
  { label: "Long", hint: "over 300,000: long series and epics", min: 300_000, max: Infinity },
];

/** How many results to show before "Show all", so the page stays short on a phone. */
const PAGE = 20;

function Chip({ on, onClick, children, title }: { on: boolean; onClick: () => void; children: ReactNode; title?: string }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      title={title}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        on ? "border-primary bg-accent-tint text-foreground" : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function toggle<T>(set: T[], v: T): T[] {
  return set.includes(v) ? set.filter((x) => x !== v) : [...set, v];
}

/**
 * Every title the guide recommends, filterable by medium, difficulty band, length and
 * audio. Filters within a group are "any of"; groups combine with "and".
 */
export function MediaFinder({ items }: { items: FinderItem[] }) {
  const [query, setQuery] = useState("");
  const [media, setMedia] = useState<FinderMedium[]>([]);
  const [bands, setBands] = useState<number[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);
  const [audio, setAudio] = useState(false);
  const [all, setAll] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (m) =>
        (!q || m.ja.toLowerCase().includes(q) || m.en.toLowerCase().includes(q)) &&
        (media.length === 0 || media.includes(m.medium)) &&
        (bands.length === 0 || bands.some((i) => m.difficulty >= BANDS[i].min && m.difficulty < BANDS[i].max)) &&
        (lengths.length === 0 || lengths.some((i) => m.chars >= LENGTHS[i].min && m.chars < LENGTHS[i].max)) &&
        (!audio || m.audio),
    );
  }, [items, query, media, bands, lengths, audio]);

  const filtered = query || media.length || bands.length || lengths.length || audio;
  const shown = all ? results : results.slice(0, PAGE);

  return (
    <div className="grid gap-4">
      <div className="grid gap-3 rounded-lg border border-border bg-surface px-4 py-4">
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, in English or Japanese"
          aria-label="Search titles"
        />
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-1.5 text-meta text-dim">Medium</legend>
          {MEDIA.map((m) => (
            <Chip key={m} on={media.includes(m)} onClick={() => setMedia(toggle(media, m))}>
              {m}
            </Chip>
          ))}
        </fieldset>
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-1.5 text-meta text-dim">Difficulty (Jiten, 0–5)</legend>
          {BANDS.map((b, i) => (
            <Chip key={b.label} on={bands.includes(i)} onClick={() => setBands(toggle(bands, i))} title={b.hint}>
              {b.label} <span className="text-dim">{b.hint}</span>
            </Chip>
          ))}
        </fieldset>
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="mb-1.5 text-meta text-dim">Length</legend>
          {LENGTHS.map((l, i) => (
            <Chip key={l.label} on={lengths.includes(i)} onClick={() => setLengths(toggle(lengths, i))} title={l.hint}>
              {l.label}
            </Chip>
          ))}
          <Chip on={audio} onClick={() => setAudio(!audio)} title="Anime, films, dramas and voiced visual novels">
            With audio
          </Chip>
        </fieldset>
        <div className="flex items-center justify-between text-meta text-dim" aria-live="polite">
          <span>
            {results.length} of {items.length} titles
          </span>
          {filtered ? (
            <button
              type="button"
              className="underline underline-offset-2 hover:text-foreground"
              onClick={() => {
                setQuery("");
                setMedia([]);
                setBands([]);
                setLengths([]);
                setAudio(false);
              }}
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="text-muted-foreground">Nothing matches all of those. Try removing a filter.</p>
      ) : (
        <ol className="divide-y divide-border rounded-lg border border-border bg-surface">
          {shown.map((m) => (
            <li key={m.jiten} className="grid gap-x-4 gap-y-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <p className="font-medium" lang="ja">
                  {m.ja}
                </p>
                <p className="text-meta text-dim">
                  {m.en !== m.ja && `${m.en} · `}
                  {m.medium} · {formatNumber(m.chars)} characters ·{" "}
                  <Link href={m.href} className="underline underline-offset-2 hover:text-foreground">
                    {m.level}
                  </Link>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
              </div>
              <div className="text-sm sm:pt-0.5">
                <Difficulty value={m.difficulty} deck={m.jiten} />
              </div>
            </li>
          ))}
        </ol>
      )}
      {!all && results.length > PAGE && (
        <button
          type="button"
          onClick={() => setAll(true)}
          className="justify-self-start rounded-md border border-border px-3 py-1.5 text-sm hover:border-foreground/30"
        >
          Show all {results.length}
        </button>
      )}
    </div>
  );
}
