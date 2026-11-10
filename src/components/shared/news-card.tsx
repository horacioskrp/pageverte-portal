import Image from "next/image";
import Link from "next/link";
import { Calendar24Regular, Location24Regular } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { NewsItem } from "@/config/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/2] overflow-hidden bg-brand-50">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.date && (
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <Calendar24Regular className="size-4" />
            {item.date}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <ul className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge
                variant="outline"
                className="rounded-sm text-[11px] font-normal text-muted-foreground"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-ink">
          <Link href={item.href} className="after:absolute after:inset-0">
            {item.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {item.description}
        </p>
        <p className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-brand-700">
          <Location24Regular className="size-4 shrink-0" />
          <span className="truncate">{item.location}</span>
        </p>
      </div>
    </article>
  );
}
