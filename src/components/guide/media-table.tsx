import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { formatNumber } from "@/lib/format";
import { jitenUrl, type GuideMedia, type GuideVisualNovel, type LevelMedia } from "@/lib/guide-media";
import { cn } from "@/lib/utils";

/** Jiten's 0–5 score as a short bar, so a column of them reads as a ranking at a glance. */
function Difficulty({ value, deck }: { value: number; deck: number }) {
  return (
    <a
      href={jitenUrl(deck)}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 whitespace-nowrap"
      title="Jiten.moe difficulty, 0–5. Opens the title on Jiten."
    >
      <span className="h-1.5 w-12 overflow-hidden rounded-full bg-muted" aria-hidden>
        <span className="block h-full rounded-full bg-primary" style={{ width: `${Math.min(100, (value / 5) * 100)}%` }} />
      </span>
      <span className="tabular-nums group-hover:underline">{value.toFixed(1)}</span>
    </a>
  );
}

/**
 * A ranked list of titles, easiest first. Rows rather than a table so the notes can wrap
 * on a phone without squeezing the Japanese title.
 */
export function MediaTable({ items, extra }: { items: (GuideMedia | GuideVisualNovel)[]; extra?: (item: GuideVisualNovel) => ReactNode }) {
  const sorted = [...items].sort((a, b) => a.difficulty - b.difficulty);
  return (
    <ol className="divide-y divide-border rounded-lg border border-border bg-surface">
      {sorted.map((m) => (
        <li key={m.jiten} className="grid gap-x-4 gap-y-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="font-medium" lang="ja">
              {m.ja}
            </p>
            <p className="text-meta text-dim">
              {m.en !== m.ja && `${m.en} · `}
              {formatNumber(m.chars)} characters
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
            {extra && "vndb" in m && <div className="mt-1.5">{extra(m)}</div>}
          </div>
          <div className={cn("text-sm sm:pt-0.5")}>
            <Difficulty value={m.difficulty} deck={m.jiten} />
          </div>
        </li>
      ))}
    </ol>
  );
}

export function VnFacts({ vn }: { vn: GuideVisualNovel }) {
  return (
    <p className="flex flex-wrap gap-x-3 gap-y-0.5 text-meta text-dim">
      <span>~{vn.hours} h</span>
      <span>Voice: {vn.voiced}</span>
      <span>{vn.rating}</span>
      <span>{vn.platforms}</span>
      <a href={`https://vndb.org/${vn.vndb}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:text-foreground">
        VNDB <ArrowUpRight className="size-3" />
      </a>
    </p>
  );
}

const LEVEL_GROUPS: { key: keyof LevelMedia; title: string }[] = [
  { key: "anime", title: "Anime" },
  { key: "dramas", title: "Live-action dramas and TV" },
  { key: "manga", title: "Manga" },
  { key: "books", title: "Novels and light novels" },
  { key: "visualNovels", title: "Visual novels" },
  { key: "games", title: "Games" },
];

/** A level chapter's recommendations, one ranked list per medium it has titles for. */
export function LevelRecommendations({ media }: { media: Partial<LevelMedia> }) {
  return (
    <div className="grid gap-6">
      {LEVEL_GROUPS.filter((g) => media[g.key]?.length).map((g) => (
        <div key={g.key} className="grid gap-3">
          <h3 className="mt-2 text-h3 font-semibold">{g.title}</h3>
          <MediaTable
            items={media[g.key]!}
            extra={g.key === "visualNovels" ? (vn) => <VnFacts vn={vn} /> : undefined}
          />
        </div>
      ))}
    </div>
  );
}
