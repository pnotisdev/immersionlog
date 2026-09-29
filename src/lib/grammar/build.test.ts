import { describe, expect, it } from "vitest";
import { deck, point, s } from "./build";

const draft = (id: string) =>
  point({
    id,
    title: id,
    meaning: "m",
    structure: "s",
    explanation: "e",
    sentences: [s("{は}", "{は}", "A.")],
  });

const meta = { id: "x", level: "X", title: "X", description: "" };

describe("deck", () => {
  it("orders points by stage, not by where they were written", () => {
    const d = deck(meta, [[draft("x-a"), draft("x-b")], [draft("x-c")]], [
      { title: "First", ids: ["x-c", "x-a"] },
      { title: "Then", ids: ["x-b"] },
    ]);
    expect(d.points.map((p) => [p.id, p.order])).toEqual([
      ["x-c", 1],
      ["x-a", 2],
      ["x-b", 3],
    ]);
    expect(d.sections).toEqual([
      { title: "First", pointIds: ["x-c", "x-a"] },
      { title: "Then", pointIds: ["x-b"] },
    ]);
  });

  it("refuses a point that isn't placed, is placed twice or doesn't exist", () => {
    expect(() => deck(meta, [[draft("x-a"), draft("x-b")]], [{ title: "S", ids: ["x-a"] }])).toThrow("not placed: x-b");
    expect(() => deck(meta, [[draft("x-a")]], [{ title: "S", ids: ["x-a", "x-a"] }])).toThrow("placed twice: x-a");
    expect(() => deck(meta, [[draft("x-a")]], [{ title: "S", ids: ["x-a", "x-z"] }])).toThrow("unknown: x-z");
    expect(() => deck(meta, [[draft("x-a")], [draft("x-a")]], [{ title: "S", ids: ["x-a"] }])).toThrow("written twice: x-a");
  });
});
