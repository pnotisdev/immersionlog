import "server-only";
import { button, fallbackLink, heading, note, paragraph, renderEmail, rows, signature, stats, steps } from "./email-layout";
import { formatDuration } from "./format";
import type { WeeklyRecap } from "./recap";
import { getSiteUrl } from "./site";

/**
 * Every email the app sends: subject, plain text and designed HTML, written together so
 * the two bodies can't drift apart. Layout and escaping live in ./email-layout.ts.
 */
export interface EmailContent {
  subject: string;
  text: string;
  html: string;
}

const firstName = (name: string) => name.trim().split(/\s+/)[0] || "there";

const ACCOUNT_REASON = "You're getting this because of your immersionlog account.";
const NOTIFY_REASON = "You're getting this because email notifications are on in your settings.";

export function verificationEmail(name: string, url: string): EmailContent {
  const subject = "Confirm your email for immersionlog";
  const text = [
    `Hi ${firstName(name)},`,
    "",
    "Confirm this is your email address to finish setting up your immersionlog account.",
    "",
    `Confirm it here: ${url}`,
    "",
    "This link expires in 1 hour. If you didn't create this account, you can ignore this email.",
  ].join("\n");
  const html = renderEmail({
    preheader: "One click and your account is ready.",
    reason: ACCOUNT_REASON,
    body: [
      heading("Confirm your email"),
      paragraph(`Hi ${firstName(name)}, confirm this is your address and your account is ready to use.`),
      button("Confirm email", url),
      note("The link expires in 1 hour. If you didn't sign up for immersionlog, ignore this email and nothing happens."),
      fallbackLink(url),
    ],
  });
  return { subject, text, html };
}

export function resetPasswordEmail(name: string, url: string): EmailContent {
  const subject = "Reset your immersionlog password";
  const text = [
    `Hi ${firstName(name)},`,
    "",
    "Someone (hopefully you) asked to reset the password for your immersionlog account.",
    "",
    `Reset it here: ${url}`,
    "",
    "This link expires in 1 hour. If you didn't request this, you can ignore this email.",
  ].join("\n");
  const html = renderEmail({
    preheader: "The link is good for one hour.",
    reason: ACCOUNT_REASON,
    body: [
      heading("Reset your password"),
      paragraph(`Hi ${firstName(name)}, someone (hopefully you) asked to reset the password for your immersionlog account.`),
      button("Choose a new password", url),
      note("The link expires in 1 hour. If you didn't ask for this, ignore this email and your password stays the same."),
      fallbackLink(url),
    ],
  });
  return { subject, text, html };
}

export function newFollowerEmail(name: string, followerName: string, profileUrl: string | null, unsubscribeUrl: string): EmailContent {
  const subject = `${followerName} started following you on immersionlog`;
  const text = [
    `Hi ${firstName(name)},`,
    "",
    `${followerName} just started following you on immersionlog.`,
    ...(profileUrl ? ["", `See their profile: ${profileUrl}`] : []),
    "",
    "--",
    "Don't want these emails? Unsubscribe here (this also turns off weekly recap emails):",
    unsubscribeUrl,
  ].join("\n");
  const html = renderEmail({
    preheader: `${followerName} will see your sessions in their feed.`,
    reason: NOTIFY_REASON,
    unsubscribeUrl,
    body: [
      heading("You have a new follower"),
      paragraph(`**${followerName}** started following you. Your sessions will show up in their feed.`),
      ...(profileUrl ? [button("See their profile", profileUrl)] : []),
    ],
  });
  return { subject, text, html };
}

export function weeklyRecapEmail(name: string, recap: WeeklyRecap, unsubscribeUrl: string): EmailContent {
  const subject = "Your week on immersionlog";
  const dashboard = `${getSiteUrl()}/dashboard`;
  let delta: number | null = null;
  if (recap.seconds > 0 && recap.previousSeconds > 0) {
    const d = Math.round(((recap.seconds - recap.previousSeconds) / recap.previousSeconds) * 100);
    if (Math.abs(d) >= 5) delta = d;
  }
  const deltaLine = delta === null ? null : `That's ${delta > 0 ? `${delta}% more` : `${Math.abs(delta)}% less`} than the week before.`;

  const lines: string[] = [`Hi ${firstName(name)},`, ""];
  if (recap.seconds === 0) {
    lines.push("You didn't log any immersion time this last week. No pressure: pick something you enjoy and hit start whenever you're ready.");
  } else {
    lines.push(`You logged ${formatDuration(recap.seconds)} of Japanese immersion this last week.`);
    if (deltaLine) lines.push(deltaLine);
    if (recap.topItems.length > 0) {
      lines.push("", "What you spent the most time on:");
      for (const item of recap.topItems) lines.push(`  - ${item.title} (${formatDuration(item.seconds)})`);
    }
    if (recap.rank) lines.push("", `You're #${recap.rank} on the leaderboard this week.`);
  }
  if (recap.activeGoals.length > 0) {
    lines.push("", "Active goals:");
    for (const g of recap.activeGoals) lines.push(`  - ${g.title}: ${g.percent}%`);
  }
  lines.push("", "--", "Don't want these weekly emails? Unsubscribe here (this also turns off new-follower emails):", unsubscribeUrl);

  const body =
    recap.seconds === 0
      ? [
          heading("A quiet week"),
          paragraph("You didn't log anything in the last 7 days. No pressure: one episode or a few pages is enough to get going again."),
          button("Log a session", dashboard),
        ]
      : [
          heading("Your week in Japanese"),
          stats([
            { label: "Last 7 days", value: formatDuration(recap.seconds) },
            ...(recap.rank ? [{ label: "Leaderboard", value: `#${recap.rank}` }] : []),
          ]),
          ...(deltaLine ? [paragraph(deltaLine)] : []),
          ...(recap.topItems.length ? [rows(recap.topItems.map((t) => ({ label: t.title, value: formatDuration(t.seconds) })), "Most time on")] : []),
          ...(recap.activeGoals.length ? [rows(recap.activeGoals.map((g) => ({ label: g.title, value: `${g.percent}%` })), "Goals")] : []),
          button("Open your dashboard", dashboard),
        ];

  const html = renderEmail({
    preheader: recap.seconds === 0 ? "Nothing logged this week, and that's fine." : `${formatDuration(recap.seconds)} of immersion in the last 7 days.`,
    reason: NOTIFY_REASON,
    unsubscribeUrl,
    body,
  });
  return { subject, text: lines.join("\n"), html };
}

/**
 * For accounts that signed up but never logged a session. Written as a note from the
 * person running the site, because that's what it is: short and concrete.
 */
export function firstLogEmail(name: string, unsubscribeUrl: string, sender: { name: string; role: string }): EmailContent {
  const subject = "Logging your first session on immersionlog";
  const url = `${getSiteUrl()}/dashboard`;
  const hi = `Hi ${firstName(name)},`;
  const intro = "You made an immersionlog account but haven't logged anything yet, so here's the short version of how it works.";
  const how = [
    {
      title: "Log something you already did.",
      body: "Watched an episode, read a few pages, had a YouTube video on? Press **Log**, pick what it was and roughly how long. Rough is fine.",
    },
    {
      title: "Paste a link if searching is a hassle.",
      body: "Links from AniList, YouTube, BOOK☆WALKER, Jiten.moe and a few other sites become a proper entry with the title and cover.",
    },
    {
      title: "Use the timer next time.",
      body: "Start it before you begin and stop it when you're done. You can pause it if you get interrupted.",
    },
  ];
  const after = "After a few days you'll have a streak, a heatmap and a real number for how many hours you put in each week.";

  const text = [
    hi,
    "",
    intro,
    "",
    ...how.flatMap((h, i) => [`${i + 1}. ${h.title} ${h.body.replace(/\*\*/g, "")}`, ""]),
    `Log your first session: ${url}`,
    "",
    after,
    "",
    sender.name,
    sender.role,
    "",
    "--",
    "Don't want emails from immersionlog? Unsubscribe here:",
    unsubscribeUrl,
  ].join("\n");

  const html = renderEmail({
    preheader: "It takes about 20 seconds, and rough times are fine.",
    reason: NOTIFY_REASON,
    unsubscribeUrl,
    body: [
      paragraph(hi),
      paragraph(intro),
      steps(how),
      button("Log your first session", url),
      paragraph(after),
      signature(sender.name, sender.role),
    ],
  });
  return { subject, text, html };
}
