import type { MetadataRoute } from "next";
import { projectCases } from "@/content/project-cases";
import { services } from "@/content/services";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/services", "/projects", "/pricing", "/about", "/contacts",
    ...services.map(({ slug }) => `/services/${slug}`),
    ...projectCases.map(({ slug }) => `/projects/${slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
