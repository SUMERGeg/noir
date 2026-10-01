import { ActionLink } from "@/components/ui/action";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { DesktopNavigation } from "./desktop-navigation";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Brand />
        <DesktopNavigation />
        <ActionLink href="/contacts#inquiry" prefetch={false} variant="outline" className="header-action">
          {site.primaryCta}
        </ActionLink>
        <MobileMenu />
      </Container>
    </header>
  );
}
