// Approved copy and prices: docs/03-content.md.
export interface Service {
  slug: string;
  title: string;
  description: string;
  startingPrice: number;
}

export const services = [
  {
    slug: "ppf",
    title: "Paint Protection Film",
    description: "Защита заводского ЛКП от сколов, дорожного абразива, мелких царапин и реагентов.",
    startingPrice: 65000,
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Глубокий блеск, простой уход и стойкая гидрофобная защита.",
    startingPrice: 45000,
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    description: "Многоэтапная полировка для восстановления глубины цвета, чистоты покрытия и отражений.",
    startingPrice: 35000,
  },
  {
    slug: "interior-detailing",
    title: "Interior Detailing",
    description: "Глубокая очистка, восстановление и защита кожи, текстиля и отделки салона.",
    startingPrice: 28000,
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]["slug"];
