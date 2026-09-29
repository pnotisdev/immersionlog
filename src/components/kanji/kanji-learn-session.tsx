"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { unlockKanji } from "@/actions/kanji";
import { displayReading, type Kanji } from "@/lib/kanji/readings";
import { Button } from "@/components/ui/button";
import { KanjiQuiz } from "./kanji-quiz";

/** A lesson per kanji (meaning, on'yomi and kun'yomi, each labelled), then a quick quiz on the batch, then it joins your reviews. */
export function KanjiLearnSession({ kanji, moreAfter, moreHref }: { kanji: Kanji[]; moreAfter: boolean; moreHref: string }) {
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<"lesson" | "quiz" | "done">("lesson");
  const [added, setAdded] = useState(0);

  async function finish() {
    const r = await unlockKanji(kanji.map((k) => k.c));
    if (!r.ok) toast.error(r.error);
    else setAdded(r.data.unlocked.length);
    setStage("done");
  }

  if (stage === "quiz") return <KanjiQuiz kanji={kanji} submit={false} onDone={finish} />;

  if (stage === "done") {
    return (
      <div className="mx-auto grid max-w-md gap-4 py-8 text-center">
        <p className="text-h2 font-semibold">{added === 0 ? "Already in your reviews" : `${added} new kanji learned`}</p>
        <p className="text-sm text-muted-foreground">The first review comes round in about four hours, then the gaps grow as they stick.</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button nativeButton={false} render={<Link href="/kanji" />}>
            Back to Kanji
          </Button>
          {moreAfter && (
            <Button variant="outline" nativeButton={false} render={<Link href={moreHref} prefetch={false} />}>
              Learn more
            </Button>
          )}
        </div>
      </div>
    );
  }

  const k = kanji[step];
  const last = step === kanji.length - 1;
  return (
    <div className="mx-auto grid w-full max-w-md gap-6 py-4 text-center">
      <p className="text-meta text-dim tabular-nums">
        Lesson {step + 1} of {kanji.length}
      </p>
      <div lang="ja" className="text-[7rem] leading-none font-medium text-foreground sm:text-[8rem]">
        {k.c}
      </div>
      <dl className="grid gap-2 text-left">
        <Row label="Meaning" value={k.m.join(", ")} />
        {k.on.length > 0 && <Row label="On'yomi" hint="Chinese-derived, in compounds" value={k.on.map(displayReading).join("、 ")} ja />}
        {k.kun.length > 0 && <Row label="Kun'yomi" hint="native, often alone" value={k.kun.map(displayReading).join("、 ")} ja />}
      </dl>
      <p className="text-micro text-dim">
        {k.s} strokes
        {k.n ? ` · JLPT N${k.n}` : ""}
      </p>
      <div className="flex justify-center gap-2">
        {step > 0 && (
          <Button variant="outline" size="lg" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        <Button size="lg" onClick={() => (last ? setStage("quiz") : setStep(step + 1))}>
          {last ? "Start quiz" : "Next"}
        </Button>
      </div>
    </div>
  );
}

function Row({ label, hint, value, ja }: { label: string; hint?: string; value: string; ja?: boolean }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] items-baseline gap-3 rounded-md border border-border bg-surface px-3 py-2">
      <dt>
        <span className="section-label">{label}</span>
        {hint && <span className="block text-micro font-normal text-dim normal-case">{hint}</span>}
      </dt>
      <dd lang={ja ? "ja" : "en"} className="text-base font-medium text-foreground">
        {value}
      </dd>
    </div>
  );
}
