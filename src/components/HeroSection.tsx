import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export function InvitationText({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center leading-relaxed ${className}`}>
      <p className="text-lg font-medium tracking-wide sm:text-xl">
        қызымыздың ұзату
      </p>
      <p className="text-lg font-medium tracking-wide sm:text-xl">
        тойына арналған
      </p>
      <p className="text-lg font-medium tracking-wide sm:text-xl">
        ақ дастарханымыздың
      </p>
      <p className="text-lg font-medium tracking-wide sm:text-xl">
        қадірлі қонағы
      </p>
      <p className="mt-2 text-lg font-medium tracking-wide sm:text-xl">
        болуға шақырамыз!
      </p>
    </div>
  );
}

export function DearGuests() {
  return (
    <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-olive sm:text-base">
      СІЗДЕРДІ АЯУЛЫ
    </p>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-8 pt-6">
      <Image
        src={ASSETS.heroPhoto}
        alt=""
        width={800}
        height={400}
        className="mx-auto mb-4 h-auto w-full max-w-md object-cover"
      />

      <div className="relative mx-auto max-w-lg px-4">
        <FloatingFlowers />

        <div className="relative z-10">
          <Image
            src={ASSETS.heroMain}
            alt=""
            width={800}
            height={1200}
            priority
            className="mx-auto h-auto w-full max-w-md object-cover"
          />
        </div>

        <div className="relative z-10 -mt-6 px-2">
          <InvitationText className="animate-fade-in-up text-olive" />
          <div className="mt-6">
            <DearGuests />
          </div>
        </div>

        <div className="relative z-10 mt-4 flex justify-center gap-4">
          <Image
            src={ASSETS.logo}
            alt=""
            width={200}
            height={80}
            className="h-12 w-auto opacity-80"
          />
          <Image
            src={ASSETS.ornament}
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 object-contain opacity-70"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingFlowers() {
  return (
    <>
      <Image
        src={ASSETS.flower}
        alt=""
        width={60}
        height={120}
        className="pointer-events-none absolute -left-2 top-16 h-auto w-12 animate-fade-in-up opacity-60 [animation-delay:600ms]"
      />
      <Image
        src={ASSETS.flower}
        alt=""
        width={50}
        height={100}
        className="pointer-events-none absolute -right-1 top-32 h-auto w-10 animate-fade-in-up opacity-50 [animation-delay:900ms]"
      />
    </>
  );
}
