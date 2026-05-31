import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { FramedPortrait } from "./FramedPortrait";
import { InvitationCard } from "./InvitationCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-12 pt-2 lg:px-10 lg:pb-16">
      <Image
        src={ASSETS.flower}
        alt=""
        width={80}
        height={160}
        className="pointer-events-none absolute left-0 top-8 h-auto w-14 opacity-50 lg:w-16"
        unoptimized
      />
      <Image
        src={ASSETS.flower}
        alt=""
        width={60}
        height={120}
        className="pointer-events-none absolute right-2 top-40 h-auto w-12 opacity-40 lg:w-14"
        unoptimized
      />

      <div className="relative z-10 w-full space-y-8 text-center">
        <div className="mx-auto max-w-[360px]">
          <InvitationCard />
        </div>

        <div className="mx-auto w-full max-w-[400px] sm:max-w-[440px]">
          <div className="origin-top scale-[1.44]">
            <FramedPortrait priority className="w-full" />
          </div>
          <div className="w-full pb-[66%]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
