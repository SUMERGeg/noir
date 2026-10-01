import { PricingPreview } from "@/components/sections/pricing-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { Heading, Label } from "@/components/ui/typography";
import { services } from "@/content/services";
import { parsePpfZones } from "@/content/ppf-zones";
import { formatPrice } from "@/lib/format-price";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/pages.css";

export const metadata = pageMetadata("Стоимость услуг", "Пакеты защиты NOIR Detailing, состав работ и стартовые цены. Точный расчёт после осмотра автомобиля.", "/pricing");

export default async function PricingPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  return <main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="NOIR / Стоимость" title="Понятный объём. Прозрачная стоимость." description="Выберите пакет или отдельную услугу. Точная стоимость зависит от автомобиля, состояния покрытия и выбранных зон защиты." cta={{href:"/contacts#inquiry",label:"Получить расчёт"}} />
    <PricingPreview standalone initialZones={parsePpfZones(query.zones)} />
    <Section aria-labelledby="individual-prices-heading"><Container>
      <Label marker className="section-eyebrow">02 / Отдельные услуги</Label><Heading id="individual-prices-heading">Стоимость от</Heading>
      <div className="individual-prices">{services.map((service) => <article key={service.slug}><Heading as="h3" variant="subheading" lang="en">{service.title}</Heading><p>{formatPrice(service.startingPrice)}</p><ActionLink href={`/contacts?service=${service.slug}#inquiry`} variant="secondary">Рассчитать</ActionLink></article>)}</div>
    </Container></Section>
    <FinalCta />
  </main>;
}
