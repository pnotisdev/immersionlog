/**
 * URLs for decks and points. Kept apart from ./decks so client components can link to a
 * point without pulling every deck's content into the browser bundle.
 */
export function deckPath(deck: { id: string }): string {
  return `/grammar/${deck.id}`;
}

export function pointPath(point: { deck: string; id: string }): string {
  return `/grammar/${point.deck}/${point.id}`;
}
