/**
 * Characters that count toward reading: everything except whitespace and punctuation.
 * One definition for every place that counts characters (texthooker, reading speed test).
 */
export function countChars(text: string): number {
  let n = 0;
  for (const ch of text) {
    if (/[\s\p{P}\p{S}]/u.test(ch)) continue;
    n++;
  }
  return n;
}
