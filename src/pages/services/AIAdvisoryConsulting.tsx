import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
  Bot,
  Brain,
  Code2,
  Workflow,
  Sparkles,
  HelpCircle,
  BarChart2,
  FileCheck,
  Cpu,
  ChevronRight,
  CheckCircle,
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

export default function AIAdvisoryConsulting() {
  // Consulting capabilities (6 confirmed scope items)
  const consultingServices = [
    {
      icon: Search,
      title: "AI Opportunity Discovery",
      description:
        "Identify business problems, workflows and opportunities where AI may improve how teams work, serve customers or use information.",
      highlights: ["Workflow bottleneck analysis", "Opportunity mapping", "Operational friction audit"],
    },
    {
      icon: ShieldCheck,
      title: "AI Readiness Assessment",
      description:
        "Review factors that influence AI adoption, including business processes, data availability, technology environment, integration needs and team readiness.",
      highlights: ["Data infrastructure review", "System compatibility", "Governance & compliance"],
    },
    {
      icon: Target,
      title: "Use-Case Prioritization",
      description:
        "Compare potential AI initiatives based on business value, feasibility, dependencies, risk and implementation effort.",
      highlights: ["Value vs. complexity matrix", "Risk & ROI modeling", "Dependency mapping"],
    },
    {
      icon: Compass,
      title: "AI Strategy and Roadmap",
      description:
        "Turn selected opportunities into a practical roadmap with priorities, phases and next steps that connect business goals with implementation.",
      highlights: ["Phased milestone planning", "Resource allocation", "Execution timelines"],
    },
    {
      icon: Cpu,
      title: "Solution and Technology Guidance",
      description:
        "Evaluate suitable solution approaches and technology options based on the use case rather than selecting a platform or model first.",
      highlights: ["Model & platform evaluation", "Build vs. buy analysis", "Architecture guidance"],
    },
    {
      icon: Workflow,
      title: "Implementation Planning",
      description:
        "Define how an approved AI initiative can move from concept toward development, integration, deployment and ongoing improvement.",
      highlights: ["Engineering requirements", "Rollout & integration plan", "Success metrics & KPIs"],
    },
  ];

  // 5-Step Consulting Approach
  const consultingApproach = [
    {
      step: "01",
      name: "Understand",
      title: "Understand Business Objectives",
      description:
        "Clarify business objectives, challenges, stakeholders and the current operating environment.",
    },
    {
      step: "02",
      name: "Assess",
      title: "Assess Readiness & Workflows",
      description:
        "Review workflows, data, systems, constraints and organizational readiness relevant to the AI opportunity.",
    },
    {
      step: "03",
      name: "Prioritize",
      title: "Prioritize High-Impact Use Cases",
      description:
        "Identify the use cases that offer the strongest balance of business value and practical feasibility.",
    },
    {
      step: "04",
      name: "Define",
      title: "Define Strategy & Architecture",
      description:
        "Create a clear solution direction, roadmap, dependencies and implementation plan.",
    },
    {
      step: "05",
      name: "Move Toward Implementation",
      title: "Connect to Technical Delivery",
      description:
        "Connect advisory work with development, automation or other technical delivery when an approved use case is ready to proceed.",
    },
  ];

  // Engagement Deliverables
  const deliverables = [
    "Clear understanding of priority AI opportunities",
    "AI readiness and dependency considerations",
    "Prioritized use cases with value & feasibility scores",
    "Recommended solution direction & tech architecture",
    "Implementation roadmap and next steps",
    "Clarity on where custom development or automation may be required",
  ];

  // Why SipraHub (4 Pillars)
  const whySipraHub = [
    {
      icon: Target,
      title: "Business-First Thinking",
      description:
        "We begin with business needs and expected value before recommending an AI solution.",
    },
    {
      icon: Lightbulb,
      title: "Practical Use-Case Focus",
      description:
        "The goal is to identify opportunities that are meaningful for the organization and realistic to implement.",
    },
    {
      icon: Cpu,
      title: "Technology-Agnostic Guidance",
      description:
        "Technology choices are considered in the context of the use case, systems, data and long-term requirements.",
    },
    {
      icon: Zap,
      title: "Consulting + Delivery",
      description:
        "Advisory can connect with engineering and implementation services when a business is ready to move from planning to execution.",
    },
  ];

  // Approved Case Studies from SipraHub data
  const caseStudies = CASE_STUDIES.slice(0, 2);

  // Approved FAQs
  // Approved FAQs
  const faqs = [
    {
      question: "What is AI advisory and consulting?",
      answer:
        "AI advisory and consulting helps organizations identify valuable AI opportunities, assess readiness, prioritize use cases, and create a practical path from strategy to implementation.",
    },
    {
      question: "When should a business consider AI consulting?",
      answer:
        "AI consulting is useful when an organization wants to adopt AI but needs clarity on opportunities, priorities, technology choices, governance, or implementation planning.",
    },
    {
      question: "Where should an organization start with AI strategy?",
      answer:
        "Start with business objectives and operational problems, then evaluate candidate use cases based on value, feasibility, data, risk, and organizational readiness.",
    },
    {
      question: "Can SipraHub help identify AI use cases?",
      answer:
        "Yes. AI advisory can help uncover opportunities across workflows, products, customer experiences, and internal operations.",
    },
    {
      question: "Can SipraHub help prioritize AI use cases?",
      answer:
        "Yes. Use cases can be assessed based on business relevance, technical feasibility, dependencies, risk, implementation effort, and expected value.",
    },
    {
      question: "What is AI readiness assessment?",
      answer:
        "AI readiness assessment examines factors such as data, technology, workflows, skills, governance, security, integration needs, and organizational ability to adopt AI.",
    },
    {
      question: "Does AI consulting include implementation planning?",
      answer:
        "It can include solution direction, technical considerations, roadmap, dependencies, governance requirements, and next steps for implementation.",
    },
    {
      question: "How can businesses reduce risk when adopting AI?",
      answer:
        "Start with clearly scoped use cases, define human oversight, validate data and integrations, establish governance, test outputs, and use measurable success criteria.",
    },
    {
      question: "How do we choose between building, buying, or integrating an AI solution?",
      answer:
        "Compare business requirements, differentiation needs, cost, time, integration complexity, data considerations, control, scalability, and long-term ownership.",
    },
    {
      question: "What should an AI roadmap include?",
      answer:
        "An AI roadmap should connect prioritized use cases to business goals and define sequencing, dependencies, data and technology needs, governance, resources, milestones, and success measures.",
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
    "name": "AI Advisory & Consulting Services",
    "provider": {
      "@type": "Organization",
      "name": "SipraHub",
      "url": "https://siprahub.com",
      "logo": "https://siprahub.com/siprahub-logo.png",
    },
    "description":
      "Turn AI opportunities into a practical roadmap with SipraHub AI consulting services. Identify use cases, assess readiness and plan a clear path to implementation.",
    "serviceType": "AI Consulting Services",
    "areaServed": ["US", "IN", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting & Advisory Capabilities",
      "itemListElement": consultingServices.map((service, index) => ({
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
        "name": "AI Advisory & Consulting",
        "item": "https://siprahub.com/services/ai-advisory-consulting",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* SEO Metadata */}
      <SEO
        title="AI Consulting Services & Advisory | SipraHub"
        description="Turn AI opportunities into a practical roadmap with SipraHub AI consulting services. Identify use cases, assess readiness and plan a clear path to implementation."
        canonical="https://siprahub.com/services/ai-advisory-consulting"
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-[#333333]/90" />
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
              <span className="text-white font-medium">AI Advisory & Consulting</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                AI Consulting Services & Strategic Advisory
              </Badge>

              {/* SINGLE H1 FOR SEO */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                AI Advisory & Consulting for Practical Business Transformation
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                Make confident AI decisions before investing in technology. SipraHub helps businesses identify
                valuable AI opportunities, understand readiness, prioritize use cases and define a practical roadmap
                from strategy to implementation.
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
                  <Link to="/contact">Discuss Your AI Goals</Link>
                </Button>
              </div>

              {/* Pill Badges */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/15">
                {[
                  "AI Opportunity Discovery",
                  "AI Readiness Assessment",
                  "Use-Case Prioritization",
                  "AI Strategy & Roadmap",
                  "Solution & Tech Guidance",
                  "Implementation Planning",
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
            2. ANSWER-FIRST INTRODUCTION (AEO / Search Intent Optimized)
           ========================================================================= */}
        <section className="py-14 sm:py-18 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/[0.04] via-muted/50 to-primary/[0.02] border border-primary/15 p-8 sm:p-10 lg:p-12 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <HelpCircle className="h-3.5 w-3.5" />
                Answer-First Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                What are AI consulting services?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                AI consulting services help businesses decide where and how artificial intelligence can create
                practical value. SipraHub works with organizations to understand business goals, assess AI
                readiness, identify and prioritize use cases, and define an implementation approach that fits
                existing systems, data and teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Business Alignment</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ground AI initiatives in tangible commercial and operational objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Readiness Evaluation</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Audit data quality, security guardrails, APIs, and team capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Actionable Roadmaps</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Transition from high-level advisory directly to engineering execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHERE SHOULD A BUSINESS START WITH AI?
           ========================================================================= */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Strategic Starting Point
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Where Should a Business Start with AI?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Start with the business problem, not the technology. Identify where teams face repetitive work,
                information bottlenecks, slow decisions or opportunities to improve customer and employee
                experiences. Then assess those opportunities for value, feasibility, data readiness and implementation
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Identify Bottlenecks",
                  desc: "Spot repetitive manual tasks, customer support delays, or data fragmentation across day-to-day operations.",
                },
                {
                  number: "02",
                  title: "Assess Feasibility & Value",
                  desc: "Evaluate the expected business impact against technical complexity and required data investments.",
                },
                {
                  number: "03",
                  title: "Audit Data Readiness",
                  desc: "Verify data accessibility, hygiene, privacy regulations, and integrations with existing systems.",
                },
                {
                  number: "04",
                  title: "Define Phased Delivery",
                  desc: "Start with a high-value proof-of-concept before scaling full production models and automation workflows.",
                },
              ].map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-6">
                    <span className="text-2xl font-extrabold text-primary/40 block mb-3">{step.number}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AI ADVISORY & CONSULTING SERVICES (6 Scope Pillars)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Advisory & Consulting Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We deliver end-to-end consulting capabilities designed to evaluate readiness, prioritize
                initiatives, and architect production-grade AI solutions tailored to your operational realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => {
                const IconComponent = service.icon;
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
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      <div className="pt-4 border-t border-border/60">
                        <ul className="space-y-2">
                          {service.highlights.map((h, i) => (
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
            5. OUR AI CONSULTING APPROACH (5-Step Framework)
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Proven Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our AI Consulting Approach
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                A structured five-phase framework ensuring every AI initiative is grounded in business reality,
                de-risked early, and built for scalable implementation.
              </p>
            </div>

            <div className="space-y-6">
              {consultingApproach.map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border/80 shadow-sm hover:border-primary/30 transition-all"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                      <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-1 flex-shrink-0">
                        <span className="text-3xl sm:text-4xl font-extrabold text-primary">{step.step}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-center">
                          {step.name}
                        </span>
                      </div>
                      <div className="h-px sm:h-12 w-full sm:w-px bg-border flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. WHAT AN ADVISORY ENGAGEMENT CAN DELIVER
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                  Measurable Output
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  What an Advisory Engagement Can Deliver
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Our consulting engagements produce clear, executive-level roadmaps and technical blueprints
                  that eliminate guesswork, optimize budgets, and align cross-functional teams.
                </p>
                <Button size="lg" className="font-semibold" asChild>
                  <Link to="/contact">
                    Request an Advisory Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-muted/40 border border-border/80 hover:border-primary/30 transition-all flex items-start gap-3.5"
                    >
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                        <FileCheck className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. STRATEGY CONNECTED TO EXECUTION (From Advice to Implementation)
           ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Full-Lifecycle Capability
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                From Advice to Implementation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Where appropriate, SipraHub can connect advisory work with AI development, automation and
                related technology delivery so approved initiatives have a clear path toward implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">AI Solutions & Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Custom ML models, generative AI assistants, retrieval-augmented generation (RAG), and agentic
                    workflows tailored to enterprise operations.
                  </p>
                  <Link
                    to="/services/ai-services"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore AI Solutions
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Custom Software Engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    High-performance cloud-native applications, API backends, and modern frontend systems engineered
                    for scalability and secure integration.
                  </p>
                  <Link
                    to="/services/software-development"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore Software Development
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/80 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-between">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Adaptive Delivery Solutions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Flexible engineering squads, Offshore Development Centers (ODC), and specialized AI talent on demand
                    to accelerate deployment timelines.
                  </p>
                  <Link
                    to="/services/software-delivery-models"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore Delivery Models
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. WHY SIPRAHUB (4 Pillars)
           ========================================================================= */}
        <section className="py-20 bg-muted/30">
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
            9. PROOF / CASE STUDY SECTION (Verified Case Studies)
           ========================================================================= */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See How Strategy Connects to Real Solutions
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Discover how SipraHub assesses operational challenges, translates them into actionable architectures,
                and moves approved concepts into production.
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

                    <h3 className="text-2xl font-bold text-foreground mb-3">{study.title}</h3>
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
                          Strategy & Solution
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
                  View Our Work & Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FAQ / AEO CONTENT (Accordion + Structured JSON-LD)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Advisory & Consulting Insights
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Common questions about assessing readiness, prioritizing opportunities, and planning AI initiatives.
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
            11. FINAL CTA SECTION
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
              Turn Your AI Ideas into a Clear Next Step
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Talk to SipraHub about your business goals, current challenges or AI opportunities. We can help you
              understand where to start and what a practical path to implementation could look like.
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
