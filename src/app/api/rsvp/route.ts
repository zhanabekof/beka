import { NextResponse } from "next/server";
import {
  ATTENDANCE_KEYS,
  getAttendanceLabel,
  isLocale,
  type AttendanceKey,
} from "@/lib/i18n";
import { appendRsvpToSheet } from "@/lib/google-sheets";

type RsvpPayload = {
  name: string;
  attendanceKey: string;
  locale?: string;
};

function isValidPayload(body: unknown): body is RsvpPayload {
  if (!body || typeof body !== "object") return false;
  const { name, attendanceKey } = body as RsvpPayload;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    ATTENDANCE_KEYS.includes(attendanceKey as AttendanceKey)
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

  const locale = body.locale && isLocale(body.locale) ? body.locale : "kk";
  const attendance = getAttendanceLabel(
    body.attendanceKey as AttendanceKey,
    locale,
  );

  const entry = {
    name: body.name.trim(),
    attendance,
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
