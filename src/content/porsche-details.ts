import { hero } from "@/content/home";

export interface PorscheDetail {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  position: { x: number; y: number };
}

export const porscheDetailOverview = hero.image;

export const porscheDetails: readonly PorscheDetail[] = [
  {
    id: "film-edge",
    title: "Кромка плёнки",
    description: "Точность установки прозрачной плёнки на границе кузовного элемента.",
    image: { src: "/images/porsche-details/film-edge.webp", alt: "Концептуальный крупный план: прозрачная плёнка на кромке серебристого капота Porsche 911" },
    position: { x: 60, y: 55 },
  },
  {
    id: "optics",
    title: "Оптика",
    description: "Прозрачность защитного слоя и детали оптики под студийным светом.",
    image: { src: "/images/porsche-details/optics.webp", alt: "Концептуальный крупный план: прозрачная линза и световые модули фары Porsche 911" },
    position: { x: 74, y: 43 },
  },
  {
    id: "surface",
    title: "Поверхность",
    description: "Чистота отражений и глубина серебристого покрытия после подготовки и защиты.",
    image: { src: "/images/porsche-details/surface.webp", alt: "Концептуальный крупный план: чистое отражение студийного света на серебристом кузове Porsche 911" },
    position: { x: 43, y: 36 },
  },
  {
    id: "wheel",
    title: "Диск",
    description: "Защита дисков — часть комплекса Full Body Preservation.",
    image: { src: "/images/porsche-details/wheel.webp", alt: "Концептуальный крупный план: тёмный многоспицевый диск Porsche 911 и красный тормозной суппорт" },
    position: { x: 93, y: 70 },
  },
];
