import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { adjacentChapters, GUIDE_CHAPTERS, GUIDE_UPDATED, guideChapter, guidePath } from "@/lib/guide";
import { getSession } from "@/lib/session";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import type { ArtKey } from "@/lib/guide-art";
import { ChapterArt } from "./anime-art";

export function chapterMetadata(slug: string): Metadata {
  const c = guideChapter(slug);
  const path = guidePath(slug);
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: path },
    openGraph: { type: "article", title: `${c.title} · immersionlog`, description: c.description, url: path, modifiedTime: GUIDE_UPDATED },
  };
}

/**
 * One chapter of the learning guide: header, the chapter's content, previous/next
 * links and a sign-up prompt. `faq` also goes out as FAQPage structured data.
 */
export async function ChapterShell({
  slug,
  children,
  faq,
  art,
}: {
  slug: string;
  children: ReactNode;
  faq?: { q: string; a: string }[];
  /** The picture above the title, with its caption. */
  art?: { name: ArtKey; caption: ReactNode };
}) {
  const c = guideChapter(slug);
  const path = guidePath(slug);
  const index = GUIDE_CHAPTERS.indexOf(c);
  const { prev, next } = adjacentChapters(slug);
  const session = await getSession();

  return (
    <article className="min-w-0">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.description,
            url: absoluteUrl(path),
            dateModified: GUIDE_UPDATED,
            inLanguage: "en",
            about: { "@type": "Language", name: "Japanese", alternateName: "ja" },
            isPartOf: { "@type": "CreativeWorkSeries", name: "immersionlog learning guide", url: absoluteUrl("/guide") },
            publisher: { "@type": "Organization", name: "immersionlog", url: absoluteUrl("/") },
          },
          ...(faq?.length
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                },
              ]
            : []),
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Learning guide", path: "/guide" },
            ...(slug ? [{ name: c.nav, path }] : []),
          ]),
        ]}
      />

      {art && <ChapterArt name={art.name} caption={art.caption} />}

      <header className="max-w-[44rem]">
        <p className="section-label mb-3">{index === 0 ? "Learning guide" : `Learning guide · Chapter ${index}`}</p>
        <h1 className="text-[2rem] leading-10 font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[3rem]">{c.title}</h1>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{c.description}</p>
        <p className="mt-3 text-meta text-dim">
          Updated {new Date(GUIDE_UPDATED).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })} · about{" "}
          {c.minutes} minutes to read
        </p>
      </header>

      <div className="mt-10 grid max-w-[44rem] gap-12">{children}</div>

      <nav aria-label="Chapters" className="mt-14 grid max-w-[44rem] gap-3 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={guidePath(prev.slug)} className="group rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/30">
            <span className="flex items-center gap-1.5 text-meta text-dim">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <span className="mt-1 block font-medium group-hover:underline">{prev.nav}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={guidePath(next.slug)}
            className="group rounded-lg border border-border px-4 py-3 text-right transition-colors hover:border-foreground/30"
          >
            <span className="flex items-center justify-end gap-1.5 text-meta text-dim">
              Next <ArrowRight className="size-3.5" />
            </span>
            <span className="mt-1 block font-medium group-hover:underline">{next.nav}</span>
          </Link>
        )}
      </nav>

      <section className="mt-8 flex max-w-[44rem] flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-surface px-6 py-5">
        <div className="max-w-md">
          <h2 className="text-h3 font-semibold">Count your hours</h2>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
            immersionlog tracks every hour of anime, manga, visual novels, books, YouTube and podcasts, and shows how far
            you&apos;ve come. Free.
          </p>
        </div>
        {session ? (
          <Button render={<Link href="/log/new" />} nativeButton={false}>
            Log today&apos;s immersion
          </Button>
        ) : (
          <Button render={<Link href="/signup" />} nativeButton={false}>
            Start your log
          </Button>
        )}
      </section>
    </article>
  );
}
