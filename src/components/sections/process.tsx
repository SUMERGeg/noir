import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label, Text } from "@/components/ui/typography";
import { process } from "@/content/home";

export function Process({ eyebrow = "03 / Процесс", steps = process }: { eyebrow?: string; steps?: readonly {title:string;description:string}[] }) {
  return (
    <Section tone="light" id="process" className="process-section" aria-labelledby="process-heading">
      <Container>
        <div className="section-heading-row">
          <div>
            <Label marker className="section-eyebrow">{eyebrow}</Label>
            <Heading id="process-heading">От осмотра до выдачи</Heading>
          </div>
          <Label className="process-count">{steps.length} этапов работы</Label>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number" aria-hidden="true">0{index + 1}</span>
              <Heading as="h3" variant="subheading">{step.title}</Heading>
              <Text>{step.description}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
