import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const contactFaqs = [
  {
    question: "How can I contact SipraHub about a project?",
    answer:
      "Use the consultation form on the Contact page to share your company information, service interest, project description, and preferred contact time.",
  },
  {
    question: "Can I contact SipraHub if I am not sure which service I need?",
    answer:
      "Yes. Describe the business problem and current situation so the initial discussion can help identify an appropriate service direction.",
  },
  {
    question: "What should I include in my project description?",
    answer:
      "Include the business problem, current workflow or system, desired outcome, known technical requirements, users, and any important timeline or constraints.",
  },
  {
    question: "Does SipraHub offer an initial consultation?",
    answer:
      "Yes. SipraHub’s Contact page offers a free initial consultation to understand requirements and explore possible solutions.",
  },
  {
    question: "What services can I ask about through the contact form?",
    answer:
      "You can discuss requirements related to AI, software development, cloud and infrastructure, cybersecurity, consulting, and other listed SipraHub services.",
  },
  {
    question: "Where is SipraHub’s India office?",
    answer:
      "SipraHub lists its India office in Bengaluru, Karnataka.",
  },
  {
    question: "Does SipraHub have a US office?",
    answer:
      "Yes. SipraHub lists a US office in Lewes, Delaware.",
  },
  {
    question: "Can I discuss an AI transformation project with SipraHub?",
    answer:
      "Yes. The consultation process can be used to discuss AI opportunities, current challenges, implementation needs, and potential next steps.",
  },
  {
    question: "Can I contact SipraHub about an existing system that needs improvement?",
    answer:
      "Yes. Share information about the existing system, current challenges, desired improvements, and relevant technical context for an initial assessment.",
  },
  {
    question: "What happens after I submit the contact form?",
    answer:
      "The information provides SipraHub with context for the inquiry so the team can follow up and discuss the requirement in more detail.",
  },
];

const jsonLdContactFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact SipraHub | Talk to Our Team"
        description="Contact SipraHub to discuss your technology, digital transformation or AI requirements with our team."
        canonical="https://siprahub.com/contact"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdContactFaq)}</script>
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-14 overflow-hidden">
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
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/40 font-semibold">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Let's Build and{" "}
              <span className="text-orange-300">Scale Together</span>
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Start your AI-driven transformation with SipraHub today! Get in touch with our experts for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

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
              Quick answers to common questions about contacting SipraHub, initial consultations, and project kickoffs.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {contactFaqs.map((faq, index) => (
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

      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey with SipraHub today! Get in touch with our team to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers#career-categories" className="text-white">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/careers/apply" className="text-white">
                Send Your Resume
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <a href="mailto:contact@siprahub.com" className="hover:text-white underline underline-offset-2 transition-colors">
              contact@siprahub.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;