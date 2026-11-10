import Link from "next/link";
import { ArrowRight24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { popularCategories } from "@/config/site";

export function PopularCategories() {
  return (
    <section id="categories" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Les rubriques les plus recherchées"
          description="Accédez en un clic aux professionnels dont vous avez besoin."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {popularCategories.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="group flex h-full items-center gap-3 rounded-xl border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon />
                </span>
                <span className="flex-1 text-sm font-semibold text-brand-900">
                  {label}
                </span>
                <ArrowRight24Regular className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
