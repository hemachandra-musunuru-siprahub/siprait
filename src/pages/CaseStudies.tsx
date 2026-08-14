import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Filter, X, Bot, Headset, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { CASE_STUDIES } from "@/data/caseStudies";
import SEO from "@/components/SEO";

const CaseStudies = () => {
  const [selectedFilters, setSelectedFilters] = useState<{
    useCase: string;
    industry: string;
    businessFunction: string;
    aiTechnology: string;
  }>({
    useCase: "",
    industry: "",
    businessFunction: "",
    aiTechnology: "",
  });

  const caseStudies = CASE_STUDIES;

  // Extract unique filter options
  const useCases = Array.from(new Set(caseStudies.map(s => s.useCase)));
  const industries = Array.from(new Set(caseStudies.map(s => s.industry)));
  const businessFunctions = Array.from(new Set(caseStudies.map(s => s.businessFunction)));
  const aiTechnologies = Array.from(new Set(caseStudies.flatMap(s => s.aiTechnologies)));

  // Filter case studies
  const filteredStudies = caseStudies.filter(study => {
    const matchesUseCase = !selectedFilters.useCase || selectedFilters.useCase === "" || selectedFilters.useCase === study.useCase;
    const matchesIndustry = !selectedFilters.industry || selectedFilters.industry === "" || selectedFilters.industry === study.industry;
    const matchesBusinessFunction = !selectedFilters.businessFunction || selectedFilters.businessFunction === "" || selectedFilters.businessFunction === study.businessFunction;
    const matchesAiTechnology = !selectedFilters.aiTechnology || selectedFilters.aiTechnology === "" ||
      study.aiTechnologies.includes(selectedFilters.aiTechnology);

    return matchesUseCase && matchesIndustry && matchesBusinessFunction && matchesAiTechnology;
  });

  const clearFilters = () => {
    setSelectedFilters({
      useCase: "",
      industry: "",
      businessFunction: "",
      aiTechnology: ""
    });
  };

  const activeFilterCount = Object.values(selectedFilters).filter(v => v !== "").length;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Case Studies | SipraHub"
        description="Explore SipraHub case studies and see how our teams solve business and technology challenges through practical digital and AI solutions."
        canonical="https://siprahub.com/case-studies"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
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
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40 font-semibold">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Real Results Across{" "}
              <span className="text-orange-300">Domains and Technologies</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Discover how SipraHub drives measurable success with tailored solutions across
              industries and technologies. See the impact of our AI-powered innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b border-border sticky top-24 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold text-foreground">Filter Case Studies</h2>
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilterCount} active
                </Badge>
              )}
            </div>
            {activeFilterCount > 0 && (
              <Button variant="outline" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Use Case Category */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Use Case Category</label>
              <Select
                value={selectedFilters.useCase === "" ? undefined : selectedFilters.useCase}
                onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, useCase: value === "all" ? "" : value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Use Cases" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Use Cases</SelectItem>
                  {useCases.map(useCase => (
                    <SelectItem key={useCase} value={useCase}>{useCase}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Industry */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Industry</label>
              <Select
                value={selectedFilters.industry === "" ? undefined : selectedFilters.industry}
                onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, industry: value === "all" ? "" : value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Business Function */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Business Function</label>
              <Select
                value={selectedFilters.businessFunction === "" ? undefined : selectedFilters.businessFunction}
                onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, businessFunction: value === "all" ? "" : value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Functions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Functions</SelectItem>
                  {businessFunctions.map(func => (
                    <SelectItem key={func} value={func}>{func}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* AI Technology */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">AI Technology Used</label>
              <Select
                value={selectedFilters.aiTechnology === "" ? undefined : selectedFilters.aiTechnology}
                onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, aiTechnology: value === "all" ? "" : value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Technologies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Technologies</SelectItem>
                  {aiTechnologies.map(tech => (
                    <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Showing <span className="text-primary">{filteredStudies.length}</span> Case {filteredStudies.length === 1 ? 'Study' : 'Studies'}
              </h2>
              <p className="text-muted-foreground">
                {activeFilterCount > 0 ? 'Filtered results' : 'All case studies'}
              </p>
            </div>
          </div>

          {filteredStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No case studies match your filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudies.map((study) => (
                <Card
                  key={study.id}
                  className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group"
                >
                  <Link to={`/case-studies/${study.id}`} className="block h-full">
                    <CardContent className="p-6 h-full flex flex-col gap-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {study.useCase}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {study.industry}
                        </Badge>
                      </div>

                      <div className="flex items-start gap-4 mb-2">
                        <div className="shrink-0 p-2 bg-muted/30 rounded-lg">
                          {study.title.includes("Clinic") ? (
                            <Headset className="w-12 h-12 text-foreground" strokeWidth={1.2} />
                          ) : study.title.includes("Insurance") ? (
                            <Bot className="w-12 h-12 text-foreground" strokeWidth={1.2} />
                          ) : (
                            <FileText className="w-12 h-12 text-foreground" strokeWidth={1.2} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1 transition-colors group-hover:text-primary leading-tight">
                            {study.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{study.company}</p>
                        </div>
                      </div>

                      <div className="space-y-3 flex-1">
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Outcome</p>
                          <p className="text-sm text-muted-foreground">{study.outcome}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {study.aiTechnologies.slice(0, 2).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {study.aiTechnologies.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{study.aiTechnologies.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-primary text-white hover:bg-primary/90">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the growing list of successful businesses that have transformed
            their operations with SipraHub's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>contact@siprahub.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;