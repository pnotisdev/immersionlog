import { NextResponse } from "next/server";
import { toCsv } from "@/lib/csv";
import { getExportMilestones } from "@/lib/export-queries";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const rows = await getExportMilestones(session.user.id);
  const csv = toCsv(
    rows.map((m) => ({
      title: m.title,
      media_title: m.mediaTitle,
      occurred_at: m.occurredAt ?? "",
      note: m.note ?? "",
      progress_amount: m.progressAmount ?? "",
      progress_unit: m.progressUnit ?? "",
      created_at: m.createdAt.toISOString(),
    })),
    ["title", "media_title", "occurred_at", "note", "progress_amount", "progress_unit", "created_at"],
  );

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="immersionlog-milestones-${session.user.id}.csv"`,
    },
  });
}
