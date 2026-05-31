export const EVENT = {
  title: "Бекзат Qyz Uzatu",
  countdownDate: "2026-08-05T18:00:00+05:00",
  date: {
    year: 2026,
    month: 8,
    monthLabel: "ТАМЫЗ",
    day: 5,
  },
  time: "18:00",
  venue: {
    name: "Хан Талапай",
    address: "Шоссе Қорғалжын 20",
    city: "астана қаласы",
    mapUrl: "https://2gis.kz/astana/firm/70000001041639383",
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
