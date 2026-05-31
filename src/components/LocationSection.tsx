import Image from "next/image";
import { EVENT } from "@/lib/constants";
import { TEXT } from "@/lib/content";
import { ASSETS } from "@/lib/assets";

export function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 py-14 lg:px-10 lg:py-20">
      <p className="text-3xl lg:text-lg text-center m-5">Мекенжай:</p>
      <Image
        src={ASSETS.floralBorder}
        alt=""
        width={162}
        height={135}
        className="pointer-events-none absolute -left-8 top-8 h-auto w-28 opacity-40 lg:w-32"
      />

      <div className="relative mx-auto max-w-[320px] space-y-10 text-center">
        <div className="space-y-2 text-olive">
          <p className="text-4xl font-semibold tracking-wide lg:text-2xl">
            {EVENT.venue.name}
          </p>
          <p className="text-3xl leading-8 lg:text-lg">
            {EVENT.venue.address}
          </p>
        </div>
        <a
          href={EVENT.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-olive/40 px-10 py-3 text-xs uppercase tracking-[0.25em] text-olive transition hover:bg-olive hover:text-white lg:text-sm"
        >
          {TEXT.mapButton}
        </a>
      </div>
    </section>
  );
}
