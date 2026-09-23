import { PGlite } from "@electric-sql/pglite";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { beforeAll, describe, expect, it } from "vitest";
import type { Db } from "@/db";
import * as schema from "@/db/schema";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { applyJitenLink, type ExternalItemInput, removeJitenLink, upsertExternalItem } from "./media-upsert";
import { pickFindResult } from "./sources/imdb";
import { jitenDeckUrl, jitenStats } from "./sources/jiten";
import { parseSjpEpisodeHtml, sjpToResult } from "./sources/shonenjumpplus";
import { tmdbToResult } from "./sources/tmdb";

// The real migrations on an in-memory PGlite, so the merge SQL runs against the same
// schema (including the new enum values from 0009) as production.
let db: Db;

beforeAll(async () => {
  const client = new PGlite();
  const pg = drizzle(client, { schema });
  await migrate(pg, { migrationsFolder: "./drizzle" });
  await pg.insert(schema.user).values({ id: "u1", name: "Test", email: "t@example.com" });
  db = pg as unknown as Db;
}, 60_000);

const vn = (over: Partial<ExternalItemInput> = {}): ExternalItemInput => ({
  source: "vndb",
  sourceId: "v2002",
  mediaType: "visual_novel",
  title: "Steins;Gate",
  titleNative: "シュタインズ・ゲート",
  coverUrl: null,
  year: 2009,
  description: null,
  externalUrl: "https://vndb.org/v2002",
  totalAmount: null,
  totalUnit: null,
  metadata: { lengthMinutes: 2400 },
  ...over,
});

async function row(id: string) {
  return (await db.query.mediaItems.findFirst({ where: eq(schema.mediaItems.id, id) }))!;
}

describe("upsertExternalItem", () => {
  it("preserves Jiten stats, merges links key by key, and keeps a total the source doesn't have", async () => {
    const { id } = await upsertExternalItem(db, vn(), "u1");
    // What linkJitenDeck leaves behind.
    await db
      .update(schema.mediaItems)
      .set({
        metadata: { lengthMinutes: 2400, jiten: { deckId: 283, characterCount: 1_200_000 }, links: { jiten: "https://jiten.moe/decks/media/283/detail" } },
        totalAmount: 1_200_000,
        totalUnit: "characters",
      })
      .where(eq(schema.mediaItems.id, id));

    // Re-added from VNDB search: fresh metadata, no total, a cross-link of its own.
    const again = await upsertExternalItem(db, vn({ metadata: { lengthMinutes: 2500, links: { anilist: "https://anilist.co/x" } } }), "u1");
    expect(again.id).toBe(id);
    const r = await row(id);
    expect(r.metadata).toMatchObject({
      lengthMinutes: 2500,
      jiten: { deckId: 283, characterCount: 1_200_000 },
      links: { jiten: "https://jiten.moe/decks/media/283/detail", anilist: "https://anilist.co/x" },
    });
    expect(r.totalAmount).toBe(1_200_000);
    expect(r.totalUnit).toBe("characters");
  });

  it("lets a source that does have a total win, and adds no jiten/links keys to plain rows", async () => {
    const { id } = await upsertExternalItem(
      db,
      vn({ source: "anilist", sourceId: "154587", mediaType: "anime", totalAmount: 28, totalUnit: "episodes", metadata: { episodeMinutes: 24 } }),
      "u1",
    );
    await upsertExternalItem(
      db,
      vn({ source: "anilist", sourceId: "154587", mediaType: "anime", totalAmount: 28, totalUnit: "episodes", metadata: { episodeMinutes: 25 } }),
      "u1",
    );
    const r = await row(id);
    expect(r.totalAmount).toBe(28);
    expect(r.metadata).toEqual({ episodeMinutes: 25 });
  });

  it("accepts every new source enum value", async () => {
    for (const source of ["imdb", "jiten", "bookmeter", "bookwalker", "cmoa", "shonenjumpplus", "backloggd", "dmm", "jpdb"] as const) {
      await expect(upsertExternalItem(db, vn({ source, sourceId: `x-${source}` }), "u1")).resolves.toHaveProperty("id");
    }
  });
});

const fixture = (name: string) => readFileSync(join(__dirname, "sources", "__fixtures__", name), "utf8");

describe("acceptance: Jiten enrichment", () => {
  it("VNDB item → link Jiten → re-add from VNDB: stats, link and character total survive", async () => {
    const { id } = await upsertExternalItem(db, vn({ sourceId: "v2002-accept" }), "u1");
    const sg = JSON.parse(fixture("jiten-search.json")).data.find((d: { mediaType: number }) => d.mediaType === 7);
    await applyJitenLink(db, await row(id), jitenStats(sg, null), jitenDeckUrl(sg.deckId));
    let r = await row(id);
    expect(r.totalAmount).toBe(sg.characterCount);
    expect(r.totalUnit).toBe("characters");
    expect(r.metadata).toMatchObject({ lengthMinutes: 2400, jiten: { deckId: sg.deckId }, links: { jiten: jitenDeckUrl(sg.deckId) } });

    await upsertExternalItem(db, vn({ sourceId: "v2002-accept" }), "u1");
    r = await row(id);
    expect(r.metadata).toMatchObject({ jiten: { deckId: sg.deckId, characterCount: sg.characterCount }, links: { jiten: jitenDeckUrl(sg.deckId) } });
    expect(r.totalAmount).toBe(sg.characterCount);

    await removeJitenLink(db, r);
    r = await row(id);
    expect(r.metadata).toEqual({ lengthMinutes: 2400 });
    expect(r.totalAmount).toBeNull();
  });

  it("linking an AniList anime keeps episodeMinutes and its episode total", async () => {
    const { id } = await upsertExternalItem(
      db,
      vn({ source: "anilist", sourceId: "154587-accept", mediaType: "anime", totalAmount: 28, totalUnit: "episodes", metadata: { episodeMinutes: 24, format: "TV" } }),
      "u1",
    );
    const { data } = JSON.parse(fixture("jiten-detail-parent.json"));
    await applyJitenLink(db, await row(id), jitenStats(data.mainDeck, data.parentDeck), jitenDeckUrl(data.mainDeck.deckId));
    const r = await row(id);
    expect(r.metadata).toMatchObject({ episodeMinutes: 24, format: "TV", jiten: { deckId: data.mainDeck.deckId } });
    expect(r.totalAmount).toBe(28);
    expect(r.totalUnit).toBe("episodes");
  });
});

describe("acceptance: dedupe", () => {
  it("an IMDb link (via TMDB /find) and a TMDB search hit are one row, keeping links.imdb", async () => {
    const find = JSON.parse(fixture("tmdb-find-movie.json"));
    const viaImdb = pickFindResult(find)!;
    viaImdb.metadata = { ...viaImdb.metadata, links: { imdb: "https://www.imdb.com/title/tt0245429/" } };
    const a = await upsertExternalItem(db, viaImdb, "u1");
    const b = await upsertExternalItem(db, tmdbToResult(find.movie_results[0], "movie"), "u1");
    expect(b.id).toBe(a.id);
    expect((await row(a.id)).metadata).toMatchObject({ links: { imdb: "https://www.imdb.com/title/tt0245429/" } });
  });

  it("two Shonen Jump+ episodes of one series are one row", async () => {
    const one = parseSjpEpisodeHtml(fixture("sjp-episode.html"), "https://shonenjumpplus.com/episode/10833497643049550250");
    const two = parseSjpEpisodeHtml(fixture("sjp-episode-same-series.html"), "https://shonenjumpplus.com/episode/10833497643049550405");
    const a = await upsertExternalItem(db, sjpToResult(one, null, "10833497643049550250", "https://shonenjumpplus.com/episode/10833497643049550250").result, "u1");
    const b = await upsertExternalItem(db, sjpToResult(two, null, "10833497643049550405", "https://shonenjumpplus.com/episode/10833497643049550405").result, "u1");
    expect(b.id).toBe(a.id);
  });
});
