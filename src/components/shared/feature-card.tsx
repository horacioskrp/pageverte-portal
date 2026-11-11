import Image from "next/image";
import type { Feature } from "@/config/site";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex h-full flex-col items-center rounded-xl bg-white px-6 pb-8 pt-6 text-center shadow-[0_2px_14px_rgba(0,0,0,0.08)]">
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        width={200}
        height={150}
        className="h-36 w-auto"
      />
      <h3 className="mt-4 text-lg font-bold leading-snug text-ink">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">
        {feature.description}
      </p>
    </div>
  );
}
