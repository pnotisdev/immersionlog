import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { formatDuration, formatNumber } from "@/lib/format";
import { MEDIA_TYPE_META, SOURCE_LABELS, UNIT_LABELS } from "@/lib/media";
import { getSession } from "@/lib/session";
import { absoluteUrl, breadcrumbs, JsonLd, SCHEMA_TYPE } from "@/lib/seo";
import {
  MIN_FOR_AVERAGE,
  getPublicTitle,
  getTitleStats,
  isAdult,
  isIndexable,
  jitenOf,
  listPublicTitles,
  parseTitleParam,
  titlePath,
} from "@/lib/titles";
import { Panel } from "@/components/layout/panel";
import { ExternalLinks, safeLinks } from "@/components/media/external-links";
import { Poster } from "@/components/media/poster";
import { TmdbLogo } from "@/components/media/tmdb-logo";
import { StatStrip } from "@/components/stats/stat-strip";

// Community difficulty votes are 1-5 (src/components/media/difficulty-vote.tsx).
const DIFFICULTY_LABELS = ["Very easy", "Easy", "Just right", "Hard", "Very hard"];

// Characters per hour. Rough bands, labelled as such on the page.
const SPEEDS = [
  { cph: 5_000, label: "Starting out" },
  { cph: 10_000, label: "Comfortable" },
  { cph: 20_000, label: "Fluent" },
];

async function load(param: string) {
  const id = parseTitleParam(param);
  if (!id) return null;
  const item = await getPublicTitle(id);
  if (!item) return null;
  return { item, stats: await getTitleStats(id) };
}

function hoursLabel(hours: number): string {
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  return hours < 10 ? `${hours.toFixed(1)} h` : `${formatNumber(Math.round(hours))} h`;
}

function summary(item: NonNullable<Awaited<ReturnType<typeof load>>>["item"], stats: Awaited<ReturnType<typeof getTitleStats>>): string {
  const meta = MEDIA_TYPE_META[item.type];
  const jiten = jitenOf(item);
  const parts = [`${item.title}${item.titleNative ? ` (${item.titleNative})` : ""} is a ${meta.label.toLowerCase()}${item.year ? ` from ${item.year}` : ""}.`];
  if (jiten?.characterCount) {
    parts.push(`About ${formatNumber(jiten.characterCount)} characters of Japanese, roughly ${hoursLabel(jiten.characterCount / 10_000)} at 10,000 characters an hour.`);
  }
  if (stats.learners > 0) {
    parts.push(`${stats.learners} ${stats.learners === 1 ? "learner has" : "learners have"} logged ${formatDuration(stats.seconds)} on it with immersionlog.`);
  } else {
    parts.push("Track your time and progress on it with immersionlog.");
  }
  return parts.join(" ");
}

export async function generateMetadata(props: PageProps<"/titles/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const data = await load(slug);
  if (!data) return { title: "Title not found", robots: { index: false } };
  const { item, stats } = data;
  const path = titlePath(item);
  const description = summary(item, stats);
  const title = `${item.title} in Japanese: difficulty and time to finish`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: isIndexable(item, stats) ? undefined : { index: false, follow: true },
    openGraph: { title, description, url: path, type: "website", siteName: "immersionlog" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TitlePage(props: PageProps<"/titles/[slug]">) {
  const { slug } = await props.params;
  const data = await load(slug);
  if (!data) notFound();
  const { item, stats } = data;

  // One URL per title: old or bare-id links land on the current slug.
  const path = titlePath(item);
  if (`/titles/${slug}` !== path) permanentRedirect(path);

  const session = await getSession();
  const signedIn = !!session;
  const meta = MEDIA_TYPE_META[item.type];
  const jiten = jitenOf(item);
  const chars = jiten?.characterCount ?? null;
  const links = safeLinks(item.metadata?.links, item.externalUrl);
  const related = (await listPublicTitles({ type: item.type, excludeId: item.id, limit: 8 })).filter((r) => !isAdult(r));

  const communityDifficulty = stats.difficulty.average != null ? DIFFICULTY_LABELS[Math.round(stats.difficulty.average) - 1] : null;

  const stripStats = [
    ...(item.totalAmount && item.totalUnit ? [{ label: "Length", value: `${formatNumber(item.totalAmount)} ${UNIT_LABELS[item.totalUnit]}` }] : []),
    ...(jiten?.characterCount ? [{ label: "Characters", value: formatNumber(jiten.characterCount) }] : []),
    ...(jiten?.uniqueKanji ? [{ label: "Unique kanji", value: formatNumber(jiten.uniqueKanji) }] : []),
    { label: "Learners", value: formatNumber(stats.learners), hint: stats.learners ? `${formatDuration(stats.seconds)} logged` : "be the first" },
  ].slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": SCHEMA_TYPE[item.type],
    name: item.title,
    ...(item.titleNative ? { alternateName: item.titleNative } : {}),
    ...(item.description ? { description: item.description } : {}),
    ...(item.coverUrl && !isAdult(item) ? { image: item.coverUrl } : {}),
    ...(item.year ? { datePublished: String(item.year) } : {}),
    inLanguage: "ja",
    url: absoluteUrl(path),
    ...(links.length ? { sameAs: links.map(([, u]) => u) } : {}),
  };

  return (
    <div className="mx-auto grid max-w-4xl gap-8">
      <JsonLd
        data={[
          schema,
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Titles", path: "/titles" },
            { name: item.title, path },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-meta text-dim">
        <Link href="/titles" className="hover:text-foreground">
          Titles
        </Link>{" "}
        / <span>{meta.label}</span>
      </nav>

      <header className="flex gap-5">
        <div className="w-28 shrink-0 sm:w-40">
          <Poster src={item.coverUrl} title={item.title} type={item.type} sizes="160px" priority />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-meta text-dim">
            {meta.label}
            {item.year ? ` · ${item.year}` : ""}
          </p>
          <h1 className="mt-1 text-2xl font-semibold sm:text-4xl">{item.title}</h1>
          {item.titleNative && (
            <p className="mt-1 text-base text-muted-foreground sm:text-lg" lang="ja">
              {item.titleNative}
            </p>
          )}
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">{summary(item, stats)}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {signedIn ? (
              <Link
                href={`/media/${item.id}`}
                className="inline-flex h-10 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Open in your library
              </Link>
            ) : (
              <Link
                href={`/signup?next=${encodeURIComponent(`/media/${item.id}`)}`}
                className="inline-flex h-10 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Track it on immersionlog
              </Link>
            )}
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.source === "tmdb" ? <TmdbLogo className="h-3.5 w-auto" /> : SOURCE_LABELS[item.source]}
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>
        </div>
      </header>

      <StatStrip stats={stripStats} />

      {chars ? (
        <Panel title="How long it takes to read" description={`${formatNumber(chars)} characters, by reading speed`}>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-meta text-dim">
                <th className="pb-2 font-normal">Reading speed</th>
                <th className="pb-2 font-normal">Characters an hour</th>
                <th className="pb-2 text-right font-normal">Time</th>
              </tr>
            </thead>
            <tbody>
              {SPEEDS.map((s) => (
                <tr key={s.cph} className="border-t border-border">
                  <td className="py-2">{s.label}</td>
                  <td className="py-2 tabular-nums">{formatNumber(s.cph)}</td>
                  <td className="py-2 text-right font-medium tabular-nums">{hoursLabel(chars / s.cph)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-meta text-dim">
            Rough bands. Your own speed shows up in your stats once you log a few reading sessions with a character count.
            Character count from{" "}
            <a href="https://jiten.moe" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
              Jiten.moe
            </a>
            .
          </p>
        </Panel>
      ) : null}

      {(communityDifficulty || jiten?.difficulty != null || stats.avgSecondsToFinish != null || stats.finished > 0) && (
        <Panel title="Difficulty and time to finish">
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            {communityDifficulty && (
              <div>
                <dt className="text-meta text-dim">Learners rate it</dt>
                <dd className="font-medium">
                  {communityDifficulty} <span className="text-dim">({stats.difficulty.count} votes)</span>
                </dd>
              </div>
            )}
            {jiten?.difficulty != null && (
              <div>
                <dt className="text-meta text-dim">Jiten.moe estimate</dt>
                <dd className="font-medium tabular-nums">{jiten.difficulty.toFixed(1)} / 5</dd>
              </div>
            )}
            {stats.avgSecondsToFinish != null && (
              <div>
                <dt className="text-meta text-dim">Average time to finish</dt>
                <dd className="font-medium">{formatDuration(stats.avgSecondsToFinish)}</dd>
              </div>
            )}
            {stats.finished > 0 && (
              <div>
                <dt className="text-meta text-dim">Finished it</dt>
                <dd className="font-medium">
                  {stats.finished} {stats.finished === 1 ? "learner" : "learners"}
                </dd>
              </div>
            )}
          </dl>
          {stats.avgSecondsToFinish == null && stats.finished > 0 && (
            <p className="mt-3 text-meta text-dim">An average time to finish appears once {MIN_FOR_AVERAGE} learners have finished it.</p>
          )}
        </Panel>
      )}

      {item.description && (
        <section>
          <h2 className="text-h3 font-semibold">About</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          {links.length > 0 && (
            <div className="mt-3">
              <ExternalLinks links={links} />
            </div>
          )}
        </section>
      )}

      {!signedIn && (
        <Panel>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="min-w-0 flex-1">
              <h2 className="text-h3 font-semibold">Reading or watching this in Japanese?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                immersionlog counts your hours, characters read and streak across everything you consume in Japanese. Free.
              </p>
            </div>
            <Link
              href={`/signup?next=${encodeURIComponent(`/media/${item.id}`)}`}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Start tracking
            </Link>
          </div>
        </Panel>
      )}

      {related.length > 0 && (
        <section>
          <h2 className="text-h3 font-semibold">More {meta.label.toLowerCase()} on immersionlog</h2>
          <ul className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-8">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={titlePath(r)} className="group grid gap-1.5">
                  <Poster src={r.coverUrl} title={r.title} type={r.type} sizes="120px" />
                  <span className="line-clamp-2 text-xs group-hover:text-foreground">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
