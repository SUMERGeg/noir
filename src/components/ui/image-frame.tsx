import type { ImageProps } from "next/image";
import Image from "@/components/ui/site-image";
import { classNames } from "@/lib/class-names";

type ImageFrameProps = Omit<ImageProps, "fill" | "width" | "height" | "className" | "sizes"> & {
  sizes: string;
  aspect?: "landscape" | "square" | "portrait" | "free";
  className?: string;
  imageClassName?: string;
};

export function ImageFrame({
  aspect = "landscape",
  className,
  imageClassName,
  ...props
}: ImageFrameProps) {
  return (
    <div data-motion={aspect !== "free" && !props.preload ? "image" : undefined} className={classNames("image-frame", aspect !== "free" && `image-frame-${aspect}`, className)}>
      <Image {...props} fill className={classNames("image-frame-photo", imageClassName)} />
    </div>
  );
}
