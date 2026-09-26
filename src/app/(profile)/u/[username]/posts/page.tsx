import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine } from "lucide-react";
import { dayKey } from "@/lib/dates";
import { listDrafts, listPosts } from "@/lib/post-queries";
import { getPublicUser } from "@/lib/ranking-queries";
import { getSession } from "@/lib/session";
import { USERNAME_RE } from "@/lib/username";
import { Panel } from "@/components/layout/panel";
import { ProfileTabs } from "@/components/community/profile-tabs";
import { PostList } from "@/components/posts/post-list";
import { Avatar } from "@/components/ranking/avatar";
import { Button } from "@/components/ui/button";

export async function generateMetadata(props: PageProps<"/u/[username]/posts">) {
  const { username } = await props.params;
  const u = USERNAME_RE.test(username) ? await getPublicUser(username) : null;
  // Noindexed like the rest of the profile (see /u/[username]'s metadata).
  return { title: u ? `${u.name}'s posts` : "Posts", robots: { index: false, follow: true } };
}

export default async function UserPostsPage(props: PageProps<"/u/[username]/posts">) {
  const session = await getSession();
  const viewer = session?.user ?? null;
  const { username } = await props.params;
  if (!USERNAME_RE.test(username)) notFound();
  const u = await getPublicUser(username);
  if (!u) notFound();

  const isSelf = viewer != null && u.id === viewer.id;
  const firstName = u.name.split(" ")[0];
  const [page, drafts] = await Promise.all([
    listPosts(viewer?.id ?? "", { authorId: u.id, limit: 50 }),
    isSelf ? listDrafts(u.id) : Promise.resolve([]),
  ]);
  const write = (
    <Button render={<Link href="/write" />} nativeButton={false}>
      <PenLine /> Write a post
    </Button>
  );

  return (
    <div>
      <header className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href={`/u/${u.username}`} className="group inline-flex items-center gap-3">
            <Avatar name={u.name} image={u.image} size="md" />
            <span className="min-w-0">
              <span className="block text-h2 font-semibold group-hover:underline">{isSelf ? "Your posts" : `${firstName}'s posts`}</span>
              <span className="block text-meta text-dim">
                {u.name} · @{u.username}
              </span>
            </span>
          </Link>
          {isSelf && write}
        </div>
        <ProfileTabs username={u.username!} active="posts" year={dayKey(new Date(), u.timezone).slice(0, 4)} postCount={page.items.length} />
      </header>

      <div className="grid gap-6">
        {drafts.length > 0 && (
          <Panel title="Drafts" description="Only you can see these">
            <PostList posts={drafts} viewerId={viewer?.id ?? ""} showAuthor={false} emptyText="" />
          </Panel>
        )}
        <PostList
          posts={page.items}
          viewerId={viewer?.id ?? ""}
          showAuthor={false}
          emptyText={isSelf ? "You haven't published anything yet. How's your Japanese going?" : `${u.name} hasn't written any posts yet.`}
          emptyAction={isSelf ? write : undefined}
        />
      </div>
    </div>
  );
}
