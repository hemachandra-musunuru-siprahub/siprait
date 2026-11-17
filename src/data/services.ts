import { Code, Brain, Users, Shield, Zap, LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  link: string;
}

export const services: ServiceItem[] = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom applications, legacy modernization, and scalable solutions with AI integration.",
    features: [
      "Domain-Agnostic Expertise",
      "Technology-Agnostic Solutions",
      "On-Prem & ODC Setup"
    ],
    link: "/services/software-development"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI development, machine learning models, intelligent automation solutions, and strategic AI consulting.",
    features: [
      "Custom ML Models",
      "Computer Vision & NLP",
      "AI Strategy & Consulting"
    ],
    link: "/services/ai-services"
  },
  {
    icon: Brain,
    title: "AI Advisory & Consulting",
    description: "Strategic AI advisory and consulting to help organizations navigate AI transformation and maximize ROI.",
    features: [
      "AI Strategy & Roadmap",
      "Technology Assessment",
      "Change Management"
    ],
    link: "/services/ai-advisory-consulting"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "AI-enhanced threat detection, vulnerability assessments, and comprehensive security solutions.",
    features: [
      "AI-Driven Security Assessment",
      "Penetration Testing & VAPT",
      "Cloud Security"
    ],
    link: "/services/cybersecurity"
  },
  {
    icon: Zap,
    title: "Adaptive Delivery Solutions",
    description: "Flexible delivery models including on-premise, nearshore, and offshore teams tailored to your needs.",
    features: [
      "Scalable Team Structures",
      "Skilled Talent On Demand",
      "Agile Project Management"
    ],
    link: "/services/software-delivery-models"
  }
];

/** Homepage shows the 3 technology services, in the same order as the navbar menu */
export const homepageServices: ServiceItem[] = [
  services[3], // Cybersecurity
  services[0], // Software Development
  services[4]  // Adaptive Delivery Solutions
];
