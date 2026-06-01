import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { TEXT } from "@/lib/content";
import { RsvpForm } from "./RsvpForm";

export function RsvpSection() {
  return (
    <section className="bg-cream px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[320px] space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-wide text-olive lg:text-xl">
            {TEXT.rsvpTitle}
          </h2>
        </div>

        <RsvpForm />

        <Image
          src={ASSETS.footerDecor}
          alt=""
          width={320}
          height={214}
          className="mx-auto h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
