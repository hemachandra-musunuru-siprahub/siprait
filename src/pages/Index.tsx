// SipraHub IT Services Website Homepage

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import DeliveryModelsSummary from "@/components/DeliveryModelsSummary";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="SipraHub - AI Transformation Services for the Modern Business"
        description="Go beyond theory. Our teams bring domain insight and AI expertise together to discover what matters most. With design thinking at the core, we co-create solutions that unlock value and accelerate change."
        canonical="https://siprahub.com"
      />
      <Navigation />
      <div className="mb-0">
        <HeroSection />
      </div>
      <div className="mt-0">
        <ServicesOverview />
      </div>
      <KeyFeaturesSection />
      <DeliveryModelsSummary />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
