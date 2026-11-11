import Link from "next/link";
import type { LinkItem } from "@/config/places";

/** Liens séparés par « | », qui passent à la ligne (maillage SEO). */
export function InlineLinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex flex-wrap text-sm leading-6">
      {links.map((link, i) => (
        <li key={link.label} className="flex items-center">
          <Link href={link.href} className="text-brand-700 hover:underline">
            {link.label}
          </Link>
          {i < links.length - 1 && (
            <span aria-hidden className="mx-2 text-muted-foreground">
              |
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
