import { NextResponse } from "next/server";
import { toCsv } from "@/lib/csv";
import { getExportSessions } from "@/lib/export-queries";
import { getSession } from "@/lib/session";

/** CSV counterpart to the JSON export (src/app/api/account/export/route.ts), one category per file. */
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sessions = await getExportSessions(session.user.id);
  const rows = sessions.map((s) => ({
    date: s.startedAt.toISOString(),
    media_type: s.mediaType,
    title: s.mediaTitle ?? s.label ?? "",
    duration_seconds: s.durationSeconds,
    amount: s.amount ?? "",
    amount_unit: s.amountUnit ?? "",
    notes: s.notes ?? "",
  }));
  const csv = toCsv(rows, ["date", "media_type", "title", "duration_seconds", "amount", "amount_unit", "notes"]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="immersionlog-sessions-${session.user.id}.csv"`,
    },
  });
}
