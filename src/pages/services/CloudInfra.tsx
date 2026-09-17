import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Server,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Settings,
  Users,
  Mail,
  FileText,
  Building,
  Lock,
  Monitor
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-bg.jpg";
import cloudImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const CloudInfra = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: "Cloud Setup & Migration",
      description: "Streamline your journey to the cloud with expert deployment across AWS, Azure, and Google Cloud Platform.",
      technologies: ["AWS", "Azure", "Google Cloud", "Cloud Architecture"]
    },
    {
      icon: Server,
      title: "On-Prem to Cloud Migration",
      description: "Secure and scalable transition from on-premises infrastructure to the cloud with minimal disruption.",
      technologies: ["Migration Strategy", "Data Transfer", "Application Migration", "Testing & Validation"]
    },
    {
      icon: Database,
      title: "Application Hosting",
      description: "High-performance hosting for web and mobile applications with secure server configurations.",
      technologies: ["Web Hosting", "Mobile Apps", "Server Management", "Performance Optimization"]
    },
    {
      icon: Mail,
      title: "Email Hosting",
      description: "Reliable, secure, and scalable email hosting solutions with advanced spam and threat protection.",
      technologies: ["Microsoft Exchange", "Google Workspace", "Zoho", "Custom Domains"]
    },
    {
      icon: FileText,
      title: "Office 365 Services",
      description: "Complete setup, configuration, and management of Microsoft Office 365 applications and services.",
      technologies: ["Teams", "OneDrive", "SharePoint", "Licensing Management"]
    },
    {
      icon: Shield,
      title: "Infrastructure Security",
      description: "Comprehensive security measures to protect your cloud infrastructure and data assets.",
      technologies: ["Security Architecture", "Access Control", "Monitoring", "Compliance"]
    }
  ];

  const whyChoose = [
    {
      title: "Multi-Platform Expertise",
      description: "Deep knowledge of AWS, Azure, GCP, and Microsoft ecosystems for optimal solution selection"
    },
    {
      title: "Tailored Solutions",
      description: "Customized strategies that align with your specific business goals and technical requirements"
    },
    {
      title: "Security First",
      description: "Robust security measures and compliance standards to protect your data and infrastructure"
    },
    {
      title: "24/7 Support",
      description: "Dedicated support and monitoring to ensure your systems run smoothly and efficiently"
    },
    {
      title: "Cost Optimization",
      description: "Strategic cost management to maximize ROI while maintaining performance and reliability"
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business and adapt to changing demands"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Assessment & Planning",
      duration: "2-3 weeks",
      description: "Comprehensive evaluation of your current infrastructure and development of migration strategy",
      items: ["Infrastructure audit", "Requirements analysis", "Migration planning", "Risk assessment"]
    },
    {
      step: "02",
      title: "Architecture Design",
      duration: "2-3 weeks",
      description: "Design scalable and secure cloud architecture tailored to your business needs",
      items: ["Architecture design", "Security planning", "Scalability planning", "Technology selection"]
    },
    {
      step: "03",
      title: "Migration & Setup",
      duration: "4-8 weeks",
      description: "Execute migration with minimal downtime and establish new cloud infrastructure",
      items: ["Data migration", "Application deployment", "Configuration setup", "Testing & validation"]
    },
    {
      step: "04",
      title: "Optimization",
      duration: "2-3 weeks",
      description: "Fine-tune performance, security, and costs for optimal operation",
      items: ["Performance tuning", "Security hardening", "Cost optimization", "Monitoring setup"]
    },
    {
      step: "05",
      title: "Ongoing Management",
      duration: "Ongoing",
      description: "Continuous monitoring, maintenance, and optimization of your cloud infrastructure",
      items: ["24/7 monitoring", "Regular maintenance", "Performance optimization", "Support & updates"]
    }
  ];

  const faqs = [
    {
      question: "What cloud infrastructure services does SipraHub provide?",
      answer:
        "SipraHub provides cloud setup and migration, on-premise to cloud migration, application hosting, email hosting, Microsoft 365 services, infrastructure security, monitoring, and infrastructure management.",
    },
    {
      question: "Which cloud platforms does SipraHub support?",
      answer:
        "SipraHub supports major platforms including AWS, Microsoft Azure, and Google Cloud Platform.",
    },
    {
      question: "Can SipraHub migrate on-premise infrastructure to the cloud?",
      answer:
        "Yes. SipraHub supports assessment, migration planning, data and application migration, configuration, testing, and validation.",
    },
    {
      question: "Can SipraHub host web and mobile applications?",
      answer:
        "Yes. SipraHub provides application hosting services that can include server management, secure configurations, and performance optimization.",
    },
    {
      question: "Does SipraHub provide email hosting services?",
      answer:
        "Yes. The cloud and infrastructure offering includes email hosting options involving platforms such as Microsoft Exchange, Google Workspace, and Zoho.",
    },
    {
      question: "Can SipraHub help with Microsoft 365?",
      answer:
        "Yes. SipraHub supports Microsoft 365 setup, configuration, management, Teams, OneDrive, SharePoint, and licensing management.",
    },
    {
      question: "How does SipraHub approach cloud security?",
      answer:
        "Security is considered across architecture, access control, monitoring, hardening, and relevant compliance requirements.",
    },
    {
      question: "Can SipraHub optimize cloud infrastructure costs?",
      answer:
        "Yes. Infrastructure usage and architecture can be assessed for cost optimization while considering performance, security, reliability, and scalability.",
    },
    {
      question: "Does SipraHub provide ongoing infrastructure management?",
      answer:
        "Yes. Ongoing services can include monitoring, maintenance, performance optimization, security updates, and technical support.",
    },
    {
      question: "What is SipraHub’s cloud migration process?",
      answer:
        "The published methodology covers assessment and planning, architecture design, migration and setup, optimization, and ongoing management.",
    },
  ];

  const jsonLdCloudFaq = {
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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cloud & Infrastructure Services | SipraHub"
        description="Build secure, scalable cloud and infrastructure foundations with SipraHub services for modern business environments."
        canonical="https://siprahub.com/services/cloud-infra"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdCloudFaq)}</script>
      </Helmet>
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
              Cloud & Infrastructure Services
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Harness the Power of{" "}
              <span className="text-orange-300">Cloud Technology</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              We empower businesses to seamlessly transition to the cloud, ensuring minimal disruption and maximum efficiency. Our comprehensive cloud and infrastructure services are designed to optimize performance, enhance security, and scale with your business needs.
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
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Cloud Migration", "Infrastructure Management", "Email Hosting", "Office 365", "Security"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cloud Infrastructure <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cloud and infrastructure services covering the full spectrum of modern cloud technologies and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-bounce w-fit mb-6">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {capability.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Cloud Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with cutting-edge cloud technologies to deliver infrastructure solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Infrastructure <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful cloud migration and infrastructure optimization with minimal disruption.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                        {phase.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {phase.title}
                        </h3>
                        <Badge variant="outline" className="w-fit">
                          {phase.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Quick answers to common questions about SipraHub's cloud and infrastructure services.
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

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your cloud transformation with SipraHub today! Get in touch with our experts for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Start Your Migration
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

export default CloudInfra;