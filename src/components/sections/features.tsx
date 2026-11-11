import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FeatureCard } from "@/components/shared/feature-card";
import { features } from "@/config/site";

export function Features() {
  return (
    <section id="avantages" className="pb-16 sm:pb-20">
      <Container>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Avec PagesVertes, rencontrez le pro qu&apos;il vous faut !
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <p className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Comme vous, 1 Togolais sur 3 utilise PagesVertes chaque mois.
          </p>
          <Link
            href="#actus"
            className="mt-5 inline-flex h-10 items-center rounded-full border border-brand-700/50 bg-[#ffe000] px-5 text-sm font-semibold text-brand-700 transition-opacity hover:opacity-90"
          >
            Consulter notre actualité
          </Link>
        </div>
      </Container>
    </section>
  );
}
