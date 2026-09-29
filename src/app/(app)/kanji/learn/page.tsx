import Link from "next/link";
import { getGroup } from "@/lib/kanji";
import { countKanjiUnlockedToday, getKanjiProgress, getKanjiSettings, nextNewKanji } from "@/lib/kanji-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { KanjiLearnSession } from "@/components/kanji/kanji-learn-session";

export const metadata = { title: "Learn kanji" };

// Lessons per sitting. A higher daily limit is spread over several sittings rather than one long one.
const BATCH = 5;

export default async function KanjiLearnPage({ searchParams }: { searchParams: Promise<{ group?: string }> }) {
  const { group: groupParam } = await searchParams;
  const group = groupParam ? getGroup(groupParam) : undefined;
  const user = await requireUser();
  const [settings, progress, today] = await Promise.all([
    getKanjiSettings(user.id),
    getKanjiProgress(user.id),
    countKanjiUnlockedToday(user.id, user.timezone ?? "UTC"),
  ]);
  const room = Math.max(0, settings.dailyNewLimit - today);
  const upcoming = nextNewKanji(new Set(progress.map((p) => p.kanji)), room, group?.id);
  const kanji = upcoming.slice(0, BATCH);

  if (kanji.length === 0) {
    return (
      <EmptyState
        title={
          room > 0
            ? group
              ? `You've learned every ${group.title.toLowerCase()} kanji. Reviews keep them fresh.`
              : "You've learned every jōyō kanji. Reviews keep them fresh."
            : `That's today's ${settings.dailyNewLimit} new kanji. More tomorrow, or raise the limit in Kanji settings.`
        }
        action={
          <Link href="/kanji" className="text-meta text-primary hover:underline">
            Back to Kanji
          </Link>
        }
      />
    );
  }

  return (
    <KanjiLearnSession
      key={kanji.map((k) => k.c).join()}
      kanji={kanji}
      moreAfter={upcoming.length > kanji.length}
      moreHref={group ? `/kanji/learn?group=${group.id}` : "/kanji/learn"}
    />
  );
}
