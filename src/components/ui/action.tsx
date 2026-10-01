import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { classNames } from "@/lib/class-names";

type ActionVariant = "primary" | "secondary" | "outline";

interface ActionStyleProps {
  variant?: ActionVariant;
  arrow?: boolean;
  iconSize?: number;
}

const actionClasses: Record<ActionVariant, string> = {
  primary: "primary-action",
  secondary: "secondary-action",
  outline: "outline-action",
};

function ActionArrow({ variant, iconSize }: { variant: ActionVariant; iconSize?: number }) {
  const Icon = variant === "secondary" ? ArrowRight : ArrowUpRight;
  const size = iconSize ?? (variant === "secondary" ? 20 : variant === "outline" ? 17 : 19);
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}

export function ActionLink({
  variant = "primary",
  arrow = true,
  iconSize,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & ActionStyleProps) {
  return (
    <Link className={classNames(actionClasses[variant], className)} {...props}>
      {children}
      {arrow && <ActionArrow variant={variant} iconSize={iconSize} />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  arrow = false,
  iconSize,
  className,
  children,
  type = "button",
  ...props
}: ComponentProps<"button"> & ActionStyleProps) {
  return (
    <button type={type} className={classNames(actionClasses[variant], className)} {...props}>
      {children}
      {arrow && <ActionArrow variant={variant} iconSize={iconSize} />}
    </button>
  );
}
