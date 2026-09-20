import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, RefreshCw } from "lucide-react";
import { getShelf, isShelfKey, SHELF_KEYS, SHELF_META } from "@/lib/sources/browse";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { TabLinks } from "@/components/layout/tab-links";
import { DiscoverTile } from "@/components/discover/discover-tile";

export async function generateMetadata(props: PageProps<"/discover/[shelf]">) {
  const { shelf } = await props.params;
  return { title: isShelfKey(shelf) ? SHELF_META[shelf].title : "Discover" };
}

export default async function ShelfPage(props: PageProps<"/discover/[shelf]">) {
  await requireUser();
  const { shelf: key } = await props.params;
  if (!isShelfKey(key)) notFound();

  const shelf = await getShelf(key);

  return (
    <div>
      <Link
        href="/discover"
        className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-3.5" /> Discover
      </Link>

      <PageHeader title={shelf.title} description={shelf.blurb} />

      <TabLinks
        tabs={SHELF_KEYS.map((k) => ({ href: `/discover/${k}`, label: SHELF_META[k].title }))}
        active={`/discover/${key}`}
        variant="pill"
        className="mb-5"
      />

      {shelf.items.length === 0 ? (
        <EmptyState icon={RefreshCw} title={`${shelf.credit} isn't answering right now.`} description="Try again in a minute." />
      ) : (
        <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
          {shelf.items.map((item) => (
            <DiscoverTile key={`${item.source}:${item.sourceId}`} item={item} className="w-full" />
          ))}
        </div>
      )}
    </div>
  );
}
