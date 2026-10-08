import type { BoxKind, Chunk, Node } from "./types";

/**
 * Lesson markup. Blocks are separated by blank lines:
 *
 *   ## Heading / ### Smaller heading
 *   :::key Title ... :::         a box (note, key, warn, try, read); its content is lesson markup
 *   > chunk ; chunk ; chunk      an example sentence, split into word-sized pieces
 *                                (several > lines in a row make one passage)
 *   = English                    the natural translation, under the example (one = per sentence)
 *   + note                       a short remark under it
 *   anything else                Markdown (with tables)
 *
 * A chunk is `japanese|kana|gloss`. The kana is only written when the Japanese has kanji,
 * so a chunk without kanji is `です|is`; a leading `*` highlights the piece the lesson is
 * about. A line with no `|` at all is shown as plain text, for a sentence not worth gluing.
 */

const BOXES = new Set<string>(["note", "key", "warn", "try", "read"]);

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9぀-ヿ一-鿿]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseChunk(raw: string): Chunk {
  let s = raw.trim();
  const hl = s.startsWith("*");
  if (hl) s = s.slice(1);
  const parts = s.split("|").map((p) => p.trim());
  if (parts.length === 1) return { jp: parts[0], hl };
  if (parts.length === 2) {
    // 私は|わたしは is a reading with no gloss; the gloss is always English.
    const reading = /[一-鿿々]/.test(parts[0]) && /^[ぁ-ゖー、。！？「」]+$/.test(parts[1]);
    return reading ? { jp: parts[0], kana: parts[1], hl } : { jp: parts[0], gloss: parts[1], hl };
  }
  return { jp: parts[0], kana: parts[1] || undefined, gloss: parts[2] || undefined, hl };
}

export function parseBody(src: string): Node[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  return parseLines(lines, 0, false)[0];
}

function parseLines(lines: string[], start: number, inBox: boolean): [Node[], number] {
  const nodes: Node[] = [];
  let md: string[] = [];
  const flush = () => {
    const text = md.join("\n").trim();
    if (text) nodes.push({ t: "md", text });
    md = [];
  };

  let i = start;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === ":::") {
      if (!inBox) throw new Error(`Unexpected ::: at line ${i + 1}`);
      flush();
      return [nodes, i + 1];
    }
    const box = /^:::(\w+)\s+(.+)$/.exec(line);
    if (box) {
      if (!BOXES.has(box[1])) throw new Error(`Unknown box "${box[1]}" at line ${i + 1}`);
      flush();
      const [children, next] = parseLines(lines, i + 1, true);
      nodes.push({ t: "box", kind: box[1] as BoxKind, title: box[2].trim(), children });
      i = next;
      continue;
    }
    const h = /^(##|###) (.+)$/.exec(line);
    if (h) {
      flush();
      const text = h[2].trim();
      nodes.push(h[1] === "##" ? { t: "h2", id: slugify(text), text } : { t: "h3", text });
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      flush();
      const row = (l: string) =>
        l
          .slice(2)
          .split(" ; ")
          .map(parseChunk)
          .filter((c) => c.jp);
      const chunks = row(line);
      // Lines of > in a row are one passage; each is a row under the first.
      const more: Chunk[][] = [];
      i++;
      while (i < lines.length && lines[i].startsWith("> ")) more.push(row(lines[i++]));
      const ens: string[] = [];
      let note: string | undefined;
      while (i < lines.length && (lines[i].startsWith("= ") || lines[i].startsWith("+ "))) {
        if (lines[i].startsWith("= ")) ens.push(lines[i].slice(2).trim());
        else note = lines[i].slice(2).trim();
        i++;
      }
      nodes.push({ t: "ex", chunks, ...(more.length ? { more } : {}), en: ens.length ? ens.join("\n") : undefined, note });
      continue;
    }
    if (line.trim() === "") flush();
    else md.push(line);
    i++;
  }
  if (inBox) throw new Error("Box not closed with :::");
  flush();
  return [nodes, i];
}

/** The lesson's top-level section headings, for the in-page contents. */
export function lessonSections(nodes: Node[]): { id: string; label: string }[] {
  return nodes.flatMap((n) => (n.t === "h2" ? [{ id: n.id, label: n.text }] : []));
}

/** Words in the lesson's prose, for the reading-time estimate. */
export function lessonMinutes(nodes: Node[]): number {
  const words = (n: Node): number => {
    switch (n.t) {
      case "md":
        return n.text.split(/\s+/).length;
      case "ex":
        return 12 + (n.more?.length ?? 0) * 8 + (n.en?.split(/\s+/).length ?? 0) + (n.note?.split(/\s+/).length ?? 0);
      case "box":
        return n.children.reduce((s, c) => s + words(c), 0);
      default:
        return 4;
    }
  };
  return Math.max(3, Math.round(nodes.reduce((s, n) => s + words(n), 0) / 170));
}
