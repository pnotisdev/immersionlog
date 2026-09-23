import Link from "next/link";
import { formatCompact, formatDuration, relativeTime } from "@/lib/format";
import { MEDIA_TYPE_META, activityVerb, unitLabel } from "@/lib/media";
import type { FeedItem } from "@/lib/social-queries";
import { EmptyState } from "@/components/layout/empty-state";
import { Avatar } from "@/components/ranking/avatar";
import { Thumb } from "@/components/media/poster";
import { KudosButton } from "./kudos-button";

/** One session, told as a sentence: who, what they did, how much, how long ago. */
function FeedRow({
  item,
  viewerId,
  now,
  inset,
  showAuthor,
}: {
  item: FeedItem;
  viewerId: string;
  now: Date;
  inset: boolean;
  showAuthor: boolean;
}) {
  const what = item.title ?? item.label ?? MEDIA_TYPE_META[item.mediaType].label;
  const amount =
    item.amount && item.amountUnit ? `${formatCompact(item.amount)} ${unitLabel(item.amountUnit, item.amount)}` : null;

  return (
    <li className={inset ? "flex gap-3 px-4 py-3.5 sm:px-5" : "flex gap-3 py-3.5"}>
      {showAuthor && (
        <Link href={`/u/${item.username}`} className="shrink-0">
          <Avatar name={item.name} image={item.image} size="md" />
        </Link>
      )}

      <div className="min-w-0 flex-1">
        <p className="text-sm leading-snug">
          {showAuthor ? (
            <>
              <Link href={`/u/${item.username}`} className="font-medium hover:underline">
                {item.name}
              </Link>{" "}
              <span className="text-muted-foreground">{activityVerb(item.mediaType)}</span>{" "}
            </>
          ) : (
            <span className="text-muted-foreground">{capitalize(activityVerb(item.mediaType))} </span>
          )}
          {item.mediaItemId ? (
            <Link href={`/media/${item.mediaItemId}`} className="font-medium hover:underline">
              {what}
            </Link>
          ) : (
            <span className="font-medium">{what}</span>
          )}
        </p>

        <p className="mt-0.5 text-meta text-dim">
          <span className="font-medium text-foreground/80 tabular-nums">{formatDuration(item.durationSeconds)}</span>
          {amount && <> · {amount}</>} · {MEDIA_TYPE_META[item.mediaType].label} · {relativeTime(item.startedAt, now)}
        </p>

        {item.notes && <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground italic">“{item.notes}”</p>}

        <div className="mt-1.5">
          <KudosButton
            sessionId={item.sessionId}
            initialCount={item.kudos}
            initialGiven={item.kudosByViewer}
            disabled={item.userId === viewerId}
          />
        </div>
      </div>

      {item.mediaItemId && (
        <Link href={`/media/${item.mediaItemId}`} className="shrink-0">
          <Thumb src={item.coverUrl} title={what} />
        </Link>
      )}
    </li>
  );
}

export function ActivityFeed({
  items,
  viewerId,
  emptyText = "Nothing here yet.",
  emptyAction,
  inset = false,
  showAuthor = true,
}: {
  items: FeedItem[];
  viewerId: string;
  emptyText?: string;
  emptyAction?: React.ReactNode;
  /** Rows carry the side padding themselves, for a flush Panel. */
  inset?: boolean;
  /** false on a profile, where every row is the same person: no avatar, no name. */
  showAuthor?: boolean;
}) {
  const now = new Date();
  if (items.length === 0) {
    return <EmptyState title={emptyText} action={emptyAction} />;
  }
  return (
    <ul className={inset ? "divide-y divide-border/70" : "divide-y"}>
      {items.map((item) => (
        <FeedRow key={item.sessionId} item={item} viewerId={viewerId} now={now} inset={inset} showAuthor={showAuthor} />
      ))}
    </ul>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
