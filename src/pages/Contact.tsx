import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact SipraHub | Talk to Our Team"
        description="Contact SipraHub to discuss your technology, digital transformation or AI requirements with our team."
        canonical="https://siprahub.com/contact"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-14 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/40 font-semibold">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Let's Build and{" "}
              <span className="text-orange-300">Scale Together</span>
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Start your AI-driven transformation with SipraHub today! Get in touch with our experts for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey with SipraHub today! Get in touch with our team to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers#career-categories" className="text-white">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/careers/apply" className="text-white">
                Send Your Resume
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <a href="mailto:contact@siprahub.com" className="hover:text-white underline underline-offset-2 transition-colors">
              contact@siprahub.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;