"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useTransition, type ChangeEvent } from "react";
import { Check, ImageUp, LayoutGrid, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { resetBanner, setBannerFromLibrary, uploadBanner } from "@/actions/account";
import { MAX_BANNER_UPLOAD_BYTES, type ProfileBanner } from "@/lib/banner";
import { cn } from "@/lib/utils";
import { ArtBanner } from "@/components/media/art-banner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface BannerOption {
  mediaItemId: string;
  title: string;
  bannerUrl: string | null;
  coverUrl: string | null;
}

const MAX_MB = Math.round(MAX_BANNER_UPLOAD_BYTES / (1024 * 1024));

/**
 * Profile banner: upload an image, pick art from a title in your library, or leave it
 * automatic. Saves itself on each choice (like the avatar field), and the preview is the
 * real ArtBanner, so what you see here is exactly what the profile shows.
 */
export function BannerField({
  current,
  automatic,
  options,
}: {
  current: ProfileBanner;
  /** What "automatic" would show right now, for its tile in the picker. */
  automatic: ProfileBanner;
  options: BannerOption[];
}) {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);
  const objectUrl = useRef<string | null>(null);
  const [preview, setPreview] = useState<ProfileBanner | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const shown = preview ?? current;
  const pickedTitle = current.source === "library" ? options.find((o) => o.mediaItemId === current.mediaItemId)?.title : null;

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("That file isn't an image");
      return;
    }
    if (file.size > MAX_BANNER_UPLOAD_BYTES) {
      toast.error(`Images must be under ${MAX_MB}MB`);
      return;
    }

    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = URL.createObjectURL(file);
    setPreview({ url: objectUrl.current, wide: true, source: "upload" });

    const formData = new FormData();
    formData.set("banner", file);
    startTransition(async () => {
      const res = await uploadBanner(formData);
      if (!res.ok) {
        toast.error(res.error);
        setPreview(null);
        return;
      }
      toast.success("Banner updated");
      router.refresh();
    });
  }

  function pick(option: BannerOption | null) {
    setPickerOpen(false);
    setPreview(
      option
        ? { url: option.bannerUrl ?? option.coverUrl, wide: option.bannerUrl != null, source: "library", mediaItemId: option.mediaItemId }
        : automatic,
    );
    startTransition(async () => {
      const res = option ? await setBannerFromLibrary(option.mediaItemId) : await resetBanner();
      if (!res.ok) {
        toast.error(res.error);
        setPreview(null);
        return;
      }
      toast.success(option ? "Banner updated" : "Banner set to automatic");
      router.refresh();
    });
  }

  return (
    <div className="grid gap-3">
      <ArtBanner banner={shown} className={cn("sm:h-44", pending && "opacity-70")} />
      <p className="text-meta text-dim">
        {shown.source === "upload"
          ? "Your uploaded image."
          : shown.source === "library"
            ? `Art from ${pickedTitle ?? "a title in your library"}.`
            : "Automatic: art from whatever you've spent the most time on."}
      </p>
      <input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={() => fileInput.current?.click()} disabled={pending}>
          <ImageUp /> {pending && preview?.source === "upload" ? "Uploading…" : "Upload image"}
        </Button>
        <Button type="button" variant="outline" onClick={() => setPickerOpen(true)} disabled={pending || options.length === 0}>
          <LayoutGrid /> Choose from library
        </Button>
        {current.source !== "auto" && (
          <Button type="button" variant="ghost" onClick={() => pick(null)} disabled={pending}>
            <RotateCcw /> Use automatic
          </Button>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        JPEG, PNG, WebP or GIF up to {MAX_MB}MB. Cropped to 3:1; around 1800×600 looks sharpest.
      </p>

      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Choose a banner</DialogTitle>
            <DialogDescription>Titles with wide key art come first. Covers are shown whole, framed in their own colours.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 sm:grid-cols-2">
            <OptionTile label="Automatic" banner={automatic} selected={current.source === "auto"} onSelect={() => pick(null)} />
            {options.map((o) => (
              <OptionTile
                key={o.mediaItemId}
                label={o.title}
                banner={{ url: o.bannerUrl ?? o.coverUrl, wide: o.bannerUrl != null, source: "library" }}
                selected={current.source === "library" && current.mediaItemId === o.mediaItemId}
                onSelect={() => pick(o)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function OptionTile({
  label,
  banner,
  selected,
  onSelect,
}: {
  label: string;
  banner: ProfileBanner;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="group grid gap-1.5 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <ArtBanner
        banner={banner}
        className={cn(
          "h-24 sm:h-24 transition-[box-shadow]",
          selected ? "ring-2 ring-primary" : "group-hover:ring-2 group-hover:ring-line-strong",
        )}
      >
        {selected && (
          <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3.5" />
          </span>
        )}
      </ArtBanner>
      <span className="truncate text-meta text-muted-foreground group-hover:text-foreground">{label}</span>
    </button>
  );
}
