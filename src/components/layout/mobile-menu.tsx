"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { Brand } from "./brand";
import { ActionLink } from "@/components/ui/action";
import { Label } from "@/components/ui/typography";

export function MobileMenu() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const menu = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu?.showModal();

    const desktop = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => {
      if (desktop.matches) menu?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      menu?.close();
    };
  }, [isOpen]);

  const close = () => dialog.current?.close();

  const keepFocusInMenu = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;

    const elements = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const first = elements[0];
    const last = elements[elements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div className="mobile-menu-control">
      <button
        type="button"
        className="menu-toggle"
        aria-label="Открыть меню"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
      </button>

      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-menu"
        aria-label="Навигация по сайту"
        onClose={() => setIsOpen(false)}
        onKeyDown={keepFocusInMenu}
      >
        <div className="mobile-menu-top">
          <Brand onClick={close} />
          <button type="button" className="menu-toggle" aria-label="Закрыть меню" onClick={close} autoFocus>
            <X size={24} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-navigation" aria-label="Основная навигация">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} prefetch={false} className="mobile-navigation-link" onClick={close} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}>
              <span className="mobile-navigation-index" aria-hidden="true">0{index + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={23} strokeWidth={1.25} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-bottom">
          <ActionLink href="/contacts#inquiry" prefetch={false} iconSize={18} onClick={close}>
            {site.primaryCta}
          </ActionLink>
          <Label lang="en">{site.descriptor}</Label>
        </div>
      </dialog>
    </div>
  );
}
