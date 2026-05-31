import Image from "next/image";
import { TEXT } from "@/lib/content";
import { ASSETS } from "@/lib/assets";

export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-olive sm:text-xs">
        {TEXT.scrollHint}
      </p>
    
    </div>
  );
}
