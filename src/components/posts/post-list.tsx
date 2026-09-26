import Link from "next/link";
import type { ReactNode } from "react";
import { relativeTime } from "@/lib/format";
import type { PostCard } from "@/lib/post-queries";
import { postPath } from "@/lib/posts";
import { EmptyState } from "@/components/layout/empty-state";
import { Avatar } from "@/components/ranking/avatar";
import { Badge } from "@/components/ui/badge";
import { KudosButton } from "@/components/community/kudos-button";

/** A post as a row: author, title, a few lines of it, and its first image beside them. */
function PostRow({ post, viewerId, showAuthor, now }: { post: PostCard; viewerId: string; showAuthor: boolean; now: Date }) {
  const href = post.publishedAt ? postPath(post.author.username, post.slug) : `/write/${post.id}`;
  return (
    <li className="flex gap-4 py-5">
      <div className="min-w-0 flex-1">
        {showAuthor && (
          <Link href={`/u/${post.author.username}`} className="mb-2 flex w-fit items-center gap-2 text-sm hover:underline">
            <Avatar name={post.author.name} image={post.author.image} size="xs" />
            <span className="font-medium">{post.author.name}</span>
          </Link>
        )}
        <Link href={href} className="group block">
          <h3 className="text-h3 font-semibold text-balance group-hover:underline">{post.title}</h3>
          {post.excerpt && <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>}
        </Link>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-meta text-dim">
          {post.publishedAt ? (
            <time dateTime={post.publishedAt.toISOString()}>{relativeTime(post.publishedAt, now)}</time>
          ) : (
            <Badge variant="outline">Draft · edited {relativeTime(post.updatedAt, now)}</Badge>
          )}
          <span>{post.minutes} min read</span>
          {post.hidden && <Badge variant="destructive">Hidden by a moderator</Badge>}
          {post.publishedAt && (
            <KudosButton
              kind="post"
              sessionId={post.id}
              initialCount={post.kudos}
              initialGiven={post.kudosByViewer}
              disabled={!viewerId || post.author.id === viewerId}
            />
          )}
        </div>
      </div>
      {post.image && (
        <Link href={href} className="shrink-0" tabIndex={-1} aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element -- already-resized upload, see PostBody */}
          <img src={post.image} alt="" loading="lazy" className="size-20 rounded-md border border-border object-cover sm:h-24 sm:w-36" />
        </Link>
      )}
    </li>
  );
}

export function PostList({
  posts,
  viewerId,
  showAuthor = true,
  emptyText,
  emptyAction,
}: {
  posts: PostCard[];
  viewerId: string;
  showAuthor?: boolean;
  emptyText: string;
  emptyAction?: ReactNode;
}) {
  if (posts.length === 0) return <EmptyState title={emptyText} action={emptyAction} />;
  const now = new Date();
  return (
    <ul className="divide-y divide-border">
      {posts.map((p) => (
        <PostRow key={p.id} post={p} viewerId={viewerId} showAuthor={showAuthor} now={now} />
      ))}
    </ul>
  );
}
