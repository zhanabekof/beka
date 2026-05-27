export const EVENT = {
  title: "Бекзат Qyz Uzatu",
  countdownDate: "2026-07-07T18:00:00+05:00",
  date: { day: 7, month: "шілде", year: 2026 },
  time: "18:00",
  venue: {
    name: "fiesta hall",
    address: "Қорғалжын тас жолы, 13/9",
    city: "астана қаласы",
    mapUrl: "https://2gis.kz/astana/firm/70000001046438689",
  },
  dressCode: "PASTEL FORMAL",
} as const;

export const ATTENDANCE_OPTIONS = [
  "Келемін",
  "Жұбыммен келемін",
  "Келе алмаймын",
] as const;

export const DRINK_OPTIONS = [
  "Ақ шарап",
  "Қызыл шарап",
  "Просекко",
  "Виски",
  "Водка",
  "Коньяк",
  "Алкогольсіз сусындар",
] as const;
