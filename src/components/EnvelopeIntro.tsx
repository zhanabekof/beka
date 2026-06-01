"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { FallingPetals } from "./FallingPetals";
import { useI18n } from "./I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const STORAGE_KEY = "beka-invite-opened";

type EnvelopeIntroProps = {
  onOpen: () => void;
};

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const { messages } = useI18n();
  const [phase, setPhase] = useState<"closed" | "opening" | "done">("closed");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const openEnvelope = useCallback(() => {
    if (phase !== "closed") return;
    setPhase("opening");
    sessionStorage.setItem(STORAGE_KEY, "1");
    window.setTimeout(() => {
      setPhase("done");
      onOpen();
    }, 1500);
  }, [onOpen, phase]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEnvelope();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openEnvelope, phase]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      return;
    }
    void audio.play();
  }

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center bg-[#f2f2f2] transition-opacity duration-700 ${
        phase === "opening" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={messages.aria.envelope}
    >
      <audio ref={audioRef} src={ASSETS.backgroundMusic} loop preload="none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,#ffffff_0%,#f2f2f2_70%)]" />

      <div className="absolute left-1/2 top-5 z-40 -translate-x-1/2 sm:top-6">
        <LanguageSwitcher />
      </div>

      <FallingPetals />

      <div className="pointer-events-none absolute -left-8 top-4 z-10 animate-header-flower-tl sm:top-4">
        <Image
          src={ASSETS.flower}
          alt=""
          width={220}
          height={220}
          className="h-auto w-[180px] rotate-[8deg] opacity-75 sm:w-[220px]"
        />
      </div>
      <div className="pointer-events-none absolute -bottom-2 -right-5 z-10 animate-header-flower-br">
        <Image
          src={ASSETS.flower}
          alt=""
          width={150}
          height={150}
          className="h-auto w-[120px] -rotate-[12deg] opacity-70 sm:w-[145px]"
        />
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        className="absolute right-4 top-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-pink/95 text-white shadow-md ring-4 ring-pink/20 sm:right-6 sm:top-6"
        aria-label={playing ? messages.aria.musicPause : messages.aria.musicPlay}
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        type="button"
        onClick={openEnvelope}
        className="relative z-10 mt-[170px] w-full max-w-[370px] px-3 focus:outline-none sm:mt-[160px] sm:px-5"
        aria-label={messages.aria.openEnvelope}
      >
        <div
          className={`relative animate-header-appear transition-all duration-[1200ms] ease-out ${
            phase === "opening" ? "scale-[1.03] -translate-y-6" : "scale-100"
          }`}
        >
          <Image
            src={ASSETS.envelopeClosed}
            alt=""
            width={800}
            height={600}
            priority
            className={`mx-auto h-auto w-full drop-shadow-xl transition-opacity duration-500 ${
              phase === "opening" ? "opacity-0" : "opacity-100"
            }`}
          />
          </div>

        <p
          className={`mt-8 text-center text-xs uppercase tracking-[0.35em] text-olive sm:text-sm lg:text-base ${
            phase === "opening" ? "opacity-0" : "opacity-90"
          }`}
        >
          {messages.text.openEnvelope}
        </p>
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-olive/45" />
    </div>
  );
}

export function wasInviteOpened(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}
