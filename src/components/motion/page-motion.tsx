"use client";

import { animate } from "motion/mini";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type RevealAnimation = {
  controls: ReturnType<typeof animate>;
  opacity: string;
  transform: string;
};

// Enhance server-rendered content without hiding it before hydration.
export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main || !window.IntersectionObserver) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = new Map<HTMLElement, RevealAnimation>();
    const textStyles = new Map<HTMLElement, { opacity: string; transform: string }>();
    let observer: IntersectionObserver | undefined;

    function restore(element: HTMLElement, animation: RevealAnimation) {
      animation.controls.cancel();
      element.style.opacity = animation.opacity;
      element.style.transform = animation.transform;
      active.delete(element);
    }

    function prepareText(element: HTMLElement) {
      if (!textStyles.has(element)) {
        textStyles.set(element, { opacity: element.style.opacity, transform: element.style.transform });
      }
      element.style.opacity = "0";
      element.style.transform = "translateY(32px)";
    }

    function restoreText() {
      for (const [element, styles] of textStyles) {
        element.style.opacity = styles.opacity;
        element.style.transform = styles.transform;
      }
      textStyles.clear();
    }

    function configure() {
      observer?.disconnect();
      for (const [element, animation] of active) restore(element, animation);
      restoreText();
      if (preference.matches) return;
      const revealed = new WeakSet<Element>();

      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const frame = entry.target as HTMLElement;
          const isImage = frame.dataset.motion === "image";
          const element = isImage ? frame.querySelector("img") : frame;
          if (!(element instanceof HTMLElement)) continue;

          // Use the layout position so preparing text cannot count as re-entering.
          const transform = isImage ? "none" : getComputedStyle(frame).transform;
          const offset = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;
          const bounds = entry.boundingClientRect;
          if (bounds.top - offset >= window.innerHeight || bounds.bottom - offset <= 0) {
            revealed.delete(frame);
            const animation = active.get(element);
            if (animation) restore(element, animation);
            if (!isImage) prepareText(element);
            continue;
          }
          if (!entry.isIntersecting || entry.intersectionRatio === 0) continue;
          if (entry.intersectionRatio < 0.12 || revealed.has(frame)) continue;
          revealed.add(frame);

          const original = textStyles.get(element);
          const opacity = original?.opacity ?? element.style.opacity;
          const originalTransform = original?.transform ?? element.style.transform;
          const controls = animate(element, {
            opacity: isImage ? [0.25, 1] : [0, 1],
            transform: isImage
              ? ["scale(1.08)", "scale(1)"]
              : ["translateY(32px)", "translateY(0px)"],
          }, { duration: isImage ? 1.5 : 1.1, ease: [0.25, 0.6, 0.3, 1] });

          const animation = { controls, opacity, transform: originalTransform };
          active.set(element, animation);
          void controls.then(() => {
            if (active.get(element) !== animation) return;
            restore(element, animation);
            const bounds = frame.getBoundingClientRect();
            if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
              revealed.delete(frame);
              if (!isImage) prepareText(element);
            }
          });
        }
      }, { threshold: [0, 0.12] });

      for (const element of main!.querySelectorAll<HTMLElement>("[data-motion]")) {
        // Keep the first screen, restored scroll positions and anchor targets immediate.
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          revealed.add(element);
        } else if (element.dataset.motion === "text") {
          prepareText(element);
        }
        observer.observe(element);
      }
    }

    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      for (const [element, animation] of active) restore(element, animation);
      restoreText();
    };
  }, [pathname]);

  return null;
}
