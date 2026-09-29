import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DECKS, deckPath, getDeck, getPoint, pointPath } from "@/lib/grammar/decks";
import { stageGroup, stageLabel } from "@/lib/grammar/srs";
import { getGrammarProgress } from "@/lib/grammar-queries";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { STAGE_COLOR } from "@/components/grammar/stage-bar";

function deckTitle(level: string) {
  return `JLPT ${level} grammar list`;
}

export async function generateMetadata(props: PageProps<"/grammar/[deck]">): Promise<Metadata> {
  const deck = getDeck((await props.params).deck);
  if (!deck) return {};
  const title = deckTitle(deck.level);
  const description = `All ${deck.points.length} ${deck.level} grammar points in learning order, each with a plain-English explanation and example sentences with furigana. ${deck.description}`;
  const path = deckPath(deck);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · immersionlog`, description, url: path },
  };
}

/**
 * A deck's table of contents. Public, so the explanations are findable and shareable;
 * a signed-in reader also sees where each point is in their own schedule.
 */
export default async function DeckPage(props: PageProps<"/grammar/[deck]">) {
  const deck = getDeck((await props.params).deck);
  if (!deck) notFound();
  const session = await getSession();
  const progress = session ? new Map((await getGrammarProgress(session.user.id)).map((r) => [r.pointId, r.stage])) : null;
  const learned = progress ? deck.points.filter((p) => progress.has(p.id)).length : 0;
  const title = deckTitle(deck.level);
  const path = deckPath(deck);

  return (
    <div className="mx-auto grid max-w-3xl gap-10">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: title,
            numberOfItems: deck.points.length,
            itemListElement: deck.points.map((p) => ({
              "@type": "ListItem",
              position: p.order,
              name: `${p.title}: ${p.meaning}`,
              url: absoluteUrl(pointPath(p)),
            })),
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <header>
        <p className="section-label">Grammar</p>
        <h1 className="mt-1 text-2xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {deck.points.length} points in the order a beginner meets them. {deck.description} Every explanation and example
          is written for immersionlog.
        </p>
        <p className="mt-3 text-sm">
          {session ? (
            <>
              <span className="text-muted-foreground">
                {learned} of {deck.points.length} in your reviews.{" "}
              </span>
              <Link href="/grammar" className="text-primary hover:underline">
                Go to your grammar reviews
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup" className="text-primary hover:underline">
                Create a free account
              </Link>{" "}
              <span className="text-muted-foreground">to learn these a few a day and review them on a spaced schedule.</span>
            </>
          )}
        </p>
      </header>

      {deck.sections.map((section) => (
        <section key={section.title} className="grid gap-3">
          <h2 className="text-h2 font-semibold">{section.title}</h2>
          <ol className="grid border-t border-border">
            {section.pointIds.map((id) => {
              const p = getPoint(id)!;
              const stage = progress?.get(p.id);
              return (
                <li key={p.id} className="border-b border-border">
                  <Link href={pointPath(p)} className="group flex items-baseline gap-4 py-3">
                    <span className="w-7 shrink-0 text-right text-meta text-dim tabular-nums">{p.order}</span>
                    <span className="min-w-0 flex-1">
                      <span lang="ja" className="font-medium group-hover:text-primary">
                        {p.title}
                      </span>
                      <span className="ml-3 text-sm text-muted-foreground">{p.meaning}</span>
                    </span>
                    {stage !== undefined && (
                      <span className="flex shrink-0 items-center gap-1.5 text-micro text-dim">
                        <span className="size-2 rounded-full" style={{ background: STAGE_COLOR[stageGroup(stage).id] }} aria-hidden />
                        {stageLabel(stage)}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      {DECKS.length > 1 && (
        <nav className="flex flex-wrap gap-3 text-sm">
          {DECKS.filter((d) => d.id !== deck.id).map((d) => (
            <Link key={d.id} href={deckPath(d)} className="text-primary hover:underline">
              {deckTitle(d.level)}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
