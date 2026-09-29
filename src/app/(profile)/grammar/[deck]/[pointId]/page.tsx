import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatDueIn } from "@/lib/format";
import { deckPath, getDeck, getPoint, pointPath } from "@/lib/grammar/decks";
import type { GrammarPoint } from "@/lib/grammar/types";
import { getPointProgress } from "@/lib/grammar-queries";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { GrammarExplanation } from "@/components/grammar/explanation";
import { FuriganaToggle } from "@/components/grammar/furigana-toggle";
import { PointControls } from "@/components/grammar/point-controls";
import { SentenceText } from "@/components/grammar/sentence-text";

type Props = PageProps<"/grammar/[deck]/[pointId]">;

async function resolve(props: Props): Promise<GrammarPoint | null> {
  const { deck, pointId } = await props.params;
  const point = getPoint(pointId);
  return point && point.deck === deck ? point : null;
}

/** The explanation's first paragraph as plain text, for search snippets. */
function summary(point: GrammarPoint): string {
  const first = point.explanation.split(/\n\s*\n/)[0].replace(/\*\*|`/g, "");
  return first.length > 155 ? `${first.slice(0, 152).trimEnd()}…` : first;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const point = await resolve(props);
  if (!point) return {};
  const deck = getDeck(point.deck)!;
  const title = `${point.title}: ${point.meaning} (JLPT ${deck.level} grammar)`;
  const description = `${point.structure}. ${summary(point)}`;
  const path = pointPath(point);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · immersionlog`, description, url: path },
  };
}

/**
 * One grammar point: explanation, every example sentence, related points. Public and
 * indexable; signed-in readers also get their stage and the add/reset control.
 */
export default async function PointPage(props: Props) {
  const point = await resolve(props);
  if (!point) notFound();
  const deck = getDeck(point.deck)!;
  const session = await getSession();
  const row = session ? await getPointProgress(session.user.id, point.id) : undefined;
  const now = new Date();

  const prev = deck.points[point.order - 2];
  const next = deck.points[point.order];
  const related = point.related.map(getPoint).filter((p): p is GrammarPoint => !!p);
  const path = pointPath(point);

  return (
    <article className="mx-auto grid max-w-3xl gap-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: `${point.title}: ${point.meaning}`,
            description: summary(point),
            url: absoluteUrl(path),
            learningResourceType: "Grammar explanation",
            educationalLevel: `JLPT ${deck.level}`,
            inLanguage: ["en", "ja"],
            isAccessibleForFree: true,
            isPartOf: { "@type": "ItemList", name: `JLPT ${deck.level} grammar list`, url: absoluteUrl(deckPath(deck)) },
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: `JLPT ${deck.level} grammar`, path: deckPath(deck) },
            { name: point.title, path },
          ]),
        ]}
      />

      <nav className="text-meta text-dim">
        <Link href={deckPath(deck)} className="hover:text-foreground">
          JLPT {deck.level} grammar
        </Link>{" "}
        · {point.order} of {deck.points.length}
      </nav>

      <header className="grid gap-2">
        <h1 lang="ja" className="text-4xl font-semibold sm:text-5xl">
          {point.title}
        </h1>
        <p className="text-lg text-muted-foreground">{point.meaning}</p>
        <p lang="ja" className="mt-1 w-fit rounded-sm border border-border bg-surface px-2.5 py-1 text-sm">
          {point.structure}
        </p>
        <div className="mt-2">
          {session ? (
            <PointControls
              pointId={point.id}
              progress={
                row
                  ? { stage: row.stage, due: row.nextReviewAt ? `next review ${formatDueIn(row.nextReviewAt, now)}` : "burned: no more reviews" }
                  : null
              }
            />
          ) : (
            <p className="text-sm text-muted-foreground">
              <Link href="/signup" className="text-primary hover:underline">
                Sign up free
              </Link>{" "}
              to review this point on a spaced schedule.
            </p>
          )}
        </div>
      </header>

      <GrammarExplanation markdown={point.explanation} className="max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground" />
      {point.register && (
        <p className="max-w-prose border-l-2 border-primary/60 pl-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Register: </span>
          {point.register}
        </p>
      )}

      <section>
        <h2 className="text-h2 font-semibold">Examples</h2>
        <FuriganaToggle className="mt-2">
          <ul className="grid gap-3">
            {point.sentences.map((s) => (
              <li key={s.id} className="rounded-lg border bg-surface px-4 py-3">
                <p className="text-xl">
                  <SentenceText sentence={s} />
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.english}</p>
              </li>
            ))}
          </ul>
        </FuriganaToggle>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="text-h2 font-semibold">Related</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={pointPath(r)} className="inline-flex items-baseline gap-2 rounded-sm border px-3 py-1.5 text-sm hover:border-primary/50">
                  <span lang="ja" className="font-medium">
                    {r.title}
                  </span>
                  <span className="text-muted-foreground">{r.meaning}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-sm">
        {prev ? (
          <Link href={pointPath(prev)} className="group flex items-center gap-2">
            <ArrowLeft className="size-4 text-dim" />
            <span lang="ja" className="group-hover:text-primary">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={pointPath(next)} className="group flex items-center gap-2">
            <span lang="ja" className="group-hover:text-primary">
              {next.title}
            </span>
            <ArrowRight className="size-4 text-dim" />
          </Link>
        )}
      </nav>
    </article>
  );
}
