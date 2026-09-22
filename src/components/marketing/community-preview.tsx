import Link from "next/link";
import {
  buildFeedItems,
  buildMemberRows,
  buildMiniLeaderboard,
  getPreviewShelves,
  pickPool,
} from "@/lib/marketing-preview";
import { formatDuration } from "@/lib/format";
import { SectionHeader } from "@/components/layout/page-header";
import { ActivityFeed } from "@/components/community/activity-feed";
import { MemberRowCompact } from "@/components/community/member-card";
import { Avatar } from "@/components/ranking/avatar";
import { PreviewMain, PreviewNav } from "./preview-shell";

/** The viewer id used for the fabricated feed/member rows — none of the preview
 * members share it, so nothing renders as "yours" (see ActivityFeed's own-post check). */
const PREVIEW_VIEWER_ID = "preview-viewer";

export async function CommunityPreview() {
  const pool = pickPool(await getPreviewShelves());
  const feed = buildFeedItems(pool, 6);
  const suggestions = buildMemberRows(4);
  const top = buildMiniLeaderboard(5);

  return (
    <>
      <PreviewNav active="Community" />
      <PreviewMain>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <SectionHeader title="Everyone" />
            <ActivityFeed items={feed} viewerId={PREVIEW_VIEWER_ID} />
          </div>

          <aside className="grid gap-6">
            <div>
              <SectionHeader title="People to follow" action={<span className="text-xs text-muted-foreground">All members</span>} />
              <div className="grid gap-3">
                {suggestions.map((m) => (
                  <MemberRowCompact key={m.userId} member={m} viewerId={PREVIEW_VIEWER_ID} />
                ))}
              </div>
            </div>

            <div>
              <SectionHeader title="Top this month" action={<span className="text-xs text-muted-foreground">Full ranking</span>} />
              <ol className="grid gap-2.5">
                {top.map((r) => (
                  <li key={r.username} className="flex items-center gap-2.5 text-sm">
                    <span className="w-4 shrink-0 text-xs tabular-nums text-muted-foreground">{r.rank}</span>
                    <Link href={`/u/${r.username}`} className="flex min-w-0 flex-1 items-center gap-2 hover:underline">
                      <Avatar name={r.name} image={r.image} size="sm" />
                      <span className="truncate">{r.name}</span>
                    </Link>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{formatDuration(r.seconds)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </PreviewMain>
    </>
  );
}
