import { notFound } from "next/navigation";
import { CONTRAST_GROUPS, getContrastGroup } from "@/lib/grammar/contrasts";
import { getPoint, pointPath } from "@/lib/grammar/decks";
import { shuffled } from "@/lib/grammar-queries";
import { getGrammarSettings } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { ContrastSession } from "@/components/grammar/contrast-session";

export function generateStaticParams() {
  return CONTRAST_GROUPS.map((g) => ({ id: g.id }));
}

export const metadata = { title: "Grammar contrast" };

export default async function ContrastPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const group = getContrastGroup(id);
  if (!group) notFound();
  const user = await requireUser();
  const settings = await getGrammarSettings(user.id);

  const items = shuffled(group.questions).map((q, i) => ({
    id: `${group.id}-${i}`,
    japanese: q.japanese,
    reading: q.reading,
    english: q.english,
    choices: shuffled(q.choices),
    answer: q.choices[0],
    why: q.why,
  }));
  const points = group.points.map((p) => {
    const point = getPoint(p.pointId)!;
    return { title: point.title, gist: p.gist, href: pointPath(point) };
  });

  return <ContrastSession key={items.map((i) => i.choices.join()).join("|")} title={group.title} blurb={group.blurb} points={points} items={items} showFurigana={settings.showFurigana} />;
}
