import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export function RsvpSection() {
  return (
    <section className="bg-cream px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[320px]">
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
