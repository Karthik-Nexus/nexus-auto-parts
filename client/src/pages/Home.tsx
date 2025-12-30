import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedParts from "@/components/FeaturedParts";
import Brands from "@/components/Brands";

import PartsCategories from "@/components/PartsCategories";
import CarManufacturers from "@/components/CarManufacturers";
import QualityStandards from "@/components/QualityStandards";
import Footer from "@/components/Footer";
// Removed Chatbot local import to use global one in App.tsx

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <FeaturedParts />

        <PartsCategories />
        <Brands />
        <CarManufacturers />
        <QualityStandards />
      </main>
      <Footer />
    </div>
  );
}
