"use client";

import Link from "next/link";
import { useState } from "react";
import type { Kanji } from "@/lib/kanji/readings";
import { Button } from "@/components/ui/button";
import { KanjiQuiz } from "./kanji-quiz";

/** Due kanji, oldest first. Each one is graded on the server as it's answered. */
export function KanjiReviewSession({ kanji, moreDue }: { kanji: Kanji[]; moreDue: boolean }) {
  const [done, setDone] = useState<{ cards: number; firstTryRight: number } | null>(null);

  if (!done) return <KanjiQuiz kanji={kanji} submit onDone={setDone} />;
  const pct = Math.round((done.firstTryRight / Math.max(1, done.cards)) * 100);
  return (
    <div className="mx-auto grid max-w-md gap-4 py-8 text-center">
      <p className="text-h2 font-semibold">Session done</p>
      <p className="text-sm text-muted-foreground">
        {done.firstTryRight} of {done.cards} right first time ({pct}%).
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Button nativeButton={false} render={<Link href="/kanji" />}>
          Back to Kanji
        </Button>
        {moreDue && (
          <Button variant="outline" nativeButton={false} render={<Link href="/kanji/review" prefetch={false} />}>
            More reviews
          </Button>
        )}
      </div>
    </div>
  );
}
