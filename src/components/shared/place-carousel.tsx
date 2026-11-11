import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/config/places";

type PlaceCarouselProps = {
  title: string;
  places: Place[];
};

/** Rangée horizontale défilante de vignettes (régions, villes…). */
export function PlaceCarousel({ title, places }: PlaceCarouselProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <ul
        className="mt-4 flex snap-x gap-3 overflow-x-auto pb-3 [scrollbar-color:var(--color-primary)_transparent] [scrollbar-width:thin]"
        aria-label={title}
      >
        {places.map((place) => (
          <li key={place.name} className="shrink-0 snap-start">
            <Link
              href={place.href}
              className="group relative block size-28 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={place.image}
                alt=""
                fill
                sizes="112px"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              />
              <span className="absolute inset-x-1 bottom-2 text-center text-sm font-bold leading-tight text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.6)]">
                {place.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
