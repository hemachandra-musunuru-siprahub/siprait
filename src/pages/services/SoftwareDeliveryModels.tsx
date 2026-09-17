import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Building2, Globe, Users, CheckCircle, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const SoftwareDeliveryModels = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Scalable Team Structures",
      description: "Onshore, nearshore, and offshore delivery models that scale efficiently and balance cost with performance"
    },
    {
      icon: Users,
      title: "Skilled Talent On Demand",
      description: "Permanent, contract, and contract-to-hire IT talent designed to fit your exact business needs"
    },
    {
      icon: Target,
      title: "Agile Project Management",
      description: "Flexible project management methodologies that adapt to your timeline and deliver results efficiently"
    }
  ];

  const deliveryModels = [
    {
      icon: Building2,
      title: "On-Premise Delivery",
      subtitle: "Secure, High-Performance In-House Teams",
      description: "Access a dedicated team of experts who work directly within your infrastructure, ensuring maximum security and a seamless integration with your existing environment.",
      features: [
        {
          icon: Users,
          title: "Dedicated Expertise",
          description: "Deploy a team of specialists to work on-site, providing direct collaboration and high-performance delivery."
        },
        {
          icon: Shield,
          title: "Enhanced Security",
          description: "Maintain full control over your data and infrastructure with a secure, on-premise development model."
        },
        {
          icon: CheckCircle,
          title: "Seamless Collaboration",
          description: "Foster close communication and real-time problem-solving with your in-house team."
        }
      ]
    },
    {
      icon: Globe,
      title: "Offshore Development Centers (ODC)",
      subtitle: "Cost-Effective & Transparent Offshore Operations",
      description: "Benefit from a dedicated offshore team that provides a transparent, efficient, and cost-effective extension of your in-house capabilities.",
      features: [
        {
          icon: Target,
          title: "Optimized Costs",
          description: "Reduce operational overhead with a highly skilled, cost-effective team."
        },
        {
          icon: CheckCircle,
          title: "Full Transparency",
          description: "Maintain real-time oversight of your project's progress and performance."
        },
        {
          icon: Zap,
          title: "Scalable Resources",
          description: "Easily scale your team up or down based on project needs."
        }
      ]
    },
    {
      icon: Clock,
      title: "Managed Delivery",
      subtitle: "End-to-End Managed Software Development",
      description: "We take full ownership of your project, providing end-to-end oversight from concept to completion to ensure timely delivery and quality outcomes.",
      features: [
        {
          icon: Users,
          title: "Comprehensive Oversight",
          description: "Our experts manage all aspects of the project, allowing you to focus on your core business."
        },
        {
          icon: CheckCircle,
          title: "Quality Assurance",
          description: "We guarantee high-quality results through a rigorous process of continuous monitoring and quality control."
        },
        {
          icon: Clock,
          title: "Timely Outcomes",
          description: "Our disciplined approach ensures your project is delivered on schedule and within budget."
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "What are software delivery models?",
      answer:
        "Software delivery models define how teams, responsibilities, project scope, collaboration, timelines, and delivery ownership are structured.",
    },
    {
      question: "What delivery models does SipraHub offer?",
      answer:
        "SipraHub describes on-premise delivery, offshore development centers, and managed delivery as flexible delivery options.",
    },
    {
      question: "What is on-premise delivery?",
      answer:
        "On-premise delivery places dedicated experts within the client environment to support secure and direct collaboration.",
    },
    {
      question: "What is an offshore development center?",
      answer:
        "An offshore development center provides a dedicated or scalable remote team structure designed to support ongoing software development needs.",
    },
    {
      question: "What is managed delivery?",
      answer:
        "Managed delivery gives the delivery partner broader end-to-end responsibility for executing the agreed project scope and managing delivery.",
    },
    {
      question: "How do I choose the right delivery model?",
      answer:
        "The choice depends on scope, timeline, budget, security requirements, desired control, collaboration needs, and the amount of delivery ownership required.",
    },
    {
      question: "Can SipraHub recommend a delivery model for our project?",
      answer:
        "Yes. SipraHub can assess project requirements, priorities, timelines, and technical needs to help identify an appropriate engagement approach.",
    },
    {
      question: "Can the delivery model change as the project evolves?",
      answer:
        "The engagement approach can be reviewed as project scope, priorities, team requirements, or business needs change.",
    },
    {
      question: "Are these models suitable for long-term development?",
      answer:
        "Yes. Depending on the requirement, delivery structures can support defined projects as well as longer-term development initiatives.",
    },
    {
      question: "How does SipraHub maintain collaboration during delivery?",
      answer:
        "SipraHub emphasizes structured collaboration, visibility, regular communication, and alignment between technical teams and business stakeholders.",
    },
  ];

  const jsonLdDeliveryFaq = {
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
        title="Software Delivery Models | SipraHub"
        description="Explore flexible software delivery models from SipraHub for building, scaling and supporting technology initiatives."
        canonical="https://siprahub.com/services/software-delivery-models"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdDeliveryFaq)}</script>
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
              Adaptive Delivery Solutions
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Adaptive Delivery Solutions{" "}
              <span className="text-orange-300">for Every Need</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Choose from our comprehensive range of delivery models designed to meet your specific requirements, budget, and timeline. From on-premise teams to offshore development centers, we provide the perfect solution for your software development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Choose Your Model
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Model Highlights */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Adaptive Delivery <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our adaptive delivery solutions are designed to adapt to your business needs, providing the right mix of expertise, cost-effectiveness, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group text-center">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-muted w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Delivery <span className="text-primary">Models</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the delivery model that best fits your project requirements, team structure, and business objectives.
            </p>
          </div>

          <div className="space-y-16">
            {deliveryModels.map((model, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="p-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mr-4">
                          <model.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {model.title}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {model.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {model.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="p-2 rounded-full bg-muted w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                            <feature.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
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
              Quick answers to common questions about SipraHub's software delivery models and engagement structures.
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
            Ready to Choose Your Delivery Model?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your digital transformation with SipraHub today! Get in touch with our experts for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Get Started Today
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

export default SoftwareDeliveryModels;
