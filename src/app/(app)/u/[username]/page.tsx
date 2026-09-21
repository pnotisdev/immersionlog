import Link from "next/link";
import { notFound } from "next/navigation";
import { eachDayKey, presetRange } from "@/lib/dates";
import { formatDuration, formatMonthYear, formatNumber } from "@/lib/format";
import { getProgression } from "@/lib/progression-queries";
import { getDailyTotals, getLibrary, getTopItems, getTypeBreakdown } from "@/lib/queries";
import { getPublicUser, getUserRank } from "@/lib/ranking-queries";
import { getFeed, getFollowCounts, isFollowing, listFollowConnections } from "@/lib/social-queries";
import { requireUser } from "@/lib/session";
import { USERNAME_RE } from "@/lib/username";
import { SectionHeader } from "@/components/layout/page-header";
import { ActivityFeed } from "@/components/community/activity-feed";
import { FollowButton } from "@/components/community/follow-button";
import { MediaCard } from "@/components/library/media-card";
import { ArtBanner } from "@/components/media/art-banner";
import { Rail } from "@/components/media/scroll-rail";
import { LevelPill } from "@/components/progression/level-card";
import { Avatar } from "@/components/ranking/avatar";
import { Heatmap } from "@/components/stats/heatmap";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TopTitles } from "@/components/stats/top-titles";
import { Button } from "@/components/ui/button";

export async function generateMetadata(props: PageProps<"/u/[username]">) {
  const { username } = await props.params;
  const u = USERNAME_RE.test(username) ? await getPublicUser(username) : null;
  return { title: u ? u.name : "Profile" };
}

export default async function ProfilePage(props: PageProps<"/u/[username]">) {
  const viewer = await requireUser();
  const { username } = await props.params;
  // Cheap guard so an obviously-malformed handle 404s before hitting the database.
  if (!USERNAME_RE.test(username)) notFound();
  const u = await getPublicUser(username);
  if (!u) notFound();

  const isSelf = u.id === viewer.id;
  const now = new Date();
  const tz = u.timezone; // their days, not the viewer's
  const month = presetRange("month", tz, now);
  const heatRange = presetRange("365d", tz, now);
  const all = presetRange("all", tz, now);

  const [progression, heat, breakdown, top, rank, counts, following, feed, library, followers] = await Promise.all([
    getProgression(u.id, tz, now),
    getDailyTotals(u.id, heatRange.from, heatRange.to, tz),
    getTypeBreakdown(u.id, all.from, all.to),
    getTopItems(u.id, all.from, all.to, 10),
    getUserRank(u.id, { from: month.from, to: month.to }),
    getFollowCounts(u.id),
    isSelf ? Promise.resolve(false) : isFollowing(viewer.id, u.id),
    getFeed(viewer.id, { ofUser: u.id, limit: 10 }),
    getLibrary(u.id),
    listFollowConnections(u.id, "followers", 10),
  ]);

  const heatDaysFull = eachDayKey(heatRange.from, heatRange.to, tz).map((k) => ({
    key: k,
    seconds: heat.get(k)?.seconds ?? 0,
    sessions: heat.get(k)?.count ?? 0,
  }));
  const activeDaysInHeatRange = heatDaysFull.filter((d) => d.seconds > 0).length;
  // A light user's 52 flat weeks read as one step of the ramp; show the last 12 weeks instead (redesign.md §7).
  const heatmapIsShortRange = activeDaysInHeatRange < 10;
  const heatDays = heatmapIsShortRange ? heatDaysFull.slice(-84) : heatDaysFull;
  const active = library.filter((e) => e.status === "active");
  const finished = library
    .filter((e) => e.status === "finished")
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (b.finishedAt ?? "").localeCompare(a.finishedAt ?? ""));
  // The header art is whatever they've sunk the most hours into — one title, one image.
  const heroArt = top[0]?.bannerUrl ?? top[0]?.coverUrl ?? null;
  const firstName = u.name.split(" ")[0];

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

  const libraryLink = (
    <Button render={<Link href={`/u/${u.username}/library`} />} nativeButton={false} variant="outline" size="sm">
      Library
    </Button>
  );
  const action = (
    <div className="flex items-center gap-2">
      {libraryLink}
      {isSelf ? (
        <Button render={<Link href="/settings" />} nativeButton={false} variant="outline" size="sm">
          Edit profile
        </Button>
      ) : (
        <FollowButton userId={u.id} initialFollowing={following} />
      )}
    </div>
  );

  return (
    <div>
      {/* Header art comes from what they actually watch and read. */}
      <div className="-mx-4 -mt-5 sm:-mt-6">
        <ArtBanner image={heroArt} height="h-[180px]" />
        {/* relative: the banner's scrim is absolutely positioned and would paint over this row.
            Phones stack avatar → name → pills; from sm the name sits beside the avatar. */}
        <div className="relative z-10 -mt-11 flex flex-col gap-3 px-4 sm:flex-row sm:items-end sm:gap-4">
          <div className="flex items-end justify-between gap-3">
            <Avatar name={u.name} image={u.image} size="xl" className="ring-3 ring-background" />
            <div className="sm:hidden">{action}</div>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              {u.name}
              {isSelf && <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">you</span>}
            </h1>
            {/* One level chip, not three — reading/listening levels are a tooltip away, not
                three chips of equal weight (redesign.md §5.7). */}
            <div className="mt-1.5">
              <LevelPill
                info={progression.overall}
                title={`Reading Lv ${progression.reading.level} · Listening Lv ${progression.listening.level}`}
              />
            </div>
          </div>
          <div className="hidden sm:block">{action}</div>
        </div>
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm text-muted-foreground">
        {/* Any zero count disappears rather than rendering "0 followers" (redesign.md §7). */}
        {counts.followers > 0 && (
          <span>
            <span className="font-medium text-foreground">{formatNumber(counts.followers)}</span> followers
          </span>
        )}
        {counts.following > 0 && (
          <span>
            <span className="font-medium text-foreground">{formatNumber(counts.following)}</span> following
          </span>
        )}
        {/* Global rank stays hidden until the cohort is large enough to mean something. */}
        {rank.rank && rank.total >= 20 && (
          <Link href="/ranking" className="hover:text-foreground">
            #{rank.rank} this month
          </Link>
        )}
        <span>tracking since {formatMonthYear(progression.firstDay ?? u.createdAt.toISOString().slice(0, 10))}</span>
      </p>

      {followers.length > 0 && (
        <div className="mt-3 flex items-center gap-2">
          <div className="flex -space-x-2">
            {followers.slice(0, 8).map((f) => (
              <Link key={f.userId} href={`/u/${f.username}`} title={f.name}>
                <Avatar name={f.name} image={f.image} size="sm" className="ring-2 ring-background" />
              </Link>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">follow {isSelf ? "you" : firstName}</span>
        </div>
      )}

      <StatStrip
        className="mt-7"
        stats={[
          { label: "Time immersed", value: formatDuration(progression.totals.total), hero: true },
          { label: "Current streak", value: `${progression.currentStreak}d`, hint: `longest ${progression.longestStreak} day${progression.longestStreak === 1 ? "" : "s"}` },
          { label: "Daily average", value: formatDuration(progression.dailyAverage), hint: `${progression.activeDays} active days` },
          { label: "Titles tracked", value: formatNumber(library.length), hint: `${finished.length} finished` },
        ]}
      />

      {/* The heatmap is the most ownable object in the product — the hero of the
          profile, not a footnote between two lists (redesign.md §3.3, §5.7). */}
      <section className="mt-9">
        <SectionHeader
          title={heatmapIsShortRange ? "Last 12 weeks" : "Past year"}
          action={
            <span className="text-xs text-muted-foreground">
              {formatDuration(heatDaysFull.reduce((sum, d) => sum + d.seconds, 0))} · {activeDaysInHeatRange} active days
            </span>
          }
        />
        <Heatmap days={heatDays} />
      </section>

      <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid gap-9">
          {active.length > 0 && (
            <Rail title={isSelf ? "You're immersing in" : `${firstName} is immersing in`} label="Currently immersing in">
              {active.slice(0, 16).map((e) => (
                <div key={e.id} className="w-[132px] shrink-0">
                  <MediaCard item={card(e)} />
                </div>
              ))}
            </Rail>
          )}

          <section>
            <SectionHeader title="Most time spent on" />
            <TopTitles
              items={top.map((t) => ({ ...t, detail: `${t.count} session${t.count === 1 ? "" : "s"}` }))}
              emptyText="No sessions logged yet."
            />
          </section>

          {finished.length > 0 && (
            <section>
              <SectionHeader
                title="Finished"
                action={
                  <Link href={`/u/${u.username}/library?status=finished`} className="text-xs text-muted-foreground hover:text-foreground">
                    {finished.length} titles
                  </Link>
                }
              />
              <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
                {finished.slice(0, 12).map((e) => (
                  <MediaCard key={e.id} item={card(e)} />
                ))}
              </div>
            </section>
          )}

          <section>
            <SectionHeader title="Recent sessions" />
            <ActivityFeed
              items={feed.items}
              viewerId={viewer.id}
              emptyText={isSelf ? "You haven't logged anything yet." : `${u.name} hasn't logged anything yet.`}
            />
          </section>
        </div>

        <section>
          <SectionHeader title="Split" />
          <SplitBar
            segments={[
              { label: "Reading", seconds: progression.totals.reading, color: "bg-d-reading" },
              { label: "Listening", seconds: progression.totals.listening, color: "bg-d-listening" },
            ]}
          />
          <div className="mt-7">
            <SectionHeader title="By medium" />
            <TypeBars rows={breakdown} limit={6} />
          </div>
        </section>
      </div>
    </div>
  );
}
