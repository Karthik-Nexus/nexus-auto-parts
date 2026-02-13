import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import PartsCategoryCarousel from "@/components/PartsCategoryCarousel";
import PartsCategories from "@/components/PartsCategories";
import Brands from "@/components/Brands";
import QualityStandards from "@/components/QualityStandards";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Nexus Auto Parts LLC - Trusted Auto Parts for Your Vehicle";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <PartsCategoryCarousel />
        <PartsCategories />
        <Brands />
        <HowItWorks />
        <QualityStandards />
      </main>
      <Footer />
    </div>
  );
}
