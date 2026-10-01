import type { Metadata } from "next";
import { hero } from "@/content/home";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image: { url: string; width: number; height: number; alt: string } = {
    url: hero.image.src, width: 1672, height: 941, alt: hero.image.alt,
  },
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — NOIR Detailing`,
      description,
      url: path,
      siteName: "NOIR Detailing",
      locale: "ru_RU",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — NOIR Detailing`,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
