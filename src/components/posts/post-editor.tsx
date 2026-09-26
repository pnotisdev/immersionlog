"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition, type ClipboardEvent, type DragEvent } from "react";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";
import { deletePost, savePost, uploadPostImage } from "@/actions/posts";
import { MAX_POST_BODY, MAX_POST_IMAGE_UPLOAD_BYTES, MAX_POST_TITLE } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PostBody } from "./post-body";

const MAX_MB = Math.round(MAX_POST_IMAGE_UPLOAD_BYTES / (1024 * 1024));

/**
 * Write and edit a journal post: Markdown with a preview, and images added from a file
 * picker, pasted, or dropped onto the text. Each image uploads on its own
 * (uploadPostImage) and lands in the text as ![](url) where the cursor was.
 */
export function PostEditor({
  post,
  canUploadImages,
}: {
  post?: { id: string; title: string; body: string; published: boolean; url: string | null };
  /** False until the author has logged enough to unlock images (see src/lib/posts.ts). */
  canUploadImages: boolean;
}) {
  const router = useRouter();
  const [id, setId] = useState(post?.id);
  const [title, setTitle] = useState(post?.title ?? "");
  const [body, setBody] = useState(post?.body ?? "");
  const [saved, setSaved] = useState({ title: post?.title ?? "", body: post?.body ?? "" });
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [uploading, setUploading] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [pending, startTransition] = useTransition();
  const textarea = useRef<HTMLTextAreaElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const published = post?.published ?? false;
  const dirty = title !== saved.title || body !== saved.body;

  // Leaving with unsaved text asks first. In-app links don't fire this; the Cancel link does its own check.
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function insertAtCursor(text: string) {
    const el = textarea.current;
    setBody((current) => {
      const at = el && document.activeElement === el ? el.selectionStart : current.length;
      const before = current.slice(0, at);
      const pad = before && !before.endsWith("\n\n") ? (before.endsWith("\n") ? "\n" : "\n\n") : "";
      return `${before}${pad}${text}\n\n${current.slice(at).replace(/^\n+/, "")}`;
    });
  }

  async function upload(files: File[]) {
    const images = files.filter((f) => f.type.startsWith("image/"));
    if (images.length === 0) return;
    if (!canUploadImages) {
      toast.error("Images unlock once you've logged an hour of immersion");
      return;
    }
    for (const file of images) {
      if (file.size > MAX_POST_IMAGE_UPLOAD_BYTES) {
        toast.error(`${file.name} is over ${MAX_MB}MB`);
        continue;
      }
      setUploading((n) => n + 1);
      const data = new FormData();
      data.set("image", file);
      const res = await uploadPostImage(data);
      setUploading((n) => n - 1);
      if (!res.ok) {
        toast.error(res.error);
        continue;
      }
      const alt = file.name.replace(/\.[a-z0-9]+$/i, "").replace(/[[\]]/g, "");
      insertAtCursor(`![${alt}](${res.data.url})`);
    }
  }

  function onPaste(e: ClipboardEvent<HTMLTextAreaElement>) {
    const files = Array.from(e.clipboardData.files);
    if (files.some((f) => f.type.startsWith("image/"))) {
      e.preventDefault();
      void upload(files);
    }
  }

  function onDrop(e: DragEvent<HTMLTextAreaElement>) {
    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;
    e.preventDefault();
    void upload(files);
  }

  function save(publish: boolean) {
    startTransition(async () => {
      const res = await savePost({ id, title, body, publish });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setSaved({ title, body });
      if (publish) {
        toast.success(published ? "Post updated" : "Post published");
        router.push(res.data.url);
        return;
      }
      toast.success(published ? "Moved back to drafts" : "Draft saved");
      if (!id || published) {
        setId(res.data.id);
        router.replace(`/write/${res.data.id}`);
      }
      router.refresh();
    });
  }

  function remove() {
    if (!id) return;
    startTransition(async () => {
      const res = await deletePost(id);
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setSaved({ title, body });
      toast.success("Post deleted");
      router.push("/write");
      router.refresh();
    });
  }

  const busy = pending || uploading > 0;
  const nearLimit = body.length > MAX_POST_BODY * 0.9;

  return (
    <div className="grid gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={MAX_POST_TITLE}
        placeholder="Title"
        aria-label="Title"
        className="w-full bg-transparent text-display font-semibold outline-none placeholder:text-dim"
      />

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border">
        <div className="-mb-px flex gap-1" role="tablist">
          {(["write", "preview"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                "border-b-2 px-3 py-2.5 text-sm capitalize transition-colors",
                tab === t ? "border-primary font-medium text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 pb-1.5">
          {uploading > 0 && <span className="text-meta text-dim">Uploading {uploading}…</span>}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => fileInput.current?.click()}
            disabled={busy || tab !== "write"}
            title={canUploadImages ? `Add an image (up to ${MAX_MB}MB), or paste or drop one into the text` : "Images unlock after an hour of logged immersion"}
          >
            <ImagePlus /> Image
          </Button>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              e.target.value = "";
              void upload(files);
            }}
          />
        </div>
      </div>

      {tab === "write" ? (
        <textarea
          ref={textarea}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onPaste={onPaste}
          onDrop={onDrop}
          onDragOver={(e) => e.dataTransfer.types.includes("Files") && e.preventDefault()}
          maxLength={MAX_POST_BODY}
          placeholder={"How's your Japanese going? What are you reading, what clicked, what didn't?\n\nMarkdown works: **bold**, ## headings, > quotes, - lists, [links](https://…). Paste or drop images straight in."}
          aria-label="Post"
          className="min-h-[55vh] w-full resize-y bg-transparent font-mono text-[0.9375rem] leading-relaxed outline-none placeholder:text-dim"
        />
      ) : (
        <div className="min-h-[55vh]">
          {body.trim() ? <PostBody markdown={body} /> : <p className="text-meta text-dim">Nothing to preview yet.</p>}
        </div>
      )}

      <div className="sticky bottom-20 z-10 -mx-4 flex flex-wrap items-center gap-2 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-md md:bottom-0">
        {published ? (
          <>
            <Button type="button" size="lg" disabled={busy || !title.trim()} onClick={() => save(true)}>
              Update post
            </Button>
            <Button type="button" variant="outline" size="lg" disabled={busy} onClick={() => save(false)}>
              Unpublish
            </Button>
          </>
        ) : (
          <>
            <Button type="button" size="lg" disabled={busy || !title.trim() || !body.trim()} onClick={() => save(true)}>
              Publish
            </Button>
            <Button type="button" variant="outline" size="lg" disabled={busy || !title.trim() || (!!id && !dirty)} onClick={() => save(false)}>
              Save draft
            </Button>
          </>
        )}
        {post?.url && published && (
          <Button render={<Link href={post.url} />} nativeButton={false} variant="ghost" size="lg">
            View post
          </Button>
        )}
        <span className={cn("ml-auto text-meta tabular-nums", nearLimit ? "text-danger" : "text-dim")}>
          {dirty ? "Unsaved changes · " : ""}
          {body.length.toLocaleString()}
          {nearLimit && ` / ${MAX_POST_BODY.toLocaleString()}`} characters
        </span>
        {id && (
          <Button type="button" variant="destructive" size="lg" disabled={busy} onClick={() => setConfirmDelete(true)}>
            Delete
          </Button>
        )}
      </div>

      <Dialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this post?</DialogTitle>
            <DialogDescription>{published ? "It disappears from your profile and the journal, along with its kudos." : "This draft will be gone for good."}</DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <Button type="button" variant="destructive" disabled={busy} onClick={remove}>
              Delete post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
