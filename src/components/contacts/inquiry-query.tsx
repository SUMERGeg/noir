"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { InquiryForm } from "./inquiry-form";
import { pricing } from "@/content/pricing";
import { services } from "@/content/services";
import { parsePpfZones } from "@/content/ppf-zones";
import { queryValue } from "@/lib/query-value";

function InquiryFromQuery() {
  const query = useSearchParams();
  const selectedPackage = pricing.find((item) => item.id === queryValue(query, "package"));
  const requestedService = queryValue(query, "service") ?? "";
  const service = selectedPackage?.serviceSlug ?? (services.some((item) => item.slug === requestedService) ? requestedService : "");
  const zones = service === "ppf" && !selectedPackage ? parsePpfZones(queryValue(query, "zones")) : [];
  return <InquiryForm key={`${service}:${selectedPackage?.id ?? ""}:${zones.join(",")}`} initialService={service} initialPackage={selectedPackage?.id} initialZones={zones} />;
}

export function InquiryQuery() {
  return <Suspense fallback={<InquiryForm initialService="" />}><InquiryFromQuery /></Suspense>;
}
