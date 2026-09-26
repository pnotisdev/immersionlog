import { IMAGE_UPLOAD_MIN_SECONDS } from "@/lib/posts";
import { immersedBefore } from "@/lib/post-queries";
import { requireUser } from "@/lib/session";
import { PostEditor } from "@/components/posts/post-editor";

export const metadata = { title: "Write a post" };

export default async function WritePage() {
  const user = await requireUser();
  const logged = await immersedBefore(user.id, new Date());
  return (
    <div className="mx-auto max-w-[48rem]">
      <PostEditor canUploadImages={logged >= IMAGE_UPLOAD_MIN_SECONDS} />
    </div>
  );
}
