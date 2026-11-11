import Link from "next/link";
import { Phone24Regular } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { proPhone } from "@/config/footer";

const primaryBtn =
  "inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
const outlineBtn =
  "inline-flex h-10 items-center rounded-full border border-ink/40 px-5 text-sm font-semibold text-ink transition-colors hover:bg-brand-50";

function ProCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.1)]">
      <h3 className="max-w-xs text-xl font-bold leading-snug text-ink">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ProServices() {
  return (
    <section id="pro" className="pb-16 sm:pb-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          <ProCard title="Professionnels, gérez votre fiche PagesVertes">
            <p className="mt-4 flex-1 text-sm text-ink/80">
              <strong className="font-semibold">
                Gérez gratuitement toutes vos informations
              </strong>
              , vos avis, vos publications et bien plus encore directement
              depuis notre plateforme.
            </p>
            <div className="mt-6">
              <Link href="#" className={primaryBtn}>
                Je crée mon compte pro
              </Link>
            </div>
          </ProCard>

          <ProCard title="Êtes-vous bien visible sur internet ?">
            <p className="mt-4 flex-1 text-sm text-ink/80">
              Découvrez votre score en moins d&apos;1 min et{" "}
              <strong className="font-semibold">
                gagnez 25 % de visibilité sur internet
              </strong>{" "}
              grâce aux conseils personnalisés de notre audit digital.
            </p>
            <div className="mt-6">
              <Link href="#" className={primaryBtn}>
                Je vérifie ma visibilité gratuitement
              </Link>
            </div>
          </ProCard>

          <ProCard title={`Professionnels, appelez le ${proPhone.label.replaceAll(" ", " ")} !`}>
            <p className="mt-4 flex-1 text-sm text-ink/80">
              <strong className="font-semibold">
                Contactez nos experts digitaux
              </strong>{" "}
              et découvrez comment améliorer votre visibilité sur PagesVertes
              et tout internet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={proPhone.href} className={primaryBtn}>
                <Phone24Regular className="size-4" />
                Appeler
              </a>
              <Link href="#" className={outlineBtn}>
                Me faire rappeler
              </Link>
            </div>
          </ProCard>
        </div>
      </Container>
    </section>
  );
}
