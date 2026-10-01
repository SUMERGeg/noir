import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { finalCta, hero } from "@/content/home";
import { site } from "@/content/site";
import type { ServiceSlug } from "@/content/services";

export function FinalCta({ serviceSlug }: { serviceSlug?: ServiceSlug }) {
  return (
    <Section id="assessment" className="final-cta" aria-labelledby="assessment-heading">
      <ImageFrame src={hero.image.src} alt="" aspect="free" sizes="100vw" className="final-cta-image" imageClassName="final-cta-photo" />
      <div className="final-cta-shade" aria-hidden="true" />
      <Container className="final-cta-inner">
        <Label marker className="section-eyebrow" lang="en">{finalCta.eyebrow}</Label>
        <Heading id="assessment-heading" lang="en">{finalCta.heading}</Heading>
        <Text>{finalCta.description}</Text>
        <ActionLink href={serviceSlug ? `/contacts?service=${serviceSlug}#inquiry` : "/contacts#inquiry"} prefetch={false}>{site.primaryCta}</ActionLink>
      </Container>
    </Section>
  );
}
