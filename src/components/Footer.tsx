import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github, MapPin } from "lucide-react";
import logo from "@/assets/siprahub-logo.png";

const Footer = () => {
  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Solutions", href: "/services/ai-services" },
    { name: "AI Advisory & Consulting", href: "/services/ai-advisory-consulting" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Cloud & Infrastructure", href: "/services/cloud-infra" },
    { name: "Adaptive Delivery Solutions", href: "/services/software-delivery-models" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <footer className="text-white bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for AI-driven digital transformation,
              delivering innovative solutions that drive measurable business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/siprahub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/SipraHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white/60 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  SipraHub Inc<br />
                  16192 COASTAL HWY, LEWES,<br />
                  Delaware 19958
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white/60 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  SipraHub<br />
                  8th Floor, Tower 3B, BCIT, Bhartiya City,<br />
                  Thanisandra Main Road, Bengaluru, 560064
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">contact@siprahub.com</span>
              </div>
            </div>
            <Button variant="default" size="lg" className="mt-6 w-full text-lg font-semibold px-6 py-3 border border-white/30 shadow-lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2026 SipraHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-white/80 text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white/80 text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;