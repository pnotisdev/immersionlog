"use client";

import { useState, useTransition } from "react";
import { Check, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { followUser, unfollowUser } from "@/actions/social";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/** Optimistic follow toggle. Reverts and explains itself if the action fails. */
export function FollowButton({
  userId,
  initialFollowing,
  size = "default",
  className,
}: {
  userId: string;
  initialFollowing: boolean;
  size?: "default" | "sm";
  className?: string;
}) {
  const [following, setFollowing] = useState(initialFollowing);
  const [pending, startTransition] = useTransition();

  function toggle() {
    const next = !following;
    setFollowing(next);
    startTransition(async () => {
      const res = next ? await followUser(userId) : await unfollowUser(userId);
      if (!res.ok) {
        setFollowing(!next);
        toast.error(res.error);
      }
    });
  }

  // The shared Button, not a hand-rolled pill: it sits beside Edit profile / Share on a
  // profile and has to be the same height, radius and type as they are.
  return (
    <Button
      type="button"
      onClick={toggle}
      disabled={pending}
      aria-pressed={following}
      variant={following ? "outline" : "default"}
      size={size === "sm" ? "sm" : "default"}
      className={cn(following && "text-muted-foreground hover:border-destructive/40 hover:text-destructive", className)}
    >
      {following ? <Check /> : <UserPlus />}
      {following ? "Following" : "Follow"}
    </Button>
  );
}
