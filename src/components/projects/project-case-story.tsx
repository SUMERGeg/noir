import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageComparison } from "@/components/ui/image-comparison";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import type { Project } from "@/content/projects";
import type { ProjectCase } from "@/content/project-cases";
import { services } from "@/content/services";
import { porscheDetails, porscheDetailOverview } from "@/content/porsche-details";
import { ProjectDetailExplorer } from "./project-detail-explorer";

export function ProjectCaseStory({ project, details }: { project: Project; details: ProjectCase }) {
  const relatedService = services.find((service) => service.slug === details.relatedServiceSlug)!;
  return <>
    <Section tone="light" aria-labelledby="case-challenge-heading">
      <Container className="case-editorial">
        <div><Label marker className="section-eyebrow">01 / Задача</Label><Heading id="case-challenge-heading">Сохранить характер</Heading></div>
        <Text className="case-lead">{details.challenge}</Text>
      </Container>
    </Section>
    <Section tone="light" className="case-work-section" aria-labelledby="case-work-heading">
      <Container>
        <div className="case-editorial">
          <div><Label marker className="section-eyebrow">02 / Выполненные работы</Label><Heading id="case-work-heading">Комплексная защита</Heading></div>
          <ol className="case-work-list">{project.workPerformed.map((item, index) => <li key={item}><span aria-hidden="true">0{index + 1}</span>{item}</li>)}</ol>
        </div>
        <ol className="case-process">{details.process.map((step) => <li key={step.title}><Heading as="h3" variant="subheading">{step.title}</Heading><Text>{step.description}</Text></li>)}</ol>
      </Container>
    </Section>
    <Section aria-labelledby="case-technical-heading">
      <Container>
        <Label marker className="section-eyebrow">03 / Технические данные</Label><Heading id="case-technical-heading">Точность в цифрах</Heading>
        <dl className="case-facts case-technical-facts">{details.technicalDetails.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
      </Container>
    </Section>
    <Section spacing="none" id="case-details" aria-labelledby="case-gallery-heading" className="case-gallery-section">
      <Container>
        <Label marker className="section-eyebrow">04 / Галерея</Label><Heading id="case-gallery-heading">Рассмотреть детали</Heading>
        <ProjectDetailExplorer overview={porscheDetailOverview} details={porscheDetails} />
      </Container>
    </Section>
    <Section aria-labelledby="case-comparison-heading">
      <Container className="comparison-content">
        <div className="section-heading-row comparison-heading-row"><div><Label marker className="section-eyebrow">05 / До и после</Label><Heading id="case-comparison-heading">Чистота покрытия</Heading></div><Text className="comparison-intro">Иллюстрация того, как коррекция покрытия меняет отражения и видимость мелких царапин.</Text></div>
        <ImageComparison {...details.comparison} />
      </Container>
    </Section>
    <Section tone="light" aria-labelledby="case-result-heading">
      <Container className="case-editorial"><div><Label marker className="section-eyebrow">06 / Результат</Label><Heading id="case-result-heading">Оригинальный вид.<br />Защищённый кузов.</Heading></div><div><Text className="case-lead">{details.result}</Text><ul className="case-result-list">{project.workPerformed.map((item) => <li key={item}>{item}</li>)}</ul></div></Container>
    </Section>
    <Section tone="light" className="case-related-section" aria-labelledby="case-related-heading">
      <Container className="case-editorial"><div><Label marker className="section-eyebrow">07 / Услуга в проекте</Label><Heading id="case-related-heading" lang="en">{relatedService.title}</Heading></div><div><Text>{relatedService.description}</Text><ActionLink href={`/services/${relatedService.slug}`} variant="secondary">О защите плёнкой</ActionLink></div></Container>
    </Section>
  </>;
}
