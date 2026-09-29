import Link from "next/link";
import { getGrammarSettings, getGrammarProgress, countUnlockedToday, nextNewPoints } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { GrammarExplanation } from "@/components/grammar/explanation";
import { LearnSession } from "@/components/grammar/learn-session";

export const metadata = { title: "Learn grammar" };

// Lessons per sitting. A higher daily limit is spread over several sittings rather than one long one.
const BATCH = 5;

export default async function LearnPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const [settings, progress, today] = await Promise.all([
    getGrammarSettings(user.id),
    getGrammarProgress(user.id),
    countUnlockedToday(user.id, tz),
  ]);
  const room = Math.max(0, settings.dailyNewLimit - today);
  const upcoming = nextNewPoints(new Set(progress.map((p) => p.pointId)), room);
  const points = upcoming.slice(0, BATCH);

  if (points.length === 0) {
    return (
      <EmptyState
        title={
          room > 0
            ? "You've learned every point there is. Reviews keep them fresh."
            : `That's today's ${settings.dailyNewLimit} new point${settings.dailyNewLimit === 1 ? "" : "s"}. More tomorrow, or raise the limit in Grammar settings.`
        }
        action={
          <Link href="/grammar" className="text-meta text-primary hover:underline">
            Back to Grammar
          </Link>
        }
      />
    );
  }

  return (
    <LearnSession
      // Keyed on the batch, so "Learn more" mounts a fresh session rather than reusing the finished one.
      key={points.map((p) => p.id).join()}
      lessons={points.map((point) => ({ point, explanation: <GrammarExplanation markdown={point.explanation} /> }))}
      showFurigana={settings.showFurigana}
      moreAfter={upcoming.length > points.length}
    />
  );
}
