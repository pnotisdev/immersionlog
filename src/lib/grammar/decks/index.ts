import type { GrammarDeck, GrammarPoint } from "../types";
import { N5 } from "./n5";

/**
 * Every deck, easiest first. A new level is a data file plus one line here: routes,
 * sitemap, the learn queue and stats all read from this list.
 */
export const DECKS: GrammarDeck[] = [N5];

const POINTS = new Map<string, GrammarPoint>(DECKS.flatMap((d) => d.points.map((p) => [p.id, p] as const)));

export function getDeck(id: string): GrammarDeck | undefined {
  return DECKS.find((d) => d.id === id);
}

export function getPoint(id: string): GrammarPoint | undefined {
  return POINTS.get(id);
}

/** Every point in learning order: deck by deck, each in its own order. */
export function allPoints(): GrammarPoint[] {
  return DECKS.flatMap((d) => d.points);
}

export function deckPath(deck: Pick<GrammarDeck, "id">): string {
  return `/grammar/${deck.id}`;
}

export function pointPath(point: Pick<GrammarPoint, "deck" | "id">): string {
  return `/grammar/${point.deck}/${point.id}`;
}
