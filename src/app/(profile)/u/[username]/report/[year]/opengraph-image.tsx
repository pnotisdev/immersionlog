import { REPORT_CARD_SIZE, renderReportCard } from "@/lib/report-card";

export const alt = "immersionlog Immersion Report";
export const size = REPORT_CARD_SIZE;
export const contentType = "image/png";

/**
 * The same card the report page offers as a download (see src/lib/report-card.tsx), so
 * a pasted report link unfurls with exactly what its owner saw. This route only ever
 * sees the `year` param — a custom ?from=&to= range on the report page can't reach an
 * opengraph-image — so the card always covers the whole named year.
 *
 * Note that Next serves this at a *hashed* URL (opengraph-image-<hash>), not at a bare
 * /opengraph-image path, which is why the page links to ./card.png for downloads
 * rather than here.
 */
export default async function Image({ params }: { params: Promise<{ username: string; year: string }> }) {
  const { username, year } = await params;
  return renderReportCard(username, year);
}
