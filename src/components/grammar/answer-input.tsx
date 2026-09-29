"use client";

import { useEffect, type Ref, type RefObject } from "react";
import { toHiragana } from "@/lib/romaji";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

/**
 * The answer box shared by lessons and reviews. Romaji turns into kana as it's typed
 * (the same small IME as the conjugation drill), and text from a real IME passes through
 * untouched while it's still composing.
 *
 * `shake` is a counter: each increment shakes the box once, for a near miss. The Web
 * Animations API restarts cleanly on every bump without remounting (and losing focus).
 */
export function AnswerInput({
  value,
  onChange,
  readOnly = false,
  state = "idle",
  shake = 0,
  inputRef,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  readOnly?: boolean;
  state?: "idle" | "correct" | "wrong";
  shake?: number;
  inputRef: RefObject<HTMLInputElement | null>;
  label: string;
}) {
  useEffect(() => {
    const el = inputRef.current;
    if (!shake || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-7px)" },
        { transform: "translateX(7px)" },
        { transform: "translateX(-4px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 360, easing: "ease-in-out" },
    );
  }, [shake, inputRef]);

  return (
    <Input
      ref={inputRef as Ref<HTMLInputElement>}
      lang="ja"
      value={value}
      readOnly={readOnly}
      onChange={(e) => {
        const composing = (e.nativeEvent as InputEvent).isComposing;
        onChange(composing ? e.target.value : toHiragana(e.target.value, { ime: true }));
      }}
      // On phones the keyboard takes the bottom half of the screen: once it's up, bring
      // the box to the middle of what's left.
      onFocus={(e) => {
        const el = e.currentTarget;
        window.setTimeout(() => el.scrollIntoView({ block: "center", behavior: "smooth" }), 300);
      }}
      aria-label={label}
      aria-invalid={state === "wrong"}
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
      enterKeyHint="send"
      placeholder="type in romaji or kana"
      className={cn(
        "h-12 text-center text-xl md:text-xl",
        state === "correct" && "border-success text-success",
        state === "wrong" && "text-destructive line-through",
      )}
    />
  );
}
