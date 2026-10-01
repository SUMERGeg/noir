import type { ComponentProps } from "react";
import { classNames } from "@/lib/class-names";

type HeadingProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3";
  variant?: "display" | "section" | "subheading";
};

export function Heading({ as: Tag = "h2", variant = "section", className, ...props }: HeadingProps) {
  return <Tag data-motion={Tag === "h2" && variant === "section" && !className?.includes("sr-only") ? "text" : undefined} className={classNames(`heading-${variant}`, className)} {...props} />;
}

export function Text({ className, ...props }: ComponentProps<"p">) {
  return <p className={classNames("body-copy", className)} {...props} />;
}

type LabelProps = ComponentProps<"p"> & {
  as?: "p" | "span";
  marker?: boolean;
};

export function Label({ as: Tag = "p", marker = false, className, children, ...props }: LabelProps) {
  return (
    <Tag className={classNames("technical-label", marker && "label-marked", className)} {...props}>
      {marker && <span className="label-marker" aria-hidden="true" />}
      {children}
    </Tag>
  );
}
