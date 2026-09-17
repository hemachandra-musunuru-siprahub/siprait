import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, ArrowRight, Layers, Briefcase, FileText, Mail, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    {
      title: "Services Hub",
      description: "Explore all our IT & AI capabilities and solutions.",
      href: "/services",
      icon: Layers,
    },
    {
      title: "Our Work",
      description: "See how we solved real-world challenges for our clients.",
      href: "https://ai.siprahub.com/our-work",
      icon: Briefcase,
    },
    {
      title: "About SipraHub",
      description: "Learn more about our team, vision, and domain expertise.",
      href: "/about",
      icon: FileText,
    },
    {
      title: "Contact Us",
      description: "Reach out to our architects for a free consultation.",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="404 - Page Not Found | SipraHub"
        description="The page you are looking for does not exist. Explore SipraHub's services, case studies, or contact our team."
      />
      <Navigation />

      <main className="flex-1 py-16 lg:py-24 bg-gradient-subtle flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>

          <h1 className="text-7xl sm:text-9xl font-black text-primary tracking-tight mb-4">
            404
          </h1>

          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We couldn't find the page you're looking for. The link might be outdated, or the address may have been mistyped.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button size="lg" className="font-semibold px-6 py-6 text-base" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-6 py-6 text-base"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Destination Links */}
          <div className="border-t border-border pt-12 text-left">
            <h3 className="text-lg font-bold text-foreground text-center mb-8">
              Explore Popular Destinations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={idx}
                    className="bg-card border border-border/80 hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                        >
                          Visit Page
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                        >
                          Visit Page
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
