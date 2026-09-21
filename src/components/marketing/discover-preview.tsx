import { buildCommunityRail, getPreviewShelves, pickPool } from "@/lib/marketing-preview";
import { DiscoverSearch } from "@/components/discover/discover-search";
import { DiscoverTile } from "@/components/discover/discover-tile";
import { MediaRail } from "@/components/media/media-rail";
import { Rail } from "@/components/media/scroll-rail";
import { PreviewMain, PreviewNav } from "./preview-shell";

export async function DiscoverPreview() {
  const shelves = await getPreviewShelves();
  const pool = pickPool(shelves);
  const community = buildCommunityRail(pool, 6);
  const [anime, manga] = shelves;

  return (
    <>
      <PreviewNav active="Discover" />
      <PreviewMain>
        <div className="grid gap-9">
          <DiscoverSearch />

          <MediaRail title="Popular with members this month" items={community} />

          <Rail title={anime.title}>
            {anime.items.slice(0, 10).map((item) => (
              <DiscoverTile key={`${item.source}:${item.sourceId}`} item={item} className="w-[132px] shrink-0" />
            ))}
          </Rail>

          <Rail title={manga.title}>
            {manga.items.slice(0, 10).map((item) => (
              <DiscoverTile key={`${item.source}:${item.sourceId}`} item={item} className="w-[132px] shrink-0" />
            ))}
          </Rail>
        </div>
      </PreviewMain>
    </>
  );
}
