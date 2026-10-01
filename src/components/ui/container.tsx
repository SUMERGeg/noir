import type { ComponentProps } from "react";
import { classNames } from "@/lib/class-names";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={classNames("site-container", className)} {...props} />;
}
