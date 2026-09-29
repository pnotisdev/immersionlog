import { sentenceTokens } from "@/lib/grammar/sentence";
import type { GrammarSentence } from "@/lib/grammar/types";
import { cn } from "@/lib/utils";

/**
 * A grammar sentence with furigana over its kanji. No "use client": point pages render
 * it on the server, the review and lesson sessions in the browser.
 *
 * `blank` decides what happens to the tested part: "hide" shows an empty slot (a fixed
 * width, so its size doesn't give the answer's length away), "reveal" highlights it,
 * "plain" leaves it as ordinary text.
 */
export function SentenceText({
  sentence,
  furigana = true,
  blank = "reveal",
  className,
}: {
  sentence: Pick<GrammarSentence, "japanese" | "reading">;
  furigana?: boolean;
  blank?: "hide" | "reveal" | "plain";
  className?: string;
}) {
  const tokens = sentenceTokens(sentence.japanese, sentence.reading);
  const firstBlank = tokens.findIndex((t) => t.blank);

  return (
    <span lang="ja" className={cn("leading-[2.1]", className)}>
      {tokens.map((t, i) => {
        if (t.blank && blank === "hide") {
          return i === firstBlank ? (
            <span
              key={i}
              aria-label="blank"
              className="mx-1 inline-block w-[3.5em] translate-y-[0.15em] border-b-2 border-primary align-baseline"
            >
              &nbsp;
            </span>
          ) : null;
        }
        const text =
          t.ruby && furigana ? (
            // Centred, so a reading wider than its kanji (先週, せんしゅう) doesn't pull the kanji apart.
            <ruby className="[ruby-align:center]">
              {t.text}
              <rt className="text-[0.5em] font-normal text-muted-foreground">{t.ruby}</rt>
            </ruby>
          ) : (
            t.text
          );
        return t.blank && blank === "reveal" ? (
          <span key={i} className="font-semibold text-primary">
            {text}
          </span>
        ) : (
          <span key={i}>{text}</span>
        );
      })}
    </span>
  );
}
