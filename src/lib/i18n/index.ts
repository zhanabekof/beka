import { kk } from "./messages/kk";
import { ru } from "./messages/ru";
import type { AttendanceKey, Locale, Messages } from "./types";
import { ATTENDANCE_KEYS, LOCALES } from "./types";

export { ATTENDANCE_KEYS, LOCALES };
export type { AttendanceKey, Locale, Messages };

const messages: Record<Locale, Messages> = { kk, ru };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getAttendanceLabel(
  key: AttendanceKey,
  locale: Locale = "kk",
): string {
  return getMessages(locale).attendance[key];
}

export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "kk";
  const lang = navigator.language.toLowerCase();
  return lang.startsWith("ru") ? "ru" : "kk";
}
