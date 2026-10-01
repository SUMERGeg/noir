import { pageMetadata } from "@/lib/page-metadata";
import { ServicePage } from "@/components/services/service-page";
import { ppfPage } from "@/content/service-pages";
import { services } from "@/content/services";
import { parsePpfZones } from "@/content/ppf-zones";
import "@/styles/service-page.css";

const service = services[0];

export const metadata = pageMetadata(
  "Защита кузова PPF",
  service.description,
  "/services/ppf",
  { url: ppfPage.image.src, width: 1448, height: 1086, alt: ppfPage.image.alt },
);

export default async function PpfPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  return <ServicePage service={service} content={ppfPage} initialZones={parsePpfZones(query.zones)} />;
}
