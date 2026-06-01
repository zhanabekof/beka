export const LOCALES = ["kk", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

export const ATTENDANCE_KEYS = ["yes", "with_partner", "no"] as const;
export type AttendanceKey = (typeof ATTENDANCE_KEYS)[number];

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  invitation: {
    respectedGuests: string;
    dearGuests: string;
    brideName: string;
    highlightedName?: string;
    lines: readonly string[];
    closingRespect: string;
    closingNames: string;
  };
  text: {
    scrollHint: string;
    musicToggle: string;
    openEnvelope: string;
    timePrefix: string;
    dressIntro: string;
    dressAvoid: string;
    mapButton: string;
    rsvpTitle: string;
    rsvpButton: string;
    rsvpSubmitting: string;
    rsvpSuccess: string;
    rsvpError: string;
    locationLabel: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    attendanceLabel: string;
  };
  attendance: Record<AttendanceKey, string>;
  countdown: readonly [string, string, string, string];
  weekdays: readonly [string, string, string, string, string, string, string];
  event: {
    monthLabel: string;
    city: string;
  };
  aria: {
    envelope: string;
    openEnvelope: string;
    musicPlay: string;
    musicPause: string;
  };
  language: {
    kk: string;
    ru: string;
    switchTo: string;
  };
};
