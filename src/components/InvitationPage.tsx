"use client";

import Image from "next/image";
import { useState } from "react";
import { ASSETS } from "@/lib/assets";
import { CountdownSection } from "./CountdownSection";
import { DressCodeSection } from "./DressCodeSection";
import { EnvelopeIntro } from "./EnvelopeIntro";
import { HeroSection } from "./HeroSection";
import { LocationSection } from "./LocationSection";
import { RsvpSection } from "./RsvpSection";
import { ScrollHint } from "./ScrollHint";

export function InvitationPage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <EnvelopeIntro onOpen={() => setOpened(true)} />

      <main
        className={`mx-auto max-w-lg overflow-x-hidden bg-white shadow-xl transition-opacity duration-700 sm:max-w-md ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="relative bg-cream pt-6">
          <ScrollHint />
          <Image
            src={ASSETS.floralBorder}
            alt=""
            width={400}
            height={200}
            className="mx-auto h-16 w-auto opacity-60"
          />
        </section>

        <HeroSection />
        <DressCodeSection />
        <CountdownSection />
        <LocationSection />
        <RsvpSection />

        <footer className="bg-cream px-6 py-8 text-center">
          <Image
            src={ASSETS.heroAccent}
            alt=""
            width={200}
            height={100}
            className="mx-auto h-10 w-auto opacity-70"
          />
        </footer>
      </main>
    </>
  );
}
