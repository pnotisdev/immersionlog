import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, PenLine } from "lucide-react";
import { formatDuration } from "@/lib/format";
import { getPost, immersedBefore } from "@/lib/post-queries";
import { postExcerpt, postPath } from "@/lib/posts";
import { getPublicUser } from "@/lib/ranking-queries";
import { absoluteUrl } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { USERNAME_RE } from "@/lib/username";
import { KudosButton } from "@/components/community/kudos-button";
import { PostBody } from "@/components/posts/post-body";
import { ReportPostButton } from "@/components/posts/report-post-button";
import { Avatar } from "@/components/ranking/avatar";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";

const SLUG_RE = /^[a-z0-9-]{1,80}$/;

async function load(props: PageProps<"/u/[username]/posts/[slug]">) {
  const { username, slug } = await props.params;
  if (!USERNAME_RE.test(username) || !SLUG_RE.test(slug)) return null;
  const u = await getPublicUser(username);
  if (!u) return null;
  const viewer = (await getSession())?.user ?? null;
  const post = await getPost(u.id, slug, viewer?.id ?? "");
  return post && { u, post, viewer };
}

export async function generateMetadata(props: PageProps<"/u/[username]/posts/[slug]">) {
  const found = await load(props);
  if (!found) return { title: "Post" };
  const { u, post } = found;
  const description = postExcerpt(post.body, 160);
  return {
    title: `${post.title} · ${u.name}`,
    description,
    // Shareable, but kept out of search like the rest of a member's profile.
    robots: { index: false, follow: true },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      publishedTime: post.publishedAt?.toISOString(),
      authors: [u.name],
      ...(post.image ? { images: [{ url: absoluteUrl(post.image) }] } : {}),
    },
    twitter: { card: post.image ? "summary_large_image" : "summary", title: post.title, description },
  };
}

export default async function PostPage(props: PageProps<"/u/[username]/posts/[slug]">) {
  const found = await load(props);
  if (!found) notFound();
  const { u, post, viewer } = found;
  const isAuthor = viewer?.id === u.id;
  // Drafts (only ever loaded for their author) date from their last edit.
  const at = post.publishedAt ?? post.updatedAt;
  const hoursIn = await immersedBefore(u.id, at);

  return (
    <article className="mx-auto max-w-[44rem]">
      <Link href={`/u/${u.username}/posts`} className="inline-flex items-center gap-1.5 text-meta text-dim hover:text-foreground">
        <ArrowLeft className="size-3.5" /> {isAuthor ? "Your posts" : `${u.name.split(" ")[0]}'s posts`}
      </Link>

      {post.hidden && isAuthor && (
        <p className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
          A moderator hid this post. Only you can see it.
        </p>
      )}
      {!post.publishedAt && (
        <p className="mt-4 rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
          This is a draft. Only you can see it.
        </p>
      )}

      <h1 className="mt-5 text-display font-semibold text-balance">{post.title}</h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <Link href={`/u/${u.username}`} className="flex items-center gap-2.5 hover:underline">
          <Avatar name={u.name} image={u.image} size="sm" />
          <span className="text-sm font-medium">{u.name}</span>
        </Link>
        <span className="text-meta text-dim">
          <time dateTime={at.toISOString()}>{at.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</time>
          {" · "}
          {post.minutes} min read
          {hoursIn > 0 && (
            <>
              {" · "}
              <span title="Immersion this member had logged when they wrote this">{formatDuration(hoursIn)} in</span>
            </>
          )}
        </span>
      </div>

      <div className="mt-8">
        <PostBody markdown={post.body} />
      </div>

      <footer className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-5">
        {post.publishedAt && (
          <KudosButton kind="post" sessionId={post.id} initialCount={post.kudos} initialGiven={post.kudosByViewer} disabled={!viewer || isAuthor} />
        )}
        {post.publishedAt && <CopyButton value={absoluteUrl(postPath(u.username!, post.slug))} label="Share" copiedLabel="Link copied" />}
        <div className="ml-auto flex items-center gap-2">
          {isAuthor && (
            <Button render={<Link href={`/write/${post.id}`} />} nativeButton={false} variant="outline" size="sm">
              <PenLine /> Edit
            </Button>
          )}
          {viewer && !isAuthor && <ReportPostButton postId={post.id} />}
        </div>
      </footer>

      {!viewer && (
        <p className="mt-8 rounded-md border border-border bg-surface px-4 py-4 text-sm text-muted-foreground">
          {u.name} tracks their Japanese on immersionlog.{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Start your own log
          </Link>{" "}
          to follow them and write your own posts.
        </p>
      )}
    </article>
  );
}
