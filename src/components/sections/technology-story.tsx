import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { homeImages, technology, type MaterialContent } from "@/content/home";

export function TechnologyStory({ content = technology, servicePage = false, image = homeImages.material, caption = "PPF / Прозрачная защитная плёнка" }: { content?: MaterialContent; servicePage?: boolean; image?: {src:string;alt:string}; caption?: string }) {
  return (
    <Section tone="light" id="technology" aria-labelledby="technology-heading">
      <Container className="technology-layout">
        <div className="technology-copy">
          <Label marker className="section-eyebrow" lang={servicePage ? undefined : "en"}>{servicePage ? "06 / Материал" : content.eyebrow}</Label>
          <Heading id="technology-heading" lang="en">{content.heading}</Heading>
          <Text className="technology-description">{content.description}</Text>
          <ul className="material-features">
            {content.features.map((feature, index) => (
              <li key={feature}><span aria-hidden="true">0{index + 1}</span>{feature}</li>
            ))}
          </ul>
          {!servicePage && <ActionLink href="/services/ppf" prefetch={false} variant="secondary">О защите плёнкой</ActionLink>}
        </div>
        <figure>
          <ImageFrame {...image} aspect="portrait" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1440px) 46vw, 600px" className="material-image" />
          <figcaption className="material-caption">{caption}</figcaption>
        </figure>
      </Container>
    </Section>
  );
}
