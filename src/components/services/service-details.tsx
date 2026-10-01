import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import type { ServicePageContent } from "@/content/service-pages";

export function ServiceDetails({ content }: { content: ServicePageContent }) {
  return <>
    <Section tone="light" aria-labelledby="service-summary-heading">
      <Container className="service-editorial-grid">
        <div><Label marker className="section-eyebrow">{content.summaryLabel ?? "01 / Защита покрытия"}</Label><Heading id="service-summary-heading">{content.summaryHeading ?? "Сохранить оригинал"}</Heading></div>
        <Text className="service-lead">{content.summary}</Text>
      </Container>
    </Section>
    <Section aria-labelledby="service-benefits-heading">
      <Container className="service-editorial-grid">
        <div><Label marker className="section-eyebrow">02 / Преимущества</Label><Heading id="service-benefits-heading">{content.benefitsHeading ?? "Защита в деталях"}</Heading></div>
        <ol className="service-benefits">{content.benefits.map((benefit, index) => <li key={benefit}><span aria-hidden="true">0{index + 1}</span>{benefit}</li>)}</ol>
      </Container>
    </Section>
    <Section aria-labelledby="service-audience-heading" className="service-audience-section">
      <Container>
        <Label marker className="section-eyebrow">{content.audienceLabel ?? "03 / Зоны защиты"}</Label><Heading id="service-audience-heading">Под вашу эксплуатацию</Heading>
        <div className="service-audience-grid">{content.audience.map((item) => <article key={item.title}><Heading as="h3" variant="subheading">{item.title}</Heading><Text>{item.description}</Text></article>)}</div>
      </Container>
    </Section>
  </>;
}

export function ServiceWarranty({ content }: { content: ServicePageContent }) {
  return <Section aria-labelledby="service-warranty-heading"><Container className="service-editorial-grid">
    <div><Label marker className="section-eyebrow">{content.warrantyHeading ? "07 / Результат и уход" : "07 / Гарантия"}</Label><Heading id="service-warranty-heading">{content.warrantyHeading ?? "Защита надолго"}</Heading></div>
    <div><p className="service-warranty-value">{content.warranty.value}</p><Text>{content.warranty.description}</Text></div>
  </Container></Section>;
}

export function ServiceFaq({ content }: { content: ServicePageContent }) {
  return <Section aria-labelledby="service-faq-heading" className="service-faq-section"><Container className="service-editorial-grid">
    <div><Label marker className="section-eyebrow">08 / FAQ</Label><Heading id="service-faq-heading">Перед записью</Heading></div>
    <div className="service-faq">{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true" className="service-faq-icon" /></summary><Text>{faq.answer}</Text></details>)}</div>
  </Container></Section>;
}
