import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { credibility } from "@/content/home";

export function Credibility() {
  return (
    <Section spacing="none" className="credibility" aria-label="Показатели студии">
      <Container>
        <dl className="credibility-list">
          {credibility.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
