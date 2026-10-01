import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { ImageComparison } from "@/components/ui/image-comparison";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { homeImages } from "@/content/home";
import { services } from "@/content/services";

export function BeforeAfter() {
  const service = services[2];
  return (
    <Section id="before-after" aria-labelledby="comparison-heading">
      <Container className="comparison-content">
        <div className="section-heading-row comparison-heading-row">
          <div>
            <Label marker className="section-eyebrow">04 / До и после</Label>
            <Heading id="comparison-heading" lang="en">{service.title}</Heading>
          </div>
          <Text className="comparison-intro">{service.description}</Text>
          <ActionLink href="/services/paint-correction" prefetch={false} variant="secondary" className="comparison-link">О коррекции покрытия</ActionLink>
        </div>
        <ImageComparison before={homeImages.before} after={homeImages.after} />
      </Container>
    </Section>
  );
}
