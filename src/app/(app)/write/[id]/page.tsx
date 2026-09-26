import { notFound } from "next/navigation";
import { IMAGE_UPLOAD_MIN_SECONDS, postPath } from "@/lib/posts";
import { getOwnPost, immersedBefore } from "@/lib/post-queries";
import { requireUser } from "@/lib/session";
import { PostEditor } from "@/components/posts/post-editor";

export const metadata = { title: "Edit post" };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export default async function EditPostPage(props: PageProps<"/write/[id]">) {
  const user = await requireUser();
  const { id } = await props.params;
  if (!UUID.test(id)) notFound();
  const [post, logged] = await Promise.all([getOwnPost(id, user.id), immersedBefore(user.id, new Date())]);
  if (!post) notFound();
  return (
    <div className="mx-auto max-w-[48rem]">
      <PostEditor
        // A fresh editor per post, so saving a new draft (which moves here) doesn't carry state across.
        key={post.id}
        post={{
          id: post.id,
          title: post.title,
          body: post.body,
          published: post.publishedAt != null,
          url: user.username ? postPath(user.username, post.slug) : null,
        }}
        canUploadImages={logged >= IMAGE_UPLOAD_MIN_SECONDS}
      />
    </div>
  );
}
