import Link from "next/link";
import { PenLine } from "lucide-react";
import { listPosts } from "@/lib/post-queries";
import { requireUser } from "@/lib/session";
import { PageHeader } from "@/components/layout/page-header";
import { TabLinks } from "@/components/layout/tab-links";
import { CommunityTabs } from "@/components/community/community-tabs";
import { PostList } from "@/components/posts/post-list";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Journal" };

const PAGE_SIZE = 20;

/** Members' journal posts, newest first: everyone's, or the people you follow. */
export default async function JournalPage(props: PageProps<"/community/journal">) {
  const user = await requireUser();
  const sp = await props.searchParams;
  const scope = str(sp.scope) === "following" ? "following" : "global";
  const before = str(sp.before);
  const page = await listPosts(user.id, { scope, limit: PAGE_SIZE, before });

  const tab = (s: typeof scope) => `/community/journal${s === "following" ? "?scope=following" : ""}`;
  const write = (
    <Button render={<Link href="/write" />} nativeButton={false}>
      <PenLine /> Write a post
    </Button>
  );

  return (
    <div>
      <PageHeader title="Community" description="How everyone's Japanese is going, in their own words" actions={write} />
      <CommunityTabs active="/community/journal" />

      <div className="max-w-[48rem]">
        <TabLinks
          tabs={[
            { href: tab("global"), label: "Everyone" },
            { href: tab("following"), label: "Following" },
          ]}
          active={tab(scope)}
          variant="pill"
          className="mb-2"
        />

        <PostList
          posts={page.items}
          viewerId={user.id}
          emptyText={scope === "following" ? "Nobody you follow has written a post yet." : "No posts yet. Yours could be the first."}
          emptyAction={write}
        />

        {page.nextCursor && (
          <div className="mt-6 flex justify-center">
            <Link
              href={`/community/journal?${new URLSearchParams({ ...(scope === "following" ? { scope } : {}), before: page.nextCursor }).toString()}`}
              className="rounded-sm border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Older posts
            </Link>
          </div>
        )}
        {before && (
          <div className="mt-3 flex justify-center">
            <Link href={tab(scope)} className="text-xs text-muted-foreground underline underline-offset-4">
              Back to latest
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
