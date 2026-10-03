import Link from "next/link";
import { getDeck } from "@/lib/grammar/decks";
import { getGrammarSettings, getPracticeQueue } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { GrammarExplanation } from "@/components/grammar/explanation";
import { ReviewSession } from "@/components/grammar/review-session";

export const metadata = { title: "Grammar practice" };

const PRACTICE_SIZE = 20;

export default async function PracticePage({ searchParams }: { searchParams: Promise<{ deck?: string }> }) {
  const { deck: deckParam } = await searchParams;
  const deck = deckParam ? getDeck(deckParam) : undefined;
  const user = await requireUser();
  const settings = await getGrammarSettings(user.id);
  const { cards, total } = await getPracticeQueue(user.id, deck ? { deck: deck.id } : "weak", PRACTICE_SIZE);

  if (cards.length === 0) {
    return (
      <EmptyState
        title={deck ? `Nothing learned in ${deck.level} yet.` : "No trouble spots. Nothing you've learned is being missed often."}
        action={
          <Link href="/grammar" className="text-meta text-primary hover:underline">
            Back to Grammar
          </Link>
        }
      />
    );
  }

  return (
    <ReviewSession
      key={cards.map((c) => c.sentence.id).join()}
      cards={cards}
      dueTotal={total}
      upcoming={null}
      settings={settings}
      tz={user.timezone ?? "UTC"}
      practice={{ label: deck ? `${deck.level} practice` : "Trouble spots", href: deck ? `/grammar/practice?deck=${deck.id}` : "/grammar/practice" }}
      explanations={Object.fromEntries(cards.map((c) => [c.pointId, <GrammarExplanation key={c.pointId} markdown={c.explanation} />]))}
    />
  );
}
