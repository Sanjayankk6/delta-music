import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import StatsSection from "@/components/StatsSection";
import DevelopersSection from "@/components/DevelopersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <StatsSection />
      <DevelopersSection />
      <Footer />
    </div>
  );
};

export default Index;
