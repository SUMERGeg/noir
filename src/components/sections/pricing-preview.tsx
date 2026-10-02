import { ActionLink } from "@/components/ui/action";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { pricing } from "@/content/pricing";
import { site } from "@/content/site";
import { formatPrice } from "@/lib/format-price";
import { PpfCoverageQuery } from "@/components/pricing/ppf-coverage-query";

export function PricingPreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <Section tone="light" id="pricing" aria-labelledby="pricing-heading">
      <Container>
        <div className="section-heading-row">
          <div>
            <Label marker className="section-eyebrow">{standalone ? "01 / Пакеты" : "05 / Стоимость"}</Label>
            <Heading id="pricing-heading">Пакеты защиты</Heading>
          </div>
          {!standalone && <ActionLink href="/pricing" prefetch={false} variant="secondary">Все цены</ActionLink>}
        </div>
        {standalone && <PpfCoverageQuery />}
        <div className={standalone ? "pricing-ceramic" : "pricing-list"}>
          {pricing.filter((item) => !standalone || item.serviceSlug !== "ppf").map((item, index) => (
            <Card key={item.id} className="pricing-card">
              <Label className="package-index">0{standalone ? 3 : index + 1} / {item.serviceSlug === "ppf" ? "PPF" : "CERAMIC"}</Label>
              <Heading as="h3" variant="subheading" lang="en">{item.title}</Heading>
              <p className="package-price">{formatPrice(item.startingPrice)}</p>
              <ul className="package-inclusions">
                {item.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
              </ul>
              <ActionLink href={`/contacts?package=${item.id}#inquiry`} prefetch={false} variant="outline">{site.primaryCta}</ActionLink>
            </Card>
          ))}
        </div>
        <Text className="pricing-note">Точная стоимость зависит от размера автомобиля, сложности кузова, выбранных зон защиты, состояния покрытия и дополнительных услуг.</Text>
      </Container>
    </Section>
  );
}
