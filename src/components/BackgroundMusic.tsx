"use client";

import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { useI18n } from "./I18nProvider";

type BackgroundMusicProps = {
  variant?: "floating" | "header";
};

export function BackgroundMusic({ variant = "floating" }: BackgroundMusicProps) {
  const { messages } = useI18n();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

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

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
  }

  const musicLabel = playing
    ? messages.aria.musicPause
    : messages.aria.musicPlay;

  const icon = playing ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  return (
    <>
      <audio ref={audioRef} src={ASSETS.backgroundMusic} loop preload="none" />
      {variant === "header" ? (
        <div className="absolute right-3 top-4 z-40 sm:right-5 sm:top-5">
          <div className="relative h-[88px] w-[88px]">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-olive/70"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <defs>
                <path
                  id="music-label-circle"
                  d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                />
              </defs>
              <text fill="currentColor" fontSize="8.5" letterSpacing="1.2">
                <textPath href="#music-label-circle" startOffset="0%">
                  {messages.text.musicToggle}
                </textPath>
              </text>
            </svg>
            <button
              type="button"
              onClick={toggle}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink/95 text-white shadow-md ring-4 ring-pink/20"
              aria-label={musicLabel}
            >
              {icon}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={toggle}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-olive/30 bg-white/90 text-olive shadow-md backdrop-blur-sm transition hover:bg-olive hover:text-white lg:bottom-8 lg:right-8 lg:h-12 lg:w-12"
          aria-label={musicLabel}
        >
          {icon}
        </button>
      )}
    </>
  );
}
