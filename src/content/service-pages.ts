import { homeImages, process, technology, type MaterialContent } from "@/content/home";
import type { ServiceSlug } from "@/content/services";

const interiorImage = {
  src: "/images/interior-detailing.webp",
  alt: "Концептуальная иллюстрация: очистка чёрного кожаного сиденья микрофиброй в салоне автомобиля",
} as const;

export interface ServicePageContent {
  slug: ServiceSlug;
  eyebrow: string;
  image: { src: string; alt: string };
  summary: string;
  benefits: readonly string[];
  audience: readonly { title: string; description: string }[];
  material: MaterialContent;
  materialImage?: { src: string; alt: string };
  materialCaption?: string;
  summaryLabel?: string;
  summaryHeading?: string;
  benefitsHeading?: string;
  audienceLabel?: string;
  process?: readonly { title: string; description: string }[];
  warrantyHeading?: string;
  warranty: { value: string; description: string };
  faqs: readonly { question: string; answer: string }[];
}

// Derived from approved PPF, packages, material, process and FAQ copy in docs/03-content.md.
export const ppfPage = {
  slug: "ppf",
  eyebrow: "Защитная плёнка / PPF",
  image: homeImages.material,
  summary: "Прозрачная защитная плёнка сохраняет оригинальный вид лакокрасочного покрытия. Можно защитить переднюю часть автомобиля или все окрашенные элементы кузова — объём работ определяем после осмотра.",
  benefits: ["Защита от сколов и дорожного абразива", "Защита от мелких царапин и реагентов", "Сохранение оригинального вида покрытия", "Самовосстанавливающийся верхний слой"],
  audience: [
    { title: "Защита передней части", description: "Для защиты зон, принимающих дорожный абразив: бампера, капота, передних крыльев, зеркал и фар." },
    { title: "Защита всего кузова", description: "Для защиты всех окрашенных элементов кузова, зеркал, оптики и кромок в зонах риска." },
  ],
  material: technology,
  warranty: { value: "10 лет", description: "Гарантия на PPF. При выдаче автомобиля передаём информацию о гарантии и рекомендации по уходу за плёнкой." },
  faqs: [
    { question: "Сколько времени занимает оклейка?", answer: "Защита передней части обычно занимает один–два дня. Полная оклейка — три–пять дней, в зависимости от автомобиля и состояния покрытия." },
    { question: "Можно ли безопасно снять плёнку?", answer: "Да. Правильно установленную премиальную плёнку можно снять без повреждения заводского лакокрасочного покрытия." },
    { question: "Нужна ли полировка перед оклейкой?", answer: "Только если на покрытии есть видимые дефекты, которые останутся под плёнкой. Сначала осматриваем поверхность и рекомендуем полировку лишь при необходимости." },
    { question: "От чего зависит итоговая стоимость?", answer: "От размера автомобиля, сложности кузова, выбранных зон защиты, состояния покрытия и дополнительных услуг." },
  ],
} as const satisfies ServicePageContent;

const estimateFaq = ppfPage.faqs[3];
const assessmentFaq = { question: "Как выбрать объём работ?", answer: "Начинаем с осмотра автомобиля и обсуждения условий эксплуатации. После этого определяем приоритеты и рассчитываем стоимость." };
const careFaq = { question: "Как ухаживать за автомобилем после работ?", answer: "При выдаче передаём рекомендации по уходу с учётом выполненных работ и материалов." };

function serviceProcess(preparation: string, application: string) {
  return process.map((step, index) => index === 2 ? { ...step, description: preparation } : index === 3 ? { ...step, title: "Выполнение работ", description: application } : index === 4 ? { ...step, description: "Проверяем качество отделки и состояние обработанных поверхностей перед выдачей автомобиля." } : step);
}

export const otherServicePages: readonly ServicePageContent[] = [
  {
    slug: "ceramic-coating", eyebrow: "Керамическое покрытие", image: homeImages.after,
    summary: "Керамическое покрытие помогает сохранить глубокий блеск, облегчает уход и создаёт гидрофобную поверхность. Пакет включает подготовку ЛКП, покрытие кузова, защиту стёкол и лицевой части дисков.",
    benefits: ["Глубокий блеск", "Простой уход", "Гидрофобная поверхность", "Защита кузова, стёкол и дисков в одном пакете"],
    audience: [ {title:"Блеск и уход",description:"Для автомобилей, которым нужна защита поверхности и удобный регулярный уход."}, {title:"После подготовки покрытия",description:"Если есть видимые дефекты, сначала осматриваем поверхность и определяем необходимость коррекции."} ],
    material: {eyebrow:"CERAMIC COATING",heading:"Ceramic Coating",description:"Подготовка ЛКП предшествует нанесению керамического покрытия. Объём подготовки зависит от состояния поверхности; состав пакета обсуждаем после осмотра.",features:["Подготовка ЛКП", "Керамическое покрытие", "Защита стёкол", "Защита лицевой части дисков"]},
    materialImage: homeImages.after, materialCaption: "Визуализация чистого отражения на покрытии",
    process: serviceProcess("Моем автомобиль, удаляем загрязнения и при необходимости корректируем покрытие.","Наносим керамическое покрытие и предусмотренную пакетом защиту стёкол и дисков."),
    warrantyHeading:"Результат и уход", warranty:{value:"Уход",description:"Обсуждаем условия эксплуатации и рекомендации для выбранного покрытия. Информацию о материалах и уходе передаём при выдаче; условия гарантии уточняются при подборе пакета."},
    faqs:[assessmentFaq,{question:"Чем керамика отличается от PPF?",answer:"PPF выбирают для защиты от сколов, дорожного абразива и мелких царапин. Керамическое покрытие — для блеска, гидрофобной поверхности и простого ухода."},careFaq,estimateFaq],
  },
  {
    slug:"paint-correction",eyebrow:"Коррекция покрытия",image:homeImages.before,
    summaryLabel:"01 / Восстановление",summaryHeading:"Чистота отражений",benefitsHeading:"Восстановить поверхность",audienceLabel:"03 / Когда нужна полировка",
    summary:"Многоэтапная полировка восстанавливает глубину цвета, чистоту покрытия и отражений. Перед работой осматриваем поверхность и определяем необходимый объём коррекции.",
    benefits:["Глубина цвета", "Чистота покрытия", "Чёткие отражения", "Подготовка поверхности к защите"],
    audience:[{title:"Видимые дефекты",description:"Когда состояние поверхности мешает чистоте отражений и внешнему виду покрытия."},{title:"Перед защитой",description:"Когда дефекты останутся видимыми под плёнкой. Полировку рекомендуем только при необходимости после осмотра."}],
    material:{eyebrow:"PAINT CORRECTION",heading:"Paint Correction",description:"Объём многоэтапной коррекции определяем после осмотра. Подготовка поверхности и контроль качества помогают оценить чистоту покрытия и отражений.",features:["Осмотр покрытия", "Подготовка поверхности", "Многоэтапная коррекция", "Контроль отражений"]},materialImage:homeImages.after,materialCaption:"Визуализация покрытия после полировки",
    process:serviceProcess("Моем автомобиль и удаляем загрязнения перед коррекцией поверхности.","Выполняем многоэтапную полировку для восстановления глубины цвета и чистоты отражений."),
    warrantyHeading:"Результат и уход",warranty:{value:"Осмотр",description:"Ожидаемый результат определяем по состоянию покрытия. После работ передаём рекомендации по уходу и обсуждаем дальнейшую защиту поверхности."},
    faqs:[assessmentFaq,{question:"Всегда ли нужна полировка перед PPF?",answer:ppfPage.faqs[2].answer},careFaq,estimateFaq],
  },
  {
    slug:"interior-detailing",eyebrow:"Детейлинг салона",image:interiorImage,
    summaryLabel:"01 / Уход за салоном",summaryHeading:"Сохранить материалы",benefitsHeading:"Уход в деталях",audienceLabel:"03 / Задачи салона",
    summary:"Глубокая очистка, восстановление и защита кожи, текстиля и отделки салона. Состояние материалов и объём работ определяем при осмотре автомобиля.",
    benefits:["Глубокая очистка", "Восстановление материалов", "Защита кожи", "Уход за текстилем и отделкой"],
    audience:[{title:"Глубокая очистка",description:"Когда коже, текстилю и отделке салона требуется глубокий уход."},{title:"Восстановление и защита",description:"Для сохранения материалов салона. Подходящий объём обработки выбираем после осмотра."}],
    material:{eyebrow:"INTERIOR DETAILING",heading:"Interior Detailing",description:"Осматриваем кожу, текстиль и элементы отделки. Подбираем объём очистки, восстановления и защиты с учётом состояния материалов.",features:["Кожа", "Текстиль", "Элементы отделки", "Контроль качества"]},materialImage:interiorImage,materialCaption:"Концептуальная иллюстрация: уход за кожей салона",
    process:serviceProcess("Осматриваем материалы салона и подготавливаем поверхности к очистке.","Выполняем глубокую очистку, восстановление и защиту кожи, текстиля и отделки."),
    warrantyHeading:"Результат и уход",warranty:{value:"Уход",description:"Объём восстановления зависит от состояния материалов. После завершения работ передаём рекомендации по дальнейшему уходу за салоном."},
    faqs:[assessmentFaq,{question:"Какие материалы обрабатываются?",answer:"Кожа, текстиль и отделка салона. Перечень работ определяем при осмотре."},careFaq,estimateFaq],
  },
];

export const servicePages: readonly ServicePageContent[] = [ppfPage, ...otherServicePages];
