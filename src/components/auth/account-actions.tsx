"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Fetches `url` and saves the response as `filename` — shared by every export button below. */
async function downloadFile(url: string, filename: string): Promise<boolean> {
  const res = await fetch(url);
  if (!res.ok) return false;
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
  return true;
}

/** Downloads the signed-in user's own data as a JSON file. */
export function ExportDataButton() {
  const [pending, setPending] = useState(false);

  async function download() {
    setPending(true);
    try {
      if (!(await downloadFile("/api/account/export", "immersionlog-export.json"))) {
        toast.error("Could not export your data");
      }
    } catch {
      toast.error("Could not export your data");
    } finally {
      setPending(false);
    }
  }

  return (
    <Button type="button" variant="outline" onClick={download} disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : <Download />}
      {pending ? "Preparing…" : "Export my data (JSON)"}
    </Button>
  );
}

const CSV_EXPORTS = [
  { key: "sessions", label: "Sessions CSV", url: "/api/account/export/sessions.csv" },
  { key: "library", label: "Library CSV", url: "/api/account/export/library.csv" },
  { key: "milestones", label: "Milestones CSV", url: "/api/account/export/milestones.csv" },
] as const;

/** One CSV per category, same download mechanics as ExportDataButton — see src/lib/csv.ts for the format. */
export function CsvExportButtons() {
  const [pending, setPending] = useState<string | null>(null);

  async function download(key: string, url: string, filename: string) {
    setPending(key);
    try {
      if (!(await downloadFile(url, filename))) toast.error("Could not export that file");
    } catch {
      toast.error("Could not export that file");
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {CSV_EXPORTS.map((e) => (
        <Button
          key={e.key}
          type="button"
          variant="outline"
          size="sm"
          onClick={() => download(e.key, e.url, `immersionlog-${e.key}.csv`)}
          disabled={pending !== null}
        >
          {pending === e.key ? <Loader2 className="animate-spin" /> : <Download />}
          {e.label}
        </Button>
      ))}
    </div>
  );
}

const CONFIRM_PHRASE = "DELETE";

/** Confirm-before-destructive-action dialog: requires the account password and typing DELETE. */
export function DeleteAccountDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [pending, startTransition] = useTransition();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    if (confirmText !== CONFIRM_PHRASE) {
      toast.error(`Type ${CONFIRM_PHRASE} to confirm`);
      return;
    }
    startTransition(async () => {
      const res = await authClient.deleteUser({ password });
      if (res.error) {
        toast.error(res.error.message ?? "Could not delete account");
        return;
      }
      toast.success("Your account has been deleted");
      setOpen(false);
      router.push("/");
      router.refresh();
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setConfirmText("");
      }}
    >
      <DialogTrigger render={<Button type="button" variant="destructive" />}>Delete my account</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete your account</DialogTitle>
          <DialogDescription>
            This permanently deletes your profile, immersion sessions, library, goals, follows and club memberships.
            This cannot be undone. If you own a club with other members, ownership is transferred to the
            longest-standing member instead of deleting the club for everyone.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="delete-password">Current password</Label>
            <Input id="delete-password" name="password" type="password" autoComplete="current-password" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="delete-confirm">
              Type <span className="font-mono font-semibold">{CONFIRM_PHRASE}</span> to confirm
            </Label>
            <Input
              id="delete-confirm"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <DialogFooter showCloseButton>
            <Button type="submit" variant="destructive" disabled={pending || confirmText !== CONFIRM_PHRASE}>
              {pending ? "Deleting…" : "Permanently delete my account"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
