import Link from "next/link";
import { Brand } from "@/components/layout/brand";
import { Container } from "@/components/ui/container";
import { navigation, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <Brand />
          <nav aria-label="Навигация в подвале" className="footer-navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} prefetch={false}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="footer-bottom">
          <p lang="en">{site.descriptor}</p>
          <p>NOIR Detailing — концептуальный портфолио-проект</p>
        </div>
      </Container>
    </footer>
  );
}
