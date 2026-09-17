import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, RefreshCcw, Building, CheckCircle, ArrowRight, Settings, Shield, Users, Sparkles, HelpCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import SEO from "@/components/SEO";

const SoftwareDevelopment = () => {
  const capabilities = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Transform your vision into reality with custom-built solutions designed specifically for your business needs.",
      technologies: ["Web Applications", "Mobile Apps", "Enterprise Systems", "AI Integration"]
    },
    {
      icon: Building,
      title: "Domain-Specific Solutions",
      description: "Receive bespoke software tailored to the unique challenges and workflows of your industry, including Healthcare, Logistics, and E-commerce.",
      technologies: ["Healthcare", "Logistics", "E-commerce", "Finance"]
    },
    {
      icon: Settings,
      title: "Technology-Optimized Development",
      description: "We engineer high-performance applications that are secure by design, using a modern and optimal technology stack to ensure scalability and reliability.",
      technologies: ["Scalable Architecture", "Secure Coding", "Modern Tech Stack", "Performance Optimization"]
    },
    {
      icon: RefreshCcw,
      title: "Legacy Modernization",
      description: "Revitalize your existing infrastructure with modern technologies like AI, cloud computing, and microservices to unlock new capabilities and improve performance.",
      technologies: ["Cloud Migration", "Microservices", "AI Integration", "System Re-engineering"]
    },
  ];

  const whyChoose = [
    {
      title: "On-Premise Delivery",
      description: "Access a dedicated team of experts who work directly within your infrastructure, ensuring maximum security and a seamless integration with your existing environment"
    },
    {
      title: "Offshore Development Centers",
      description: "Benefit from a dedicated offshore team that provides a transparent, efficient, and cost-effective extension of your in-house capabilities"
    },
    {
      title: "Skilled Talent On Demand",
      description: "Permanent, contract, and contract-to-hire IT talent designed to fit your exact business needs"
    },
    {
      title: "Scalable Team Structures",
      description: "Onshore, nearshore, and offshore delivery models that scale efficiently and balance cost with performance"
    },
    {
      title: "End-to-End Project Management",
      description: "Full-spectrum project management from strategic planning to post-launch support"
    },
    {
      title: "AI-Driven Innovation",
      description: "Integrate cutting-edge AI technologies to enhance your software solutions and business processes"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Requirements Analysis",
      duration: "2-3 weeks",
      description: "Deep dive into your specific needs, data, and technical requirements",
      items: ["Use case definition", "Technical architecture", "Performance requirements", "Security assessment"]
    },
    {
      step: "02",
      title: "Design & Architecture",
      duration: "3-4 weeks",
      description: "Create scalable, secure, and maintainable system architecture",
      items: ["System design", "Technology selection", "Security planning", "Scalability planning"]
    },
    {
      step: "03",
      title: "Development & Testing",
      duration: "8-16 weeks",
      description: "Agile development with continuous testing and quality assurance",
      items: ["Agile development", "Continuous testing", "Code reviews", "Performance optimization"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      duration: "2-3 weeks",
      description: "Seamless deployment with ongoing maintenance and support",
      items: ["Production deployment", "Monitoring setup", "Documentation", "Training & support"]
    },
    {
      step: "05",
      title: "Maintenance & Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring, optimization, and feature enhancements",
      items: ["Performance monitoring", "Bug fixes", "Feature updates", "Technical support"]
    }
  ];

  const faqs = [
    {
      question: "What types of custom software does SipraHub develop?",
      answer:
        "SipraHub designs and builds custom cloud-native web applications, mobile platforms, enterprise management systems, API microservices, and AI-enabled software tailored to your specific business workflows and operational goals.",
    },
    {
      question: "How do you integrate AI capabilities into custom software?",
      answer:
        "We embed intelligent features such as conversational assistants, predictive analytics, automated document parsing, semantic search, and machine learning models directly into your application architecture and user interfaces.",
    },
    {
      question: "Can you modernize our existing legacy applications?",
      answer:
        "Yes. We revitalize legacy systems through cloud migration, microservices re-architecting, database optimization, API modernization, and AI integration to improve performance, security, and scalability without operational disruption.",
    },
    {
      question: "What software development methodologies do you follow?",
      answer:
        "We support Agile (Scrum/Kanban), Waterfall, Test-Driven Development (TDD), and custom hybrid delivery models, aligning our methodology with your project complexity, compliance requirements, and release cadence.",
    },
    {
      question: "How do we get started with a software development project?",
      answer:
        "Engagements begin with a discovery consultation to evaluate your business goals, technical requirements, user workflows, and timelines. From there, we define a clear scope, system architecture, milestones, and resource plan.",
    },
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Software Development | SipraHub"
        description="Explore flexible software delivery models from SipraHub for building, scaling and supporting technology initiatives."
        canonical="https://siprahub.com/services/software-development"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
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
              Software Development
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Software Development Services{" "}
              <span className="text-orange-300">Building Your AI-Powered Vision</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Transform your business with innovative, scalable, and secure software solutions that leverage cutting-edge AI technology to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Custom Development", "Legacy Modernization", "Cloud Migration", "AI Integration", "Security"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Software Development <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services covering the full spectrum of modern application development and system integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-6">
                  <div className="p-2 rounded-lg bg-muted group-hover:scale-110 transition-bounce w-fit mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {capability.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
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

      {/* Why Choose Our Software Development */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Software Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with cutting-edge technology to deliver software solutions that exceed expectations.
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

      {/* Development Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Methodology
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
              Proven Process for Innovation and Scalability
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Our systematic approach ensures every project delivers exceptional results through proven methodologies and cutting-edge technology integration.
            </p>
            <div className="mb-12">
              <a
                href="/contact"
                className="text-primary underline hover:text-primary/80 transition-colors text-lg font-medium"
              >
                Experience AI-powered project success with SipraHub!
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-bounce" style={{ backgroundColor: '#ce2124' }}>
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Waterfall
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured planning methodology for predictable, compliance-heavy projects requiring comprehensive documentation and sequential development phases
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-bounce" style={{ backgroundColor: '#ce2124' }}>
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Agile Frameworks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Iterative, AI-supported Scrum, Scrumban, and Kanban delivery approaches for flexible, responsive development cycles
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-bounce" style={{ backgroundColor: '#ce2124' }}>
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Test-Driven Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-driven testing methodologies ensuring superior code quality, reliability, and continuous integration throughout the development lifecycle
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-bounce" style={{ backgroundColor: '#ce2124' }}>
                  4
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Custom Hybrid Models
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tailored workflow combinations integrating AI capabilities with Agile and Waterfall methodologies for optimal project outcomes
                </p>
              </CardContent>
            </Card>
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
              Quick answers to common questions about SipraHub's custom software development services and delivery approach.
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your digital transformation with SipraHub today! Get in touch with our experts for a free consultation.
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

export default SoftwareDevelopment;