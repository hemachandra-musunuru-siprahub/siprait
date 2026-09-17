import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code,
  Brain,
  Shield,
  Cloud,
  Zap,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Layers,
  Cpu,
  Lock,
  Server,
  Users,
  Compass,
  Check,
  Workflow,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface ServiceCardData {
  id: string;
  category: "software" | "ai" | "security" | "cloud" | "delivery";
  categoryLabel: string;
  icon: typeof Code;
  title: string;
  tagline: string;
  description: string;
  link: string;
  externalLink?: string;
  highlights: string[];
  techStack: string[];
  engagementModels: string[];
}

const servicesData: ServiceCardData[] = [
  {
    id: "software-dev",
    category: "software",
    categoryLabel: "Software Engineering",
    icon: Code,
    title: "Software Development",
    tagline: "Custom Applications, Legacy Modernization & AI Integration",
    description:
      "Transform your operational vision into resilient, high-performance software. We engineer scalable web, mobile, and enterprise platforms tailored to industry-specific workflows and modern cloud architecture.",
    link: "/services/software-development",
    highlights: [
      "Custom Web, Mobile & Enterprise Applications",
      "Domain-Specific Solutions (Healthcare, Logistics, Fintech)",
      "Legacy System Modernization & Cloud Re-engineering",
      "Microservices Architecture & Robust API Ecosystems",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "Java", "PostgreSQL", "GraphQL"],
    engagementModels: ["Dedicated Teams", "Fixed-Scope Projects", "ODC Setup"],
  },
  {
    id: "ai-development",
    category: "ai",
    categoryLabel: "Custom AI Development",
    icon: Brain,
    title: "AI Development Services",
    tagline: "Custom AI Applications, Intelligent Agents & Production Deployment",
    description:
      "Turn AI opportunities into practical solutions designed for your workflows, data and business goals. We design, build, integrate and scale custom AI solutions, generative AI assistants, and machine learning pipelines that fit into real business environments.",
    link: "/services/ai-development",
    highlights: [
      "Custom AI Applications & Enterprise Knowledge Assistants",
      "Generative AI, Enterprise LLMs & Agentic Systems",
      "Seamless API, Database & Legacy Software Integration",
      "Supervised & Predictive Machine Learning Pipelines",
    ],
    techStack: ["PyTorch", "TensorFlow", "OpenAI / Anthropic", "LangChain", "HuggingFace", "MLflow"],
    engagementModels: ["AI POC to Production", "Dedicated AI Squads", "Turnkey AI Engineering"],
  },
  {
    id: "ai-advisory",
    category: "ai",
    categoryLabel: "AI Strategy & Advisory",
    icon: LineChart,
    title: "AI Advisory & Consulting",
    tagline: "Strategic Roadmapping, Opportunity Assessment & ROI Modeling",
    description:
      "Navigate your AI transformation with confidence. Our senior advisors evaluate technical feasibility, discover high-impact operational use cases, calculate ROI projections, and structure organizational change management.",
    link: "/services/ai-advisory-consulting",
    highlights: [
      "AI Strategy Roadmap & Business Case Formulation",
      "Process Opportunity Mapping & Feasibility Audits",
      "Cost-Benefit Analysis & ROI Forecasting",
      "AI Governance, Data Readiness & Change Management",
    ],
    techStack: ["Strategy Frameworks", "ROI Modeling", "Governance Audits", "Maturity Scoring"],
    engagementModels: ["Advisory Retainer", "Strategic Workshops", "Executive Consulting"],
  },
  {
    id: "ai-automation",
    category: "ai",
    categoryLabel: "AI & Workflow Automation",
    icon: Workflow,
    title: "AI Automation Services",
    tagline: "Intelligent Workflows, Document AI & System Integration",
    description:
      "Move beyond repetitive manual work. We design and build intelligent automation workflows, automated document processing pipelines, and AI agent assistants integrated directly into your existing business systems.",
    link: "/services/ai-automation",
    highlights: [
      "End-to-End Business Workflow Automation",
      "Intelligent Document Processing & OCR/NLP Extraction",
      "Autonomous AI Agents & Operational Assistants",
      "Seamless API & Legacy System Integrations",
    ],
    techStack: ["LangChain", "Agentic Frameworks", "REST APIs / Webhooks", "Document AI", "n8n / Python"],
    engagementModels: ["Turnkey Automation", "Custom Integration", "Dedicated Engineering"],
  },
  {
    id: "cybersecurity",
    category: "security",
    categoryLabel: "Cybersecurity & Risk",
    icon: Shield,
    title: "Next-Gen Cybersecurity",
    tagline: "AI-Driven Threat Detection, Penetration Testing & Compliance",
    description:
      "Safeguard your critical digital assets and maintain business continuity. We combine proactive vulnerability assessments, AI-powered threat telemetry, cloud perimeter defense, and rigorous compliance advisory.",
    link: "/services/cybersecurity",
    highlights: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "AI-Enhanced Threat Intelligence & Active Monitoring",
      "Cloud Security Architecture & Zero-Trust Defense",
      "Compliance & Governance (SOC 2, ISO 27001, HIPAA)",
    ],
    techStack: ["Zero Trust", "SIEM/SOAR", "Cloud Security", "VAPT Tools", "IAM Systems"],
    engagementModels: ["Security Audits", "Managed Security (MSSP)", "Continuous VAPT"],
  },
  {
    id: "cloud-infra",
    category: "cloud",
    categoryLabel: "Cloud & Infrastructure",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    tagline: "Cloud Migration, DevOps Automation & Managed Infrastructure",
    description:
      "Build resilient, high-availability cloud foundations. We streamline cloud migrations across AWS, Azure, and Google Cloud, implement Infrastructure-as-Code (IaC), optimize Microsoft 365, and provide 24/7 reliability engineering.",
    link: "/services/cloud-infra",
    highlights: [
      "Multi-Cloud Architecture & Seamless Cloud Migration",
      "DevOps CI/CD Pipelines & Infrastructure as Code (IaC)",
      "Microsoft Office 365 Enterprise Setup & Management",
      "24/7 SRE Monitoring, Cost Optimization & Auto-Scaling",
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
    engagementModels: ["Cloud Migration Projects", "DevOps Enablement", "Managed Cloud (24/7)"],
  },
  {
    id: "delivery-models",
    category: "delivery",
    categoryLabel: "Delivery & Talent Solutions",
    icon: Zap,
    title: "Adaptive Delivery Solutions",
    tagline: "On-Premise Teams, Offshore Development Centers & Staff Augmentation",
    description:
      "Scale engineering capacity seamlessly with flexible engagement structures. Whether you need an Offshore Development Center (ODC), embedded on-premise experts, or on-demand tech talent, we adapt to your exact timeline and budget.",
    link: "/services/software-delivery-models",
    highlights: [
      "Offshore Development Centers (ODC) with Full Transparency",
      "On-Premise Engineering Teams for Maximum Security",
      "On-Demand IT Staff Augmentation across Niche Tech",
      "Agile Project Management with Transparent KPIs & SLAs",
    ],
    techStack: ["Agile/Scrum", "Dedicated ODC", "Hybrid Onshore/Offshore", "SLA Frameworks"],
    engagementModels: ["Dedicated ODC", "Staff Augmentation", "Managed Agile Squads"],
  },
];

const categoryFilters = [
  { id: "all", label: "All Services" },
  { id: "software", label: "Software Engineering" },
  { id: "ai", label: "AI & Intelligence" },
  { id: "security", label: "Cybersecurity" },
  { id: "cloud", label: "Cloud & Infra" },
  { id: "delivery", label: "Delivery Models" },
];

const faqs = [
  {
    question: "What technology services does SipraHub offer?",
    answer:
      "SipraHub offers software development, AI services and consulting, cloud and infrastructure, cybersecurity, and flexible software delivery solutions.",
  },
  {
    question: "Can SipraHub combine multiple services in one project?",
    answer:
      "Yes. A project can combine capabilities such as software development, AI, cloud, infrastructure, security, and consulting when the solution requires them.",
  },
  {
    question: "Does SipraHub provide custom software development?",
    answer:
      "Yes. SipraHub develops custom applications and can support modernization and AI integration based on business and technical requirements.",
  },
  {
    question: "Does SipraHub offer AI consulting?",
    answer:
      "Yes. AI advisory and consulting can help organizations identify use cases, assess readiness, prioritize opportunities, and plan implementation.",
  },
  {
    question: "Can SipraHub help with cloud migration?",
    answer:
      "Yes. SipraHub provides cloud setup, migration, infrastructure management, hosting, security, and optimization services.",
  },
  {
    question: "Does SipraHub provide cybersecurity services?",
    answer:
      "Yes. Cybersecurity services can support the protection of applications, infrastructure, data, access, and digital operations.",
  },
  {
    question: "Can SipraHub work with our existing technology stack?",
    answer:
      "SipraHub follows a technology-agnostic approach and can evaluate the existing environment before recommending an appropriate architecture and toolset.",
  },
  {
    question: "Can SipraHub modernize an existing application?",
    answer:
      "Yes. Modernization can include architecture improvements, application updates, cloud enablement, integrations, and the addition of AI capabilities where appropriate.",
  },
  {
    question: "What software delivery options are available?",
    answer:
      "SipraHub supports flexible delivery approaches including on-premise delivery, offshore development centers, and managed delivery.",
  },
  {
    question: "How should we choose the right service?",
    answer:
      "The right service depends on the business problem, existing systems, project scope, timeline, technical complexity, security requirements, and desired outcome.",
  },
];

const jsonLdServicesFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const ServicesHub = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <SEO
        title="AI-Powered IT Services & Enterprise Solutions | SipraHub"
        description="Explore SipraHub's full spectrum of enterprise IT & AI services: Custom Software Development, AI Solutions & Consulting, Cybersecurity, Cloud Infrastructure, and Adaptive Delivery Models."
        canonical="https://siprahub.com/services"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdServicesFaq)}</script>
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-[#1a1c23]/90 backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4 text-white/50 inline" />
                </li>
                <li className="text-white font-medium">Services</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <Badge
                variant="secondary"
                className="mb-6 bg-white/15 text-white border-white/30 font-semibold px-3.5 py-1.5 backdrop-blur-md inline-flex items-center gap-1.5"
              >
                <Sparkles className="h-4 w-4 text-orange-300" />
                <span>Enterprise Technology & AI Capabilities</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
                Comprehensive IT & AI Services Built for{" "}
                <span className="text-orange-300 underline decoration-orange-300/40 decoration-wavy decoration-2">
                  Sustainable Scale
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed mb-10 font-normal">
                Accelerate your digital evolution with SipraHub’s end-to-end technology suite. We unify custom software engineering, production AI systems, next-gen cybersecurity, cloud infrastructure, and flexible global delivery models.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Button
                  size="xl"
                  className="text-base sm:text-lg font-bold px-8 py-6 bg-white text-[#b91c1c] hover:bg-white/95 shadow-xl border-none transition-all duration-200"
                  asChild
                >
                  <a href="#services-grid">
                    Explore Capabilities
                    <ArrowRight className="ml-2.5 h-5 w-5 text-[#b91c1c]" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="text-base sm:text-lg font-semibold px-8 py-6 text-white border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-md"
                  asChild
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Quick Metrics / Value Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-white/20">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">6+</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Core Service Pillars</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">AI-First</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Engineering Approach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Zero-Trust</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Security & Compliance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">Flexible</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">ODC & On-Prem Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation / Filters */}
        <section id="services-grid" className="py-6 sm:py-10 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Service Catalog</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Filter services by domain or view the full suite</p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      activeFilter === filter.id
                        ? "bg-primary text-white shadow-md shadow-primary/20 font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards Grid */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary font-semibold">
                Explore What We Build
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tailored Capabilities for Every Stage of Growth
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Explore our full suite of technical specializations designed to help organizations modernize workflows, scale applications, and maintain ironclad security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="flex flex-col bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-primary via-primary-light to-orange-400 opacity-90 group-hover:h-2.5 transition-all duration-300" />
                    <CardContent className="p-7 flex-1 flex flex-col">
                      {/* Category & Icon */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                          <IconComponent className="h-7 w-7 stroke-[1.8]" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-muted text-xs font-semibold text-muted-foreground border-border/60"
                        >
                          {service.categoryLabel}
                        </Badge>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-4">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6 space-y-2.5 border-t border-border/60 pt-5 flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                          Key Capabilities:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="leading-snug text-foreground/90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">
                          Technologies & Frameworks:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium bg-muted/90 text-foreground px-2 py-0.5 rounded-md border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="pt-4 border-t border-border/60 mt-auto flex flex-col gap-2">
                        <Button
                          variant="default"
                          className="w-full font-semibold group-hover:bg-primary/90 transition-all justify-between"
                          asChild
                        >
                          <Link to={service.link}>
                            <span>Explore {service.title}</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        {service.externalLink && (
                          <a
                            href={service.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-center text-muted-foreground hover:text-primary pt-1 font-medium transition-colors"
                          >
                            Visit Specialized AI Portal &rarr;
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Functional Synergy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary font-semibold">
                Unified Transformation
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How Our Services Work Together
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Modern IT challenges rarely fit into single silos. We bridge custom engineering, intelligence, cybersecurity, and delivery into a unified execution framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/5 via-background to-muted p-8 rounded-2xl border border-primary/15 shadow-sm">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-5">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI + Custom Engineering</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We don't build disconnected prototypes. We integrate custom machine learning algorithms and LLM pipelines directly into robust, production-grade web and mobile architectures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-background to-muted p-8 rounded-2xl border border-primary/15 shadow-sm">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-5">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cloud + Zero-Trust Defense</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scalability without vulnerability. Every cloud architecture we deploy across AWS, Azure, or GCP is hardened with continuous penetration testing, automated telemetry, and SOC 2/ISO compliance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-background to-muted p-8 rounded-2xl border border-primary/15 shadow-sm">
                <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary mb-5">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Advisory + Adaptive Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From high-level strategic roadmap formulation to establishing your dedicated Offshore Development Center (ODC), we back executive guidance with vetted, on-demand engineering execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Delivery Methodology */}
        <section className="py-20 bg-muted/40 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary font-semibold">
                Our Proven Framework
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The 4-Stage Delivery Methodology
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Predictable, transparent, and structured for rapid time-to-market. Here is how we take ideas from discovery to enterprise deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm relative">
                <span className="text-4xl font-black text-primary/20 absolute top-4 right-5">01</span>
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Discover & Strategy</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Deep-dive technical assessment, architecture planning, requirement discovery, and ROI modeling.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Use Case Mapping</li>
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Architecture Blueprint</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm relative">
                <span className="text-4xl font-black text-primary/20 absolute top-4 right-5">02</span>
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Co-Create & Build</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Agile two-week sprints, continuous integration, AI model training, and automated unit testing.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Agile Sprint Execution</li>
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Continuous QA Testing</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm relative">
                <span className="text-4xl font-black text-primary/20 absolute top-4 right-5">03</span>
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Secure & Deploy</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Pre-release VAPT penetration testing, CI/CD pipeline automation, and multi-region cloud rollout.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Security Hardening</li>
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Zero-Downtime Rollout</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm relative">
                <span className="text-4xl font-black text-primary/20 absolute top-4 right-5">04</span>
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Scale & Optimize</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  24/7 reliability engineering, performance telemetry, proactive upgrades, and dedicated SLA support.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> 24/7 SRE Monitoring</li>
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Continuous Enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary font-semibold">
                Clear Answers
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base">
                Everything you need to know about partnering with SipraHub for IT and AI services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* High-Impact CTA Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Schedule a 30-minute discovery call with our solutions architects to discuss your technical requirements, architecture, or delivery team needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-bold px-8 py-6 bg-white text-[#b91c1c] hover:bg-white/90 shadow-xl border-none"
                asChild
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <span>Schedule Discovery Session</span>
                  <ArrowRight className="h-5 w-5 text-[#b91c1c] stroke-[2.5]" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto text-base sm:text-lg font-semibold px-8 py-6 text-white border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-md"
                asChild
              >
                <a href="https://ai.siprahub.com/our-work">Explore Our Work</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesHub;
