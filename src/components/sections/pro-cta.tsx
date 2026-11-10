import { Checkmark24Regular } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { proBenefits } from "@/config/site";

export function ProCta() {
  return (
    <section id="pro" className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-brand-900 p-8 text-white sm:p-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vous êtes professionnel ?
              <span className="block text-primary">
                Soyez trouvé par vos futurs clients.
              </span>
            </h2>
            <ul className="space-y-3">
              {proBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Checkmark24Regular className="size-3.5" />
                  </span>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="font-semibold">
                Référencer mon entreprise
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                En savoir plus
              </Button>
            </div>
          </div>

          <div
            aria-hidden
            className="relative hidden h-64 rounded-2xl bg-gradient-to-br from-primary to-brand-700 lg:block"
          >
            <div className="absolute left-6 top-6 w-56 rounded-xl bg-white p-4 text-brand-900 shadow-xl">
              <p className="text-sm font-bold">Boulangerie Akouvi</p>
              <p className="text-xs text-muted-foreground">Lomé, Tokoin · Ouvert</p>
              <p className="mt-2 text-xs font-semibold text-primary">
                ★★★★★ 4,8 (126 avis)
              </p>
            </div>
            <div className="absolute bottom-6 right-6 w-48 rounded-xl bg-white p-4 text-brand-900 shadow-xl">
              <p className="text-2xl font-extrabold text-primary">+38 %</p>
              <p className="text-xs text-muted-foreground">
                de contacts ce mois-ci
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
