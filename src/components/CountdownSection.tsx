"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/constants";
import { COUNTDOWN_LABELS } from "@/lib/content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calcTimeLeft(): TimeLeft {
  const diff = new Date(EVENT.countdownDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const units = [
    { value: values.days, label: COUNTDOWN_LABELS[0] },
    { value: values.hours, label: COUNTDOWN_LABELS[1] },
    { value: values.minutes, label: COUNTDOWN_LABELS[2] },
    { value: values.seconds, label: COUNTDOWN_LABELS[3] },
  ];

  return (
    <section className="bg-cream px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[320px] text-center">
        <div className="grid grid-cols-4 gap-2">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center gap-1">
              <span className="text-6xl font-medium tracking-wider text-olive lg:text-3xl">
                {pad(unit.value)}
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-olive-light lg:text-[10px] m-5">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
