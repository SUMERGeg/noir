export const ppfZones = [
  { id: "front-bumper", label: "Передний бампер", front: true },
  { id: "bonnet", label: "Капот", front: true },
  { id: "front-wings", label: "Передние крылья", front: true },
  { id: "headlights", label: "Фары", front: true },
  { id: "mirrors", label: "Зеркала", front: true },
  { id: "doors", label: "Двери", front: false },
  { id: "roof", label: "Крыша", front: false },
  { id: "rear-wings", label: "Задние крылья", front: false },
  { id: "rear-deck", label: "Задняя крышка", front: false },
  { id: "rear-optics", label: "Задняя оптика", front: false },
  { id: "rear-bumper", label: "Задний бампер", front: false },
] as const;

export type PpfZoneId = (typeof ppfZones)[number]["id"];
export const frontPpfZones = ppfZones.filter((zone) => zone.front).map((zone) => zone.id);
export const fullBodyPpfZones = ppfZones.map((zone) => zone.id);

// Canonical order, known identifiers only, no duplicates or array query values.
export function parsePpfZones(value: string | string[] | undefined): PpfZoneId[] {
  if (typeof value !== "string" || value.length > 512) return [];
  const requested = new Set(value.split(","));
  return ppfZones.filter((zone) => requested.has(zone.id)).map((zone) => zone.id);
}

export function ppfZonesQuery(zones: readonly PpfZoneId[]) {
  const ordered = ppfZones.filter((zone) => zones.includes(zone.id)).map((zone) => zone.id);
  return new URLSearchParams({ service: "ppf", zones: ordered.join(",") }).toString();
}
