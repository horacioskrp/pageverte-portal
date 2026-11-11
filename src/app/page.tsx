import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { LocalNews } from "@/components/sections/local-news";
import { PopularCategories } from "@/components/sections/popular-categories";
import { ExplorePlaces } from "@/components/sections/explore-places";
import { ProServices } from "@/components/sections/pro-services";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PopularCategories />
        <LocalNews />
        <Features />
        <ExplorePlaces />
        <ProServices />
      </main>
      <SiteFooter />
    </>
  );
}
