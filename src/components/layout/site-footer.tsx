import Link from "next/link";
import { Link24Regular, Phone24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import {
  helpGroup,
  legalGroup,
  otherServicesGroup,
  socialGroup,
  type FooterGroup,
} from "@/config/footer";

function FooterGroupBlock({
  group,
  withIcons = false,
}: {
  group: FooterGroup;
  withIcons?: boolean;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-ink">
        {group.title}
      </h3>
      <span aria-hidden className="mt-3 block h-px w-12 bg-ink/40" />
      <ul className="mt-5 space-y-1.5 text-sm text-ink/75">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 hover:text-ink hover:underline"
            >
              {withIcons && <Link24Regular className="size-3.5" />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoreBadge({ label, name }: { label: string; name: string }) {
  return (
    <Link
      href="#"
      className="inline-flex h-11 items-center gap-2 rounded-lg bg-black px-3 text-white transition-opacity hover:opacity-85"
    >
      <Phone24Regular className="size-5" />
      <span className="leading-none">
        <span className="block text-[9px] uppercase">{label}</span>
        <span className="block text-sm font-semibold">{name}</span>
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="bg-neutral-100 py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-10">
              <FooterGroupBlock group={helpGroup} />
              <FooterGroupBlock group={legalGroup} />
            </div>
            <FooterGroupBlock group={otherServicesGroup} />
            <div className="flex flex-col justify-between gap-10">
              <FooterGroupBlock group={socialGroup} withIcons />
              <div className="flex flex-wrap gap-3">
                <StoreBadge label="Télécharger dans" name="l'App Store" />
                <StoreBadge label="Disponible sur" name="Google Play" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white py-5">
        <Container className="flex flex-wrap items-center justify-between gap-3 text-xs text-ink/70">
          <div className="flex flex-wrap items-center gap-3">
            <Logo className="text-ink [&_svg]:h-5 [&_svg]:w-6 [&_span]:text-sm" />
            <span>est l&apos;annuaire local du Togo · © 2026</span>
          </div>
          <Link href="#" className="hover:text-ink hover:underline">
            Recrutement
          </Link>
        </Container>
      </div>
    </footer>
  );
}
