import { hero, homeImages } from "@/content/home";
import { projects } from "@/content/projects";
import type { ServiceSlug } from "@/content/services";

interface CaseImage {
  src: string;
  alt: string;
}

export interface ProjectCase {
  slug: (typeof projects)[number]["slug"];
  hero: CaseImage;
  challenge: string;
  vehicleDetails: readonly { label: string; value: string }[];
  technicalDetails: readonly { label: string; value: string }[];
  process: readonly { title: string; description: string }[];
  gallery: readonly (CaseImage & { caption: string })[];
  comparison: { before: CaseImage; after: CaseImage; caption: string };
  result: string;
  relatedServiceSlug: ServiceSlug;
}

// Case narrative expands the approved brief without adding vehicle history or measurements.
export const projectCases: readonly ProjectCase[] = [
  {
    slug: "porsche-911-carrera-4s",
    hero: homeImages.project,
    challenge: "Сохранить заводское покрытие и оригинальный внешний вид Porsche 911 Carrera 4S. Для этого выбран комплекс защиты кузова: полная оклейка прозрачной плёнкой, керамическое покрытие, защита стёкол и дисков.",
    vehicleDetails: [
      { label: "Автомобиль", value: "Porsche 911 Carrera 4S" },
      { label: "Проект", value: "Full Body Preservation" },
      { label: "Объём защиты", value: "Кузов, стёкла и диски" },
    ],
    technicalDetails: [
      { label: "Толщина плёнки", value: "184 мкм" },
      { label: "Время работ", value: "32 часа" },
      { label: "Гарантия на PPF", value: "10 лет" },
    ],
    process: [
      { title: "Подготовка", description: "Осмотр состояния покрытия, мойка и удаление загрязнений перед нанесением защиты." },
      { title: "Нанесение защиты", description: "Полная оклейка кузова PPF, керамическое покрытие, защита стёкол и дисков." },
      { title: "Контроль и выдача", description: "Проверка кромок, качества отделки и прозрачности поверхности. Передача рекомендаций по уходу и информации о гарантии." },
    ],
    gallery: [
      { ...hero.image, alt: "Концептуальная иллюстрация: серебристый Porsche 911, вид спереди в три четверти", caption: "01 / Кузов и отражения" },
      { ...homeImages.material, caption: "02 / Установка прозрачной плёнки" },
    ],
    comparison: {
      before: homeImages.before,
      after: homeImages.after,
      caption: "Иллюстрация коррекции покрытия, а не документальные фотографии этого Porsche. Все изображения кейса созданы для концептуального проекта.",
    },
    result: projects[0].description,
    relatedServiceSlug: "ppf",
  },
];

export function getProjectCase(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  const details = projectCases.find((item) => item.slug === slug);
  return project && details ? { project, details } : undefined;
}
