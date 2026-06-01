/** Content extracted from public/tradition-mirror.html */

export const INVITATION = {
  respectedGuests: "Құрметті қонақтар!",
  dearGuests: "СІЗДЕРДІ АЯУЛЫ",
  brideName: "Бекзада",
  lines: [
    "ҚЫЗЫМЫЗДЫҢ ҰЗАТУ",
    "ТОЙЫНА АРНАЛҒАН",
    "АҚ ДАСТАРХАНЫМЫЗДЫҢ",
    "ҚАДІРЛІ ҚОНАҒЫ",
    "БОЛУҒА ШАҚЫРАМЫЗ!",
  ],
} as const;

export const INVITATION_LINES = [
  "қызымыздың ұзату",
  "тойына арналған",
  "ақ дастарханымыздың",
  "қадірлі қонағы",
  "болуға шақырамыз!",
] as const;

export const TEXT = {
  dearGuests: INVITATION.dearGuests,
  respectedGuests: INVITATION.respectedGuests,
  scrollHint: "жоғары жылжытыңыз",
  musicToggle: "· әуенді қосу / пауза ·",
  openEnvelope: "ашу үшін басыңыз",
  timePrefix: "САҒАТ",
  dressIntro:
    "Мерекелік атмосфераны қолдап, киім таңдауда осы төмендегі\nтүстерді пайдалансаңыздар, қуанышты болар едік.",
  dressAvoid: "өз образдарыңызда қызыл және қара түсті қолданбауды сұраймыз.",
  dressCode: "PASTEL FORMAL",
  mapButton: "картаға өту",
  rsvpTitle: "Жауап беріңіз",
  rsvpButton: "ЖАУАПТЫ ЖІБЕРУ",
  rsvpSubmitting: "Жіберілуде...",
  rsvpSuccess: "Жауабыңызға рақмет!",
} as const;

export const COUNTDOWN_LABELS = ["күн", "сағат", "минут", "секунд"] as const;

export const FORM = {
  nameLabel: "Аты-Жөні",
  namePlaceholder: "Аты-Жөніңіз",
  attendanceLabel: "Қатысуыңыз:",
} as const;
