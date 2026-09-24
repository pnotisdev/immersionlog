import type { Metadata } from "next";
import Link from "next/link";
import { MEDIA_TYPES } from "@/db/schema";
import { formatDuration, formatNumber } from "@/lib/format";
import { MEDIA_TYPE_META } from "@/lib/media";
import { breadcrumbs, JsonLd } from "@/lib/seo";
import { jitenOf, listPublicTitles, titlePath } from "@/lib/titles";
import { Poster } from "@/components/media/poster";

const description =
  "Anime, manga, visual novels, light novels and books that learners track on immersionlog, with Japanese character counts, reading-time estimates and how long learners take to finish them.";

export const metadata: Metadata = {
  title: "Japanese titles: difficulty, length and time to finish",
  description,
  alternates: { canonical: "/titles" },
  openGraph: { title: "Japanese titles on immersionlog", description, url: "/titles" },
};

// Rebuilt at most every 10 minutes: this is a crawl entry point, not a live feed.
export const revalidate = 600;

export default async function TitlesPage() {
  const titles = await listPublicTitles({ limit: 600 });
  const byType = MEDIA_TYPES.map((t) => ({ type: t, items: titles.filter((x) => x.type === t) })).filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto grid max-w-5xl gap-10">
      <JsonLd
        data={breadcrumbs([
          { name: "immersionlog", path: "/" },
          { name: "Titles", path: "/titles" },
        ])}
      />
      <header>
        <h1 className="text-2xl font-semibold sm:text-4xl">Japanese titles</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          What learners are reading, watching and playing in Japanese, with character counts, rough reading times and how long
          people take to finish each one.
        </p>
        {byType.length > 1 && (
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {byType.map((g) => (
              <a key={g.type} href={`#${g.type}`} className="text-primary hover:underline">
                {MEDIA_TYPE_META[g.type].label} ({g.items.length})
              </a>
            ))}
          </nav>
        )}
      </header>

      {byType.length === 0 && <p className="text-sm text-muted-foreground">Nothing here yet.</p>}

      {byType.map((g) => (
        <section key={g.type} id={g.type} className="scroll-mt-20">
          <h2 className="text-h2 font-semibold">{MEDIA_TYPE_META[g.type].label}</h2>
          <ul className="mt-4 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
            {g.items.map((t) => {
              const chars = jitenOf(t)?.characterCount;
              return (
                <li key={t.id}>
                  <Link href={titlePath(t)} className="group grid gap-1.5">
                    <Poster src={t.coverUrl} title={t.title} type={t.type} sizes="160px" />
                    <span className="line-clamp-2 text-sm font-medium group-hover:text-primary">{t.title}</span>
                    <span className="text-micro text-dim">
                      {[
                        chars ? `${formatNumber(chars)} chars` : null,
                        t.learners ? `${t.learners} ${t.learners === 1 ? "learner" : "learners"} · ${formatDuration(t.seconds)}` : null,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
