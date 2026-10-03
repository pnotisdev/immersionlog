import Link from "next/link";
import { CONTRAST_GROUPS } from "@/lib/grammar/contrasts";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Grammar contrasts" };

export default function ContrastIndexPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Contrasts"
        description="Grammar that gets mixed up, practised side by side. Pick the one that fits the sentence."
        actions={
          <Button variant="outline" nativeButton={false} render={<Link href="/grammar" />}>
            Back to Grammar
          </Button>
        }
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {CONTRAST_GROUPS.map((g) => (
          <li key={g.id}>
            <Link href={`/grammar/contrast/${g.id}`} prefetch={false} className="grid h-full gap-1 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary">
              <span lang="ja" className="text-lg font-semibold">
                {g.title}
              </span>
              <span className="text-sm text-muted-foreground">{g.blurb}</span>
              <span className="mt-1 text-micro text-dim">{g.questions.length} sentences</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
