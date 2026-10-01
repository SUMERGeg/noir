import Link from "next/link";
import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Heading, Label, Text } from "@/components/ui/typography";
import type { Service } from "@/content/services";
import type { ServicePageContent } from "@/content/service-pages";
import { formatPrice } from "@/lib/format-price";

export function ServiceHero({ service, content }: { service: Service; content: ServicePageContent }) {
  return (
    <section className="service-hero" aria-labelledby="service-title">
      <Container>
        <nav className="service-breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span aria-hidden="true">/</span><span>Услуги</span><span aria-hidden="true">/</span><span aria-current="page">{content.eyebrow}</span>
        </nav>
        <div className="service-hero-grid">
          <div className="service-hero-copy">
            <Label marker className="section-eyebrow">{content.eyebrow}</Label>
            <Heading as="h1" variant="display" id="service-title" lang="en">{service.title}</Heading>
            <Text>{service.description}</Text>
            <p className="service-starting-price">{formatPrice(service.startingPrice)}</p>
            <div className="service-hero-actions">
              <ActionLink href={`/contacts?service=${service.slug}#inquiry`} prefetch={false}>Получить расчёт</ActionLink>
              <ActionLink href="#service-packages" variant="secondary">Выбрать пакет</ActionLink>
            </div>
          </div>
          <ImageFrame {...content.image} aspect="portrait" preload sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1440px) 45vw, 600px" className="service-hero-image" />
        </div>
      </Container>
    </section>
  );
}
