import Image from "next/image";
import { ASSETS } from "@/lib/assets";

type FloatingFlowerProps = {
  className?: string;
  delay?: string;
  size?: number;
};

export function FloatingFlower({
  className = "",
  delay = "0s",
  size = 80,
}: FloatingFlowerProps) {
  return (
    <Image
      src={ASSETS.flower}
      alt=""
      width={size}
      height={size * 2}
      className={`pointer-events-none absolute h-auto w-auto animate-fade-in-up opacity-70 ${className}`}
      style={{ animationDelay: delay, width: size, height: "auto" }}
    />
  );
}
