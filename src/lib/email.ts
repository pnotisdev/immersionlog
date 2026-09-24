import "server-only";
import { Resend } from "resend";
import { escapeHtml } from "./email-layout";

// Cached the same way as src/db/index.ts: `next dev` hot reloads shouldn't
// construct a new client (or re-check env) on every module re-evaluation.
const g = globalThis as unknown as { __immersionlogResend?: Resend };

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return g.__immersionlogResend ?? (g.__immersionlogResend = new Resend(key));
}

export type SendEmailInput = {
  to: string;
  subject: string;
  /** Plain text body, always sent alongside the HTML. */
  text: string;
  /** Designed HTML body (src/lib/emails.ts). Without one, `text` is converted naively. */
  html?: string;
  /** For notification emails: one-click unsubscribe (RFC 8058) via List-Unsubscribe headers. */
  unsubscribeUrl?: string;
  replyTo?: string;
};

/**
 * Sends a plain-text email via Resend when RESEND_API_KEY is configured.
 *
 * In local dev (no key set) this logs the email to the console instead of
 * throwing, so auth flows that depend on email (password reset, email
 * verification) keep working without any provider configured.
 */
export async function sendEmail({ to, subject, text, html, unsubscribeUrl, replyTo }: SendEmailInput): Promise<void> {
  const client = getClient();
  const from = process.env.EMAIL_FROM || "immersionlog <onboarding@resend.dev>";

  if (!client) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        `[email] RESEND_API_KEY is not set — cannot send "${subject}" to ${to}. Set RESEND_API_KEY (and EMAIL_FROM) to enable outgoing email in production.`,
      );
      return;
    }
    console.log(`\n[email:dev] Would send "${subject}" to ${to}\n${"-".repeat(40)}\n${text}\n${"-".repeat(40)}\n`);
    return;
  }

  const body =
    html ??
    text
      .split("\n")
      .map((line) => (line.trim() ? `<p>${escapeHtml(line)}</p>` : ""))
      .join("\n");
  const headers = unsubscribeUrl
    ? { "List-Unsubscribe": `<${unsubscribeUrl}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" }
    : undefined;

  const { error } = await client.emails.send({ from, to, subject, text, html: body, headers, ...(replyTo ? { replyTo } : {}) });
  if (error) {
    console.error(`[email] Resend failed to send "${subject}" to ${to}:`, error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
