"use client";

import { useEffect, useState } from "react";
import { History24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchForm } from "@/components/search/search-form";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

/** Distance de scroll (px) à partir de laquelle la barre compacte apparaît. */
const SHOW_AFTER = 240;

export function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-primary text-white shadow-md transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <Container className="flex h-[72px] items-center gap-4 sm:gap-6">
        <Logo compact />
        <div className="mx-auto w-full max-w-2xl flex-1">
          <SearchForm compact idPrefix="sticky-" />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Historique"
            className="hidden size-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-brand-700 sm:flex"
          >
            <History24Regular />
          </button>
          <MobileNav items={mainNav} alwaysVisible />
        </div>
      </Container>
    </div>
  );
}
