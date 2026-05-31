import Image from "next/image";
import { ASSETS } from "@/lib/assets";

/** Portrait photo inside the ornate Dina_Uzatu.svg frame. */
type FramedPortraitProps = {
  className?: string;
  priority?: boolean;
};

const FRAME_ASPECT = 558.75 / 837;

export function FramedPortrait({ className = "", priority = false }: FramedPortraitProps) {
  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{ aspectRatio: String(FRAME_ASPECT) }}
    >
      <div className="absolute inset-[16%_13%_20%_13%] overflow-hidden">
        <Image
          src={ASSETS.portraitPhoto}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 528px) 100vw, 528px"
          className="object-cover object-[center_15%] scale-[0.96]"
        />
      </div>
    
    </div>
  );
}
