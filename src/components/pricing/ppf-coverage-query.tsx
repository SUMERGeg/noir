"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PpfCoverageSelector } from "./ppf-coverage-selector";
import { parsePpfZones } from "@/content/ppf-zones";
import { queryValue } from "@/lib/query-value";

function CoverageFromQuery() {
  const query = useSearchParams();
  const zones = parsePpfZones(queryValue(query, "zones"));
  return <PpfCoverageSelector key={zones.join(",")} initialZones={zones} />;
}

export function PpfCoverageQuery() {
  return <Suspense fallback={<PpfCoverageSelector />}><CoverageFromQuery /></Suspense>;
}
