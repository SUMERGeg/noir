"use client";

import Image from "@/components/ui/site-image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PorscheDetail } from "@/content/porsche-details";

interface ProjectDetailExplorerProps {
  overview: { src: string; alt: string };
  details: readonly PorscheDetail[];
}

export function ProjectDetailExplorer({ overview, details }: ProjectDetailExplorerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;
  const active = activeIndex === null ? null : details[activeIndex];

  useEffect(() => {
    if (!isOpen) return;
    const viewer = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    viewer?.showModal();
    return () => {
      viewer?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function open(index: number, button: HTMLButtonElement) {
    trigger.current = button;
    setActiveIndex(index);
  }

  function move(direction: number) {
    setActiveIndex((current) => current === null ? null : (current + direction + details.length) % details.length);
  }

  function handleKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Tab") {
      const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return <div className="detail-explorer">
    <figure>
      <div className="detail-overview">
        <Image src={overview.src} alt={overview.alt} fill sizes="(max-width: 767px) calc(100vw - 48px), 90vw" />
        {details.map((detail, index) => <button
          type="button"
          key={detail.id}
          className="detail-marker"
          style={{ left: `${detail.position.x}%`, top: `${detail.position.y}%` }}
          aria-label={`0${index + 1} ${detail.title} — рассмотреть деталь`}
          aria-haspopup="dialog"
          aria-controls="porsche-detail-viewer"
          onClick={(event) => open(index, event.currentTarget)}
        >
          <span className="detail-marker-number" aria-hidden="true">0{index + 1}</span>
          <span className="detail-marker-label" aria-hidden="true">{detail.title}</span>
        </button>)}
      </div>
      <figcaption className="detail-overview-caption">Нажмите на маркер, чтобы рассмотреть деталь крупнее.</figcaption>
    </figure>
    <ol className="detail-directory" aria-label="Детали Porsche">
      {details.map((detail, index) => <li key={detail.id}><button type="button" aria-haspopup="dialog" aria-controls="porsche-detail-viewer" onClick={(event) => open(index, event.currentTarget)}>
        <span className="detail-directory-number" aria-hidden="true">0{index + 1}</span>
        <span>{detail.title}</span>
        <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden="true" />
      </button></li>)}
    </ol>
    <p className="detail-concept-note">Концептуальные изображения, созданные для портфолио-проекта.</p>

    <dialog ref={dialog} id="porsche-detail-viewer" className="detail-viewer" aria-labelledby="porsche-detail-title" aria-describedby="porsche-detail-description" onClose={() => setActiveIndex(null)} onKeyDown={handleKeys} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {active && <div className="detail-viewer-sheet">
        <div className="detail-viewer-top"><span>Porsche 911 Carrera 4S / Детали</span><button type="button" className="detail-viewer-control" aria-label="Закрыть просмотр деталей" onClick={() => dialog.current?.close()} autoFocus><X size={24} strokeWidth={1.25} aria-hidden="true" /></button></div>
        <div className="detail-viewer-image" key={active.id}>
          <Image src={active.image.src} alt={active.image.alt} fill sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1200px) calc(100vw - 80px), 1120px" loading="eager" />
        </div>
        <div className="detail-viewer-bottom">
          <div className="detail-viewer-caption" aria-live="polite" aria-atomic="true">
            <span className="detail-viewer-count">0{activeIndex! + 1} / 0{details.length}</span>
            <h3 id="porsche-detail-title">{active.title}</h3>
            <p id="porsche-detail-description">{active.description}</p>
          </div>
          <div className="detail-viewer-navigation" aria-label="Переключение деталей">
            <button type="button" className="detail-viewer-control" aria-label="Предыдущая деталь" onClick={() => move(-1)}><ChevronLeft size={22} strokeWidth={1.25} aria-hidden="true" /></button>
            <button type="button" className="detail-viewer-control" aria-label="Следующая деталь" onClick={() => move(1)}><ChevronRight size={22} strokeWidth={1.25} aria-hidden="true" /></button>
          </div>
        </div>
        <p className="detail-viewer-note">Концептуальная иллюстрация</p>
      </div>}
    </dialog>
  </div>;
}
