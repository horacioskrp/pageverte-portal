"use client";

import { useState } from "react";
import Link from "next/link";
import { Dismiss24Regular, Navigation24Regular } from "@/components/icons";
import type { NavItem } from "@/config/site";

export function MobileNav({
  items,
  alwaysVisible = false,
}: {
  items: NavItem[];
  alwaysVisible?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={alwaysVisible ? undefined : "lg:hidden"}>
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-full border border-white text-white"
      >
        {open ? <Dismiss24Regular /> : <Navigation24Regular />}
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full border-t border-ink/10 bg-white px-4 py-4 shadow-lg">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-semibold text-ink hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#pro"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[#ffe000] px-3 py-2.5 text-center font-bold text-brand-700"
              >
                Se référencer
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
