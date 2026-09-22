"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven motion for the landing page. The page itself stays a Server Component
 * and only marks elements with data attributes; this drives them.
 *
 * Three rules this is built around, each of them a bug that actually happened here:
 *
 * 1. Nothing a visitor can already see is ever hidden by this file. Start states are
 *    applied here rather than in CSS, and only to elements below the fold when it runs.
 *    Hiding things in CSS and waiting for JS to reveal them left the hero blank for
 *    however long hydration took, which in a production build was seconds. The hero
 *    animates in CSS instead (see globals.css) and never waits for this.
 * 2. Anything hidden must have a way back even if its trigger never fires. Jumping
 *    straight past a section — an anchor link in the header, a reload that restores the
 *    scroll position — skips onEnter entirely and used to leave whole blocks invisible
 *    for good. Hence `settle`, which runs after every refresh and shows anything already
 *    above the trigger line that is still sitting at its start state.
 * 3. Nothing it animates lives inside a streaming Suspense boundary. Inline styles
 *    written here before that boundary resolves come back as a hydration mismatch.
 *
 * The motion itself is deliberately small: band rules get ruled in from the left, blocks
 * rise 14px into place, and the footer logo's heatmap fills one cell at a time. Nothing
 * scales, blurs or parallaxes, and nothing travels far enough to be the reason you
 * noticed it.
 */

const EASE = "power2.out";
const START = "top 90%";

/** The viewport line that `START` refers to, in px from the top. */
const triggerLine = () => window.innerHeight * 0.9;

/** Only animate what is comfortably off screen; anything else is left exactly as it rendered. */
function belowTheFold(selector: string): HTMLElement[] {
  const line = triggerLine();
  return gsap.utils.toArray<HTMLElement>(selector).filter((el) => el.getBoundingClientRect().top > line);
}

export function LandingMotion() {
  useEffect(() => {
    /** Elements that have been hidden, and how to put each group back. */
    const pending: { els: Element[]; show: (els: Element[]) => void }[] = [];
    /** Anything already revealed, so the safety net never re-animates it. */
    const shown = new WeakSet<Element>();
    const reveal = (els: Element[], show: (els: Element[]) => void) => {
      const todo = els.filter((el) => !shown.has(el));
      if (todo.length === 0) return;
      for (const el of todo) shown.add(el);
      show(todo);
    };
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const blocks = belowTheFold("[data-reveal]");
        const showBlocks = (els: Element[]) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: EASE, overwrite: true });
        gsap.set(blocks, { opacity: 0, y: 14 });
        pending.push({ els: blocks, show: showBlocks });
        const enterBlocks = (els: Element[]) => reveal(els, showBlocks);
        ScrollTrigger.batch(blocks, { start: START, onEnter: enterBlocks, onEnterBack: enterBlocks });

        const rules = belowTheFold("[data-rule]");
        const showRules = (els: Element[]) => gsap.to(els, { scaleX: 1, duration: 0.9, ease: "power2.inOut" });
        gsap.set(rules, { scaleX: 0 });
        pending.push({ els: rules, show: showRules });
        for (const rule of rules) {
          ScrollTrigger.create({
            trigger: rule,
            start: START,
            onEnter: () => reveal([rule], showRules),
            onEnterBack: () => reveal([rule], showRules),
          });
        }

        // The footer lockup's heatmap fills in one cell at a time along the diagonal,
        // which is what the mark depicts. The one flourish on the page, at the very end
        // of it.
        const cells = belowTheFold("footer [data-mark-cell]");
        const showCells = (els: Element[]) =>
          gsap.to(els, { opacity: 1, duration: 0.4, stagger: { each: 0.03, from: "start" } });
        gsap.set(cells, { opacity: 0 });
        pending.push({ els: cells, show: showCells });
        if (cells.length > 0) {
          ScrollTrigger.create({
            trigger: "footer",
            start: "top 80%",
            onEnter: () => reveal(cells, showCells),
            onEnterBack: () => reveal(cells, showCells),
          });
        }
      });
    });

    /**
     * Reveal anything the triggers cannot: an element whose start line is already behind
     * the viewport never gets an onEnter, so without this a jump past it would leave it
     * hidden permanently.
     */
    const settle = () => {
      const line = triggerLine();
      for (const group of pending) {
        reveal(
          group.els.filter((el) => !shown.has(el) && el.getBoundingClientRect().top < line),
          group.show,
        );
      }
    };

    // The cover-art wall streams in after hydration and changes the page height, which
    // moves every trigger below it. Re-measure, then settle, once everything is in.
    const refresh = () => {
      ScrollTrigger.refresh();
      settle();
    };
    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh);
    ScrollTrigger.addEventListener("refresh", settle);
    // Also on plain scroll: a programmatic jump moves the page without ScrollTrigger
    // ever seeing an element cross its start, and `reveal` makes this idempotent, so the
    // cost of running it is one getBoundingClientRect per element still hidden.
    window.addEventListener("scroll", settle, { passive: true });

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("scroll", settle);
      ScrollTrigger.removeEventListener("refresh", settle);
      ctx.revert();
    };
  }, []);

  return null;
}
