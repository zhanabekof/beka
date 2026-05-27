import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-olive sm:text-xs">
        жоғары жылжытыңыз
      </p>
      <Image
        src={ASSETS.scrollGif}
        alt=""
        width={320}
        height={180}
        className="h-auto w-56 max-w-full object-contain"
        unoptimized
      />
    </div>
  );
}
