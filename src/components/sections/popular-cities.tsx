import Link from "next/link";
import { Location24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { popularCities } from "@/config/site";

export function PopularCities() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <SectionHeading title="Trouvez un pro dans votre ville" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {popularCities.map((city) => (
            <li key={city}>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full border bg-white px-4 py-2 text-sm font-medium text-brand-900 transition-colors hover:border-primary hover:bg-brand-50 hover:text-brand-700"
              >
                <Location24Regular className="size-4 text-primary" />
                {city}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
