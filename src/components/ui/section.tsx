import type { ComponentProps } from "react";
import { classNames } from "@/lib/class-names";

type SectionProps = ComponentProps<"section"> & {
  tone?: "dark" | "light";
  spacing?: "standard" | "none";
};

export function Section({ tone = "dark", spacing = "standard", className, ...props }: SectionProps) {
  return (
    <section
      className={classNames("section", `section-${tone}`, spacing === "standard" && "section-spaced", className)}
      {...props}
    />
  );
}
