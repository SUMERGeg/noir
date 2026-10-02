import { FinalCta } from "@/components/sections/final-cta";
import { Process } from "@/components/sections/process";
import { TechnologyStory } from "@/components/sections/technology-story";
import { ServiceDetails, ServiceFaq, ServiceWarranty } from "@/components/services/service-details";
import { ServiceHero } from "@/components/services/service-hero";
import { ServicePackages } from "@/components/services/service-packages";
import type { ServicePageContent } from "@/content/service-pages";
import type { Service } from "@/content/services";

export function ServicePage({ service, content }: { service: Service; content: ServicePageContent }) {
  return <main id="main-content" tabIndex={-1}>
    <ServiceHero service={service} content={content} />
    <ServiceDetails content={content} />
    <Process eyebrow="04 / Процесс" steps={content.process} />
    <ServicePackages slug={content.slug} />
    <TechnologyStory content={content.material} image={content.materialImage} caption={content.materialCaption} servicePage />
    <ServiceWarranty content={content} />
    <ServiceFaq content={content} />
    <FinalCta serviceSlug={content.slug} />
  </main>;
}
