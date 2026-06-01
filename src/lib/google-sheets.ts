export type RsvpEntry = {
  name: string;
  attendance: string;
  submittedAt: string;
};

function parseWebhookResponse(text: string): { ok?: boolean; error?: string } {
  try {
    return JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    return {};
  }
}

export async function appendRsvpToSheet(entry: RsvpEntry): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
  }

  const payload: Record<string, string> = {
    name: entry.name,
    attendance: entry.attendance,
    submittedAt: entry.submittedAt,
  };

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET?.trim();
  if (secret) payload.secret = secret;

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  const text = await res.text();
  const data = parseWebhookResponse(text);

  if (data.error === "unauthorized") {
    throw new Error(
      "Webhook secret mismatch. Set the same value in Apps Script (WEBHOOK_SECRET) and .env (GOOGLE_SHEETS_WEBHOOK_SECRET), then redeploy.",
    );
  }

  if (data.ok) return;

  if (!res.ok || text.includes("<!DOCTYPE html>")) {
    throw new Error(
      "Invalid or expired Google Sheets webhook URL. In Apps Script: Deploy → Manage deployments → copy the Web app URL ending in /exec, update GOOGLE_SHEETS_WEBHOOK_URL, restart the dev server.",
    );
  }

  throw new Error(data.error ?? `Google Sheets webhook failed (${res.status})`);
}
