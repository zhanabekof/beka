"use client";

import { FormEvent, useState } from "react";
import { ATTENDANCE_KEYS, type AttendanceKey } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

export function RsvpForm() {
  const { locale, messages } = useI18n();
  const { form, text, attendance: attendanceLabels } = messages;

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<AttendanceKey | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !attendance) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendanceKey: attendance,
          locale,
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch {
      setError(text.rsvpError);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-olive/20 bg-white/60 px-6 py-10 text-center">
        <p className="text-lg italic text-olive">{text.rsvpSuccess}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative space-y-8 text-left transition-opacity duration-300 ${submitting ? "pointer-events-none opacity-60" : ""}`}
      aria-busy={submitting}
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs uppercase tracking-wider text-olive-light"
        >
          {form.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder={form.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-olive/30 bg-transparent px-1 py-2 text-olive outline-none placeholder:text-olive/40 focus:border-olive"
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="mb-3 text-xs uppercase tracking-wider text-olive-light">
          {form.attendanceLabel}
        </legend>
        {ATTENDANCE_KEYS.map((key) => (
          <label
            key={key}
            className="flex cursor-pointer items-start gap-3 text-olive"
          >
            <input
              type="radio"
              name="attendance"
              value={key}
              required
              checked={attendance === key}
              onChange={() => setAttendance(key)}
              className="mt-1 accent-olive"
            />
            <span className="text-base leading-snug lg:text-sm">
              {attendanceLabels[key]}
            </span>
          </label>
        ))}
      </fieldset>

      {error && (
        <p className="text-center text-sm text-red-700/80" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="mx-auto flex w-full max-w-xs items-center justify-center gap-3 border border-[#70716f] bg-white py-3 text-sm font-semibold uppercase tracking-[0.15em] text-pink transition hover:bg-pink/10 disabled:cursor-wait lg:text-base"
      >
        {submitting ? (
          <>
            <span
              className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-pink/25 border-t-pink"
              aria-hidden
            />
            <span>{text.rsvpSubmitting}</span>
          </>
        ) : (
          text.rsvpButton
        )}
      </button>
    </form>
  );
}
