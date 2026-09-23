import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Search,
  Database,
  Target,
  Workflow,
  Bot,
  BarChart3,
  Radar,
  MessagesSquare,
  FileSearch,
  BookOpen,
  Users,
  AlertTriangle,
  Layers,
  Brain,
  Code2,
  Cloud,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-bg.jpg";

export default function GTM() {
  // Section 2 — Where GTM Systems Break
  const symptoms = [
    "Sales and marketing report different numbers",
    "Lead routing still requires manual intervention",
    "Pipeline reporting takes too much time",
    "Duplicate and outdated records affect downstream decisions",
    "AI initiatives stall because the underlying data is unreliable",
    "Important pipeline information still lives in spreadsheets",
  ];

  // Section 3 — What This Service Delivers
  const offerings = [
    {
      step: "01",
      icon: Search,
      title: "GTM Data & Systems Audit",
      description:
        "We map how sales, marketing and revenue data moves across your current systems and identify gaps, duplication, manual work and unreliable handoffs.",
      outcome:
        "The result is a prioritised view of what should be fixed first and where automation or AI can add value.",
    },
    {
      step: "02",
      icon: Database,
      title: "Revenue Data Unification & CRM Integration",
      description:
        "Bring fragmented sales, marketing and operational data into a more consistent structure and connect the systems your teams already use.",
      outcome:
        "The goal is reliable data movement between systems, with fewer duplicate records and disconnected workflows.",
    },
    {
      step: "03",
      icon: Target,
      title: "Lead & Account Intelligence",
      description:
        "Use customer profile criteria, engagement signals and available account information to help teams identify and prioritise relevant opportunities.",
      outcome:
        "Instead of working from disconnected signals, teams get a clearer view of where attention may be needed.",
    },
    {
      step: "04",
      icon: Workflow,
      title: "Sales & Marketing Workflow Automation",
      description:
        "Automate repetitive steps across lead routing, follow-ups, approvals, handoffs and record creation.",
      outcome:
        "We automate where it removes unnecessary manual work while keeping human judgement where it matters.",
    },
    {
      step: "05",
      icon: Bot,
      title: "AI Agents & Co-pilots for Revenue Teams",
      description:
        "Build AI assistants that support activities such as account research, knowledge retrieval, customer conversations, proposal preparation and CRM record capture.",
      outcome: "The objective is to support your teams — not remove accountable human decision-making.",
    },
    {
      step: "06",
      icon: BarChart3,
      title: "Pipeline & Revenue Reporting",
      description: "Connect source systems and create clearer reporting across the revenue process.",
      outcome:
        "Leadership gets a more consistent view of pipeline activity, with data that can be traced back to its source.",
    },
  ];

  // Section 4 — Where AI Fits in Go-To-Market
  const aiUses = [
    {
      icon: Radar,
      title: "Signal-Based Prioritisation",
      description:
        "Bring together engagement, account and activity signals to help teams identify accounts that may require attention.",
    },
    {
      icon: MessagesSquare,
      title: "Sales Co-pilots",
      description:
        "Support sales or customer-facing teams during conversations by retrieving relevant internal information, suggesting next steps and capturing important details automatically.",
    },
    {
      icon: FileSearch,
      title: "Account Research Agents",
      description:
        "Use AI to gather and organise relevant account context from approved internal and external sources before a sales conversation.",
    },
    {
      icon: BookOpen,
      title: "Knowledge and Proposal Assistants",
      description:
        "Help teams retrieve product, service and company information from internal knowledge sources while preparing responses, proposals or other sales material.",
    },
  ];

  // Section 6 — How We Work
  const approach = [
    {
      step: "01",
      name: "Discover",
      description:
        "We review how your current GTM process works, how information moves between teams and systems, and where manual work, data gaps or unreliable handoffs occur.",
      detail:
        "This is also where we clarify target customer context and the business objective the solution needs to support.",
    },
    {
      step: "02",
      name: "Define",
      description:
        "We turn the findings into a prioritised scope — what needs fixing, what should be automated, where AI can help and what should remain human-led.",
    },
    {
      step: "03",
      name: "Develop",
      description:
        "We build and validate the required integrations, workflows, data components and AI capabilities in stages.",
    },
    {
      step: "04",
      name: "Deliver",
      description:
        "We integrate the solution into your working environment, document the workflows and help your team understand how to operate and maintain it.",
    },
  ];

  const expectations = [
    "Clear scope and agreed success criteria",
    "Regular progress visibility",
    "Practical recommendations on where AI does and does not fit",
    "Documented workflows and knowledge transfer",
  ];

  // Section 7 — The Engineering Behind It
  const capabilityEvidence = [
    {
      name: "PaneIQ",
      domain: "IT Operations & Decision Intelligence",
      description:
        "Built to ingest data from multiple operational sources, normalise records, identify duplicates, correlate related signals and integrate reliably with external systems.",
      pattern: "data unification, deduplication, signal correlation and system integration.",
    },
    {
      name: "AI Service Desk Co-pilot",
      domain: "Insurance",
      description:
        "An AI co-pilot designed to support live customer conversations, retrieve relevant internal knowledge, suggest responses and capture structured information.",
      pattern: "sales co-pilots, knowledge assistants and automatic record capture.",
    },
    {
      name: "AIRIS",
      domain: "AI Recruitment Platform",
      description:
        "Uses defined requirements to match and rank candidates while supporting a multi-stage automated workflow.",
      pattern: "scoring and prioritisation against a defined customer or account profile.",
    },
  ];

  // Section 8 — Related Services
  const relatedServices = [
    {
      icon: Brain,
      title: "AI Use Case Discovery",
      description: "Identify and prioritise where AI can deliver practical business value.",
      link: "/services/ai-advisory-consulting",
    },
    {
      icon: Code2,
      title: "AI-Powered Software Development",
      description: "Build custom applications with AI capability integrated into the product and workflow.",
      link: "/services/ai-development",
    },
    {
      icon: Cloud,
      title: "MLOps & AI Infrastructure",
      description: "Deploy and operate AI systems reliably in production environments.",
      link: "/services/cloud-infra",
    },
    {
      icon: Package,
      title: "Packaged AI Solutions",
      description: "Apply reusable AI capabilities to clearly defined business problems.",
      link: "/services/ai-services",
    },
  ];

  const pageDescription =
    "SipraHub builds the data, workflow, automation and AI layer underneath go-to-market — helping sales and marketing teams prioritise better, automate repetitive work and operate with clearer revenue visibility.";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GTM & AI-Enabled Revenue Systems",
    "provider": {
      "@type": "Organization",
      "name": "SipraHub",
      "url": "https://siprahub.com",
      "logo": "https://siprahub.com/siprahub-logo.png",
    },
    "description": pageDescription,
    "serviceType": "GTM Engineering & Revenue Systems",
    "areaServed": ["US", "IN", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GTM Services",
      "itemListElement": offerings.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
        },
        "position": index + 1,
      })),
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siprahub.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://siprahub.com/services" },
      { "@type": "ListItem", "position": 3, "name": "GTM", "item": "https://siprahub.com/services/gtm" },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <SEO
        title="GTM & AI-Enabled Revenue Systems | SipraHub"
        description={pageDescription}
        canonical="https://siprahub.com/services/gtm"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      <Navigation />

      <main className="flex-1">
        {/* =========================================================================
            1. HERO
           ========================================================================= */}
        <section className="relative text-white py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-[#2a2a2a]/90" />
            <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                GTM & AI-Enabled Revenue Systems
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Go-to-market systems that hold up when you add AI
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4 font-normal">
                Most revenue teams already have the tools. The challenge is getting data, workflows and teams to
                work from the same reliable information.
              </p>
              <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                {pageDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline-white" size="xl" asChild>
                  <a href="https://ai.siprahub.com/our-work">
                    View Our Work
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. WHERE GTM SYSTEMS BREAK
           ========================================================================= */}
        <section className="pt-16 sm:pt-20 pb-10 sm:pb-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                The Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The symptoms are familiar. The cause is usually underneath.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Revenue systems rarely break in one place. Tools, integrations and manual processes accumulate over
                time until teams stop trusting the information they depend on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/80 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">{symptom}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto mt-10 leading-relaxed">
              These are rarely isolated tooling problems. They usually point to gaps in the data and workflows
              underneath.
            </p>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT THIS SERVICE DELIVERS
           ========================================================================= */}
        <section className="pt-12 sm:pt-14 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                GTM Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Build the foundation before adding more tools
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We start by understanding your GTM process and target customer context, then strengthen the data and
                workflows underneath it before introducing automation and AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={item.step}
                    className="bg-gradient-card border border-border/80 shadow-card hover:shadow-hero hover:border-primary/30 transition-all duration-300 group flex flex-col"
                  >
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="p-3.5 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                      <div className="pt-4 border-t border-border/60">
                        <p className="text-sm font-medium text-foreground/80 leading-relaxed">{item.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHERE AI FITS IN GO-TO-MARKET
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                AI-Enabled GTM
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Where AI helps — and where human judgement still matters
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                AI is useful in GTM when the work is repetitive, data-driven and clearly defined. It becomes less
                reliable when decisions depend heavily on context, judgement or relationship quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {aiUses.map((use) => {
                const IconComponent = use.icon;
                return (
                  <Card
                    key={use.title}
                    className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{use.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{use.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="max-w-5xl mx-auto mt-10">
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-muted border border-primary/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                <div className="p-5 rounded-2xl bg-primary text-white flex-shrink-0 shadow-sm">
                  <Users className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Human review stays in the loop</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-2">
                    For targeting, outreach and customer communication, we keep accountable human review in the
                    process.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    AI can assist with research, drafting and workflow execution, but the final commercial decision
                    remains with the team responsible for it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHERE WE FOCUS
           ========================================================================= */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/[0.04] via-muted/50 to-primary/[0.02] border border-primary/15 p-8 sm:p-10 lg:p-12 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Layers className="h-3.5 w-3.5" />
                Our Scope
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                We build the systems. Your team runs the market.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  SipraHub focuses on the technology and workflow layer beneath go-to-market — data, integrations,
                  automation, AI agents and decision-support systems.
                </p>
                <p>We do not operate as a media-buying, campaign-management or outsourced outbound agency.</p>
                <p>
                  If you already have an internal marketing team, sales organisation or agency partners, we help
                  strengthen the systems they depend on.
                </p>
                <p className="font-medium text-foreground">
                  That keeps our work focused on what we do best: building reliable AI-enabled business systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. HOW WE WORK
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">From GTM problem to working system</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Every engagement begins with understanding your existing process, systems and business priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((step) => (
                <Card key={step.step} className="bg-card border-border/80 shadow-sm hover:border-primary/30 transition-all">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-primary">{step.step}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded">
                        {step.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    {step.detail && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{step.detail}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-12 rounded-2xl bg-card border border-border/80 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-5 text-center">What you can expect</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start text-sm sm:text-base text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. THE ENGINEERING BEHIND IT (capability evidence, not GTM case studies)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Capability Evidence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Engineering patterns we can apply to revenue systems
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-3">
                SipraHub has delivered systems involving data integration, workflow automation, AI co-pilots,
                matching and scoring, knowledge retrieval and operational reporting in other business domains.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                These examples demonstrate engineering capabilities that can also be applied to GTM systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capabilityEvidence.map((project) => (
                <Card
                  key={project.name}
                  className="bg-card border-border/80 shadow-card hover:shadow-hero hover:border-primary/30 transition-all flex flex-col"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <Badge variant="outline" className="text-xs font-semibold w-fit mb-4">
                      {project.domain}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border/60 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        How this applies to GTM
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {project.pattern.charAt(0).toUpperCase() + project.pattern.slice(1)}
                      </p>
                    </div>
                    <a
                      href="https://ai.siprahub.com/our-work"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-auto"
                    >
                      View Project
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mt-10 leading-relaxed">
              These capabilities have been demonstrated in delivered systems in other domains. Their application to a
              specific revenue environment would be scoped during discovery.
            </p>
          </div>
        </section>

        {/* =========================================================================
            8. RELATED SERVICES
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Explore More
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Connected capabilities for broader AI transformation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Depending on the GTM problem, these SipraHub services can support a broader engagement:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                      >
                        Learn More
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL CTA
           ========================================================================= */}
        <section className="py-20 bg-primary text-white relative overflow-hidden border-b border-white/20 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)] z-10">
          <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start with how your revenue systems work today
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed font-normal">
              Book a Discovery Call to walk through your current GTM systems, workflows and challenges.
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              We will help identify what should be fixed, what can be automated and where AI can genuinely add value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-bold px-9 py-6 bg-white text-[#b91c1c] hover:bg-white/95 shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">
                  Book a Discovery Call
                  <ArrowRight className="ml-2.5 h-5 w-5 stroke-[2.5]" />
                </Link>
              </Button>
              <Button
                variant="outline-white"
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-medium px-8 py-6 border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">See All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
