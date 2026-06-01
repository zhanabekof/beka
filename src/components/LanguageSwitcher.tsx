"use client";

import { useI18n } from "./I18nProvider";
import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale, messages } = useI18n();

  const options: { id: Locale; label: string }[] = [
    { id: "kk", label: messages.language.kk },
    { id: "ru", label: messages.language.ru },
  ];

  return (
    <div
      className={`inline-flex rounded-full border border-olive/25 bg-white/80 p-0.5 shadow-sm backdrop-blur-sm ${className}`}
      role="group"
      aria-label={messages.language.switchTo}
    >
      {options.map(({ id, label }) => {
        const active = locale === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLocale(id)}
            aria-pressed={active}
            className={`min-w-[3rem] rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
              active
                ? "bg-olive text-white"
                : "text-olive/70 hover:bg-olive/10 hover:text-olive"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
