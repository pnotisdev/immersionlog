import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import { presetRange } from "@/lib/dates";
import { getDifficultyForItems } from "@/lib/difficulty-queries";
import { formatDuration } from "@/lib/format";
import { getCommunityTopItems } from "@/lib/queries";
import { requireUser } from "@/lib/session";
import { getShelf, SHELF_KEYS, type ShelfKey } from "@/lib/sources/browse";
import { DiscoverSearch } from "@/components/discover/discover-search";
import { DiscoverTile } from "@/components/discover/discover-tile";
import { MediaRail } from "@/components/media/media-rail";
import { Rail } from "@/components/media/scroll-rail";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = { title: "Discover" };

export default async function DiscoverPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const month = presetRange("month", tz, new Date());
  const community = await getCommunityTopItems(month.from, month.to, 16);
  const difficulty = await getDifficultyForItems(community.map((c) => c.mediaItemId));

  return (
    <div className="grid gap-9">
      <DiscoverSearch />

      {community.length > 0 && (
        <MediaRail
          title="Popular with members this month"
          items={community.map((c) => {
            const d = difficulty.get(c.mediaItemId);
            return {
              mediaItemId: c.mediaItemId,
              title: c.title,
              coverUrl: c.coverUrl,
              type: c.type,
              meta: `${formatDuration(c.seconds)} · ${c.learners} learner${c.learners === 1 ? "" : "s"}${d?.average != null ? ` · Difficulty ${d.average.toFixed(1)}/5` : ""}`,
            };
          })}
        />
      )}

      {SHELF_KEYS.map((key) => (
        <Suspense key={key} fallback={<ShelfSkeleton />}>
          <ExternalShelf shelfKey={key} />
        </Suspense>
      ))}
    </div>
  );
}

async function ExternalShelf({ shelfKey }: { shelfKey: ShelfKey }) {
  const shelf = await getShelf(shelfKey);
  if (shelf.items.length === 0) return null;
  return (
    <Rail
      title={shelf.title}
      action={
        <Link
          href={`/discover/${shelf.key}`}
          className="inline-flex items-center gap-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          View all <ChevronRight className="size-3.5" />
        </Link>
      }
    >
      {shelf.items.map((item) => (
        <DiscoverTile key={`${item.source}:${item.sourceId}`} item={item} className="w-[132px] shrink-0" />
      ))}
    </Rail>
  );
}

function ShelfSkeleton() {
  return (
    <section>
      <Skeleton className="mb-3 h-3 w-32" />
      <div className="-mx-4 flex gap-5 overflow-hidden px-4 sm:mx-0 sm:px-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-[132px] shrink-0">
            <Skeleton className="aspect-[2/3] w-full rounded-md" />
            <Skeleton className="mt-2 h-3 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
