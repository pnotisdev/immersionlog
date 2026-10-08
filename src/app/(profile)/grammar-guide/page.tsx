import type { Metadata } from "next";
import Link from "next/link";
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
  let n = 0;
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

      <div className="mt-10 grid max-w-[44rem] gap-10">
        {PARTS.map((part) => (
          <section key={part.id} aria-labelledby={part.id}>
            <h2 id={part.id} className="text-[1.25rem] font-semibold sm:text-[1.375rem]">
              {part.title}
            </h2>
            <p className="mt-1 text-[0.9375rem] text-muted-foreground">{part.blurb}</p>
            <ol className="mt-3 grid">
              {part.lessons.map((l) => {
                n++;
                const minutes = parseLesson(l).minutes;
                return (
                  <li key={l.slug}>
                    <Link
                      href={lessonPath(l)}
                      className="group flex items-baseline gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted sm:px-3"
                    >
                      <span className="w-6 shrink-0 text-right text-meta text-dim tabular-nums">{n}</span>
                      <span className="min-w-0 grow">
                        <span className="block font-medium group-hover:underline">{l.title}</span>
                        <span className="mt-0.5 hidden text-[0.875rem] leading-snug text-muted-foreground sm:line-clamp-1 sm:block">
                          {l.description}
                        </span>
                      </span>
                      <span className="shrink-0 text-meta text-dim tabular-nums">{minutes} min</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

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
