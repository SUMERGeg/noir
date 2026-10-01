import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { homeImages } from "@/content/home";
import { projects } from "@/content/projects";

export function FeaturedProject() {
  const project = projects[0];
  return (
    <Section spacing="none" id="featured-project" className="featured-project" aria-labelledby="project-heading">
      <Container>
        <div className="project-intro">
          <div>
            <Label marker className="section-eyebrow">02 / Избранный проект</Label>
            <Heading id="project-heading" lang="en">{project.title}</Heading>
          </div>
          <p className="project-vehicle" lang="en">{project.vehicle}</p>
        </div>
      </Container>
      <ImageFrame {...homeImages.project} sizes="100vw" className="project-image" />
      <Container className="project-details">
        <div className="project-description">
          <Text>{project.description}</Text>
          <ActionLink href={`/projects/${project.slug}`} prefetch={false} variant="secondary">Смотреть проект</ActionLink>
        </div>
        <div>
          <Label className="detail-label">Выполненные работы</Label>
          <ul className="project-services">
            {project.workPerformed.map((work) => <li key={work}>{work}</li>)}
          </ul>
        </div>
        <ul className="project-metadata" aria-label="Технические характеристики проекта">
          {project.metadata.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Container>
    </Section>
  );
}
