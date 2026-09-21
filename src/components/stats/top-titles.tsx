import Link from "next/link";
import type { MediaType } from "@/db/schema";
import { formatDuration } from "@/lib/format";
import { MEDIA_TYPE_META } from "@/lib/media";
import { Poster } from "@/components/media/poster";

export interface TopTitle {
  mediaItemId: string;
  title: string;
  titleNative?: string | null;
  coverUrl: string | null;
  type: MediaType;
  seconds: number;
  /** Optional trailing detail: "12 sessions", "Ep 8/24"… */
  detail?: string;
}

/**
 * The answer to "what did they actually watch and read": a ranked chart where the bar
 * is the time and the artwork is the point. Deliberately not a card grid.
 */
export function TopTitles({
  items,
  emptyText = "Nothing logged yet.",
  max: explicitMax,
}: {
  items: TopTitle[];
  emptyText?: string;
  max?: number;
}) {
  if (items.length === 0) {
    return <p className="py-6 text-sm text-muted-foreground">{emptyText}</p>;
  }
  const max = explicitMax ?? Math.max(...items.map((i) => i.seconds), 1);

  return (
    <ol className="divide-y divide-border/60">
      {items.map((item) => (
        <li key={item.mediaItemId}>
          {/* No rank badge, no distorted square thumbnail — a real 32×48 poster and a
              2px accent bar under the title carry the ranking (redesign.md §5.7). */}
          <Link href={`/media/${item.mediaItemId}`} className="group flex items-center gap-3 py-2.5">
            <div className="w-8 shrink-0">
              <Poster src={item.coverUrl} title={item.title} type={item.type} sizes="32px" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium group-hover:text-primary">{item.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {MEDIA_TYPE_META[item.type].label}
                {item.detail ? ` · ${item.detail}` : ""}
              </p>
              <div className="mt-1.5 h-[2px] w-full overflow-hidden rounded-full bg-[var(--viz-seq-0)]">
                <div
                  className="h-full rounded-full bg-[var(--viz-series)] transition-[width] duration-500"
                  style={{ width: `${Math.max(2, (item.seconds / max) * 100)}%` }}
                />
              </div>
            </div>

            <span className="shrink-0 text-sm font-semibold tabular-nums">{formatDuration(item.seconds)}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
