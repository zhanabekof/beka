"use client";

import Image from "next/image";
import { EVENT } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";
import { useI18n } from "./I18nProvider";

function getMonthGrid(year: number, month: number) {
  const firstWeekday = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  return { firstWeekday, daysInMonth };
}

function HighlightedDay({ day }: { day: number }) {
  return (
    <span className="relative flex h-20 w-20 items-center justify-center text-[15px] font-large leading-none">
      <svg
        className="absolute left-0 top-1/2 h-20 w-20 -translate-x-6 -translate-y-1/2 text-pink/90"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          d="M20 7c8.5 0 12.5 6.2 12.5 11.8 0 4.2-1.8 7.8-4.8 10.5-2.2 2-5.2 3.4-7.7 3.4s-5.5-1.4-7.7-3.4C9.3 26.6 7.5 23 7.5 18.8 7.5 13.2 11.5 7 20 7z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="1.6 2.2"
          d="M20 9.5c6.8 0 10 4.8 10 9.3 0 3.4-1.4 6.4-3.8 8.6-1.8 1.6-4.1 2.8-6.2 2.8s-4.4-1.2-6.2-2.8C11.4 25.2 10 22.2 10 18.8c0-4.5 3.2-9.3 10-9.3z"
        />
      </svg>
      <span className="relative text-[20px] font-large leading-none tracking-[0.08em]">
        {day}
      </span>
    </span>
  );
}

export function EventCalendar() {
  const { messages } = useI18n();
  const { year, month, day: eventDay } = EVENT.date;
  const { firstWeekday, daysInMonth } = getMonthGrid(year, month);

  const leading = Array.from({ length: firstWeekday }, (_, i) => (
    <span key={`empty-${i}`} aria-hidden />
  ));
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return (
      <span key={day} className="flex h-8 items-center justify-center">
        {day === eventDay ? (
          <HighlightedDay day={day} />
        ) : (
          <span className="text-[20px] font-large leading-none">{day}</span>
        )}
      </span>
    );
  });

  return (
    <div className="relative w-full overflow-hidden bg-olive-light p-20 text-white">
      <Image
        src={ASSETS.calendarCorner}
        alt=""
        width={120}
        height={80}
        className="pointer-events-none absolute -bottom-4 -left-6 h-16 w-24 opacity-20 brightness-0 invert"
        unoptimized
      />

      <Image
        src={ASSETS.calendarBird}
        alt=""
        width={100}
        height={50}
        className="pointer-events-none absolute left-3 top-16 opacity-95"
        unoptimized
      />
      <Image
        src={ASSETS.calendarBird}
        alt=""
        width={100}
        height={50}
        className="pointer-events-none absolute bottom-16 right-3 -scale-x-100 rotate-180 opacity-95"
        unoptimized
      />

      <div className="relative z-10 px-2">
        <div className="flex items-end justify-between px-1 text-lg font-large tracking-[0.12em]">
          <span>{messages.event.monthLabel}</span>
          <span>{year}</span>
        </div>

        <div className="mx-1 mt-5 rounded-full border border-white/85 px-2 py-2">
          <div className="grid grid-cols-7 gap-1 text-center text-[15px] font-large tracking-[0.08em]">
            {messages.weekdays.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-x-1 gap-y-2 text-center">
          {leading}
          {days}
        </div>

        <p className="mt-6 text-center text-[25px] text-sm font-large tracking-[0.28em]">
          {messages.text.timePrefix} {EVENT.time}
        </p>
      </div>
    </div>
  );
}
