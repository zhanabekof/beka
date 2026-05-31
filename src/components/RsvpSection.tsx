import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { RsvpForm } from "./RsvpForm";

export function RsvpSection() {
  return (
    <section className="bg-cream">
      <Image
        src={ASSETS.footerDecor}
        alt=""
        width={800}
        height={536}
        className="block h-auto w-full object-cover"
      />
      <div className="mx-auto max-w-[320px] px-5 py-14 lg:max-w-[360px] lg:px-10 lg:py-16">
        <RsvpForm />
      </div>
    </section>
  );
}
