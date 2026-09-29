import Link from "next/link";
import { TOOLS } from "@/lib/tools";

/** The other practice tools, at the foot of each tool page. */
export function MoreTools({ current }: { current: string }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-h2 font-semibold">More practice</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {TOOLS.filter((t) => t.href !== current).map((t) => (
          <Link key={t.href} href={t.href} className="group rounded-lg border p-4 transition-colors hover:border-primary/50">
            <div className="font-medium group-hover:text-primary">{t.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
          </Link>
        ))}
      </div>
      <Link href="/tools" className="text-sm text-primary hover:underline">
        All tools
      </Link>
    </section>
  );
}
