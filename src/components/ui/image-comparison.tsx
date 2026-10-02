"use client";

import { useId, useState } from "react";
import Image from "@/components/ui/site-image";
import { ChevronsLeftRight } from "lucide-react";

interface ComparisonImage {
  src: string;
  alt: string;
}

export function ImageComparison({ before, after, caption = "Визуализация коррекции покрытия для концептуального проекта." }: { before: ComparisonImage; after: ComparisonImage; caption?: string }) {
  const [position, setPosition] = useState(50);
  const id = useId();
  const sizes = "(max-width: 767px) calc(100vw - 48px), (max-width: 1099px) calc(100vw - 96px), min(960px, 106.667svh, 67vw)";

  return (
    <figure className="image-comparison">
      <div className="comparison-images">
        <Image {...after} fill sizes={sizes} className="comparison-photo" />
        <div className="comparison-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image {...before} fill sizes={sizes} className="comparison-photo" />
        </div>
        <div className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true">
          <span><ChevronsLeftRight size={22} strokeWidth={1.5} /></span>
        </div>
        <span className="comparison-tag comparison-tag-before">До</span>
        <span className="comparison-tag comparison-tag-after">После</span>
        <input
          className="comparison-slider"
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(event) => setPosition(Number(event.currentTarget.value))}
          aria-label="Сравнить покрытие"
          aria-valuetext={`До: ${position}%. После: ${100 - position}%.`}
          aria-describedby={`${id}-instructions ${id}-caption`}
        />
      </div>
      <span id={`${id}-instructions`} className="sr-only">
        Перетаскивайте маркер на фотографии или используйте стрелки на клавиатуре.
      </span>
      <figcaption id={`${id}-caption`} className="comparison-caption">
        {caption}
      </figcaption>
    </figure>
  );
}
