import Link from "next/link";
import type { EntryStatus, MediaType, Unit } from "@/db/schema";
import { formatCompact } from "@/lib/format";
import { MEDIA_TYPE_META, UNIT_LABELS } from "@/lib/media";
import { Poster } from "@/components/media/poster";

export interface MediaCardData {
  mediaItemId: string;
  title: string;
  titleNative: string | null;
  coverUrl: string | null;
  type: MediaType;
  status: EntryStatus;
  progress: number;
  progressUnit: Unit | null;
  totalAmount: number | null;
  totalUnit: Unit | null;
  rating?: number | null;
}

/**
 * The one media card, used everywhere a library entry gets a tile: cover, a 3px
 * progress bar flush to its bottom edge, title, meta. No status dot — the progress
 * bar already says in-progress, and planning state belongs in the tab filter, not a
 * badge on every tile (redesign.md §4.5).
 */
export function MediaCard({ item }: { item: MediaCardData }) {
  const hasTotal = Boolean(item.totalAmount && item.totalUnit && item.totalUnit === item.progressUnit);
  const pct = hasTotal ? Math.min(100, (item.progress / item.totalAmount!) * 100) : null;

  return (
    <Link href={`/media/${item.mediaItemId}`} className="group block">
      <div className="relative">
        <Poster src={item.coverUrl} title={item.title} type={item.type} sizes="(max-width: 640px) 33vw, 180px" />

        {item.rating != null && (
          <span className="absolute top-1.5 right-1.5 rounded-sm bg-black/65 px-1.5 py-0.5 text-[10px] font-medium text-white tabular-nums">
            {item.rating}
          </span>
        )}

        {pct != null && (
          <div className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden rounded-b-md bg-surface-2">
            <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
          </div>
        )}
      </div>

      <p className="mt-1.5 line-clamp-2 h-10 text-h3 leading-snug font-semibold group-hover:text-primary">{item.title}</p>
      <p className="truncate text-meta text-dim">
        {item.progressUnit && (item.progress > 0 || hasTotal) ? (
          <>
            {formatCompact(item.progress)}
            {hasTotal && ` / ${formatCompact(item.totalAmount!)}`} {UNIT_LABELS[item.progressUnit]}
          </>
        ) : (
          MEDIA_TYPE_META[item.type].label
        )}
      </p>
    </Link>
  );
}
