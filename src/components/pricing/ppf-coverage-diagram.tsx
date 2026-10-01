import { ppfZones, type PpfZoneId } from "@/content/ppf-zones";

interface CoverageDiagramProps {
  selectedZones: readonly PpfZoneId[];
  activeZone: PpfZoneId | null;
  onToggle: (zone: PpfZoneId) => void;
  onHighlight: (zone: PpfZoneId | null) => void;
}

// A schematic top view: glazing and tyres are not PPF coverage zones.
export function PpfCoverageDiagram({ selectedZones, activeZone, onToggle, onHighlight }: CoverageDiagramProps) {
  const active = ppfZones.find((zone) => zone.id === activeZone);
  const body = `ppf-zone ppf-body-outline${selectedZones.length === ppfZones.length ? " is-covered" : ""}`;
  const zoneProps = (zone: PpfZoneId) => ({
    className: `ppf-zone ppf-zone-selectable${selectedZones.includes(zone) ? " is-covered" : ""}${activeZone === zone ? " is-active" : ""}`,
    "data-zone": zone,
    onClick: () => onToggle(zone),
    onPointerEnter: () => onHighlight(zone),
    onPointerLeave: () => onHighlight(null),
  });

  return (
    <svg className="ppf-car" viewBox="125 20 290 580" role="group" tabIndex={0}
      aria-label={`Выбор зон на схеме автомобиля. ${active ? `${active.label}: ${selectedZones.includes(active.id) ? "выбрано" : "не выбрано"}. ` : ""}Стрелки выбирают элемент, Enter или пробел меняют защиту. Также доступен список зон.`}
      onFocus={() => onHighlight(ppfZones[0].id)} onBlur={() => onHighlight(null)}
      onKeyDown={(event) => {
        if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) {
          event.preventDefault();
          const index = ppfZones.findIndex((zone) => zone.id === activeZone);
          const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
          onHighlight(ppfZones[(index + step + ppfZones.length) % ppfZones.length].id);
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle(activeZone ?? ppfZones[0].id);
        }
      }}>
      <g aria-hidden="true">
      <g className="ppf-drawing-guides" fill="none">
        <path d="M270 8v22m0 570v12M90 75h45m270 0h45M90 565h45m270 0h45" />
        <path d="M270 22l-5 8m5-8 5 8" />
        <path strokeDasharray="3 7" d="M270 36v550" />
      </g>

      <g className="ppf-tyres">
        <rect x="147" y="129" width="24" height="84" rx="7" />
        <rect x="369" y="129" width="24" height="84" rx="7" />
        <rect x="143" y="439" width="27" height="86" rx="7" />
        <rect x="370" y="439" width="27" height="86" rx="7" />
      </g>

      <path className={body} data-zone="body" d="M270 45c45 0 80 7 93 35 13 31 19 80 12 122l-6 67c-4 41-4 76 1 110 20 36 22 105 7 153-13 34-36 52-107 52s-94-18-107-52c-15-48-13-117 7-153 5-34 5-69 1-110l-6-67c-7-42-1-91 12-122 13-28 48-35 93-35Z" />

      <g {...zoneProps("front-bumper")}>
        <path d="M178 83q92-44 184 0l-3 26q-89-29-178 0Z" />
      </g>
      <path {...zoneProps("bonnet")} d="M209 112q61-20 122 0l11 78q-72 26-144 0Z" />
      <g {...zoneProps("front-wings")}>
        <path d="M180 113l19-5-11 89 2 29-19 27-7-57q-5-43 16-83Z" />
        <path d="m360 113-19-5 11 89-2 29 19 27 7-57q5-43-16-83Z" />
      </g>

      <g {...zoneProps("doors")}>
        <path d="m174 267 21-28 2 97-6 56-21 9 7-41Z" />
        <path d="m366 267-21-28-2 97 6 56 21 9-7-41Z" />
      </g>
      <path {...zoneProps("roof")} d="M210 288q60-10 120 0l-3 94q-57 12-114 0Z" />
      <g {...zoneProps("rear-wings")}>
        <path d="m170 410 30-12 8 78-21 64-22-16q-11-65 5-114Z" />
        <path d="m370 410-30-12-8 78 21 64 22-16q11-65-5-114Z" />
      </g>
      <path {...zoneProps("rear-deck")} d="M208 477q62 12 124 0l17 42q-79 18-158 0Z" />
      <path {...zoneProps("rear-bumper")} d="M181 549q89 22 178 0l-13 18q-76 24-152 0Z" />

      <g className="ppf-glazing">
        <path d="M196 222q74-30 148 0l-10 52q-64-9-128 0Z" />
        <path d="m196 250 8 33 2 89-10 9-3-43Z" />
        <path d="m344 250-8 33-2 89 10 9 3-43Z" />
        <path d="M211 400q59 14 118 0l12 63q-71 23-142 0Z" />
      </g>

      <g {...zoneProps("mirrors")}>
        <path d="m171 243-23-8q-11 0-11 13l31 13Z" />
        <path d="m369 243 23-8q11 0 11 13l-31 13Z" />
      </g>
      <g {...zoneProps("headlights")}>
        <ellipse cx="184" cy="150" rx="9" ry="22" transform="rotate(13 184 150)" />
        <ellipse cx="356" cy="150" rx="9" ry="22" transform="rotate(-13 356 150)" />
      </g>
      <path {...zoneProps("rear-optics")} d="M181 528q89 19 178 0l-1 10q-88 19-176 0Z" />

      <g className="ppf-car-details" fill="none">
        <path d="M208 488q62 15 124 0m-122 7q60 15 120 0m-118 7q58 14 116 0" />
        <path d="M197 195q73 27 146 0M181 113q9-4 18-5m142 0q9 1 18 5" />
        <path d="M184 92q86-28 172 0m-162 464q76 15 152 0" />
        <path d="m187 321 1 21m164-21-1 21" />
        <ellipse cx="270" cy="551" rx="5" ry="3" />
      </g>
      </g>
    </svg>
  );
}
