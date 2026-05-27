import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { RsvpForm } from "./RsvpForm";

export function RsvpSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-lg">
        <Image
          src={ASSETS.footerDecor}
          alt=""
          width={600}
          height={300}
          className="mx-auto mb-10 h-auto w-full max-w-xs object-contain"
        />
        <RsvpForm />
      </div>
    </section>
  );
}
