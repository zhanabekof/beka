"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/constants";

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

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-3xl font-medium tracking-widest text-olive sm:text-4xl">
          {pad(values.days)} : {pad(values.hours)} : {pad(values.minutes)} :{" "}
          {pad(values.seconds)}
        </p>
        <div className="mt-4 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-olive-light sm:text-sm">
          <span>күн</span>
          <span>сағат</span>
          <span>минут</span>
          <span>секунд</span>
        </div>
      </div>
    </section>
  );
}
