import { ASSETS } from "@/lib/assets";

type FallingPetalsProps = {
  className?: string;
};

export function FallingPetals({ className = "" }: FallingPetalsProps) {
  return (
    <div
      className={`pointer-events-none absolute -top-3 left-1/2 z-30 w-[calc(100%+110px)] max-w-none -translate-x-1/2 ${className}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.fallingPetals}
        alt=""
        width={569}
        height={320}
        draggable={false}
        className="h-auto w-full opacity-40"
      />
    </div>
  );
}
