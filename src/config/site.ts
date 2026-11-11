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

export type Feature = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const features: Feature[] = [
  {
    title: "La référence des pros au Togo",
    description: "95 % des professionnels inscrits, partout au Togo",
    image: "/images/features/reference.svg",
    imageAlt: "Loupe et repère de localisation",
  },
  {
    title: "Les informations enrichies par les professionnels…",
    description:
      "Horaires, prestations, actus, coordonnées, itinéraire… des centaines de mises à jour quotidiennes",
    image: "/images/features/infos.svg",
    imageAlt: "Téléphone avec mégaphone",
  },
  {
    title: "Des recommandations pour décider",
    description:
      "Avis et notes des utilisateurs, photos, labels qualité, badges et certifications…",
    image: "/images/features/avis.svg",
    imageAlt: "Étoile de recommandation",
  },
  {
    title: "Des services en ligne pour vous faciliter la vie",
    description:
      "Demande de devis, prise de rendez-vous, réservation, messagerie, paiement Mobile Money…",
    image: "/images/features/services.svg",
    imageAlt: "Ordinateur portable",
  },
];
