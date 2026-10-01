import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseHero } from "@/components/projects/project-case-hero";
import { ProjectCaseStory } from "@/components/projects/project-case-story";
import { FinalCta } from "@/components/sections/final-cta";
import { getProjectCase, projectCases } from "@/content/project-cases";
import { pageMetadata } from "@/lib/page-metadata";
import "@/styles/project-page.css";
import "@/styles/project-details.css";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = getProjectCase((await params).slug);
  if (!entry) notFound();
  return pageMetadata(
    `${entry.project.vehicle} — ${entry.project.title}`,
    entry.project.description,
    `/projects/${entry.details.slug}`,
    { url: entry.details.hero.src, width: 1672, height: 941, alt: entry.details.hero.alt },
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const entry = getProjectCase((await params).slug);
  if (!entry) notFound();
  return <main id="main-content" tabIndex={-1}>
    <ProjectCaseHero {...entry} />
    <ProjectCaseStory {...entry} />
    <FinalCta serviceSlug={entry.details.relatedServiceSlug} />
  </main>;
}
