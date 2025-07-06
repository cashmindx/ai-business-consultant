
import HeroSection from "@/components/sections/HeroSection";
import WhoNeedsThisSection from "@/components/sections/WhoNeedsThisSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import EnhancedVideoScriptSection from "@/components/sections/EnhancedVideoScriptSection";
import VideoScriptSection from "@/components/sections/VideoScriptSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <WhoNeedsThisSection />
      <FeaturesSection />
      <PricingSection />
      <EnhancedVideoScriptSection />
      <VideoScriptSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
