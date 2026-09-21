import { buildLibraryEntries, getPreviewShelves, pickPool } from "@/lib/marketing-preview";
import { PageHeader } from "@/components/layout/page-header";
import { TabLinks } from "@/components/layout/tab-links";
import { MediaCard } from "@/components/library/media-card";
import { PreviewMain, PreviewNav } from "./preview-shell";

export async function LibraryPreview() {
  const pool = pickPool(await getPreviewShelves());
  const entries = buildLibraryEntries(pool, 12);

  return (
    <>
      <PreviewNav active="Library" />
      <PreviewMain>
        <PageHeader title="Library" description={`${entries.length} titles tracked`} />

        <TabLinks
          tabs={[
            { href: "#all", label: "All", count: entries.length },
            { href: "#progress", label: "In progress", count: entries.filter((e) => e.status === "active").length },
            { href: "#finished", label: "Finished", count: entries.filter((e) => e.status === "finished").length },
            { href: "#planning", label: "Planning", count: entries.filter((e) => e.status === "planning").length },
          ]}
          active="#all"
        />

        <div className="grid gap-x-5 gap-y-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))" }}>
          {entries.map((item) => (
            <MediaCard key={item.mediaItemId} item={item} />
          ))}
        </div>
      </PreviewMain>
    </>
  );
}
