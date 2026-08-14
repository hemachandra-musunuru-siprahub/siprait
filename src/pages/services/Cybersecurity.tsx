import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Shield,
  Search,
  Zap,
  Cloud,
  Network,
  Smartphone,
  Globe,
  Brain,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  Database,
  Monitor,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";
import SEO from "@/components/SEO";

const Cybersecurity = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Security & Assurance",
      description: "Comprehensive AI security services including workshops, risk assessments, red teaming, and technology deployment to secure AI systems and ensure compliance.",
      technologies: ["AI Security Workshops", "Risk & Preparedness Assessments", "AI Red Teaming", "GenAI/LLM Security", "AI Security Tech Deployment"]
    },
    {
      icon: Search,
      title: "Security Testing & Assurance",
      description: "Comprehensive security testing including cyber posture visibility, application security testing, and advanced red teaming to strengthen defenses across all systems.",
      technologies: ["Cyber Posture Visibility", "Quick Scans", "Application Security Testing", "Advanced Red Teaming", "Stress Testing"]
    },
    {
      icon: Zap,
      title: "Red Team / Adversary Emulation",
      description: "Advanced attack simulation and cooperative testing including multi-stage attack campaigns, purple team exercises, and collaborative defense testing to strengthen security posture.",
      technologies: ["Adversary Emulation", "Multi-stage Attack Campaigns", "Purple Team Testing", "Defense Posture Testing", "Collaborative Security"]
    },
    {
      icon: Cloud,
      title: "Cloud Security & DevSecOps",
      description: "Comprehensive cloud-native security including container security, serverless security, secure CI/CD pipelines, and infrastructure as code scanning across cloud, hybrid, and on-premises environments.",
      technologies: ["Container Security", "Serverless Security", "Secure CI/CD Pipelines", "Infrastructure as Code Scanning", "Cloud Security Architecture", "Data Encryption"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with firewalls, VPNs, and intrusion detection systems.",
      technologies: ["Firewall Management", "VPN Solutions", "Intrusion Detection", "Network Monitoring"]
    },
    {
      icon: Smartphone,
      title: "Strategic & Talent Consulting",
      description: "Access top-tier virtual CISOs, AI architects, and SOC experts to augment teams, provide strategic leadership, and address critical cybersecurity talent gaps.",
      technologies: ["vCISO Consulting", "Experts on Demand", "Cybersecurity Staffing", "Strategic Leadership", "Talent Solutions"]
    }
  ];

  const whyChoose = [
    {
      title: "AI-Enhanced Security",
      description: "Advanced AI-powered threat detection and automated response systems for proactive protection"
    },
    {
      title: "Comprehensive Coverage",
      description: "Full-spectrum security services covering all aspects of your digital infrastructure"
    },
    {
      title: "Industry Expertise",
      description: "Deep knowledge of security frameworks, compliance standards, and emerging threats"
    },
    {
      title: "Scalable & Cost-Efficient",
      description: "High automation reduces staffing needs, lowering operational costs"
    },
    {
      title: "Compliance Focus",
      description: "Ensuring adherence to industry regulations and security standards"
    },
    {
      title: "Proactive Approach",
      description: "Preventive security measures and continuous threat intelligence to stay ahead of attackers"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Security Assessment",
      duration: "2-3 weeks",
      description: "Comprehensive evaluation of your current security posture and vulnerability identification",
      items: ["Vulnerability scanning", "Risk assessment", "Compliance audit", "Security gap analysis"]
    },
    {
      step: "02",
      title: "Strategy Development",
      duration: "2-3 weeks",
      description: "Creating comprehensive security strategies tailored to your specific needs and risks",
      items: ["Security roadmap", "Policy development", "Technology selection", "Implementation planning"]
    },
    {
      step: "03",
      title: "Implementation",
      duration: "4-8 weeks",
      description: "Deploying security solutions and establishing monitoring and response capabilities",
      items: ["Solution deployment", "Security configuration", "Monitoring setup", "Staff training"]
    },
    {
      step: "04",
      title: "Testing & Validation",
      duration: "2-3 weeks",
      description: "Comprehensive testing of security measures and validation of effectiveness",
      items: ["Penetration testing", "Security validation", "Performance testing", "Compliance verification"]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity Services | SipraHub"
        description="Strengthen your business with SipraHub cybersecurity services designed to improve security, resilience and risk management."
        canonical="https://siprahub.com/services/cybersecurity"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cybersecurityImage})`,
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
              Cybersecurity Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Next-Gen Cybersecurity{" "}
              <span className="text-orange-300">with AI</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Our next-gen cybersecurity services combine AI-driven automation, advanced testing, expert consulting, and innovative security tools to help organizations strengthen their defenses, reduce risks, and stay resilient in an AI-first world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Security Assessment
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["AI Security", "Penetration Testing", "Incident Response", "Cloud Security", "Compliance"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cybersecurity <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity services covering the full spectrum of digital protection and threat management.
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

      {/* Why Choose Our Cybersecurity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with advanced AI technology to deliver cybersecurity solutions that protect your business.
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

      {/* Security Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Security <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven security methodology ensures comprehensive protection and continuous improvement of your cybersecurity posture.
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


      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your cybersecurity transformation with SipraHub today! Get in touch with our experts for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Get Security Assessment
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

export default Cybersecurity;