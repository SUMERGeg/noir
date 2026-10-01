import { FinalCta } from "@/components/sections/final-cta";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { services } from "@/content/services";
import { serviceChoices } from "@/content/studio";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/pages.css";

export const metadata = pageMetadata("Услуги", "Защита кузова PPF, керамическое покрытие, полировка и детейлинг салона. Сравните услуги и выберите подходящий уход.", "/services");

export default function ServicesPage() {
  return <main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="NOIR / Услуги" title="Защита. Восстановление. Уход." description="Защита кузова, восстановление покрытия и премиальный детейлинг для автомобилей, которые требуют точности в каждой детали." cta={{href:"/contacts#inquiry",label:"Получить расчёт"}} />
    <ServicesPreview standalone />
    <Section tone="light" aria-labelledby="service-choice-heading"><Container>
      <Label marker className="section-eyebrow">02 / Выбор услуги</Label><Heading id="service-choice-heading">С чего начать</Heading>
      <div className="choice-list">{services.map((service) => <article key={service.slug}><Heading as="h3" variant="subheading" lang="en">{service.title}</Heading><Text>{serviceChoices[service.slug]}</Text><ActionLink href={`/services/${service.slug}`} variant="secondary">Подробнее</ActionLink></article>)}</div>
      <Text className="page-note">Осмотр помогает определить, нужна ли коррекция покрытия перед защитой и какие зоны стоит обработать.</Text>
    </Container></Section>
    <FinalCta />
  </main>;
}
