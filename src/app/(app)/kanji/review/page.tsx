import Link from "next/link";
import { formatDueIn } from "@/lib/format";
import { getDueKanji, getKanjiDueCount, getKanjiOverview } from "@/lib/kanji-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { KanjiReviewSession } from "@/components/kanji/kanji-review-session";

export const metadata = { title: "Kanji reviews" };

export default async function KanjiReviewPage() {
  const user = await requireUser();
  const now = new Date();
  const o = await getKanjiOverview(user.id, user.timezone ?? "UTC", now);
  const [kanji, dueTotal] = await Promise.all([getDueKanji(user.id, o.settings.reviewBatchSize, now), getKanjiDueCount(user.id, now)]);

  if (kanji.length === 0) {
    return (
      <EmptyState
        title={o.nextDueAt ? `Nothing due. The next review comes up ${formatDueIn(o.nextDueAt, now)}.` : "Nothing to review yet."}
        action={
          <Link href={o.newAvailable > 0 ? "/kanji/learn" : "/kanji"} className="text-meta text-primary hover:underline">
            {o.newAvailable > 0 ? "Learn new kanji" : "Back to Kanji"}
          </Link>
        }
      />
    );
  }

  // A fresh queue remounts the session instead of reusing a finished one's state.
  return <KanjiReviewSession key={now.getTime()} kanji={kanji} moreDue={dueTotal > kanji.length} />;
}
