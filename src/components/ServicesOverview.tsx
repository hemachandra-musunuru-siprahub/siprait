import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { homepageServices } from "@/data/services";

const ServicesOverview = () => {

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Core Offerings: Comprehensive{" "}
            <span className="text-primary">AI-Powered Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drive growth with SipraHub's tailored, AI-enhanced services designed 
            to transform your business operations and accelerate innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {homepageServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border border-primary/10 shadow-card hover:shadow-hero hover:border-primary/20 transition-smooth group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm" asChild className="w-fit mt-4">
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 text-[#888888] group-hover:text-primary transition-colors duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;