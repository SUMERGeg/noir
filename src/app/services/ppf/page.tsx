import { pageMetadata } from "@/lib/page-metadata";
import { ServicePage } from "@/components/services/service-page";
import { ppfPage } from "@/content/service-pages";
import { services } from "@/content/services";
import "@/styles/service-page.css";

const service = services[0];

export const metadata = pageMetadata(
  "Защита кузова PPF",
  service.description,
  "/services/ppf",
  { url: ppfPage.image.src, width: 1448, height: 1086, alt: ppfPage.image.alt },
);

export default function PpfPage() {
  return <ServicePage service={service} content={ppfPage} />;
}
