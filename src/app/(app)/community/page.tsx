import Link from "next/link";
import { presetRange } from "@/lib/dates";
import { formatDuration } from "@/lib/format";
import { getLeaderboard } from "@/lib/ranking-queries";
import { getCommunityPulse, getFeed, getSuggestedMembers, type FeedScope } from "@/lib/social-queries";
import { requireUser } from "@/lib/session";
import { PageHeader, SectionHeader } from "@/components/layout/page-header";
import { TabLinks } from "@/components/layout/tab-links";
import { ActivityFeed } from "@/components/community/activity-feed";
import { CommunityTabs } from "@/components/community/community-tabs";
import { MemberRowCompact } from "@/components/community/member-card";
import { Avatar } from "@/components/ranking/avatar";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Community" };

const PAGE_SIZE = 25;

export default async function CommunityPage(props: PageProps<"/community">) {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const sp = await props.searchParams;
  const scope: FeedScope = str(sp.scope) === "following" ? "following" : "global";
  const before = str(sp.before);

  const now = new Date();
  const week = presetRange("week", tz, now);
  const month = presetRange("month", tz, now);

  const [feed, pulse, suggestions, top] = await Promise.all([
    getFeed(user.id, { scope, limit: PAGE_SIZE, before }),
    getCommunityPulse(week.from),
    getSuggestedMembers(user.id, month.from, 5),
    getLeaderboard({ from: month.from, to: month.to, limit: 5 }),
  ]);

  const tab = (s: FeedScope) => `/community${s === "following" ? "?scope=following" : ""}`;

  return (
    <div>
      <PageHeader
        title="Community"
        description={[
          pulse.members > 0 && `${pulse.members} members`,
          pulse.activeThisWeek > 0 && `${pulse.activeThisWeek} active this week`,
          pulse.secondsThisWeek > 0 && `${formatDuration(pulse.secondsThisWeek)} logged together`,
        ]
          .filter(Boolean)
          .join(" · ")}
      />
      <CommunityTabs active="/community" />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <TabLinks
            tabs={[
              { href: tab("global"), label: "Everyone" },
              { href: tab("following"), label: "Following" },
            ]}
            active={tab(scope)}
            variant="pill"
            className="mb-2"
          />

          <ActivityFeed
            items={feed.items}
            viewerId={user.id}
            emptyText={
              scope === "following"
                ? "Nothing from the people you follow yet. Find some members to follow."
                : "No activity yet. Log a session and you'll be the first."
            }
            emptyAction={
              <Button render={<Link href={scope === "following" ? "/members" : "/log/new"} />} nativeButton={false}>
                {scope === "following" ? "Browse members" : "Log a session"}
              </Button>
            }
          />

          {feed.nextCursor && (
            <div className="mt-6 flex justify-center">
              <Link
                href={`/community?${new URLSearchParams({
                  ...(scope === "following" ? { scope } : {}),
                  before: feed.nextCursor,
                }).toString()}`}
                className="rounded-sm border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Older activity
              </Link>
            </div>
          )}
          {before && (
            <div className="mt-3 flex justify-center">
              <Link href={`/community${scope === "following" ? "?scope=following" : ""}`} className="text-xs text-muted-foreground underline underline-offset-4">
                Back to latest
              </Link>
            </div>
          )}
        </div>

        <aside className="grid gap-6 lg:sticky lg:top-20 lg:self-start">
          {suggestions.length > 0 && (
            <div>
              <SectionHeader
                title="People to follow"
                action={
                  <Link href="/members" className="text-xs text-muted-foreground hover:text-foreground">
                    All members
                  </Link>
                }
              />
              <div className="grid gap-3">
                {suggestions.map((m) => (
                  <MemberRowCompact key={m.userId} member={m} viewerId={user.id} />
                ))}
              </div>
            </div>
          )}

          {top.length > 0 && (
            <div>
              <SectionHeader
                title="Top this month"
                action={
                  <Link href="/ranking" className="text-xs text-muted-foreground hover:text-foreground">
                    Full ranking
                  </Link>
                }
              />
              <ol className="grid gap-2.5">
                {top.map((r) => (
                  <li key={r.userId} className="flex items-center gap-2.5 text-sm">
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
          )}
        </aside>
      </div>
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
