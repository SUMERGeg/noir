import type { ServiceSlug } from "./services";

// Approved featured project: docs/03-content.md.
export interface Project {
  slug: string;
  vehicle: string;
  title: string;
  description: string;
  serviceSlugs: readonly ServiceSlug[];
  workPerformed: readonly string[];
  metadata: readonly string[];
}

export const projects = [
  {
    slug: "porsche-911-carrera-4s",
    vehicle: "Porsche 911 Carrera 4S",
    title: "Full Body Preservation",
    description:
      "Комплексная защита кузова, которая сохраняет заводское покрытие и оригинальный внешний вид автомобиля.",
    serviceSlugs: ["ppf", "ceramic-coating"],
    workPerformed: ["Полная оклейка PPF", "Керамическое покрытие", "Защита стёкол", "Защита дисков"],
    metadata: ["Плёнка 184 мкм", "32 часа работы", "Гарантия 10 лет"],
  },
] as const satisfies readonly Project[];
