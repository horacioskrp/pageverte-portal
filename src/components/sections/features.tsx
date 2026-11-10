import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { features, stats } from "@/config/site";

export function Features() {
  return (
    <section id="avantages" className="bg-brand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          align="center"
          title="Pourquoi choisir PagesVertes au Togo ?"
          description="Un annuaire pensé pour vous faire gagner du temps et choisir en confiance."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border-0 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-bold text-brand-900">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <dl className="mt-14 grid gap-8 text-center sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <dt className="text-4xl font-extrabold text-brand-700">
                {value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
