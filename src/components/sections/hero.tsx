import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { hero } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  return (
    <Section spacing="none" className="hero" aria-labelledby="hero-heading">
      <ImageFrame
        src={hero.image.src}
        alt={hero.image.alt}
        aspect="free"
        preload
        sizes="(max-width: 767px) 600px, (max-width: 1099px) 1800px, 100vw"
        className="hero-image"
        imageClassName="hero-photograph"
      />
      <div className="hero-shade" aria-hidden="true" />

      <Container className="hero-inner">
        <div className="hero-content">
          <Label marker className="hero-eyebrow" lang="en">
            {hero.eyebrow}
          </Label>
          <Heading as="h1" variant="display" id="hero-heading" className="hero-heading" lang="en">
            {hero.headline.map((line) => <span key={line}>{line}</span>)}
          </Heading>
          <Text className="hero-description">{site.description}</Text>
          <div className="hero-actions">
            <ActionLink href="/contacts#inquiry" prefetch={false}>{site.primaryCta}</ActionLink>
            <ActionLink href="/projects" prefetch={false} variant="secondary">{site.secondaryCta}</ActionLink>
          </div>
        </div>

        <div className="hero-footer">
          <ul className="hero-trust" aria-label="Стандарты студии" lang="en">
            {hero.trust.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <Label as="span" className="hero-vehicle" lang="en">PORSCHE 911 CARRERA 4S</Label>
        </div>
      </Container>
    </Section>
  );
}
