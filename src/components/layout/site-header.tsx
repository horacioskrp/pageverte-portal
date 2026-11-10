import Link from "next/link";
import { History24Regular, PersonCircle24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { StickyHeader } from "@/components/layout/sticky-header";
import { mainNav } from "@/config/site";

const roundButton =
  "flex size-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-brand-700";

export function SiteHeader() {
  return (
    <>
      <header className="relative z-40 bg-primary text-white">
        <Container className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] font-semibold underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Historique"
              className={roundButton}
            >
              <History24Regular />
            </button>
            <button
              type="button"
              aria-label="Mon compte"
              className={roundButton}
            >
              <PersonCircle24Regular />
            </button>
            <Link
              href="#pro"
              className="hidden h-10 items-center rounded-full bg-[#ffe000] px-5 text-sm font-bold text-brand-700 transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Se référencer
            </Link>
            <MobileNav items={mainNav} />
          </div>
        </Container>
      </header>
      <StickyHeader />
    </>
  );
}
