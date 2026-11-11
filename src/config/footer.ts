import type { LinkItem } from "@/config/places";

export type FooterGroup = { title: string; links: LinkItem[] };

const toLinks = (labels: string[]): LinkItem[] =>
  labels.map((label) => ({ label, href: "#" }));

export const helpGroup: FooterGroup = {
  title: "Des questions sur nos services ?",
  links: toLinks([
    "Aide utilisateur",
    "Contactez-nous",
    "Blog PagesVertes",
    "Inscription sur PagesVertes",
    "Plan du site pagesvertes.tg",
    "S'inscrire à la newsletter locale",
  ]),
};

export const legalGroup: FooterGroup = {
  title: "Infos légales, cookies et vie privée",
  links: toLinks([
    "Mentions légales",
    "Gestion des cookies",
    "Infos cookies",
    "Vos données en question",
    "Accessibilité",
    "Protection de la vie privée",
    "CGU des services du compte",
    "Conditions de parution",
    "Critères de classement sur PagesVertes",
  ]),
};

export const otherServicesGroup: FooterGroup = {
  title: "Nos autres services",
  links: toLinks([
    "Annuaire inversé",
    "Offres d'emploi au Togo",
    "Immobilier à Lomé",
    "Auto et zémidjan",
    "Services à domicile",
    "Mariages et événements",
    "Votre service obsèques",
    "Tous nos autres services",
  ]),
};

export const socialGroup: FooterGroup = {
  title: "Nos réseaux sociaux",
  links: toLinks([
    "Facebook",
    "Instagram",
    "X (Twitter)",
    "LinkedIn",
    "YouTube",
    "WhatsApp",
  ]),
};

export const proPhone = { label: "+228 90 00 00 00", href: "tel:+22890000000" };
