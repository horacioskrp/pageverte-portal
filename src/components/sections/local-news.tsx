import Link from "next/link";
import { Location24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { NewsCard } from "@/components/shared/news-card";
import { NewsletterCard } from "@/components/shared/newsletter-card";
import { localNews, newsCity } from "@/config/news";

/** Position de la carte newsletter dans la grille (après la 3e actu). */
const NEWSLETTER_INDEX = 3;

export function LocalNews() {
  const before = localNews.slice(0, NEWSLETTER_INDEX);
  const after = localNews.slice(NEWSLETTER_INDEX);

  return (
    <section id="actus" className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 className="text-2xl font-light tracking-tight text-ink sm:text-3xl">
              Bons plans et actualités à{" "}
              <strong className="font-bold">{newsCity}</strong>
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
            >
              <Location24Regular className="size-4" />
              Changer de localité
            </Link>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-full border border-primary px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-primary hover:text-white"
          >
            Voir tout
          </Link>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {before.map((item) => (
            <li key={item.slug}>
              <NewsCard item={item} />
            </li>
          ))}
          <li className="sm:col-span-2 lg:col-span-1">
            <NewsletterCard />
          </li>
          {after.map((item) => (
            <li key={item.slug}>
              <NewsCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
