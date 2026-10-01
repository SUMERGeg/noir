// Approved copy: docs/03-content.md.
export const site = {
  name: "NOIR Detailing",
  descriptor: "Premium Automotive Care — Moscow",
  description:
    "Защита кузова, восстановление покрытия и премиальный детейлинг для автомобилей, которые требуют точности в каждой детали.",
  primaryCta: "Получить расчёт",
  secondaryCta: "Смотреть проекты",
} as const;

export const navigation = [
  { href: "/services", label: "Услуги" },
  { href: "/projects", label: "Проекты" },
  { href: "/pricing", label: "Цены" },
  { href: "/about", label: "О студии" },
  { href: "/contacts", label: "Контакты" },
] as const;
