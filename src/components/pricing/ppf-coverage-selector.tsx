"use client";

import { useId, useState } from "react";
import { Check } from "lucide-react";
import { PpfCoverageDiagram } from "@/components/pricing/ppf-coverage-diagram";
import { ActionLink, Button } from "@/components/ui/action";
import { Heading, Label } from "@/components/ui/typography";
import { pricing } from "@/content/pricing";
import { frontPpfZones, fullBodyPpfZones, ppfZones, ppfZonesQuery, type PpfZoneId } from "@/content/ppf-zones";
import { formatPrice } from "@/lib/format-price";
import "@/styles/ppf-coverage.css";

const packages = pricing.filter((item) => item.serviceSlug === "ppf");
type CoverageMode = (typeof packages)[number]["id"] | "custom";

export function PpfCoverageSelector({ initialZones = [] }: { initialZones?: readonly PpfZoneId[] }) {
  const [mode, setMode] = useState<CoverageMode>(initialZones.length ? "custom" : "front-protection");
  const [customZones, setCustomZones] = useState<readonly PpfZoneId[] | null>(initialZones.length ? initialZones : null);
  const [activeZone, setActiveZone] = useState<PpfZoneId | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const id = useId();
  const custom = mode === "custom";
  const selected = packages.find((item) => item.id === mode);
  const selectedZones = custom ? customZones ?? frontPpfZones : mode === "full-body-ppf" ? fullBodyPpfZones : frontPpfZones;
  const active = ppfZones.find((zone) => zone.id === activeZone);
  const title = selected?.title ?? "Индивидуальная защита";

  const chooseMode = (next: CoverageMode) => {
    if (next === "custom" && customZones === null) setCustomZones(selectedZones);
    setMode(next);
    setActiveZone(null);
    setAnnouncement("");
  };

  const toggleZone = (zoneId: PpfZoneId) => {
    const included = selectedZones.includes(zoneId);
    setCustomZones(included ? selectedZones.filter((item) => item !== zoneId) : [...selectedZones, zoneId]);
    setMode("custom");
    setActiveZone(zoneId);
    const label = ppfZones.find((zone) => zone.id === zoneId)!.label;
    setAnnouncement(`${label}: ${included ? "исключено из защиты" : "добавлено в защиту"}.`);
  };

  const clearZones = () => {
    setCustomZones([]);
    setActiveZone(null);
    setAnnouncement("Выбор зон сброшен.");
  };

  return (
    <div className="ppf-selector" data-package={mode}>
      <div className="ppf-selector-controls">
        <Label id={`${id}-label`} className="ppf-selector-label">Выберите объём защиты</Label>
        <div className="ppf-package-switch" role="group" aria-labelledby={`${id}-label`}>
          {packages.map((item) => (
            <button key={item.id} type="button" lang="en" aria-pressed={mode === item.id} aria-controls={`${id}-summary`} onClick={() => chooseMode(item.id)}>
              {item.title}
            </button>
          ))}
          <button type="button" aria-pressed={custom} aria-controls={`${id}-summary`} onClick={() => chooseMode("custom")}>Индивидуально</button>
        </div>
      </div>
      <figure className="ppf-selector-visual">
        <div className="ppf-visual-header">
          <Label>PPF / Зоны защиты</Label>
          <span className="ppf-view-label">Вид сверху</span>
        </div>
        <div className="ppf-active-zone" aria-hidden="true"><span>{active ? active.label : "Выберите элементы кузова"}</span>{active && <span className="ppf-active-state">{selectedZones.includes(active.id) ? "Выбрано" : "Добавить"}</span>}</div>
        <PpfCoverageDiagram selectedZones={selectedZones} activeZone={activeZone} onToggle={toggleZone} onHighlight={setActiveZone} />
        <figcaption className="ppf-visual-caption">
          <div className="ppf-visual-legend"><span><i className="ppf-legend-covered" aria-hidden="true" />Защищено</span><span><i className="ppf-legend-uncovered" aria-hidden="true" />Без оклейки</span></div>
          <p>Нажмите на элемент кузова или выберите зону в списке.</p>
        </figcaption>
      </figure>

      <div className="ppf-selector-details">
        <div id={`${id}-summary`} className="ppf-package-summary">
          <div className="ppf-package-content" key={mode}>
            <Label className="ppf-package-number">{custom ? "03" : mode === "full-body-ppf" ? "02" : "01"} / PPF</Label>
            <Heading as="h3" variant="subheading" lang={custom ? undefined : "en"}>{title}</Heading>
            {custom ? <p className="ppf-custom-price">Стоимость после осмотра</p> : <p className="ppf-package-price">{formatPrice(selected!.startingPrice)}</p>}
            {custom ? <fieldset className="ppf-zone-picker">
              <legend className="sr-only">Элементы для индивидуальной защиты</legend>
              <div className="ppf-zone-picker-header"><span>Выбрано: {selectedZones.length} / {ppfZones.length}</span><button type="button" disabled={!selectedZones.length} onClick={clearZones}>Сбросить</button></div>
              <div className="ppf-zone-options">{ppfZones.map((zone) => <label key={zone.id} className="ppf-zone-option" data-active={activeZone === zone.id} onPointerEnter={() => setActiveZone(zone.id)} onPointerLeave={() => setActiveZone(null)}>
                <input type="checkbox" className="ppf-zone-input" checked={selectedZones.includes(zone.id)} onChange={() => toggleZone(zone.id)} onFocus={() => setActiveZone(zone.id)} onBlur={() => setActiveZone(null)} />
                <span className="ppf-zone-check" aria-hidden="true"><Check size={12} strokeWidth={2} /></span><span>{zone.label}</span>
              </label>)}</div>
            </fieldset> : <ul className="ppf-package-inclusions">{selected!.inclusions.map((item) => <li key={item}><span aria-hidden="true">—</span>{item}</li>)}</ul>}
          </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
        {custom && !selectedZones.length ? <Button disabled className="ppf-package-action">Получить расчёт</Button> : <ActionLink href={custom ? `/contacts?${ppfZonesQuery(selectedZones)}#inquiry` : `/contacts?package=${selected!.id}#inquiry`} prefetch={false} className="ppf-package-action">Получить расчёт</ActionLink>}
        <p className="ppf-diagram-note">{custom && !selectedZones.length ? "Выберите хотя бы одну зону для расчёта." : "Точные границы оклейки и стоимость уточняются при осмотре автомобиля."}</p>
      </div>
    </div>
  );
}
