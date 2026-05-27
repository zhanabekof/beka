"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EVENT } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";

export function DressCodeSection() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = ASSETS.dressSwatches.map((_, i) =>
      window.setTimeout(() => setVisibleCount(i + 1), 400 + i * 300),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream px-6 py-16">
      <Image
        src={ASSETS.tableDecor}
        alt=""
        width={600}
        height={200}
        className="pointer-events-none absolute -right-8 top-4 h-auto w-48 opacity-30"
      />

      <div className="relative mx-auto max-w-lg space-y-8 text-center">
        <p className="animate-fade-in-up text-base leading-7 text-olive sm:text-lg">
          Мерекелік атмосфераны қолдап, киім таңдауда осы төмендегі
          <br />
          түстерді пайдалансаңыздар, қуанышты болар едік.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {ASSETS.dressSwatches.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={72}
              height={72}
              className={`h-14 w-14 rounded-full object-cover shadow-sm transition-all duration-700 ${
                i < visibleCount
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        <p className="animate-fade-in-up text-base leading-7 text-olive sm:text-lg [animation-delay:200ms]">
          өз образдарыңызда қызыл және қара түсті қолданбауды сұраймыз.
        </p>

        <p className="animate-fade-in-up text-2xl font-semibold tracking-[0.2em] text-olive-light sm:text-3xl [animation-delay:400ms]">
          «{EVENT.dressCode}»
        </p>
      </div>
    </section>
  );
}
