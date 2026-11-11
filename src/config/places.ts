export type Place = { name: string; image: string; href: string };

export const regions: Place[] = [
  { name: "Maritime", image: "/images/lieux/maritime.svg", href: "#" },
  { name: "Plateaux", image: "/images/lieux/plateaux.svg", href: "#" },
  { name: "Centrale", image: "/images/lieux/centrale.svg", href: "#" },
  { name: "Kara", image: "/images/lieux/kara-region.svg", href: "#" },
  { name: "Savanes", image: "/images/lieux/savanes.svg", href: "#" },
];

export const cities: Place[] = [
  { name: "Lomé", image: "/images/lieux/lome.svg", href: "#" },
  { name: "Sokodé", image: "/images/lieux/sokode.svg", href: "#" },
  { name: "Kara", image: "/images/lieux/kara.svg", href: "#" },
  { name: "Kpalimé", image: "/images/lieux/kpalime.svg", href: "#" },
  { name: "Atakpamé", image: "/images/lieux/atakpame.svg", href: "#" },
  { name: "Dapaong", image: "/images/lieux/dapaong.svg", href: "#" },
  { name: "Tsévié", image: "/images/lieux/tsevie.svg", href: "#" },
  { name: "Aného", image: "/images/lieux/aneho.svg", href: "#" },
  { name: "Bassar", image: "/images/lieux/bassar.svg", href: "#" },
  { name: "Mango", image: "/images/lieux/mango.svg", href: "#" },
];

export type LinkItem = { label: string; href: string };

/** Liens de maillage « à proximité » (première ligne de liens). */
export const nearbyLinks: LinkItem[] = [
  "Pharmacies",
  "Restaurants",
  "Garages et mécaniciens",
  "Cliniques",
  "Banques et microfinance",
  "Hôtels",
  "Salons de coiffure",
  "Cybercafés",
  "Taxis et zémidjan",
  "Quincailleries",
  "Boulangeries",
  "Cabinets d'avocats",
  "Écoles privées",
  "Imprimeries",
  "Agences immobilières",
  "Dépannage électricité",
  "Plombiers",
  "Magasins de pagnes",
].map((label) => ({ label: `${label} à proximité`, href: "#" }));

export const guideLinks: LinkItem[] = [
  "Travaux, installation et entretien",
  "Simulateur de devis",
  "Guide des prix des matériaux",
  "Guide construction",
  "Construction et rénovation",
  "Aménagement intérieur",
  "Aménagement extérieur",
  "Électricité et plomberie",
  "Extension et agrandissement",
].map((label) => ({ label, href: "#" }));

export const quickLinks: LinkItem[] = [
  { label: "Les enseignes populaires", href: "#" },
  { label: "Tous nos articles", href: "#" },
  { label: "Vos adresses préférées", href: "#" },
];
