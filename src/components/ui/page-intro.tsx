import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { Heading, Label, Text } from "@/components/ui/typography";

export function PageIntro({ eyebrow, title, description, cta }: { eyebrow: string; title: string; description: string; cta?: { href: string; label: string } }) {
  return <header className="page-intro"><Container>
    <Label marker className="section-eyebrow">{eyebrow}</Label>
    <div className="page-intro-grid"><Heading as="h1" variant="display">{title}</Heading><div><Text>{description}</Text>{cta && <ActionLink href={cta.href} className="page-intro-action">{cta.label}</ActionLink>}</div></div>
  </Container></header>;
}
