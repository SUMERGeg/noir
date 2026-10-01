import type { ComponentProps } from "react";
import { classNames } from "@/lib/class-names";

export function Card({ className, ...props }: ComponentProps<"article">) {
  return <article className={classNames("content-card", className)} {...props} />;
}
