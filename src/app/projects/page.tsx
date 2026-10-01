import { pageMetadata } from "@/lib/page-metadata";
import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Heading, Label, Text } from "@/components/ui/typography";
import { getProjectCase, projectCases } from "@/content/project-cases";
import "@/styles/project-page.css";

export const metadata = pageMetadata(
  "Проекты",
  "Проекты NOIR Detailing: защита кузова, выполненные работы и технические детали.",
  "/projects",
  { url: projectCases[0].hero.src, width: 1672, height: 941, alt: projectCases[0].hero.alt },
);

export default function ProjectsPage() {
  return <main id="main-content" tabIndex={-1} className="case-index">
    <Container>
      <header className="case-index-heading"><Label marker className="section-eyebrow">NOIR / Проекты</Label><Heading as="h1" variant="display">Сохранено <br className="case-index-title-break" />в деталях.</Heading></header>
      <div className="case-index-list">{projectCases.map(({ slug }, index) => {
        const { project, details } = getProjectCase(slug)!;
        return <article key={slug} aria-labelledby={`project-${slug}`}>
          <ImageFrame {...details.hero} preload={index === 0} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1440px) calc(100vw - 96px), 1280px" className="case-index-image" />
          <div className="case-index-details">
            <div><Label className="section-eyebrow" lang="en">{project.title}</Label><Heading id={`project-${slug}`} lang="en">{project.vehicle}</Heading></div>
            <div><Text>{project.description}</Text><ul className="case-index-services">{project.workPerformed.map((work) => <li key={work}>{work}</li>)}</ul><ActionLink href={`/projects/${slug}`} variant="secondary">Смотреть проект</ActionLink></div>
          </div>
        </article>;
      })}</div>
    </Container>
  </main>;
}
