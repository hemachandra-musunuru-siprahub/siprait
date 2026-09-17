// SipraHub IT Services Website Homepage

import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import DeliveryModelsSummary from "@/components/DeliveryModelsSummary";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const homeFaqs = [
  {
    question: "What does SipraHub do?",
    answer:
      "SipraHub helps businesses plan, build, and scale AI-driven digital solutions through software development, AI services and consulting, cloud and infrastructure, cybersecurity, and flexible delivery models.",
  },
  {
    question: "What types of AI solutions does SipraHub provide?",
    answer:
      "SipraHub supports custom AI development, machine learning solutions, intelligent automation, AI-enabled applications, and strategic AI consulting based on specific business requirements.",
  },
  {
    question: "Can SipraHub build custom solutions for our business?",
    answer:
      "Yes. SipraHub focuses on tailored solutions designed around the organization’s workflows, systems, technical requirements, and business goals.",
  },
  {
    question: "Does SipraHub provide both AI consulting and implementation?",
    answer:
      "Yes. SipraHub can support early-stage discovery and AI strategy as well as solution design, development, integration, and implementation.",
  },
  {
    question: "Can SipraHub integrate AI into existing software?",
    answer:
      "Yes. Where technically appropriate, AI capabilities can be integrated into existing applications, workflows, APIs, databases, and enterprise systems.",
  },
  {
    question: "Does SipraHub provide non-AI technology services?",
    answer:
      "Yes. In addition to AI services, SipraHub provides software development, cloud and infrastructure, cybersecurity, and software delivery services.",
  },
  {
    question: "Which industries can SipraHub support?",
    answer:
      "SipraHub takes a domain-agnostic approach and can tailor technology solutions to industries such as healthcare, fintech, and other business sectors.",
  },
  {
    question: "Can SipraHub support a project from idea to deployment?",
    answer:
      "Yes. Depending on the engagement, SipraHub can support discovery, planning, architecture, development, testing, deployment, and ongoing improvement.",
  },
  {
    question: "How do I know which SipraHub service is right for my project?",
    answer:
      "Start with the business problem, current systems, desired outcome, timeline, and constraints. SipraHub can use this information to recommend an appropriate service or combination of services.",
  },
  {
    question: "How can I start a project with SipraHub?",
    answer:
      "You can begin by contacting SipraHub for an initial consultation and sharing your business challenge, project requirements, and desired outcomes.",
  },
];

const jsonLdHomeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Transformation & Technology Services | SipraHub"
        description="SipraHub helps businesses transform with AI, custom software, cloud and cybersecurity solutions—from strategy and development to implementation and scale."
        canonical="https://siprahub.com"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdHomeFaq)}</script>
      </Helmet>

      <Navigation />
      <div className="mb-0">
        <HeroSection />
      </div>
      <div className="mt-0">
        <ServicesOverview />
      </div>
      <KeyFeaturesSection />
      <DeliveryModelsSummary />
      <AboutSection />

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
              Quick answers to common questions about SipraHub's services, capabilities, and approach.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {homeFaqs.map((faq, index) => (
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

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
