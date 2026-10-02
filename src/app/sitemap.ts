import type { MetadataRoute } from "next";
import { projectCases } from "@/content/project-cases";
import { services } from "@/content/services";
import { absoluteSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/services", "/projects", "/pricing", "/about", "/contacts",
    ...services.map(({ slug }) => `/services/${slug}`),
    ...projectCases.map(({ slug }) => `/projects/${slug}`),
  ];
  return paths.map((path) => ({ url: absoluteSiteUrl(path.endsWith("/") ? path : `${path}/`) }));
}
