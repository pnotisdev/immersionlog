/**
 * One-off onboarding nudge (src/lib/emails.ts firstLogEmail) for accounts that
 * confirmed their email and signed in, but never logged a session.
 *
 *   pnpm email:first-log                          # dry run: list who would get it
 *   pnpm email:first-log --test you@example.com   # send one copy to yourself
 *   pnpm email:first-log --send
 *
 * Skips demo accounts and anyone with email notifications off (the email carries an
 * unsubscribe link). Not idempotent: running --send twice sends twice.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, exists, not, sql } from "drizzle-orm";
import { db } from "../src/db";
import { immersionSessions, session, user } from "../src/db/schema";
import { sendEmail } from "../src/lib/email";
import { firstLogEmail } from "../src/lib/emails";
import { getSiteUrl } from "../src/lib/site";
import { createUnsubscribeToken } from "../src/lib/unsubscribe-token";

const SENDER = { name: "Pontus", role: "Made immersionlog" };

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function main() {
  const testTo = arg("--test");
  const replyTo = arg("--reply-to");
  const send = process.argv.includes("--send");

  const recipients = await db
    .select({ id: user.id, name: user.name, email: user.email, createdAt: user.createdAt })
    .from(user)
    .where(
      and(
        eq(user.emailVerified, true),
        eq(user.isDemo, false),
        eq(user.emailNotifications, true),
        exists(db.select({ x: sql`1` }).from(session).where(eq(session.userId, user.id))),
        not(exists(db.select({ x: sql`1` }).from(immersionSessions).where(eq(immersionSessions.userId, user.id)))),
      ),
    );

  console.log(`${recipients.length} account(s) signed in but never logged a session:`);
  for (const r of recipients) console.log(`  ${r.name} <${r.email}>  signed up ${r.createdAt.toISOString().slice(0, 10)}`);

  if (testTo) {
    // A real unsubscribe token would unsubscribe whoever it belongs to; the test copy's link is inert.
    const unsubscribeUrl = `${getSiteUrl()}/api/unsubscribe?token=test`;
    const content = firstLogEmail(recipients[0]?.name ?? "Pontus", unsubscribeUrl, SENDER);
    await sendEmail({ to: testTo, ...content, subject: `[Test] ${content.subject}`, replyTo });
    console.log(`\nSent a test copy to ${testTo}${replyTo ? ` (reply-to ${replyTo})` : ""}.`);
    return;
  }
  if (!send) {
    console.log("\nDry run. Pass --test <email> to preview, or --send to email everyone above.");
    return;
  }

  for (const r of recipients) {
    const unsubscribeUrl = `${getSiteUrl()}/api/unsubscribe?token=${createUnsubscribeToken(r.id)}`;
    try {
      await sendEmail({ to: r.email, unsubscribeUrl, replyTo, ...firstLogEmail(r.name, unsubscribeUrl, SENDER) });
      console.log(`sent    ${r.email}`);
    } catch (err) {
      console.error(`FAILED  ${r.email}:`, err instanceof Error ? err.message : err);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
