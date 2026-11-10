import { Container } from "@/components/shared/container";
import { SearchForm } from "@/components/search/search-form";
import { quickSearches } from "@/config/site";

export function Hero() {
  return (
    <section className="bg-primary pb-16 pt-4 text-center text-white sm:pb-24 sm:pt-8">
      <Container>
        <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
          Vous allez forcément <strong className="font-bold">trouver le bon professionnel !</strong>
        </h1>

        <div className="mt-8 mx-auto max-w-4xl">
          <SearchForm />
          <p className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="font-medium">Recherches fréquentes :</span>
            {quickSearches.map((term) => (
              <a
                key={term}
                href="#"
                className="rounded-full border border-white/60 px-3 py-1 font-medium transition-colors hover:bg-white hover:text-brand-700"
              >
                {term}
              </a>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
