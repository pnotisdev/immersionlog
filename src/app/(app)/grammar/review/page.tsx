import Link from "next/link";
import { formatDueIn } from "@/lib/format";
import { getGrammarOverview, getReviewQueue } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { GrammarExplanation } from "@/components/grammar/explanation";
import { ReviewSession } from "@/components/grammar/review-session";

export const metadata = { title: "Grammar reviews" };

export default async function ReviewPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const now = new Date();
  const overview = await getGrammarOverview(user.id, tz, now);
  const { cards, dueTotal } = await getReviewQueue(user.id, overview.settings.reviewBatchSize, now);

  if (cards.length === 0) {
    return (
      <EmptyState
        title={overview.nextDueAt ? `Nothing due. The next review comes up ${formatDueIn(overview.nextDueAt, now)}.` : "Nothing to review yet."}
        action={
          <Link href={overview.newAvailable > 0 ? "/grammar/learn" : "/grammar"} className="text-meta text-primary hover:underline">
            {overview.newAvailable > 0 ? "Learn new points" : "Back to Grammar"}
          </Link>
        }
      />
    );
  }

  return (
    <ReviewSession
      // A fresh queue remounts the session instead of reusing a finished one's state.
      key={now.getTime()}
      cards={cards}
      dueTotal={dueTotal}
      upcoming={overview.nextDueAt?.toISOString() ?? null}
      settings={overview.settings}
      tz={tz}
      explanations={Object.fromEntries(cards.map((c) => [c.pointId, <GrammarExplanation key={c.pointId} markdown={c.explanation} />]))}
    />
  );
}
