import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Workflow,
  CheckCircle2,
  ArrowRight,
  Search,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
  Bot,
  Brain,
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
  ShieldAlert,
  GitFork,
  Radio,
  FileSearch,
  MessageSquareCode,
  Network,
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

export default function AIAutomation() {
  // 6 Confirmed Capabilities
  const capabilities = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate repeatable steps across business workflows to reduce manual effort and help teams move work forward more consistently.",
      highlights: ["End-to-end task automation", "Error reduction & consistency", "Process bottleneck removal"],
    },
    {
      icon: FileSearch,
      title: "Intelligent Document Processing",
      description:
        "Use AI to support the extraction, classification, summarization or routing of information from business documents where the use case and data are suitable.",
      highlights: ["Automated data extraction", "Document categorization", "Structured data transformation"],
    },
    {
      icon: Bot,
      title: "AI Assistants and Agents",
      description:
        "Build assistants or agent-based workflows that can retrieve information, support defined tasks and help users complete multi-step processes with appropriate controls.",
      highlights: ["Autonomous task execution", "Enterprise knowledge retrieval", "Context-aware action triggers"],
    },
    {
      icon: Network,
      title: "System and Application Integration",
      description:
        "Connect automation with existing applications, APIs, data sources and business tools so workflows can operate across the systems teams already depend on.",
      highlights: ["REST API & webhook bridges", "Legacy system connectors", "Real-time data synchronization"],
    },
    {
      icon: GitFork,
      title: "AI-Assisted Decision Workflows",
      description:
        "Use AI to organize information, surface relevant insights or support defined decision steps while keeping people involved where review or judgment is required.",
      highlights: ["Smart triage & recommendations", "Information synthesis", "Human-in-the-loop oversight"],
    },
    {
      icon: Code2,
      title: "Custom Automation Solutions",
      description:
        "Design automation around specific business requirements when standard workflow tools do not fully address the process.",
      highlights: ["Bespoke workflow logic", "Custom integrations", "Domain-specific architectures"],
    },
  ];

  // 7 Practical Operational Use Cases
  const useCases = [
    {
      title: "Repetitive Data Entry & Information Handling",
      description: "Eliminate manual copy-pasting, data parsing, and repetitive entry across systems and databases.",
      icon: Database,
    },
    {
      title: "Document Review, Classification & Routing",
      description: "Automatically read, categorize, summarize, and route contracts, invoices, and intake forms.",
      icon: FileText,
    },
    {
      title: "Internal Knowledge Retrieval & Employee Support",
      description: "Provide instant access to internal SOPs, documentation, policy manuals, and technical runbooks.",
      icon: Search,
    },
    {
      title: "Customer & Service-Request Workflows",
      description: "Triage inbound tickets, summarize customer history, and suggest next best actions for support teams.",
      icon: MessageSquareCode,
    },
    {
      title: "Operations & Back-Office Process Support",
      description: "Streamline cross-departmental handoffs, reconciliation, verification, and audit logging.",
      icon: Settings,
    },
    {
      title: "Notifications, Approvals & Task Coordination",
      description: "Automate event-driven notifications, escalation paths, and multi-tier approval requests.",
      icon: Radio,
    },
    {
      title: "Connecting Information Across Business Systems",
      description: "Bridge isolated legacy ERP, CRM, and cloud platforms without cumbersome manual middleware.",
      icon: Network,
    },
  ];

  // 6-Step Automation Approach
  const automationApproach = [
    {
      step: "01",
      name: "Identify",
      title: "Identify & Understand Current Workflows",
      description:
        "Understand the current workflow, pain points, repetitive steps, systems involved and the business outcome expected from automation.",
    },
    {
      step: "02",
      name: "Prioritize",
      title: "Prioritize High-Value Opportunities",
      description:
        "Select automation opportunities based on value, feasibility, process stability, data availability and integration requirements.",
    },
    {
      step: "03",
      name: "Design",
      title: "Design Human + AI Workflows",
      description:
        "Define the future workflow, human review points, AI responsibilities, system connections and expected user experience.",
    },
    {
      step: "04",
      name: "Build and Integrate",
      title: "Develop & Connect Systems",
      description:
        "Develop the automation and connect it with the required applications, APIs, data sources and workflow tools.",
    },
    {
      step: "05",
      name: "Test and Deploy",
      title: "Validate & Safely Roll Out",
      description:
        "Validate the workflow against agreed scenarios, exception cases and business requirements before deployment.",
    },
    {
      step: "06",
      name: "Monitor and Improve",
      title: "Monitor, Refine & Scale",
      description:
        "Review how the automation performs in real use and refine workflows as processes and business needs change.",
    },
  ];

  // 4 Why SipraHub Pillars
  const whySipraHub = [
    {
      icon: Target,
      title: "Business-Process First",
      description:
        "We begin with the workflow and business problem before choosing an AI model, automation platform or technical approach.",
    },
    {
      icon: Layers,
      title: "Built Around Existing Systems",
      description:
        "Automation is designed with the current technology environment in mind, helping businesses extend existing workflows instead of replacing systems unnecessarily.",
    },
    {
      icon: Cpu,
      title: "AI + Engineering Capability",
      description:
        "SipraHub combines AI development with software and integration thinking to support automation that needs to work across real business applications.",
    },
    {
      icon: Zap,
      title: "Practical Delivery",
      description:
        "We focus on clearly defined use cases, measurable process goals and solutions that can move from concept toward real implementation.",
    },
  ];

  // Approved Case Studies from SipraHub data (Insurance Co-pilot & Editorial Platform)
  const caseStudies = [
    CASE_STUDIES.find((s) => s.id === 2) || CASE_STUDIES[1],
    CASE_STUDIES.find((s) => s.id === 3) || CASE_STUDIES[0],
  ];

  // Approved FAQs
  const faqs = [
    {
      question: "What is AI automation?",
      answer:
        "AI automation combines automation with AI capabilities to handle workflows involving language, documents, classification, summarization, decisions, or other information-heavy tasks.",
    },
    {
      question: "How is AI automation different from traditional automation?",
      answer:
        "Traditional automation works best with predictable rules and inputs. AI can extend automation to workflows involving unstructured information, natural language, and more variable inputs.",
    },
    {
      question: "Which business processes are good candidates for AI automation?",
      answer:
        "Good candidates often include repetitive, high-volume workflows involving documents, data handling, routing, queries, manual handoffs, or predictable operational follow-ups.",
    },
    {
      question: "Can AI automation integrate with existing business systems?",
      answer:
        "Yes. Depending on available integration options, AI automation can connect with applications, APIs, databases, and existing workflows.",
    },
    {
      question: "Do we need to automate an entire process at once?",
      answer:
        "No. Starting with a focused workflow that has clear value and measurable success criteria can reduce complexity and help validate the approach.",
    },
    {
      question: "How do we identify the best automation opportunity?",
      answer:
        "Look for repetitive work, bottlenecks, high manual effort, information processing, frequent handoffs, and tasks where delays or inconsistency affect operations.",
    },
    {
      question: "Can AI automation include human review?",
      answer:
        "Yes. Human review or approval can be included at appropriate decision points, especially for sensitive, high-impact, or exception-based workflows.",
    },
    {
      question: "What information is needed before automating a workflow?",
      answer:
        "Document the current process, inputs, outputs, systems, decision points, exceptions, users, volumes, pain points, and desired outcome.",
    },
    {
      question: "How can businesses reduce risk in AI automation?",
      answer:
        "Use clearly scoped workflows, appropriate human oversight, access controls, testing, monitoring, exception handling, and measurable acceptance criteria.",
    },
    {
      question: "How should AI automation success be measured?",
      answer:
        "Measures should reflect the business goal and may include processing time, manual effort, consistency, throughput, error reduction, user experience, or other approved operational metrics.",
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
    "name": "AI Automation Services",
    "provider": {
      "@type": "Organization",
      "name": "SipraHub",
      "url": "https://siprahub.com",
      "logo": "https://siprahub.com/siprahub-logo.png",
    },
    "description":
      "Automate business workflows with SipraHub AI automation services. Build intelligent, integrated solutions that reduce repetitive work and support more efficient operations.",
    "serviceType": "Intelligent Workflow Automation",
    "areaServed": ["US", "IN", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Capabilities",
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
        "name": "AI Automation Services",
        "item": "https://siprahub.com/services/ai-automation",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* SEO Metadata */}
      <SEO
        title="AI Automation Services | Intelligent Workflow Automation | SipraHub"
        description="Automate business workflows with SipraHub AI automation services. Build intelligent, integrated solutions that reduce repetitive work and support more efficient operations."
        canonical="https://siprahub.com/services/ai-automation"
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-[#2a2a2a]/90" />
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
              <span className="text-white font-medium">AI Automation Services</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                Intelligent Workflow & Process Automation
              </Badge>

              {/* SINGLE H1 FOR SEO */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                AI Automation Services for Smarter Business Workflows
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
                Move beyond repetitive manual work with AI-powered automation designed around your business
                processes. SipraHub helps organizations identify automation opportunities, build intelligent
                workflows and integrate them with the systems teams already use.
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
                  <a href="#use-cases">Explore Automation Opportunities</a>
                </Button>
              </div>

              {/* Pill Badges */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/15">
                {[
                  "Workflow Automation",
                  "Intelligent Document Processing",
                  "AI Assistants & Agents",
                  "System Integration",
                  "Decision Workflows",
                  "Custom Automation",
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
                What are AI automation services?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                AI automation services use artificial intelligence to automate or assist business tasks, decisions
                and workflows that normally require repeated manual effort. SipraHub helps businesses identify
                suitable processes, design the right automation approach and connect AI-powered workflows with
                existing applications and data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Task & Workflow Speed</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Eliminate repetitive manual bottlenecks and accelerate daily operational cycle times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">System Interoperability</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Bridge disparate business systems, tools, APIs, and databases without manual entry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Human-in-the-Loop</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Keep people in control of critical decisions, exceptions, and high-impact approvals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHERE AI AUTOMATION CAN HELP (7 Use Cases)
           ========================================================================= */}
        <section id="use-cases" className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                High-Impact Use Cases
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Where AI Automation Can Help
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Intelligent automation excels in workflows where manual data processing, fragmented communication,
                and repetitive tasks slow down team momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc, index) => {
                const IconComponent = uc.icon;
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
                        {uc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {uc.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. AI AUTOMATION CAPABILITIES (6 Pillars)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Core Automation Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Automation Capabilities
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
            5. OUR AI AUTOMATION APPROACH (6-Step Framework)
           ========================================================================= */}
        <section className="py-20 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our AI Automation Approach
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                A disciplined six-stage delivery model ensuring workflows are de-risked, thoroughly tested against
                exceptions, and seamlessly adopted by end users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationApproach.map((step, idx) => (
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
            6. HUMAN + AI WORKFLOW DESIGN (Control & Governance Callout)
           ========================================================================= */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-muted border border-primary/20 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
              <div className="p-5 rounded-2xl bg-primary text-white flex-shrink-0 shadow-sm">
                <Users className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Human + AI Collaboration
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Automate the Right Work, Keep People in Control
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Effective automation is not about removing people from every process. SipraHub focuses on
                  automating suitable repetitive steps while keeping human review, approvals and judgment where
                  they add value or are required by the business.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-foreground/80">
                  <span className="inline-flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-1.5" />
                    Configurable Review Checkpoints
                  </span>
                  <span className="inline-flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-1.5" />
                    Confidence-Scored Triaging
                  </span>
                  <span className="inline-flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-1.5" />
                    Audit Trails & Explainability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY SIPRAHUB (4 Pillars)
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Why Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why SipraHub</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We combine deep technical capabilities with strategic business acumen to ensure your AI automation
                initiatives deliver measurable operational improvements.
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
            8. PROOF / CASE STUDY SECTION (Verified Case Studies)
           ========================================================================= */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                See Intelligent Automation in Practice
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Real-world examples of how SipraHub designs and deploys intelligent workflow automation to solve
                complex operational challenges.
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
                          Original Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                          Automation Solution & Integration
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
            9. CROSS-SERVICE INTERNAL PATHWAYS
           ========================================================================= */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Related Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Connected Engineering & Strategy
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Automation thrives when supported by clear strategy and custom software architecture.
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
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">AI Solutions & Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Build custom machine learning models, enterprise LLM assistants, and scalable data infrastructure.
                  </p>
                  <Link
                    to="/services/ai-services"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline group mt-auto"
                  >
                    Explore AI Development
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FAQ / AEO CONTENT (Accordion + Structured JSON-LD)
           ========================================================================= */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                AI Automation Insights
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Everything you need to know about evaluating workflows, legacy system integrations, and implementation.
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
              Find the Right Opportunities to Automate
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Talk to SipraHub about the repetitive workflows, operational bottlenecks or manual processes your teams
              manage today. We can help identify where AI automation can make practical business sense.
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
