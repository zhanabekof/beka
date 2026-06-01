import { NextResponse } from "next/server";
import { ATTENDANCE_OPTIONS } from "@/lib/constants";
import { appendRsvpToSheet } from "@/lib/google-sheets";

type RsvpPayload = {
  name: string;
  attendance: string;
};

function isValidPayload(body: unknown): body is RsvpPayload {
  if (!body || typeof body !== "object") return false;
  const { name, attendance } = body as RsvpPayload;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    ATTENDANCE_OPTIONS.includes(attendance as (typeof ATTENDANCE_OPTIONS)[number])
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const entry = {
    name: body.name.trim(),
    attendance: body.attendance,
    submittedAt: new Date().toISOString(),
  };

  try {
    await appendRsvpToSheet(entry);
  } catch (err) {
    console.error("RSVP save failed:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
