import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedProject } from "@/components/sections/featured-project";
import { TechnologyStory } from "@/components/sections/technology-story";
import { Process } from "@/components/sections/process";
import { BeforeAfter } from "@/components/sections/before-after";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Reviews } from "@/components/sections/reviews";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Credibility />
      <ServicesPreview />
      <FeaturedProject />
      <TechnologyStory />
      <Process />
      <BeforeAfter />
      <PricingPreview />
      <Reviews />
      <FinalCta />
    </main>
  );
}
