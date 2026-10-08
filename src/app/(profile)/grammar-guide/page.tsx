import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GUIDE_UPDATED, LESSONS, lessonPath, parseLesson, PARTS } from "@/lib/grammar-guide";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";

const TITLE = "Japanese grammar course: from zero to reading real books";
const DESCRIPTION =
  "A free, step-by-step Japanese grammar course in plain English. Every lesson builds on the last, with glossed example sentences, the traps that catch learners, and a focus on reading and understanding real Japanese.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/grammar-guide" },
  openGraph: { type: "website", title: `${TITLE} · immersionlog`, description: DESCRIPTION, url: "/grammar-guide" },
};

export default function GrammarGuideIndex() {
  return (
    <article className="min-w-0">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Japanese grammar course",
            description: DESCRIPTION,
            url: absoluteUrl("/grammar-guide"),
            inLanguage: "en",
            isAccessibleForFree: true,
            dateModified: GUIDE_UPDATED,
            provider: { "@type": "Organization", name: "immersionlog", url: absoluteUrl("/") },
            hasPart: LESSONS.map((l) => ({ "@type": "LearningResource", name: l.title, url: absoluteUrl(lessonPath(l)) })),
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Grammar course", path: "/grammar-guide" },
          ]),
        ]}
      />
      <header className="max-w-[44rem]">
        <p className="section-label mb-3">Grammar course</p>
        <h1 className="text-[1.75rem] leading-9 font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[3rem]">{TITLE}</h1>
      </header>

      <div className="mt-6 grid max-w-[44rem] gap-4 text-[1.0625rem] leading-[1.75] sm:mt-8">
        <p>
          Japanese grammar looks hostile because the order is backwards and the little words are everywhere. It is much more regular
          than it looks. This course teaches it as <strong>a small number of ideas</strong> that keep coming back, with every example
          glossed piece by piece and every lesson ending in longer passages you parse step by step.
        </p>
        <p className="text-[0.9375rem] text-muted-foreground">
          Start with lesson 1 and go in order. You should know hiragana and katakana first (the{" "}
          <Link className="text-primary underline underline-offset-3" href="/guide/kana">
            kana chapter
          </Link>{" "}
          gets you there in days) and be learning vocabulary alongside. You will not memorise a lesson in one pass, and you are not
          meant to: read it, go and meet the pattern in real Japanese, and come back when something puzzles you.
        </p>
      </div>

      <div className="mt-8 max-w-[44rem]">
        <Link
          href={lessonPath(LESSONS[0])}
          className="inline-flex h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-hover"
        >
          Start with lesson 1
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      <ol className="mt-10 grid max-w-[44rem] gap-3">
        {PARTS.map((part) => {
          const minutes = part.lessons.reduce((sum, l) => sum + parseLesson(l).minutes, 0);
          const [label, title] = part.title.split(" · ");
          const first = part.lessons[0];
          return (
            <li key={part.id}>
              <Link
                href={lessonPath(first)}
                className="group grid gap-1 rounded-lg border border-border px-4 py-3.5 transition-colors hover:border-foreground/30 sm:px-5"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-medium group-hover:underline">
                    <span className="mr-2 text-meta text-dim">{label}</span>
                    {title ?? part.title}
                  </span>
                  <span className="shrink-0 text-meta text-dim tabular-nums">
                    {part.lessons.length} lessons · {Math.round(minutes / 60 * 10) / 10} h
                  </span>
                </span>
                <span className="text-[0.9375rem] leading-snug text-muted-foreground">{part.blurb}</span>
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="mt-10 max-w-[44rem] text-[0.9375rem] leading-relaxed text-muted-foreground">
        To practise as you go, the{" "}
        <Link className="text-primary underline underline-offset-3" href="/grammar/n5">
          JLPT grammar lists
        </Link>{" "}
        have a short drill for hundreds of patterns, and the{" "}
        <Link className="text-primary underline underline-offset-3" href="/tools/conjugation">
          conjugation drill
        </Link>{" "}
        trains verb and adjective forms until they are automatic.
      </p>
    </article>
  );
}
