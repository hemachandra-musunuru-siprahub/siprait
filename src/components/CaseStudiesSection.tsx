import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "@/data/caseStudies";

const CaseStudiesSection = () => {
  // Show the first 3 real case studies on the homepage
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results Across{" "}
            <span className="text-primary">Domains and Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how SipraHub's tailored AI solutions have delivered measurable
            success and transformative outcomes for businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`} className="block h-full">
              <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group h-full">
                <CardContent className="p-6 h-full flex flex-col gap-4">
                  {/* Header badges */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {study.useCase}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>

                  {/* Title + company */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{study.company}</p>
                  </div>

                  {/* Outcome */}
                  <p className="text-sm text-muted-foreground flex-1">{study.outcome}</p>

                  {/* Key metrics strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-border">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-lg font-bold text-primary">{m.value}</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center text-primary font-semibold text-sm gap-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Button variant="default" size="lg" asChild>
            <a href="https://ai.siprahub.com/our-work">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <p className="text-lg font-semibold text-foreground">
            SipraHub drives{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              measurable success
            </span>
            {" "}with tailored solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
