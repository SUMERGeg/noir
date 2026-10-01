"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";

export function DesktopNavigation() {
  const pathname = usePathname();
  return <nav className="desktop-navigation" aria-label="Основная навигация">{navigation.map((item) => <Link key={item.href} href={item.href} prefetch={false} className="navigation-link" aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}>{item.label}</Link>)}</nav>;
}
