import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { footerColumns, legalLinks, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-1">
            <Logo inverted />
            <p className="text-sm text-white/60">{siteConfig.tagline}.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {siteConfig.name}. Tous droits
            réservés.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
