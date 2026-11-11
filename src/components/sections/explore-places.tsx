import Link from "next/link";
import { Container } from "@/components/shared/container";
import { InlineLinkList } from "@/components/shared/link-list";
import { PlaceCarousel } from "@/components/shared/place-carousel";
import {
  cities,
  guideLinks,
  nearbyLinks,
  quickLinks,
  regions,
} from "@/config/places";

export function ExplorePlaces() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container className="space-y-10">
        <InlineLinkList links={nearbyLinks} />

        <PlaceCarousel
          title="Tous les professionnels de votre région :"
          places={regions}
        />
        <PlaceCarousel
          title="Tous les professionnels de votre ville :"
          places={cities}
        />

        <InlineLinkList links={guideLinks} />

        <ul className="space-y-1 text-sm">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-brand-700 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
