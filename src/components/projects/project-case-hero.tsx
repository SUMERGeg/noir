import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Heading, Label, Text } from "@/components/ui/typography";
import type { Project } from "@/content/projects";
import type { ProjectCase } from "@/content/project-cases";

export function ProjectCaseHero({ project, details }: { project: Project; details: ProjectCase }) {
  return <>
    <section className="case-hero" aria-labelledby="case-title">
      <Container>
        <nav className="case-breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span aria-hidden="true">/</span><Link href="/projects">Проекты</Link><span aria-hidden="true">/</span><span aria-current="page" lang="en">{project.vehicle}</span>
        </nav>
        <div className="case-hero-heading">
          <div><Label marker className="section-eyebrow" lang="en">{project.title}</Label><Heading as="h1" variant="display" id="case-title" lang="en">{project.vehicle}</Heading></div>
          <Text>{project.description}</Text>
        </div>
      </Container>
      <ImageFrame {...details.hero} preload sizes="100vw" className="case-hero-image" />
    </section>
    <section className="case-vehicle" aria-label="Информация об автомобиле">
      <Container><dl className="case-facts">{details.vehicleDetails.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></Container>
    </section>
  </>;
}
