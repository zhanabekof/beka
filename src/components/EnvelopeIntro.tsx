"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ASSETS } from "@/lib/assets";

type EnvelopeIntroProps = {
  onOpen: () => void;
};

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<"closed" | "opening" | "done">("closed");

  const openEnvelope = useCallback(() => {
    if (phase !== "closed") return;
    setPhase("opening");
    window.setTimeout(() => {
      setPhase("done");
      onOpen();
    }, 1400);
  }, [onOpen, phase]);

  useEffect(() => {
    if (phase !== "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") openEnvelope();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openEnvelope, phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-700 ${
        phase === "opening" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={phase === "opening"}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-olive/15 via-cream to-cream" />

      <button
        type="button"
        onClick={openEnvelope}
        className="relative mx-auto w-full max-w-sm px-6 focus:outline-none"
        aria-label="Конвертті ашу"
      >
        <div
          className={`relative transition-transform duration-[1200ms] ease-out ${
            phase === "opening" ? "scale-105 -translate-y-4" : "scale-100"
          }`}
        >
          <Image
            src={ASSETS.envelope}
            alt=""
            width={640}
            height={480}
            priority
            className="mx-auto h-auto w-full drop-shadow-lg"
          />

          <Image
            src={ASSETS.waxSeal}
            alt=""
            width={120}
            height={120}
            className={`absolute bottom-[18%] left-1/2 h-[22%] w-auto -translate-x-1/2 transition-all duration-700 ${
              phase === "opening"
                ? "scale-150 opacity-0"
                : "animate-pulse opacity-100"
            }`}
          />
        </div>

        <p
          className={`mt-6 text-center text-sm uppercase tracking-[0.3em] text-olive transition-opacity duration-500 ${
            phase === "opening" ? "opacity-0" : "opacity-80"
          }`}
        >
          ашу үшін басыңыз
        </p>
      </button>

      <Image
        src={ASSETS.scrollArrows}
        alt=""
        width={80}
        height={80}
        className={`absolute bottom-8 left-1/2 h-10 w-10 -translate-x-1/2 animate-bounce-soft opacity-40 ${
          phase === "opening" ? "opacity-0" : ""
        }`}
      />
    </div>
  );
}
