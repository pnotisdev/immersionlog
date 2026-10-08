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
        <h1 className="text-[2rem] leading-10 font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[3rem]">{TITLE}</h1>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{DESCRIPTION}</p>
      </header>

      <div className="mt-8 grid max-w-[44rem] gap-4 text-[1.0625rem] leading-[1.75]">
        <h2 className="text-[1.375rem] font-semibold">How this course works</h2>
        <p>
          Japanese grammar looks hostile because the order is backwards and the little words are everywhere. It is much more regular
          than it looks. This course teaches it as a <strong>small number of ideas</strong> that keep coming back, rather than a
          long list of unrelated rules.
        </p>
        <ul className="grid list-disc gap-2 pl-6 marker:text-dim">
          <li>
            <strong>Japanese on its own terms.</strong> Example sentences are glossed piece by piece, so you see what the Japanese
            actually says before you see the polished English.
          </li>
          <li>
            <strong>One idea at a time, in order.</strong> Nothing is used before it is explained. If you finish a lesson, you can
            read the next.
          </li>
          <li>
            <strong>Built for reading.</strong> The last parts are about the grammar of novels, manga, and subtitles: long sentences,
            dropped subjects, quoted speech and the narrator&apos;s voice.
          </li>
          <li>
            <strong>Understand, then absorb.</strong> You will not memorise this course in one pass, and you are not meant to. Read a
            lesson, then go and meet its patterns in real Japanese. Come back when something puzzles you.
          </li>
        </ul>
        <p>
          You should know hiragana and katakana before you start (the <Link className="text-primary underline underline-offset-3" href="/guide/kana">kana chapter</Link>{" "}
          will get you there in days) and be learning vocabulary alongside, since a grammar course cannot teach you enough words.
          Start with lesson 1 and go in order.
        </p>
      </div>

      <div className="mt-10 grid max-w-[44rem] gap-10">
        {PARTS.map((part) => (
          <section key={part.id} aria-labelledby={part.id}>
            <h2 id={part.id} className="text-[1.375rem] font-semibold">
              {part.title}
            </h2>
            <p className="mt-1 text-muted-foreground">{part.blurb}</p>
            <ol className="mt-4 grid gap-2">
              {part.lessons.map((l) => {
                n++;
                const minutes = parseLesson(l).minutes;
                return (
                  <li key={l.slug}>
                    <Link
                      href={lessonPath(l)}
                      className="group flex gap-4 rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/30"
                    >
                      <span className="w-6 shrink-0 pt-0.5 text-right tabular-nums text-dim">{n}</span>
                      <span className="min-w-0">
                        <span className="block font-medium group-hover:underline">{l.title}</span>
                        <span className="mt-0.5 block text-[0.9375rem] leading-snug text-muted-foreground">{l.description}</span>
                        <span className="mt-1 block text-meta text-dim">{minutes} min read</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <section className="mt-12 max-w-[44rem] rounded-lg border border-border bg-surface px-6 py-5">
        <h2 className="text-h3 font-semibold">Practice what you learn</h2>
        <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
          The <Link className="text-primary underline underline-offset-3" href="/grammar/n5">JLPT grammar lists</Link> have a short
          drill for hundreds of patterns, and the <Link className="text-primary underline underline-offset-3" href="/tools/conjugation">conjugation drill</Link> trains
          verb and adjective forms until they are automatic. Then go and read: the course is only the map.
        </p>
      </section>
    </article>
  );
}
