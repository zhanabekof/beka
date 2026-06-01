"use client";

import { useI18n } from "./I18nProvider";

export function InvitationClosing() {
  const { messages } = useI18n();
  const { closingRespect, closingNames } = messages.invitation;

  return (
    <section className="bg-cream px-5 py-12 text-center lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[320px] space-y-3">
        <p className="text-2xl italic leading-snug text-olive/90 lg:text-3xl">
          {closingRespect}
        </p>
        <p className="font-serif text-4xl font-medium tracking-wide text-olive lg:text-5xl">
          {closingNames}
        </p>
      </div>
    </section>
  );
}
