import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedParts from "@/components/FeaturedParts";
import Brands from "@/components/Brands";

import PartsCategories from "@/components/PartsCategories";
import QualityStandards from "@/components/QualityStandards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <FeaturedParts />
        <PartsCategories />
        <Brands />
        <QualityStandards />
      </main>
      <Footer />
    </div>
  );
}
