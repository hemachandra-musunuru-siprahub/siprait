import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getCaseStudyById, type CaseStudyMetric, type CaseStudyImage } from "@/data/caseStudies";
import SEO from "@/components/SEO";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = getCaseStudyById(id ?? "");

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Case Study Not Found | SipraHub"
          description="The requested case study could not be found."
          canonical="https://siprahub.com/case-studies"
        />
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="https://ai.siprahub.com/our-work">Back to Our Work</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${study.title} | SipraHub Case Study`}
        description={`${study.title} - ${study.outcome}`}
        canonical={`https://siprahub.com/case-studies/${study.id}`}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary" asChild>
              <a href="https://ai.siprahub.com/our-work" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Our Work
              </a>
            </Button>
          </div>

          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40">
              {study.industry}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {study.metrics.map((metric: CaseStudyMetric, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-white/80 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{study.about}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Industry</div>
              <div className="font-semibold text-foreground text-lg">{study.industry}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Company Size</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.employees}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Duration</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.duration}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Team Size</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.team}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Challenge</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {study.company} sought a solution to address their business challenges
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.challenge}</p>
          {study.challengeQuote && (
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary mt-8">
              <p className="text-lg italic text-foreground mb-4">"{study.challengeQuote}"</p>
              <div className="text-sm text-muted-foreground">
                — {study.testimonialAuthor}{study.testimonialRole && `, ${study.testimonialRole}`}, {study.testimonialCompany}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Solution</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            SipraHub helps {study.company} achieve their goals without sacrificing performance
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.solution}</p>
          {study.serviceLink && study.serviceName && (
            <div className="mb-6 p-4 rounded-lg bg-gradient-card border border-primary/10 shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">
                Explore our specialized capabilities in this domain:
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link to={study.serviceLink} className="text-primary font-medium">
                  {study.serviceName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
          {study.solutionQuote && (
            <div className="bg-gradient-subtle rounded-lg p-6 border-l-4 border-primary mt-8">
              <p className="text-lg italic text-foreground mb-4">"{study.solutionQuote}"</p>
              <div className="text-sm text-muted-foreground">
                — {study.testimonialAuthor}{study.testimonialRole && `, ${study.testimonialRole}`}, {study.testimonialCompany}
              </div>
            </div>
          )}

          {/* Solution Images */}
          {study.images && study.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8">
              {study.images.map((image: CaseStudyImage, index: number) => (
                <div key={index} className="space-y-3">
                  <div className="rounded-lg overflow-hidden border border-border shadow-lg bg-white">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-center text-muted-foreground italic">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Benefits</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {study.company} transforms operations from a challenge to a competitive advantage
          </p>

          <ul className="space-y-3 mb-12 list-none">
            {study.results.map((result: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-lg text-foreground">{result}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial Quote */}
          <div className="bg-white rounded-lg p-8 border border-border shadow-card">
            <p className="text-xl italic text-foreground mb-6 leading-relaxed">
              "{study.testimonial}"
            </p>
            <div>
              <div className="font-semibold text-foreground">{study.testimonialAuthor}</div>
              <div className="text-sm text-muted-foreground">
                {study.testimonialRole ? `${study.testimonialRole}, ` : ''}{study.testimonialCompany}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join {study.company} and other successful businesses that have transformed
            their operations with SipraHub's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Start Your Project
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

export default CaseStudyDetail;
