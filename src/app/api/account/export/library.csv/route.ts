import { NextResponse } from "next/server";
import { toCsv } from "@/lib/csv";
import { getExportLibrary } from "@/lib/export-queries";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const entries = await getExportLibrary(session.user.id);
  const rows = entries.map((e) => ({
    title: e.mediaTitle,
    media_type: e.mediaType,
    status: e.status,
    progress: e.progress,
    progress_unit: e.progressUnit ?? "",
    total_amount: e.totalAmount ?? "",
    total_unit: e.totalUnit ?? "",
    rating: e.rating ?? "",
    started_at: e.startedAt ?? "",
    finished_at: e.finishedAt ?? "",
    notes: e.notes ?? "",
  }));
  const csv = toCsv(rows, [
    "title",
    "media_type",
    "status",
    "progress",
    "progress_unit",
    "total_amount",
    "total_unit",
    "rating",
    "started_at",
    "finished_at",
    "notes",
  ]);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="immersionlog-library-${session.user.id}.csv"`,
    },
  });
}
