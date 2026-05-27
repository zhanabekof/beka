import Image from "next/image";
import { EVENT } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";
import { DearGuests, InvitationText } from "./HeroSection";

export function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-16">
      <Image
        src={ASSETS.flower}
        alt=""
        width={70}
        height={140}
        className="pointer-events-none absolute right-2 top-24 h-auto w-14 animate-fade-in-up opacity-50"
      />

      <div className="mx-auto max-w-lg space-y-10 text-center">
        <div className="space-y-2 text-olive">
          <p className="text-xl font-semibold lowercase tracking-wide sm:text-2xl">
            {EVENT.venue.name}
          </p>
          <p className="text-base leading-7 sm:text-lg">{EVENT.venue.address}</p>
          <p className="text-base lowercase sm:text-lg">{EVENT.venue.city}</p>
        </div>

        <Image
          src={ASSETS.heroSide}
          alt=""
          width={600}
          height={400}
          className="mx-auto h-auto w-full max-w-sm object-cover"
        />

        <InvitationText className="text-olive" />
        <DearGuests />

        <p className="text-base text-olive sm:text-lg">Құрметті қонақтар!</p>

        <div className="flex items-end justify-center gap-4 text-olive">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-olive-light">
              сағат
            </p>
            <p className="text-4xl font-semibold tracking-wider sm:text-5xl">
              {EVENT.time}
            </p>
          </div>
          <div className="pb-1">
            <p className="text-5xl font-light sm:text-6xl">{EVENT.date.day}</p>
          </div>
          <div className="pb-1 text-left">
            <p className="text-xl lowercase sm:text-2xl">{EVENT.date.month}</p>
            <p className="text-xl sm:text-2xl">{EVENT.date.year}</p>
          </div>
        </div>

        <a
          href={EVENT.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-olive/40 px-8 py-3 text-sm uppercase tracking-[0.25em] text-olive transition hover:bg-olive hover:text-white"
        >
          картаға өту
        </a>
      </div>
    </section>
  );
}
