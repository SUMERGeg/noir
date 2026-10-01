// Approved Hero copy: docs/03-content.md.
export const hero = {
  eyebrow: "PREMIUM AUTOMOTIVE CARE — MOSCOW",
  headline: ["PRESERVE", "PERFECTION."],
  trust: ["XPEL CERTIFIED", "10 YEAR WARRANTY", "210+ CARS PROTECTED"],
  image: {
    src: "/images/hero-porsche.webp",
    alt: "Серебристый Porsche 911: детали кузова и отражения студийного света на лакокрасочном покрытии",
  },
} as const;

// Faithful Russian translations of docs/03-content.md; English editorial titles retained.
export const credibility = [
  { value: "210+", label: "автомобилей защищено" },
  { value: "10 лет", label: "гарантия на PPF" },
  { value: "4.9 / 5", label: "оценка клиентов" },
  { value: "48 часов", label: "оклейка передней части в среднем" },
] as const;

export interface MaterialContent {
  eyebrow: string;
  heading: string;
  description: string;
  features: readonly string[];
}

export const technology = {
  eyebrow: "MATERIAL MATTERS",
  heading: "Protection should disappear.",
  description: "Премиальная плёнка сохраняет оригинальный вид покрытия. Мы используем оптически прозрачную плёнку с самовосстанавливающимся глянцевым верхним слоем и длительной гарантией.",
  features: ["Самовосстанавливающийся верхний слой", "Оптическая прозрачность", "Устойчивость к ультрафиолету", "Гидрофобная поверхность", "Длительная гарантия"],
} as const;

export const process = [
  { title: "Консультация", description: "Осматриваем автомобиль, обсуждаем условия эксплуатации и определяем приоритеты защиты." },
  { title: "Диагностика", description: "Фиксируем состояние покрытия, предыдущие ремонты и уязвимые зоны до начала работ." },
  { title: "Подготовка", description: "Моем автомобиль, удаляем загрязнения и при необходимости корректируем покрытие." },
  { title: "Нанесение", description: "Устанавливаем плёнку или наносим покрытие при контролируемом освещении и температуре." },
  { title: "Контроль качества", description: "Проверяем кромки, качество отделки, точность установки и прозрачность поверхности перед выдачей." },
  { title: "Выдача", description: "Передаём автомобиль с рекомендациями по уходу и информацией о гарантии." },
] as const;

export const finalCta = {
  eyebrow: "YOUR CAR, PRESERVED",
  heading: "Start with an inspection.",
  description: "Расскажите о модели автомобиля и о том, что хотите защитить. Мы подберём подходящий пакет и рассчитаем стоимость.",
} as const;

export const homeImages = {
  project: { src: "/images/project-porsche.webp", alt: "Концептуальная иллюстрация: серебристый Porsche 911 Carrera 4S в студии, вид сзади в три четверти" },
  material: { src: "/images/material-ppf.webp", alt: "Концептуальная иллюстрация: установка прозрачной защитной плёнки на серебристое крыло автомобиля" },
  before: { src: "/images/paint-before.webp", alt: "Визуализация покрытия до полировки: мелкие царапины в отражении студийного света" },
  after: { src: "/images/paint-after.webp", alt: "Визуализация покрытия после полировки: чистое отражение студийного света" },
} as const;
