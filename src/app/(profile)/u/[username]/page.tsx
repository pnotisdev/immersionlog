import Link from "next/link";
import { notFound } from "next/navigation";
import { Link2 } from "lucide-react";
import { dayKey, presetRange } from "@/lib/dates";
import { formatDuration, formatMonthYear, formatNumber } from "@/lib/format";
import { listRecentMilestones } from "@/lib/milestones-queries";
import { platformLabel } from "@/lib/profile-links";
import { getProgression } from "@/lib/progression-queries";
import { getHeatmapActivity, getLibrary, getTopItems, getTypeBreakdown } from "@/lib/queries";
import { getPublicUser, getUserRank } from "@/lib/ranking-queries";
import { getSiteUrl } from "@/lib/site";
import { getFeed, getFollowCounts, isFollowing, listFollowConnections } from "@/lib/social-queries";
import { getSession } from "@/lib/session";
import { USERNAME_RE } from "@/lib/username";
import { Panel, PanelLink } from "@/components/layout/panel";
import { ActivityFeed } from "@/components/community/activity-feed";
import { FollowButton } from "@/components/community/follow-button";
import { ProfileTabs } from "@/components/community/profile-tabs";
import { MediaCard } from "@/components/library/media-card";
import { ArtBanner } from "@/components/media/art-banner";
import { Rail } from "@/components/media/scroll-rail";
import { LevelPill } from "@/components/progression/level-card";
import { MilestoneList } from "@/components/progression/milestone-list";
import { Avatar } from "@/components/ranking/avatar";
import { ActivityHeatmap } from "@/components/stats/activity-heatmap";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TopTitles } from "@/components/stats/top-titles";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";

export async function generateMetadata(props: PageProps<"/u/[username]">) {
  const { username } = await props.params;
  const u = USERNAME_RE.test(username) ? await getPublicUser(username) : null;
  return { title: u ? u.name : "Profile" };
}

export default async function ProfilePage(props: PageProps<"/u/[username]">) {
  const session = await getSession();
  const viewer = session?.user ?? null;
  const { username } = await props.params;
  // Cheap guard so an obviously-malformed handle 404s before hitting the database.
  if (!USERNAME_RE.test(username)) notFound();
  const u = await getPublicUser(username);
  if (!u) notFound();

  const isSelf = viewer != null && u.id === viewer.id;
  const now = new Date();
  const tz = u.timezone; // their days, not the viewer's
  const month = presetRange("month", tz, now);
  const all = presetRange("all", tz, now);

  const [progression, heat, breakdown, top, rank, counts, following, feed, library, followers, highlights] = await Promise.all([
    getProgression(u.id, tz, now),
    getHeatmapActivity(u.id, tz, now),
    getTypeBreakdown(u.id, all.from, all.to),
    getTopItems(u.id, all.from, all.to, 8),
    getUserRank(u.id, { from: month.from, to: month.to }),
    getFollowCounts(u.id),
    isSelf || !viewer ? Promise.resolve(false) : isFollowing(viewer.id, u.id),
    // getFeed only uses viewerId for own-post/kudos-given checks — both no-ops for a
    // logged-out visitor, so "" is safe here (see src/lib/social-queries.ts:47-111).
    getFeed(viewer?.id ?? "", { ofUser: u.id, limit: 8 }),
    getLibrary(u.id),
    listFollowConnections(u.id, "followers", 10),
    listRecentMilestones(u.id, 6),
  ]);

  const active = library.filter((e) => e.status === "active");
  const finished = library
    .filter((e) => e.status === "finished")
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (b.finishedAt ?? "").localeCompare(a.finishedAt ?? ""));
  // The header art is whatever they've sunk the most hours into — one title, one image.
  const heroArt = top[0]?.bannerUrl ?? top[0]?.coverUrl ?? null;
  const firstName = u.name.split(" ")[0];
  const currentYear = dayKey(now, tz).slice(0, 4);

  const card = (e: (typeof library)[number]) => ({
    mediaItemId: e.mediaItemId,
    title: e.mediaItem.title,
    titleNative: e.mediaItem.titleNative,
    coverUrl: e.mediaItem.coverUrl,
    type: e.mediaItem.type,
    status: e.status,
    progress: e.progress,
    progressUnit: e.progressUnit,
    totalAmount: e.mediaItem.totalAmount,
    totalUnit: e.mediaItem.totalUnit,
    rating: e.rating,
  });

  // Two controls at most, so the row fits beside the avatar on a 375px phone: the one
  // thing to do (follow / edit) and sharing. Library and Report are tabs below.
  const actions = (
    <div className="flex items-center gap-2">
      {isSelf ? (
        <Button render={<Link href="/settings" />} nativeButton={false} variant="outline">
          Edit profile
        </Button>
      ) : viewer ? (
        <FollowButton userId={u.id} initialFollowing={following} />
      ) : (
        // Logged-out visitor: "Follow" has nothing to act on yet, so it's a plain
        // signup link styled the same as the real button.
        <Button render={<Link href="/signup" />} nativeButton={false}>
          Follow
        </Button>
      )}
      <CopyButton value={`${getSiteUrl()}/u/${u.username}`} label="Share" copiedLabel="Link copied" size="default" />
    </div>
  );

  return (
    <div className="grid gap-6">
      <header>
        {/* Header art comes from what they actually watch and read. */}
        <ArtBanner image={heroArt} height="h-32 sm:h-48" className="rounded-lg border border-border" />

        {/* relative: the banner's scrim is absolutely positioned and would paint over this row. */}
        <div className="relative z-10 -mt-10 flex items-end justify-between gap-3 px-1 sm:-mt-12 sm:px-5">
          <Avatar name={u.name} image={u.image} size="xl" className="size-20 ring-4 ring-background sm:size-24" />
          <div className="pb-1">{actions}</div>
        </div>

        <div className="mt-3 px-1 sm:px-5">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <h1 className="text-h1 font-semibold sm:text-[1.75rem] sm:leading-9">{u.name}</h1>
            {/* One level chip, not three — reading/listening levels are a tooltip away, not
                three chips of equal weight (redesign.md §5.7). */}
            <LevelPill
              info={progression.overall}
              title={`Reading Lv ${progression.reading.level} · Listening Lv ${progression.listening.level}`}
            />
            {isSelf && <span className="text-meta text-dim">you</span>}
          </div>
          <p className="mt-0.5 text-meta text-dim">@{u.username}</p>

          {u.bio && <p className="mt-3 max-w-2xl text-sm leading-relaxed">{u.bio}</p>}

          {u.profileLinks.length > 0 && (
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
              {u.profileLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Link2 className="size-3.5" />
                  {platformLabel(link.platform)}
                </a>
              ))}
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {/* Any zero count disappears rather than rendering "0 followers" (redesign.md §7). */}
            {counts.followers > 0 && (
              <span>
                <span className="font-medium text-foreground tabular-nums">{formatNumber(counts.followers)}</span> followers
              </span>
            )}
            {counts.following > 0 && (
              <span>
                <span className="font-medium text-foreground tabular-nums">{formatNumber(counts.following)}</span> following
              </span>
            )}
            {/* Global rank stays hidden until the cohort is large enough to mean something. */}
            {rank.rank && rank.total >= 20 && (
              <Link href="/ranking" className="hover:text-foreground">
                <span className="font-medium text-foreground">#{rank.rank}</span> this month
              </Link>
            )}
            <span>Tracking since {formatMonthYear(progression.firstDay ?? u.createdAt.toISOString().slice(0, 10))}</span>
            {followers.length > 0 && (
              <span className="flex items-center gap-2">
                <span className="flex -space-x-1.5">
                  {followers.slice(0, 6).map((f) => (
                    <Link key={f.userId} href={`/u/${f.username}`} title={f.name}>
                      <Avatar name={f.name} image={f.image} size="xs" className="ring-2 ring-background" />
                    </Link>
                  ))}
                </span>
                <span className="text-meta text-dim">follow {isSelf ? "you" : firstName}</span>
              </span>
            )}
          </div>
        </div>

        <ProfileTabs username={u.username!} active="overview" year={currentYear} libraryCount={library.length} />
      </header>

      <StatStrip
        stats={[
          { label: "Time immersed", value: formatDuration(progression.totals.total), hero: true },
          {
            label: "Current streak",
            value: `${progression.currentStreak}d`,
            hint: `longest ${progression.longestStreak} day${progression.longestStreak === 1 ? "" : "s"}`,
          },
          { label: "Daily average", value: formatDuration(progression.dailyAverage), hint: `${progression.activeDays} active days` },
          { label: "Titles tracked", value: formatNumber(library.length), hint: `${finished.length} finished` },
        ]}
      />

      {/* The heatmap is the most ownable object in the product — the hero of the
          profile, not a footnote between two lists (redesign.md §3.3, §5.7). */}
      <ActivityHeatmap activity={heat} />

      {active.length > 0 && (
        <Rail title={isSelf ? "You're immersing in" : `${firstName} is immersing in`} label="Currently immersing in">
          {active.slice(0, 16).map((e) => (
            <div key={e.id} className="w-[132px] shrink-0">
              <MediaCard item={card(e)} />
            </div>
          ))}
        </Rail>
      )}

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid gap-6">
          <Panel title="Most time spent on" description="All time">
            <TopTitles
              items={top.map((t) => ({ ...t, detail: `${t.count} session${t.count === 1 ? "" : "s"}` }))}
              emptyText="No sessions logged yet."
            />
          </Panel>

          <Panel title="Recent sessions" flush>
            <ActivityFeed
              items={feed.items}
              viewerId={viewer?.id ?? ""}
              inset
              showAuthor={false}
              emptyText={isSelf ? "You haven't logged anything yet." : `${u.name} hasn't logged anything yet.`}
            />
          </Panel>
        </div>

        <div className="grid gap-6">
          {breakdown.length > 0 && (
            <Panel title={isSelf ? "What you immerse in" : `What ${firstName} immerses in`} description="All time">
              <SplitBar
                segments={[
                  { label: "Reading", seconds: progression.totals.reading, color: "bg-d-reading" },
                  { label: "Listening", seconds: progression.totals.listening, color: "bg-d-listening" },
                ]}
              />
              <div className="mt-5">
                <TypeBars rows={breakdown} limit={6} />
              </div>
            </Panel>
          )}

          {finished.length > 0 && (
            <Panel
              title="Finished"
              action={<PanelLink href={`/u/${u.username}/library?status=finished`}>{finished.length} titles</PanelLink>}
            >
              <div className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-6 lg:grid-cols-3">
                {finished.slice(0, 6).map((e) => (
                  <MediaCard key={e.id} item={card(e)} />
                ))}
              </div>
            </Panel>
          )}

          {/* Omitted entirely when there are none — a milestone list only exists once
              someone's added one, never as an empty prompt. */}
          {highlights.length > 0 && (
            <Panel title="Highlights" flush>
              <MilestoneList milestones={highlights} inset />
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
}
