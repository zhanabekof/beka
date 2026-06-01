"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { BackgroundMusic } from "./BackgroundMusic";
import { FallingPetals } from "./FallingPetals";

export function ConvertHeaderSection() {
  return (
    <section className="relative min-h-[min(100vh,640px)] overflow-hidden bg-cream">
      <FallingPetals />

      <BackgroundMusic variant="header" />

      <div className="relative z-10 flex min-h-[min(100vh,640px)] items-center justify-center px-10 pb-20 pt-24 sm:px-8 sm:pt-28">
        <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
          <div className="pointer-events-none absolute -left-30 -top-14 z-10 animate-header-flower-tl sm:-left-12 sm:-top-16">
            <Image
              src={ASSETS.headerFlower}
              alt=""
              width={972}
              height={1050}
              priority
              className="h-auto w-[250px] sm:w-[285px]"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-20 -right-30 z-20 animate-header-flower-br sm:-bottom-12 sm:-right-10">
            <Image
              src={ASSETS.headerFlower}
              alt=""
              width={972}
              height={1050}
              priority
              className="h-auto w-[150px] rotate-[308deg] sm:w-[260px]"
            />
          </div>
          <div className="relative z-10 animate-header-appear">
            <Image
              src={ASSETS.convert}
              alt=""
              width={640}
              height={480}
              priority
              className="mx-auto h-auto w-full object-contain drop-shadow-md"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-olive/40" />
    </section>
  );
}
