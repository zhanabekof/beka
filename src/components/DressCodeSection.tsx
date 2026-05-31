"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EVENT } from "@/lib/constants";
import { TEXT } from "@/lib/content";
import { ASSETS } from "@/lib/assets";

export function DressCodeSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [paletteCount, setPaletteCount] = useState(0);

  useEffect(() => {
    const swatchTimers = ASSETS.dressSwatches.map((_, i) =>
      window.setTimeout(() => setVisibleCount(i + 1), 400 + i * 300),
    );
    const paletteTimers = ASSETS.drinkPalette.map((_, i) =>
      window.setTimeout(() => setPaletteCount(i + 1), 800 + i * 300),
    );
    return () => {
      swatchTimers.forEach(clearTimeout);
      paletteTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream px-5 py-14 lg:px-10 lg:py-20">
      <Image
        src={ASSETS.tableDecor}
        alt=""
        width={600}
        height={200}
        className="pointer-events-none absolute -right-4 top-4 h-auto w-48 opacity-25 lg:-right-8 lg:top-8 lg:w-64 lg:opacity-35"
      />

      <div className="relative mx-auto max-w-[320px] space-y-10 text-center lg:max-w-2xl lg:space-y-12">
        <p className="animate-fade-in-up whitespace-pre-line text-base leading-8 text-olive lg:text-xl lg:leading-9">
          {TEXT.dressIntro}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {ASSETS.dressSwatches.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={72}
              height={72}
              className={`h-14 w-14 rounded-full object-cover shadow-md transition-all duration-700 lg:h-20 lg:w-20 ${
                i < visibleCount
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-6 scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        <p className="animate-fade-in-up text-base leading-8 text-olive lg:text-xl lg:leading-9 [animation-delay:200ms]">
          {TEXT.dressAvoid}
        </p>

        <p className="animate-fade-in-up text-2xl font-semibold tracking-[0.2em] text-olive-light lg:text-4xl [animation-delay:400ms]">
          «{EVENT.dressCode}»
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:gap-4">
          {ASSETS.drinkPalette.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={48}
              height={48}
              className={`h-10 w-10 transition-all duration-700 lg:h-12 lg:w-12 ${
                i < paletteCount
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
