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
  Workflow,
  Network,
  Binary,
  Compass,
  LineChart,
  Shield,
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

export default function AppliedAI() {
  // 3 Primary Child AI Service Offerings
  const aiServiceOfferings = [
    {
      icon: LineChart,
      title: "AI Advisory & Consulting",
      description:
        "Identify valuable AI opportunities, assess readiness and define a practical roadmap before investing in implementation.",
      link: "/services/ai-advisory-consulting",
      badge: "Strategy & Readiness",
      highlights: [
        "AI Opportunity Discovery & Process Audits",
        "Technical & Data Readiness Assessments",
        "Use-Case Prioritization & ROI Modeling",
        "Phased Implementation Roadmaps",
      ],
    },
    {
      icon: Code2,
      title: "AI Development Services",
      description:
        "Design and build custom AI applications, intelligent features, integrations and AI-enabled workflows around specific business requirements.",
      link: "/services/ai-development",
      badge: "Custom Engineering",
      highlights: [
        "Custom AI Applications & Enterprise Tools",
        "AI Agents, Assistants & Enterprise Search",
        "Generative AI & Knowledge Solutions (RAG)",
        "Predictive Machine Learning Pipelines",
      ],
    },
    {
      icon: Workflow,
      title: "AI Automation Services",
      description:
        "Apply AI to repetitive, information-heavy and workflow-based processes to reduce manual effort and improve how work moves across the business.",
      link: "/services/ai-automation",
      badge: "Intelligent Workflows",
      highlights: [
        "End-to-End Business Workflow Automation",
        "Intelligent Document Processing & Extraction",
        "System & Application API Integrations",
        "Human-in-the-Loop Decision Workflows",
      ],
    },
  ];

  // 7 Where AI Can Create Business Value Areas
  const businessValueAreas = [
    {
      title: "Improve Access to Knowledge & Information",
      description: "Surface critical enterprise data instantly with AI-powered semantic search and knowledge assistants.",
      icon: Search,
    },
    {
      title: "Support Employees & Customers with Intelligent Assistants",
      description: "Deploy 24/7 contextual assistants to answer queries, guide workflows, and resolve issues faster.",
      icon: Bot,
    },
    {
      title: "Automate Repetitive & Information-Heavy Workflows",
      description: "Eliminate manual handoffs and data entry across core operational and administrative tasks.",
      icon: Workflow,
    },
    {
      title: "Add AI Capabilities to Existing Software",
      description: "Enhance proprietary digital products with smart recommendations, predictions, and auto-completion.",
      icon: Code2,
    },
    {
      title: "Improve Document & Data Processing",
      description: "Automatically categorize, summarize, and extract structured data from complex unstructured documents.",
      icon: FileText,
    },
    {
      title: "Support Selected Operational & Decision Workflows",
      description: "Augment human decision-makers with real-time data synthesis, anomaly alerts, and triage suggestions.",
      icon: LineChart,
    },
    {
      title: "Create Custom AI Solutions for Specific Requirements",
      description: "Engineer bespoke AI algorithms designed around your exact workflows, compliance, and systems.",
      icon: Target,
    },
  ];

  // 5-Step From Opportunity to Implementation Framework
  const implementationFramework = [
    {
      step: "01",
      name: "Understand",
      title: "Understand the Business Need",
      description:
        "Start with the business challenge, users, workflow, systems and desired outcome.",
    },
    {
      step: "02",
      name: "Prioritize",
      title: "Identify & Prioritize Use Cases",
      description:
        "Evaluate where AI can provide practical value and which opportunities are suitable for implementation.",
    },
    {
      step: "03",
      name: "Define",
      title: "Define the Approach",
      description:
        "Select the right delivery path, architecture, integrations and AI technologies for the approved use case.",
    },
    {
      step: "04",
      name: "Build & Integrate",
      title: "Build and Integrate",
      description:
        "Develop the solution and connect it with the required applications, data and workflows.",
    },
    {
      step: "05",
      name: "Deploy & Improve",
      title: "Deploy and Improve",
      description:
        "Validate the solution, support deployment and refine it as usage and business requirements evolve.",
    },
  ];

  // 4 Why SipraHub Pillars
  const whySipraHub = [
    {
      icon: Target,
      title: "Strategy Connected to Delivery",
      description:
        "AI planning is connected to implementation so ideas can move toward practical solutions rather than remaining isolated experiments.",
    },
    {
      icon: Lightbulb,
      title: "Business-First Approach",
      description:
        "We begin with the business problem and expected value before selecting technologies.",
    },
    {
      icon: Cpu,
      title: "AI + Engineering",
      description:
        "SipraHub combines AI capabilities with software, integration and technology delivery experience.",
    },
    {
      icon: Network,
      title: "Technology-Agnostic Thinking",
      description:
        "Solutions are shaped around the use case and environment rather than forcing every business into the same technology stack.",
    },
  ];

  // Related Technology Services
  const relatedServices = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom cloud-native web applications, mobile platforms, and enterprise system modernization.",
      link: "/services/software-development",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "AI-enhanced threat detection, VAPT penetration testing, and zero-trust compliance posture.",
      link: "/services/cybersecurity",
    },
    {
      icon: Zap,
      title: "Adaptive Delivery Solutions",
      description: "Flexible delivery models including dedicated engineering teams and Offshore Development Centers.",
      link: "/services/software-delivery-models",
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
      question: "What AI services can SipraHub provide?",
      answer:
        "SipraHub’s AI offering includes custom AI development, machine learning solutions, intelligent automation, AI-enabled applications, and strategic AI consulting.",
    },
    {
      question: "Where should a business start with AI?",
      answer:
        "Start with a specific business problem or opportunity, then assess the workflow, users, data, systems, risks, and desired outcome.",
    },
    {
      question: "Can SipraHub develop custom AI solutions?",
      answer:
        "Yes. SipraHub can design AI solutions around specific business and technical requirements.",
    },
    {
      question: "Can AI be added to an existing application?",
      answer:
        "Yes. Depending on the architecture, AI capabilities can be integrated into existing applications, workflows, APIs, and data systems.",
    },
    {
      question: "What is the difference between AI development and AI consulting?",
      answer:
        "AI consulting focuses on identifying, prioritizing, and planning AI opportunities, while AI development focuses on designing and building the solution.",
    },
    {
      question: "What is the difference between AI automation and custom AI development?",
      answer:
        "AI automation focuses on improving repeatable workflows, while custom AI development can address broader product, application, model, or user-experience requirements.",
    },
    {
      question: "Does every business need a large AI transformation program?",
      answer:
        "No. A focused use case with clear value can be a practical starting point before expanding AI adoption.",
    },
    {
      question: "How should AI use cases be prioritized?",
      answer:
        "Consider business value, feasibility, data readiness, integration complexity, user impact, risk, implementation effort, and measurable success criteria.",
    },
    {
      question: "Can SipraHub support AI from strategy through implementation?",
      answer:
        "Yes. Depending on the engagement, SipraHub can support discovery, advisory, solution design, development, integration, and implementation.",
    },
    {
      question: "What should we evaluate before implementing AI?",
      answer:
        "Evaluate the business case, data, architecture, integrations, security, governance, human oversight, user needs, technical feasibility, and success measures.",
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
    "name": "AI Services & Solutions",
    "provider": {
      "@type": "Organization",
      "name": "SipraHub",
      "url": "https://siprahub.com",
      "logo": "https://siprahub.com/siprahub-logo.png",
    },
    "description":
      "Explore SipraHub AI services for strategy, custom AI development, intelligent automation and implementation designed around real business needs.",
    "serviceType": "AI Services & Solutions",
    "areaServed": ["US", "IN", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SipraHub AI Capabilities",
      "itemListElement": aiServiceOfferings.map((service, index) => ({
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
        "name": "AI Services & Solutions",
        "item": "https://siprahub.com/services/ai-services",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* SEO Metadata */}
      <SEO
        title="AI Services & Solutions for Business | SipraHub"
        description="Explore SipraHub AI services for strategy, custom AI development, intelligent automation and implementation designed around real business needs."
        canonical="https://siprahub.com/services/ai-services"
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
              <span className="text-white font-medium">AI Services & Solutions</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                Comprehensive AI Offerings & Enterprise Solutions
              </Badge>

              {/* SINGLE H1 FOR SEO */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                AI Services & Solutions for Business Transformation
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                Move from AI ideas to practical implementation with services designed around your business goals,
                workflows and technology environment. SipraHub brings together AI strategy, development, automation
                and engineering support to help organizations apply AI where it creates real value.
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
                  <a href="#services">Explore AI Services</a>
                </Button>
              </div>

              {/* Pill Badges */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/15">
                {[
                  "AI Strategy & Advisory",
                  "Custom AI Development",
                  "Intelligent Automation",
                  "System Integration",
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
                What AI services does SipraHub provide?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                SipraHub helps businesses move from AI strategy to implementation through advisory, custom AI
                development, intelligent automation and related technology services. The right engagement depends
                on the business problem, existing systems, data and the outcome the organization wants to achieve.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Strategic Roadmapping</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Assess readiness, evaluate feasibility, and prioritize high-ROI initiatives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Custom AI Engineering</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Build production-grade applications, enterprise LLM agents, and ML pipelines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Intelligent Automation</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Automate repetitive document, data, and system workflows with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. EXPLORE OUR AI SERVICES (3 Child Service Pillars)
           ========================================================================= */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Specialized Service Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Explore Our AI Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Whether you need strategic guidance, bespoke software development, or workflow automation,
                our dedicated service teams provide end-to-end expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {aiServiceOfferings.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/80 shadow-card hover:shadow-hero hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="text-xs font-semibold">
                          {service.badge}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="pt-4 border-t border-border/60 mb-6 flex-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {service.highlights.map((h, i) => (
                            <li key={i} className="flex items-center text-xs font-medium text-foreground/80">
                              <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full font-semibold group-hover:bg-primary" asChild>
                        <Link to={service.link} className="flex items-center justify-center">
                          Explore {service.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHERE AI CAN CREATE BUSINESS VALUE (7 Value Areas)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Strategic Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Where AI Can Create Business Value
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Applied artificial intelligence drives the highest return when focused on eliminating friction,
                amplifying workforce capabilities, and streamlining operational bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessValueAreas.map((val, index) => {
                const IconComponent = val.icon;
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
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {val.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FROM AI OPPORTUNITY TO IMPLEMENTATION (5-Step Framework)
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                End-to-End Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                From AI Opportunity to Implementation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                A connected five-stage process ensuring every initiative has a de-risked roadmap, solid technical
                foundation, and clear trajectory to production deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {implementationFramework.map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border/80 shadow-sm hover:border-primary/30 transition-all flex flex-col justify-between"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-primary">{step.step}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {step.name}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
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
                We combine deep engineering rigor with pragmatic business strategy so AI initiatives create
                lasting, measurable impact.
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
            7. RELATED TECHNOLOGY SERVICES (Cross-Domain Navigation)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Cross-Domain Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Related Technology Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Comprehensive software, cloud, and security engineering capabilities to support full-lifecycle digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc, index) => {
                const IconComponent = svc.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between"
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {svc.description}
                      </p>
                      <Link
                        to={svc.link}
                        className="inline-flex items-center text-xs font-semibold text-primary hover:underline group mt-auto"
                      >
                        Learn More
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. PROOF / CASE STUDIES SECTION (AI in Practice)
           ========================================================================= */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI in Practice
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Discover how SipraHub designs and deploys production-grade AI solutions to solve critical operational challenges.
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
                          Solution & Engineering
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
            9. FAQ / AEO CONTENT (Accordion + Structured JSON-LD)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Services & Implementation Insights
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Everything you need to know about navigating AI strategy, custom development, and system integrations.
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
              Start with the Right AI Opportunity
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Whether you are exploring AI for the first time or preparing to build and scale an existing initiative,
              SipraHub can help define the next practical step.
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