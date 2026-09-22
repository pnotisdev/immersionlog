"use client";

import { useRouter } from "next/navigation";
import { useMemo, useRef, useState, useSyncExternalStore, useTransition, type ChangeEvent, type FormEvent } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { removeAvatar, updateProfileLinks, uploadAvatar } from "@/actions/account";
import { authClient } from "@/lib/auth-client";
import { MAX_AVATAR_UPLOAD_BYTES } from "@/lib/avatar";
import { BIO_MAX_LENGTH, MAX_PROFILE_LINKS, PROFILE_LINK_PLATFORMS } from "@/lib/profile-links";
import { USERNAME_MAX, USERNAME_MIN, USERNAME_RE } from "@/lib/username";
import type { ProfileLink } from "@/db/schema";
import { Avatar } from "@/components/ranking/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function timezoneList(): string[] {
  try {
    // Modern browsers expose the IANA list.
    return (Intl as unknown as { supportedValuesOf?: (k: string) => string[] }).supportedValuesOf?.("timeZone") ?? [];
  } catch {
    return [];
  }
}

/** Sanitizes as-you-type: lowercases and drops anything outside [a-z0-9_] so the field
 * never shows a character the server would reject anyway. */
function cleanUsernameInput(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, USERNAME_MAX);
}

export interface SettingsUser {
  name: string;
  email: string;
  image: string | null;
  timezone: string;
  publicProfile: boolean;
  username: string;
  emailNotifications: boolean;
  bio: string;
  profileLinks: ProfileLink[];
}

/** Avatar upload/remove: separate from the rest of the form — it saves itself on
 * selection rather than waiting for the main Save button, same as most apps handle it. */
function AvatarField({ name, image }: { name: string; image: string | null }) {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);
  const objectUrl = useRef<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function pickFile() {
    fileInput.current?.click();
  }

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file later
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("That file isn't an image");
      return;
    }
    if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
      toast.error(`Images must be under ${Math.round(MAX_AVATAR_UPLOAD_BYTES / (1024 * 1024))}MB`);
      return;
    }

    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = URL.createObjectURL(file);
    setPreview(objectUrl.current);

    const formData = new FormData();
    formData.set("avatar", file);
    startTransition(async () => {
      const res = await uploadAvatar(formData);
      if (!res.ok) {
        toast.error(res.error);
        setPreview(null);
        return;
      }
      toast.success("Avatar updated");
      router.refresh();
    });
  }

  function remove() {
    startTransition(async () => {
      const res = await removeAvatar();
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setPreview(null);
      toast.success("Avatar removed");
      router.refresh();
    });
  }

  const shown = preview ?? image;
  return (
    <div className="flex items-center gap-4">
      <Avatar name={name} image={shown} size="xl" />
      <div className="grid gap-1.5">
        <input ref={fileInput} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
        <div className="flex gap-2">
          <Button type="button" variant="outline" size="sm" onClick={pickFile} disabled={pending}>
            {pending ? "Uploading…" : shown ? "Change photo" : "Upload photo"}
          </Button>
          {shown && (
            <Button type="button" variant="ghost" size="sm" onClick={remove} disabled={pending}>
              Remove
            </Button>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          JPEG, PNG, WebP or GIF, up to {Math.round(MAX_AVATAR_UPLOAD_BYTES / (1024 * 1024))}MB. Cropped to a square.
        </p>
      </div>
    </div>
  );
}

/** One row of the profile-links editor: a platform picker plus its URL. */
function LinksField({ links, onChange }: { links: ProfileLink[]; onChange: (next: ProfileLink[]) => void }) {
  function update(i: number, patch: Partial<ProfileLink>) {
    onChange(links.map((l, idx) => (idx === i ? { ...l, ...patch } : l)));
  }
  function remove(i: number) {
    onChange(links.filter((_, idx) => idx !== i));
  }
  function add() {
    if (links.length >= MAX_PROFILE_LINKS) return;
    onChange([...links, { platform: PROFILE_LINK_PLATFORMS[0].id, url: "" }]);
  }

  return (
    <div className="grid gap-1.5">
      <Label>Profile links</Label>
      <div className="grid gap-2">
        {links.map((link, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <select
              value={link.platform}
              onChange={(e) => update(i, { platform: e.target.value })}
              className="h-9 shrink-0 rounded-sm border bg-transparent px-2 text-sm outline-none focus-visible:border-ring"
            >
              {PROFILE_LINK_PLATFORMS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <Input
              value={link.url}
              onChange={(e) => update(i, { url: e.target.value })}
              placeholder="https://…"
              className="flex-1"
            />
            <Button type="button" variant="ghost" size="icon-xs" aria-label="Remove link" onClick={() => remove(i)}>
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        ))}
      </div>
      {links.length < MAX_PROFILE_LINKS && (
        <Button type="button" variant="outline" size="sm" className="w-fit" onClick={add}>
          Add link
        </Button>
      )}
      <p className="text-xs text-muted-foreground">AniList, VNDB, Bookmeter, Discord, X, or your own site. Up to {MAX_PROFILE_LINKS}.</p>
    </div>
  );
}

export function SettingsForm({ user }: { user: SettingsUser }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const zones = useMemo(() => timezoneList(), []);
  const [tz, setTz] = useState(user.timezone);
  const [publicProfile, setPublicProfile] = useState(user.publicProfile);
  const [emailNotifications, setEmailNotifications] = useState(user.emailNotifications);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [links, setLinks] = useState<ProfileLink[]>(user.profileLinks);
  const browserTz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";
  // useSyncExternalStore (not useState+useEffect) is React's sanctioned way to read a
  // browser-only value that must still render consistently during SSR: the server
  // snapshot ("") matches the client's first paint, then React itself reconciles to the
  // real origin right after hydration — no manual setState-in-effect, no mismatch.
  const origin = useSyncExternalStore(
    () => () => {},
    () => window.location.origin,
    () => "",
  );

  const trimmedUsername = username.trim();
  const usernameChanged = trimmedUsername !== user.username;
  const usernameLooksValid = trimmedUsername.length === 0 || USERNAME_RE.test(trimmedUsername);
  const usernameTooShort = trimmedUsername.length > 0 && trimmedUsername.length < USERNAME_MIN;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") ?? "").trim();

    if (trimmedUsername.length > 0 && (usernameTooShort || !usernameLooksValid)) {
      toast.error(`Username must be ${USERNAME_MIN}-${USERNAME_MAX} characters: lowercase letters, numbers and underscores.`);
      return;
    }

    startTransition(async () => {
      // Two calls, one Save button: bio rides authClient.updateUser (a plain
      // additionalField), links go through their own action since a structured array
      // isn't a type that mechanism supports (see updateProfileLinks in
      // src/actions/account.ts).
      const [userRes, linksRes] = await Promise.all([
        authClient.updateUser({
          name,
          timezone: tz,
          publicProfile,
          emailNotifications,
          bio: bio.trim(),
          // Only sent when actually changed and non-empty — an empty field never clears an
          // existing username (every account should always resolve to a profile URL).
          ...(usernameChanged && trimmedUsername.length > 0 ? { username: trimmedUsername } : {}),
        }),
        updateProfileLinks(links),
      ]);
      if (userRes.error) {
        // The username plugin's own errors ("Username is already taken. Please try
        // another.", too short/long, invalid format) already read as friendly toasts.
        toast.error(userRes.error.message ?? "Could not save");
        return;
      }
      if (!linksRes.ok) {
        toast.error(linksRes.error);
        return;
      }
      setLinks(linksRes.data.links);
      toast.success("Settings saved");
      router.refresh();
    });
  }

  return (
    <form onSubmit={submit} className="grid max-w-md gap-4">
      <AvatarField name={user.name} image={user.image} />
      <div className="grid gap-1.5">
        <Label htmlFor="s-email">Email</Label>
        <Input id="s-email" value={user.email} disabled />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="s-name">Name</Label>
        <Input id="s-name" name="name" defaultValue={user.name} required maxLength={80} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="s-username">Username</Label>
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-muted-foreground">{origin}/u/</span>
          <Input
            id="s-username"
            value={username}
            onChange={(e) => setUsername(cleanUsernameInput(e.target.value))}
            placeholder="your_handle"
            minLength={USERNAME_MIN}
            maxLength={USERNAME_MAX}
            aria-invalid={usernameTooShort || !usernameLooksValid}
            className="flex-1"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {USERNAME_MIN}-{USERNAME_MAX} characters: lowercase letters, numbers and underscores. This is your public
          profile URL, share it anywhere.
        </p>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="s-tz">Timezone</Label>
        <Input id="s-tz" list="tz-list" value={tz} onChange={(e) => setTz(e.target.value)} required />
        <datalist id="tz-list">
          {zones.map((z) => (
            <option key={z} value={z} />
          ))}
        </datalist>
        <p className="text-xs text-muted-foreground">
          Sessions are grouped into days using this zone.
          {browserTz && browserTz !== tz && (
            <>
              {" "}
              Your browser says{" "}
              <button type="button" className="underline underline-offset-4" onClick={() => setTz(browserTz)}>
                {browserTz}
              </button>
              .
            </>
          )}
        </p>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="s-bio">Bio</Label>
        <textarea
          id="s-bio"
          value={bio}
          onChange={(e) => setBio(e.target.value.slice(0, BIO_MAX_LENGTH))}
          maxLength={BIO_MAX_LENGTH}
          rows={3}
          placeholder="A line or two about what you're learning and why."
          className="min-h-16 resize-y rounded-sm border bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring"
        />
        <p className="text-xs text-muted-foreground">
          {bio.length}/{BIO_MAX_LENGTH} — shown on your profile page.
        </p>
      </div>
      <LinksField links={links} onChange={setLinks} />
      <label className="flex items-start gap-3 rounded-lg border p-3">
        <input type="checkbox" className="mt-1 size-4 accent-[var(--viz-series)]" checked={publicProfile} onChange={(e) => setPublicProfile(e.target.checked)} />
        <span className="grid gap-0.5 text-sm">
          <span className="font-medium">Public profile</span>
          <span className="text-xs text-muted-foreground">Appear on rankings and let others open your profile page. Your email is never shown. Turn off to be fully private.</span>
        </span>
      </label>
      <label className="flex items-start gap-3 rounded-lg border p-3">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--viz-series)]"
          checked={emailNotifications}
          onChange={(e) => setEmailNotifications(e.target.checked)}
        />
        <span className="grid gap-0.5 text-sm">
          <span className="font-medium">Email notifications</span>
          <span className="text-xs text-muted-foreground">Get an email when someone new follows you. You can also turn this off from the link in that email.</span>
        </span>
      </label>
      <div>
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Save"}
        </Button>
      </div>
    </form>
  );
}
