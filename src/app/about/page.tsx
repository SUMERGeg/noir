import { Credibility } from "@/components/sections/credibility";
import { Process } from "@/components/sections/process";
import { TechnologyStory } from "@/components/sections/technology-story";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { studio } from "@/content/studio";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/pages.css";

export const metadata = pageMetadata("О студии", "Философия NOIR Detailing: сохранение оригинального покрытия, подготовка поверхности, материалы и контроль качества.", "/about");

export default function AboutPage() {
  return <main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="NOIR / Студия" title="Сохранить характер автомобиля." description={studio.philosophy} cta={{href:"/projects",label:"Смотреть проекты"}} />
    <Credibility />
    <Section tone="light" aria-labelledby="studio-approach-heading"><Container className="studio-story">
      <div><Label marker className="section-eyebrow">01 / Подход</Label><Heading id="studio-approach-heading">Сначала — осмотр</Heading><Text>{studio.approach}</Text><Heading as="h3" variant="subheading">Среда и контроль качества</Heading><Text>{studio.environment}</Text></div>
      <figure><ImageFrame {...studio.image} aspect="portrait" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1440px) 45vw, 600px" /><figcaption className="material-caption">{studio.imageCaption}</figcaption></figure>
    </Container></Section>
    <Process eyebrow="02 / От осмотра до выдачи" />
    <TechnologyStory />
    <FinalCta />
  </main>;
}
