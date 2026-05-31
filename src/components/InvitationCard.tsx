import { INVITATION } from "@/lib/content";

type InvitationCardProps = {
  className?: string;
};

function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={`h-9 w-9 text-[#2d2d2d]/85 sm:h-10 sm:w-10 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <path d="M4 44 C4 8 8 4 44 4" />
      <path d="M10 38 C11 18 18 11 38 10" />
      <path d="M16 32 C17 22 22 17 32 16" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="5" cy="14" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InvitationCard({ className = "" }: InvitationCardProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] bg-[#f9f7f0] px-3 py-2 sm:max-w-[360px] ${className}`}
    >
      <div className="relative border border-[#2d2d2d]/80 px-5 py-8 outline outline-1 outline-offset-[5px] outline-[#2d2d2d]/80 sm:px-6 sm:py-9">
        <CornerFlourish className="absolute left-1 top-1" />
        <CornerFlourish className="absolute right-1 top-1 -scale-x-100" />
        <CornerFlourish className="absolute bottom-1 left-1 -scale-y-100" />
        <CornerFlourish className="absolute bottom-1 right-1 -scale-x-100 -scale-y-100" />

        <div className="space-y-3 px-2 text-center sm:space-y-3.5">
          <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#2d2d2d] sm:text-sm">
            {INVITATION.respectedGuests}
          </p>
          <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#2d2d2d] sm:text-sm">
            {INVITATION.dearGuests}
          </p>

          <p className="py-1 font-serif text-[42px] font-medium leading-none tracking-wide text-olive sm:text-5xl">
            {INVITATION.brideName}
          </p>

          {INVITATION.lines.map((line) => (
            <p
              key={line}
              className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#2d2d2d] sm:text-sm"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
