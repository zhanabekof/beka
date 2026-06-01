"use client";

import { useI18n } from "./I18nProvider";

export function ScrollHint() {
  const { messages } = useI18n();

  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-olive sm:text-xs">
        {messages.text.scrollHint}
      </p>
    </div>
  );
}
