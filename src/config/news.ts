export type NewsItem = {
  slug: string;
  image: string;
  imageAlt: string;
  /** Date ou période affichée sur l'image (optionnel). */
  date?: string;
  tags: string[];
  title: string;
  description: string;
  location: string;
  href: string;
};

export const newsCity = "Lomé";

export const localNews: NewsItem[] = [
  {
    slug: "salon-artisanat",
    image: "/images/actus/artisanat.svg",
    imageAlt: "Tissage artisanal aux motifs kente",
    date: "Du 14 nov. au 12 déc.",
    tags: ["Salon", "Artisanat"],
    title: "Salon de l'artisanat de Lomé",
    description: "Tissage, poterie et sculpture sur bois : plus de 100 artisans exposent.",
    location: "Centre artisanal, Lomé",
    href: "#",
  },
  {
    slug: "marche-nocturne",
    image: "/images/actus/marche-nuit.svg",
    imageAlt: "Étal de marché nocturne éclairé",
    date: "21 nov.",
    tags: ["Gastronomie"],
    title: "Marché nocturne de Bè",
    description: "Brochettes, akassa et jus de bissap : les saveurs de la rue.",
    location: "Bè-Klikamé, Lomé",
    href: "#",
  },
  {
    slug: "concert-plage",
    image: "/images/actus/concert-plage.svg",
    imageAlt: "Coucher de soleil sur la plage de Lomé",
    date: "28 nov.",
    tags: ["Concert", "Musique"],
    title: "Soirée afro-jazz sur la plage",
    description: "Trois groupes locaux sur scène face à l'océan, entrée libre.",
    location: "Plage de Lomé",
    href: "#",
  },
  {
    slug: "mobile-money",
    image: "/images/actus/mobile-money.svg",
    imageAlt: "Téléphone affichant un paiement validé",
    tags: ["Services"],
    title: "Payez par Mobile Money",
    description: "T-Money et Flooz acceptés chez de plus en plus de commerçants.",
    location: "Lomé et environs",
    href: "#",
  },
  {
    slug: "zemidjan",
    image: "/images/actus/zemidjan.svg",
    imageAlt: "Conducteur de taxi-moto en chemise jaune",
    tags: ["Transport"],
    title: "Zémidjan : course à prix annoncé",
    description: "Des conducteurs référencés avec tarifs clairs et casque fourni.",
    location: "Agoè, Lomé",
    href: "#",
  },
  {
    slug: "coworking",
    image: "/images/actus/coworking.svg",
    imageAlt: "Espace de travail partagé",
    date: "Ouverture 1er déc.",
    tags: ["Entreprise"],
    title: "Nouveau coworking à Tokoin",
    description: "Bureaux partagés avec fibre, salle de réunion et café inclus.",
    location: "Tokoin, Lomé",
    href: "#",
  },
  {
    slug: "gastronomie",
    image: "/images/actus/gastronomie.svg",
    imageAlt: "Plat de fufu avec sauce",
    date: "12 déc.",
    tags: ["Gastronomie", "Festival"],
    title: "Fête de la cuisine togolaise",
    description: "Fufu, ablo, sauce arachide : concours de chefs et dégustations.",
    location: "Place de l'Indépendance, Lomé",
    href: "#",
  },
];
