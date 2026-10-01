import type { ServiceSlug } from "./services";

// Approved packages: docs/03-content.md. Prices are in RUB.
export interface PricingPackage {
  id: string;
  serviceSlug: ServiceSlug;
  title: string;
  startingPrice: number;
  inclusions: readonly string[];
}

export const pricing = [
  {
    id: "front-protection",
    serviceSlug: "ppf",
    title: "Front Protection",
    startingPrice: 65000,
    inclusions: ["Бампер", "Капот", "Передние крылья", "Зеркала", "Фары"],
  },
  {
    id: "full-body-ppf",
    serviceSlug: "ppf",
    title: "Full Body PPF",
    startingPrice: 190000,
    inclusions: ["Все окрашенные элементы кузова", "Зеркала", "Оптика", "Кромки в зонах риска"],
  },
  {
    id: "ceramic-package",
    serviceSlug: "ceramic-coating",
    title: "Ceramic Package",
    startingPrice: 45000,
    inclusions: ["Подготовка ЛКП", "Керамическое покрытие", "Защита стёкол", "Защита лицевой части дисков"],
  },
] as const satisfies readonly PricingPackage[];
