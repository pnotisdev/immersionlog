import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { adjacentLessons, getLesson, GUIDE_UPDATED, LESSONS, lessonPath, parseLesson, partOf } from "@/lib/grammar-guide";
import { pointPath, getPoint } from "@/lib/grammar/decks";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { FuriganaToggle } from "@/components/grammar/furigana-toggle";
import { LessonBody } from "@/components/grammar-guide/lesson-body";

type Props = PageProps<"/grammar-guide/[lesson]">;

export function generateStaticParams() {
  return LESSONS.map((l) => ({ lesson: l.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const lesson = getLesson((await props.params).lesson);
  if (!lesson) return {};
  const path = lessonPath(lesson);
  return {
    title: `${lesson.title} · Japanese grammar course`,
    description: lesson.description,
    alternates: { canonical: path },
    openGraph: { type: "article", title: `${lesson.title} · immersionlog`, description: lesson.description, url: path, modifiedTime: GUIDE_UPDATED },
  };
}

export default async function LessonPage(props: Props) {
  const lesson = getLesson((await props.params).lesson);
  if (!lesson) notFound();
  const { nodes, sections, minutes } = parseLesson(lesson);
  const { prev, next } = adjacentLessons(lesson.slug);
  const part = partOf(lesson.slug)!;
  const number = LESSONS.indexOf(lesson) + 1;
  const path = lessonPath(lesson);
  const points = (lesson.points ?? []).map(getPoint).filter((p) => !!p);

  return (
    <article className="min-w-0">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: lesson.title,
            description: lesson.description,
            url: absoluteUrl(path),
            learningResourceType: "Lesson",
            teaches: "Japanese grammar",
            inLanguage: ["en", "ja"],
            isAccessibleForFree: true,
            dateModified: GUIDE_UPDATED,
            isPartOf: { "@type": "Course", name: "Japanese grammar course", url: absoluteUrl("/grammar-guide") },
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Grammar course", path: "/grammar-guide" },
            { name: lesson.title, path },
          ]),
        ]}
      />

      <header className="max-w-[44rem]">
        <p className="section-label mb-3">
          {part.title} · Lesson {number}
        </p>
        <h1 className="text-[2rem] leading-10 font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[3rem]">{lesson.title}</h1>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">{lesson.description}</p>
        <p className="mt-3 text-meta text-dim">About {minutes} minutes to read</p>
      </header>

      {sections.length > 2 && (
        <nav aria-label="In this lesson" className="mt-6 max-w-[44rem] rounded-lg border border-border bg-surface px-4 py-3 text-sm">
          <p className="mb-1 font-medium">In this lesson</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-foreground hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="mt-8 max-w-[44rem]">
        <FuriganaToggle>
          <LessonBody nodes={nodes} />
        </FuriganaToggle>

        {points.length > 0 && (
          <section className="mt-12 rounded-lg border border-border bg-surface px-5 py-4">
            <h2 className="text-h3 font-semibold">Drill these patterns</h2>
            <p className="mt-1 text-[0.9375rem] text-muted-foreground">Short example sentences for the points in this lesson:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {points.map((p) => (
                <li key={p!.id}>
                  <Link href={pointPath(p!)} lang="ja" className="inline-block rounded-full border border-border px-3 py-1 text-sm hover:border-foreground/40">
                    {p!.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav aria-label="Lessons" className="mt-12 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link href={lessonPath(prev)} className="group rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/30">
              <span className="flex items-center gap-1.5 text-meta text-dim">
                <ArrowLeft className="size-3.5" /> Previous
              </span>
              <span className="mt-1 block font-medium group-hover:underline">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={lessonPath(next)} className="group rounded-lg border border-border px-4 py-3 text-right transition-colors hover:border-foreground/30">
              <span className="flex items-center justify-end gap-1.5 text-meta text-dim">
                Next <ArrowRight className="size-3.5" />
              </span>
              <span className="mt-1 block font-medium group-hover:underline">{next.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
