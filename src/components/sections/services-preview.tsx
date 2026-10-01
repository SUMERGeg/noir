import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { services } from "@/content/services";
import { formatPrice } from "@/lib/format-price";

export function ServicesPreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <div className="section-heading-row">
          <div>
            <Label marker className="section-eyebrow">01 / Услуги</Label>
            <Heading id="services-heading">Защита и детейлинг</Heading>
          </div>
          {!standalone && <ActionLink href="/services" prefetch={false} variant="secondary">Все услуги</ActionLink>}
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.slug}>
              <span className="service-index" aria-hidden="true">0{index + 1}</span>
              <Heading as="h3" variant="subheading" className="service-name" lang="en">
                <Link href={`/services/${service.slug}`} prefetch={false} className="service-link">
                  {service.title}<ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </Heading>
              <Text className="service-description">{service.description}</Text>
              <p className="service-price">{formatPrice(service.startingPrice)}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
