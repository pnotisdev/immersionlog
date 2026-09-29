import { describe, expect, it } from "vitest";
import {
  BURNED_STAGE,
  dueCount,
  dueTodayCount,
  forecast,
  forecastHours,
  lessonSentences,
  nextDue,
  nextReviewAt,
  nextStage,
  pickSentence,
  retryPosition,
  stageGroup,
  stageLabel,
  STAGE_INTERVALS,
} from "./srs";

const HOUR = 3_600_000;
const DAY = 24 * HOUR;

describe("nextStage", () => {
  it("moves up one on a right answer", () => {
    expect(nextStage(1, true)).toBe(2);
    expect(nextStage(5, true)).toBe(6);
  });

  it("learning a new point puts it at stage 1", () => {
    expect(nextStage(0, true)).toBe(1);
  });

  it("burns a point answered right at stage 10, and a burned one stays burned", () => {
    expect(nextStage(10, true)).toBe(BURNED_STAGE);
    expect(nextStage(BURNED_STAGE, true)).toBe(BURNED_STAGE);
  });

  it("drops two stages on a wrong answer, never below 1", () => {
    expect(nextStage(8, false)).toBe(6);
    expect(nextStage(4, false)).toBe(2);
    expect(nextStage(3, false)).toBe(1);
    expect(nextStage(2, false)).toBe(1);
    expect(nextStage(1, false)).toBe(1);
    expect(nextStage(0, false)).toBe(1);
    expect(nextStage(10, false)).toBe(8);
  });
});

describe("nextReviewAt", () => {
  const now = new Date("2026-09-29T12:00:00Z");

  it("waits the stage's interval", () => {
    expect(nextReviewAt(1, now)!.getTime() - now.getTime()).toBe(4 * HOUR);
    expect(nextReviewAt(2, now)!.getTime() - now.getTime()).toBe(8 * HOUR);
    expect(nextReviewAt(3, now)!.getTime() - now.getTime()).toBe(DAY);
    expect(nextReviewAt(7, now)!.getTime() - now.getTime()).toBe(14 * DAY);
    expect(nextReviewAt(10, now)!.getTime() - now.getTime()).toBe(120 * DAY);
  });

  it("has an interval for every stage between learning and burning, each longer than the last", () => {
    for (let s = 2; s < BURNED_STAGE; s++) expect(STAGE_INTERVALS[s]).toBeGreaterThan(STAGE_INTERVALS[s - 1]);
  });

  it("never schedules a burned point", () => {
    expect(nextReviewAt(BURNED_STAGE, now)).toBeNull();
  });

  it("is exact across a DST change: intervals are elapsed time, not wall-clock", () => {
    // Europe/Berlin leaves summer time on 25 Oct 2026.
    const before = new Date("2026-10-24T10:00:00Z");
    expect(nextReviewAt(4, before)!.toISOString()).toBe("2026-10-26T10:00:00.000Z");
  });
});

describe("stage groups", () => {
  it("names each stage", () => {
    expect(stageGroup(0).id).toBe("new");
    expect(stageGroup(1).id).toBe("beginner");
    expect(stageGroup(3).id).toBe("beginner");
    expect(stageGroup(4).id).toBe("adept");
    expect(stageGroup(6).id).toBe("adept");
    expect(stageGroup(7).id).toBe("seasoned");
    expect(stageGroup(8).id).toBe("seasoned");
    expect(stageGroup(9).id).toBe("expert");
    expect(stageGroup(10).id).toBe("expert");
    expect(stageGroup(11).id).toBe("burned");
    expect(stageLabel(5)).toBe("Adept 5");
    expect(stageLabel(11)).toBe("Burned");
  });
});

describe("pickSentence", () => {
  const point = { sentences: ["a", "b", "c"].map((id) => ({ id, japanese: "", reading: "", english: "", acceptedAnswers: [], nearMisses: [] })) };

  it("goes round-robin, starting after the last one used", () => {
    expect(pickSentence(point, null).id).toBe("a");
    expect(pickSentence(point, "a").id).toBe("b");
    expect(pickSentence(point, "b").id).toBe("c");
    expect(pickSentence(point, "c").id).toBe("a");
  });

  it("starts over when the last sentence no longer exists", () => {
    expect(pickSentence(point, "gone").id).toBe("a");
  });

  it("never repeats the last sentence when there's another", () => {
    for (const last of ["a", "b", "c"]) expect(pickSentence(point, last).id).not.toBe(last);
  });

  it("quizzes a lesson on a sentence it didn't show as an example", () => {
    const five = { sentences: [...point.sentences, ...["d", "e"].map((id) => ({ ...point.sentences[0], id }))] };
    const { examples, quiz } = lessonSentences(five);
    expect(examples.map((e) => e.id)).toEqual(["a", "b", "c"]);
    expect(quiz.id).toBe("d");
    const two = { sentences: point.sentences.slice(0, 2) };
    expect(lessonSentences(two).examples.map((e) => e.id)).toEqual(["a"]);
    expect(lessonSentences(two).quiz.id).toBe("b");
  });
});

describe("retryPosition", () => {
  it("puts a miss back a few cards later, or at the end", () => {
    expect(retryPosition(10, 0)).toBe(4);
    expect(retryPosition(3, 1)).toBe(3);
    expect(retryPosition(1, 0)).toBe(1);
  });
});

describe("due counts and forecast", () => {
  const at = (iso: string | null) => ({ nextReviewAt: iso ? new Date(iso) : null });

  it("counts what's due now, ignoring burned points", () => {
    const now = new Date("2026-09-29T12:00:00Z");
    const items = [at("2026-09-29T11:00:00Z"), at("2026-09-29T12:00:00Z"), at("2026-09-29T13:00:00Z"), at(null)];
    expect(dueCount(items, now)).toBe(2);
  });

  it("uses the user's timezone for 'today'", () => {
    // 22:30 UTC on the 29th is 07:30 on the 30th in Tokyo and 15:30 on the 29th in Los Angeles.
    const now = new Date("2026-09-29T22:30:00Z");
    const items = [at("2026-09-30T05:00:00Z"), at("2026-09-30T14:00:00Z"), at("2026-09-30T16:00:00Z")];
    // Tokyo's day ends at 15:00 UTC on the 30th.
    expect(dueTodayCount(items, now, "Asia/Tokyo")).toBe(2);
    // Los Angeles' day ends at 07:00 UTC on the 30th.
    expect(dueTodayCount(items, now, "America/Los_Angeles")).toBe(1);
  });

  it("buckets the forecast by the user's calendar days, overdue into today", () => {
    const now = new Date("2026-09-29T22:30:00Z");
    const items = [at("2026-09-28T00:00:00Z"), at("2026-09-30T05:00:00Z"), at("2026-09-30T16:00:00Z"), at("2026-10-15T00:00:00Z")];
    const tokyo = forecast(items, 3, now, "Asia/Tokyo");
    expect(tokyo.map((d) => d.key)).toEqual(["2026-09-30", "2026-10-01", "2026-10-02"]);
    expect(tokyo.map((d) => d.count)).toEqual([2, 1, 0]);
    expect(tokyo.map((d) => d.cumulative)).toEqual([2, 3, 3]);

    const la = forecast(items, 3, now, "America/Los_Angeles");
    expect(la.map((d) => d.key)).toEqual(["2026-09-29", "2026-09-30", "2026-10-01"]);
    expect(la.map((d) => d.count)).toEqual([2, 1, 0]);
  });

  it("forecasts the next 24 hours by local hour, leaving out what's already due", () => {
    const now = new Date("2026-09-29T22:30:00Z");
    const items = [at("2026-09-29T20:00:00Z"), at("2026-09-29T22:45:00Z"), at("2026-09-30T01:10:00Z"), at("2026-10-02T00:00:00Z")];
    const hours = forecastHours(items, 24, now, "Asia/Kolkata");
    expect(hours).toHaveLength(24);
    // Kolkata is UTC+5:30: 22:30 UTC is 04:00 local, so the first bucket starts exactly now.
    expect(hours[0].hour).toBe(4);
    expect(hours[0].start.toISOString()).toBe("2026-09-29T22:30:00.000Z");
    expect(hours[0].count).toBe(1);
    expect(hours[2].count).toBe(1);
    expect(hours.reduce((a, h) => a + h.count, 0)).toBe(2);
  });

  it("finds the next review after now", () => {
    const now = new Date("2026-09-29T12:00:00Z");
    expect(nextDue([at("2026-09-29T11:00:00Z"), at("2026-09-30T00:00:00Z"), at("2026-09-29T18:00:00Z")], now)?.toISOString()).toBe(
      "2026-09-29T18:00:00.000Z",
    );
    expect(nextDue([at(null)], now)).toBeNull();
  });
});
