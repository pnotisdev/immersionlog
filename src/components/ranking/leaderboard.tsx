import Link from "next/link";
import { formatDuration, pluralize } from "@/lib/format";
import type { LeaderboardRow } from "@/lib/ranking-queries";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/layout/empty-state";
import { Avatar } from "./avatar";

/** A table, not a card list (redesign.md §5.6) — no medal colors, no value bar. */
function Row({ row, isViewer }: { row: LeaderboardRow; isViewer: boolean }) {
  return (
    <li className="relative">
      {/* "Your row": full-width tint plus a left accent border. */}
      {isViewer && <div aria-hidden className="absolute inset-0 border-l-2 border-primary bg-accent" />}
      <Link href={`/u/${row.username}`} className="relative flex h-11 items-center gap-3 px-2.5 transition-colors hover:bg-muted">
        <span className={cn("w-8 shrink-0 text-center text-micro tabular-nums", row.rank <= 3 ? "text-foreground" : "text-dim")}>
          {row.rank}
        </span>
        <Avatar name={row.name} image={row.image} size="xs" />
        <span className="min-w-0 flex-1 truncate text-sm font-medium">
          {row.name}
          {isViewer && <span className="ml-1.5 text-xs font-normal text-muted-foreground">you</span>}
        </span>
        <span className="hidden w-16 shrink-0 text-micro text-dim tabular-nums sm:inline">Lv {row.level.level}</span>
        <span className="hidden w-20 shrink-0 text-right text-xs text-dim tabular-nums md:inline">
          {pluralize(row.sessions, "session")}
        </span>
        <span className="w-[88px] shrink-0 text-right text-sm font-semibold text-foreground tabular-nums">
          {formatDuration(row.seconds)}
        </span>
      </Link>
    </li>
  );
}

export function Leaderboard({
  rows,
  currentUserId,
  emptyText = "Nobody has logged time in this range yet. Be the first.",
}: {
  rows: LeaderboardRow[];
  currentUserId: string;
  emptyText?: string;
}) {
  if (rows.length === 0) {
    return <EmptyState title={emptyText} />;
  }

  return (
    <ol className="divide-y divide-border">
      {rows.map((r) => (
        <Row key={r.userId} row={r} isViewer={r.userId === currentUserId} />
      ))}
    </ol>
  );
}
