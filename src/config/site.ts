import type { FluentIcon } from "@/components/icons";
import {
  Building24Regular,
  Cut24Regular,
  Food24Regular,
  Home24Regular,
  Receipt24Regular,
  Scales24Regular,
  Stethoscope24Regular,
  VehicleCar24Regular,
  Wrench24Regular,
  PaintBrush24Regular,
  Dumbbell24Regular,
  Gift24Regular,
  ChartMultiple24Regular,
  ShieldCheckmark24Regular,
  PersonSupport24Regular,
} from "@/components/icons";

export const siteConfig = {
  name: "PagesVertes",
  tagline: "Trouvez les pros près de chez vous au Togo",
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Annuaire pro", href: "#categories" },
  { label: "Actus locales", href: "#" },
  { label: "Conseils", href: "#" },
  { label: "Forum", href: "#" },
  { label: "Annuaire inversé", href: "#" },
];

export const quickSearches: string[] = [
  "Plombier",
  "Restaurant",
  "Pharmacie",
  "Taxi-moto",
];

export type Category = { label: string; href: string; icon: FluentIcon };

export const popularCategories: Category[] = [
  { label: "Restaurants", href: "#", icon: Food24Regular },
  { label: "Médecins & cliniques", href: "#", icon: Stethoscope24Regular },
  { label: "Plombiers", href: "#", icon: Wrench24Regular },
  { label: "Coiffeurs & salons", href: "#", icon: Cut24Regular },
  { label: "Garages & mécaniciens", href: "#", icon: VehicleCar24Regular },
  { label: "Avocats", href: "#", icon: Scales24Regular },
  { label: "Immobilier", href: "#", icon: Home24Regular },
  { label: "Artisans du bâtiment", href: "#", icon: Building24Regular },
  { label: "Peintres décorateurs", href: "#", icon: PaintBrush24Regular },
  { label: "Salles de sport", href: "#", icon: Dumbbell24Regular },
  { label: "Comptables", href: "#", icon: Receipt24Regular },
  { label: "Fleuristes & cadeaux", href: "#", icon: Gift24Regular },
];

export type Feature = { title: string; description: string; icon: FluentIcon };

export const features: Feature[] = [
  {
    title: "Des pros vérifiés",
    description:
      "Chaque fiche est contrôlée pour vous garantir des coordonnées fiables et à jour.",
    icon: ShieldCheckmark24Regular,
  },
  {
    title: "Avis authentiques",
    description:
      "Consultez les retours de clients réels avant de choisir le bon professionnel.",
    icon: PersonSupport24Regular,
  },
  {
    title: "Résultats près de chez vous",
    description:
      "Géolocalisation et filtres précis pour trouver rapidement le pro le plus proche.",
    icon: ChartMultiple24Regular,
  },
];

export const proBenefits: string[] = [
  "Une fiche entreprise complète et personnalisable",
  "Plus de visibilité auprès des clients de votre secteur",
  "Un tableau de bord pour suivre vos contacts et avis",
];

export const popularCities: string[] = [
  "Lomé",
  "Sokodé",
  "Kara",
  "Kpalimé",
  "Atakpamé",
  "Dapaong",
  "Tsévié",
  "Aného",
  "Bassar",
  "Mango",
  "Notsé",
];

export const stats = [
  { value: "15 000+", label: "professionnels référencés" },
  { value: "250 000", label: "visites chaque mois au Togo" },
  { value: "4,6/5", label: "note moyenne des avis" },
];

export type FooterColumn = { title: string; links: NavItem[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Particuliers",
    links: [
      { label: "Trouver un professionnel", href: "#" },
      { label: "Annuaire inversé", href: "#" },
      { label: "Laisser un avis", href: "#" },
    ],
  },
  {
    title: "Professionnels",
    links: [
      { label: "Ajouter mon entreprise", href: "#" },
      { label: "Gagner en visibilité", href: "#" },
      { label: "Espace client", href: "#" },
    ],
  },
  {
    title: "À propos",
    links: [
      { label: "Qui sommes-nous", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Recrutement", href: "#" },
    ],
  },
  {
    title: "Aide",
    links: [
      { label: "Centre d'aide", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Plan du site", href: "#" },
    ],
  },
];

export const legalLinks: NavItem[] = [
  { label: "Mentions légales", href: "#" },
  { label: "CGU", href: "#" },
  { label: "Données personnelles", href: "#" },
  { label: "Cookies", href: "#" },
];
