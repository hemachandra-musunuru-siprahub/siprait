import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  Search,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
  Bot,
  Code2,
  FileText,
  Sparkles,
  HelpCircle,
  Database,
  Users,
  Settings,
  Cpu,
  ChevronRight,
  CheckCircle,
  Clock,
  Workflow,
  Network,
  Binary,
  BookOpen,
  MessageSquare,
  BarChart3,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-bg.jpg";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function AIDevelopment() {
  // 6 Confirmed AI Development Capabilities
  const capabilities = [
    {
      icon: Target,
      title: "Custom AI Solutions",
      description:
        "Build AI solutions around specific business requirements instead of forcing teams into a one-size-fits-all product. We focus on practical applications that can work with your existing processes and technology environment.",
      highlights: ["Tailored architecture", "Process-aligned models", "Domain-specific customization"],
    },
    {
      icon: Code2,
      title: "AI-Powered Applications",
      description:
        "Add intelligent capabilities to new or existing applications to improve how users search, interact, analyze information and complete tasks.",
      highlights: ["Smart search & filters", "Interactive conversational UI", "Predictive application features"],
    },
    {
      icon: Bot,
      title: "AI Agents and Assistants",
      description:
        "Develop AI assistants and agent-based experiences that can support users, retrieve information and help execute defined business tasks with appropriate controls.",
      highlights: ["Multi-step task execution", "Enterprise knowledge retrieval", "Contextual action triggers"],
    },
    {
      icon: BookOpen,
      title: "Generative AI and Knowledge Solutions",
      description:
        "Use generative AI and retrieval-based approaches to help teams work with internal knowledge, documents and business information more effectively.",
      highlights: ["Retrieval-Augmented Generation (RAG)", "Document intelligence", "Semantic enterprise search"],
    },
    {
      icon: Network,
      title: "AI Integration",
      description:
        "Connect AI capabilities with business applications, APIs, data sources and workflows so AI becomes part of the systems your teams already use.",
      highlights: ["REST API & webhook bridges", "Database synchronization", "Zero disruption deployment"],
    },
    {
      icon: Binary,
      title: "Machine Learning Solutions",
      description:
        "Develop machine learning capabilities for suitable use cases such as classification, prediction, recommendations or pattern identification, based on available data and business requirements.",
      highlights: ["Predictive modeling", "Data classification & scoring", "Anomaly & pattern detection"],
    },
  ];

  // 7 What We Can Help You Build Solutions
  const buildSolutions = [
    {
      title: "Internal Knowledge Assistants & Search",
      description: "Equip employees with instant, verified semantic search over internal documentation, wikis, and SOPs.",
      icon: Search,
    },
    {
      title: "Customer & Employee Support Assistants",
      description: "Deploy 24/7 intelligent conversational agents with human-in-the-loop escalation and strict domain guardrails.",
      icon: MessageSquare,
    },
    {
      title: "AI-Enabled Applications & Features",
      description: "Enhance existing web and mobile software with intelligent recommendations, auto-completion, and insights.",
      icon: Code2,
    },
    {
      title: "Document & Information Processing Workflows",
      description: "Automate ingestion, parsing, extraction, and synthesis of high-volume business documents and contracts.",
      icon: FileText,
    },
    {
      title: "AI-Assisted Operational Workflows",
      description: "Integrate intelligent triage, task prioritization, and automated anomaly detection into daily operations.",
      icon: Workflow,
    },
    {
      title: "Custom Machine Learning Features",
      description: "Train and fine-tune supervised, unsupervised, and predictive models tailored to your proprietary datasets.",
      icon: Binary,
    },
    {
      title: "AI Integrations for Existing Platforms",
      description: "Bridge external LLMs and internal AI microservices seamlessly into your current CRM, ERP, and databases.",
      icon: Network,
    },
  ];

  // 6-Step Development Approach
  const developmentApproach = [
    {
      step: "01",
      name: "Discover",
      title: "Discover & Define Problem Scope",
      description:
        "Understand the business problem, users, current workflow, available data, systems and expected outcome.",
    },
    {
      step: "02",
      name: "Design",
      title: "Design Architecture & User Experience",
      description:
        "Define the right solution approach, user experience, integration needs and technical architecture.",
    },
    {
      step: "03",
      name: "Develop",
      title: "Build & Iterate AI Solution",
      description:
        "Build and iterate on the AI solution with attention to usability, quality and alignment with the approved requirements.",
    },
    {
      step: "04",
      name: "Integrate",
      title: "Connect Systems & Data Sources",
      description:
        "Connect the solution with the required applications, APIs, data sources and business workflows.",
    },
    {
      step: "05",
      name: "Validate & Deploy",
      title: "Test Rigorously & Launch Safely",
      description:
        "Test the solution against agreed requirements and prepare it for deployment in the target environment.",
    },
    {
      step: "06",
      name: "Improve",
      title: "Monitor, Refine & Scale",
      description:
        "Review performance after launch and refine the solution as business needs, data and usage evolve.",
    },
  ];

  // 4 Why SipraHub Pillars
  const whySipraHub = [
    {
      icon: Target,
      title: "Business-First AI",
      description:
        "We start with the problem and expected business value before selecting the technology.",
    },
    {
      icon: Cpu,
      title: "Technology-Agnostic Approach",
      description:
        "We focus on selecting technologies that fit the use case, environment and long-term requirements.",
    },
    {
      icon: Boxes,
      title: "End-to-End Delivery",
      description:
        "Our approach connects discovery, development, integration and deployment instead of treating AI as an isolated experiment.",
    },
    {
      icon: Zap,
      title: "Flexible Delivery",
      description:
        "SipraHub supports different delivery models based on project needs, team structure and implementation requirements.",
    },
  ];

  // Approved Case Studies from SipraHub data
  const caseStudies = [
    CASE_STUDIES.find((s) => s.id === 1) || CASE_STUDIES[0],
    CASE_STUDIES.find((s) => s.id === 2) || CASE_STUDIES[1],
  ];

  // Approved FAQs
  const faqs = [
    {
      question: "What are AI development services?",
      answer:
        "AI development services help organizations design and build custom AI-powered applications, features, assistants, models, and intelligent workflows for specific business needs.",
    },
    {
      question: "What types of AI solutions can be developed?",
      answer:
        "Solutions can include AI-enabled applications, intelligent assistants, machine learning capabilities, information processing workflows, and AI features integrated into existing products.",
    },
    {
      question: "How does an AI development project start?",
      answer:
        "It starts by defining the business problem, users, data, current systems, constraints, risks, and expected outcome before selecting the technical approach.",
    },
    {
      question: "Can AI be integrated into our existing software?",
      answer:
        "Yes. AI capabilities can be integrated with existing applications, APIs, databases, and workflows where the architecture and integration options support it.",
    },
    {
      question: "Does every AI project require a model built from scratch?",
      answer:
        "No. A solution may use existing models, APIs, retrieval systems, custom logic, fine-tuning, or purpose-built models depending on the requirement.",
    },
    {
      question: "How do you determine whether AI is appropriate for a use case?",
      answer:
        "Evaluate business value, technical feasibility, data availability, workflow fit, integration requirements, risk, and whether AI offers an advantage over simpler approaches.",
    },
    {
      question: "Can SipraHub build an AI prototype before full development?",
      answer:
        "A prototype or proof of concept can be useful for validating feasibility, user experience, integrations, and expected value before committing to broader implementation.",
    },
    {
      question: "How does an AI prototype move to production?",
      answer:
        "The path typically includes validation, solution design, integration, testing, security and governance checks, deployment, monitoring, and iterative improvement.",
    },
    {
      question: "What should businesses prepare before starting AI development?",
      answer:
        "Useful inputs include the business problem, sample workflows, available data, existing systems, user needs, constraints, security requirements, and success criteria.",
    },
    {
      question: "How should the success of an AI solution be measured?",
      answer:
        "Success should be tied to defined business and operational outcomes, along with technical quality, reliability, user adoption, risk controls, and performance against agreed criteria.",
    },
  ];

  // Schema.org JSON-LD Structured Data
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SipraHub",
      "url": "https://siprahub.com",
      "logo": "https://siprahub.com/siprahub-logo.png",
    },
    "description":
      "Build practical, scalable AI solutions with SipraHub AI development services, from custom AI applications and intelligent automation to integration and deployment.",
    "serviceType": "Custom AI Development",
    "areaServed": ["US", "IN", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Capabilities",
      "itemListElement": capabilities.map((service, index) => ({
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
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://siprahub.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://siprahub.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Development Services",
        "item": "https://siprahub.com/services/ai-development",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* SEO Metadata */}
      <SEO
        title="AI Development Services | Custom AI Solutions | SipraHub"
        description="Build practical, scalable AI solutions with SipraHub AI development services, from custom AI applications and intelligent automation to integration and deployment."
        canonical="https://siprahub.com/services/ai-development"
      />

      {/* JSON-LD Schemas */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      <Navigation />

      <main className="flex-1">
        {/* =========================================================================
            1. HERO SECTION
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-[#242424]/90" />
            <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-white/70">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              <span className="text-white font-medium">AI Development Services</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                Custom AI Engineering & Intelligent Applications
              </Badge>

              {/* SINGLE H1 FOR SEO */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                AI Development Services Built Around Your Business
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                Turn AI opportunities into practical solutions designed for your workflows, data and business goals.
                SipraHub helps organizations design, build, integrate and scale custom AI solutions that fit into
                real business environments.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button
                  size="xl"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 py-6 bg-white text-primary hover:bg-white/95 shadow-hero transition-all transform hover:-translate-y-0.5"
                  asChild
                >
                  <Link to="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2.5 h-5 w-5 stroke-[2.5]" />
                  </Link>
                </Button>
                <Button
                  variant="outline-white"
                  size="xl"
                  className="w-full sm:w-auto text-base sm:text-lg font-medium px-8 py-6 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a href="#capabilities">Explore Our AI Capabilities</a>
                </Button>
              </div>

              {/* Pill Badges */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/15">
                {[
                  "Custom AI Solutions",
                  "AI-Powered Applications",
                  "AI Agents & Assistants",
                  "Generative AI & Knowledge",
                  "AI Integration",
                  "Machine Learning Solutions",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs sm:text-sm font-medium bg-white/10 text-white/90 border border-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-orange-300" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. ANSWER-FIRST INTRODUCTION (AEO / Search Intent)
           ========================================================================= */}
        <section className="py-14 sm:py-18 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/[0.04] via-muted/50 to-primary/[0.02] border border-primary/15 p-8 sm:p-10 lg:p-12 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <HelpCircle className="h-3.5 w-3.5" />
                Answer-First Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What are AI development services?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                AI development services help businesses design and build AI-powered applications, features and
                workflows for specific business needs. SipraHub supports the journey from identifying the right
                use case to developing, integrating and deploying AI solutions within existing systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Purpose-Built Solutions</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Tailored to your domain logic, data models, security needs, and user workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Network className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">System & API Integration</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Embedded directly into existing enterprise apps, databases, and microservices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Boxes className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Production Scalability</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Engineered for high concurrency, low latency, robust monitoring, and governance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE CAN HELP YOU BUILD (7 Core Solution Areas)
           ========================================================================= */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Practical Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What We Can Help You Build
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                From intelligent employee co-pilots and custom ML pipelines to automated document intelligence,
                we engineer software that turns complex data into tangible business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildSolutions.map((sol, index) => {
                const IconComponent = sol.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
                  >
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {sol.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AI DEVELOPMENT CAPABILITIES (6 Pillars)
           ========================================================================= */}
        <section id="capabilities" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Core Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Development Capabilities
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Engineered for security, accuracy, and seamless integration with the software ecosystem your
                teams already rely on every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => {
                const IconComponent = cap.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gradient-card border border-border/80 shadow-card hover:shadow-hero hover:border-primary/30 transition-all duration-300 group flex flex-col"
                  >
                    <CardContent className="p-8 flex-1 flex flex-col">
                      <div className="p-3.5 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {cap.description}
                      </p>
                      <div className="pt-4 border-t border-border/60">
                        <ul className="space-y-2">
                          {cap.highlights.map((h, i) => (
                            <li key={i} className="flex items-center text-xs font-medium text-foreground/80">
                              <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. OUR AI DEVELOPMENT APPROACH (6-Step Methodology)
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Disciplined Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our AI Development Approach
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                From initial scoping and architectural design to full production deployment and continuous
                refinement, our 6-step framework ensures robust and predictable delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentApproach.map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border/80 shadow-sm hover:border-primary/30 transition-all flex flex-col justify-between"
                >
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-primary">{step.step}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded">
                        {step.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. WHY SIPRAHUB (4 Pillars)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Why Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why SipraHub</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We combine deep technical capabilities with strategic business acumen to ensure your AI initiatives
                deliver practical and durable returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whySipraHub.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/30 transition-all flex flex-col items-center"
                  >
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-5">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. PROOF / CASE STUDY SECTION (Verified Case Studies)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See AI in Practice
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Discover how SipraHub designs, builds, and deploys intelligent applications that solve real
                operational challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="bg-card border-border/80 shadow-card hover:shadow-hero hover:border-primary/30 transition-all flex flex-col justify-between"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-xs font-semibold">
                        {study.industry}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {study.useCase}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{study.title}</h3>
                    <p className="text-xs font-semibold text-muted-foreground mb-4">{study.company}</p>

                    <div className="space-y-4 mb-6 flex-1">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                          Business Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                          What SipraHub Built & Implemented
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Verified Metrics */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/50 border border-border/60 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5">
                        {study.aiTechnologies.slice(0, 2).map((tech, i) => (
                          <span key={i} className="text-[11px] font-medium bg-muted px-2 py-0.5 rounded text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                      >
                        Read Case Study
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="font-semibold" asChild>
                <a href="https://ai.siprahub.com/our-work">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. CONNECTED STRATEGY & AUTOMATION (Cross-Service Links)
           ========================================================================= */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Connected Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                From Strategy to Intelligent Automation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                SipraHub connects technical development with strategic readiness consulting and workflow automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">AI Advisory & Consulting</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Assess AI readiness, prioritize high-value use cases, and define a practical roadmap before
                    investing in technology.
                  </p>
                  <Link
                    to="/services/ai-advisory-consulting"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore AI Consulting
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">AI Automation Services</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Automate repeatable business workflows, document processing pipelines, and system handoffs with
                    intelligent controls.
                  </p>
                  <Link
                    to="/services/ai-automation"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore AI Automation
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FAQ / AEO CONTENT (Accordion + Structured JSON-LD)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Development Insights
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Answers to common questions about scoping, integration, technology selection, and delivery.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/80 rounded-xl px-6 bg-card shadow-sm hover:border-primary/30 transition-all data-[state=open]:border-primary/40 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base sm:text-lg py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-6 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* =========================================================================
            10. FINAL CTA SECTION
           ========================================================================= */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1 text-sm font-medium"
            >
              Get Started Today
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build with AI?
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Talk to SipraHub about your business challenge, AI idea or workflow. We can help you identify a practical
              path from concept to implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-bold px-9 py-6 bg-white text-[#b91c1c] hover:bg-white/95 shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2.5 h-5 w-5 stroke-[2.5]" />
                </Link>
              </Button>
              <Button
                variant="outline-white"
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-medium px-8 py-6 border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <a href="mailto:contact@siprahub.com">contact@siprahub.com</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
