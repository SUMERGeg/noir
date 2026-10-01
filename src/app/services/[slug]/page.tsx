import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { otherServicePages } from "@/content/service-pages";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/service-page.css";

type PageProps = { params: Promise<{slug:string}> };
export const dynamicParams = false;
export function generateStaticParams() { return otherServicePages.map(({slug}) => ({slug})); }
function getEntry(slug: string) {
  const service = services.find((item) => item.slug === slug);
  const content = otherServicePages.find((item) => item.slug === slug);
  if (!service || !content) notFound();
  return { service, content };
}
export async function generateMetadata({params}:PageProps) {
  const {service} = getEntry((await params).slug);
  return pageMetadata(service.title,service.description,`/services/${service.slug}`);
}
export default async function OtherServicePage({params}:PageProps) {
  return <ServicePage {...getEntry((await params).slug)} />;
}
