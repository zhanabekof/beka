"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { ConvertHeaderSection } from "./ConvertHeaderSection";
import { CountdownSection } from "./CountdownSection";
import { DateSection } from "./DateSection";
import { EnvelopeIntro, wasInviteOpened } from "./EnvelopeIntro";
import { HeroSection } from "./HeroSection";
import { I18nProvider } from "./I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocationSection } from "./LocationSection";
import { RsvpSection } from "./RsvpSection";
import { ScrollHint } from "./ScrollHint";

function InvitationPageContent() {
  const [ready, setReady] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(wasInviteOpened());
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="min-h-screen bg-cream" aria-busy="true" />;
  }

  return (
    <div className="min-h-screen bg-cream lg:bg-[#ebe8df]">
        <div className="mb-6 flex justify-center">
              <LanguageSwitcher />
            </div>
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}

      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] justify-center lg:px-8 lg:py-10">
        <main
          className={`relative w-full max-w-[430px] overflow-x-hidden bg-cream shadow-none transition-all duration-700 lg:max-w-[580px] lg:rounded-2xl lg:shadow-2xl ${opened ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
          {opened && <ConvertHeaderSection />}
          <section className="bg-cream px-5 pt-6 lg:px-10 lg:pt-10">
          
            <ScrollHint />
          </section>

          <HeroSection />
          <DateSection />
          <LocationSection />
          <CountdownSection />
          <RsvpSection />

          <footer className="bg-cream py-8 lg:py-12">
            <Image
              src={ASSETS.footerPhoto}
              alt=""
              width={800}
              height={400}
              className="block h-auto w-full object-cover"
            />
          </footer>
        </main>
      </div>
    </div>
  );
}

export function InvitationPage() {
  return (
    <I18nProvider>
      <InvitationPageContent />
    </I18nProvider>
  );
}
