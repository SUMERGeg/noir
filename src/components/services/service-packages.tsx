import { ActionLink } from "@/components/ui/action";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { pricing } from "@/content/pricing";
import { services, type ServiceSlug } from "@/content/services";
import { formatPrice } from "@/lib/format-price";
import { PpfCoverageSelector } from "@/components/pricing/ppf-coverage-selector";
import type { PpfZoneId } from "@/content/ppf-zones";

export function ServicePackages({ slug, initialZones }: { slug: ServiceSlug; initialZones?: readonly PpfZoneId[] }) {
  const packages = pricing.filter((item) => item.serviceSlug === slug);
  const service = services.find((item) => item.slug === slug)!;
  return <Section tone="light" id="service-packages" aria-labelledby="service-packages-heading"><Container>
    <Label marker className="section-eyebrow">05 / Стоимость</Label><Heading id="service-packages-heading">{packages.length ? "Выберите объём защиты" : "Стоимость работ"}</Heading>
    {slug === "ppf" ? <PpfCoverageSelector key={initialZones?.join(",")} initialZones={initialZones} /> : <div className="service-packages-grid">{packages.map((item, index) => <Card key={item.id} className="pricing-card">
      <Label className="package-index">0{index + 1} / {slug.toUpperCase()}</Label>
      <Heading as="h3" variant="subheading" lang="en">{item.title}</Heading>
      <p className="package-price">{formatPrice(item.startingPrice)}</p>
      <ul className="package-inclusions">{item.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}</ul>
      <ActionLink href={`/contacts?package=${item.id}#inquiry`} prefetch={false} variant="outline">Получить расчёт</ActionLink>
    </Card>)}{!packages.length && <Card className="pricing-card"><Heading as="h3" variant="subheading" lang="en">{service.title}</Heading><p className="package-price">{formatPrice(service.startingPrice)}</p><Text className="pricing-note">{service.description}</Text><ActionLink href={`/contacts?service=${slug}#inquiry`} variant="outline">Получить расчёт</ActionLink></Card>}</div>}
    <Text className="pricing-note">Точная стоимость зависит от размера автомобиля, сложности кузова, выбранных зон защиты, состояния покрытия и дополнительных услуг.</Text>
  </Container></Section>;
}
