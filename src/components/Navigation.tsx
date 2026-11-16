import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/siprahub-logo.png";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

type NavSection = {
  title: string;
  href?: string;
  items?: NavLink[];
};

// Sections with items render as a heading plus links; sections with only an href render as a single bold link.
const sipraAI: NavSection[] = [{
  title: "AI Transformation & Solutions",
  items: [
    { name: "AI Strategy & Business Consulting", href: "https://ai.siprahub.com/services/ai-strategy-consulting", external: true },
    { name: "AI Use Case Discovery", href: "https://ai.siprahub.com/services/ai-use-case-discovery", external: true },
    { name: "AI/ML Development", href: "https://ai.siprahub.com/services/ai-ml-development", external: true },
    { name: "Generative AI & LLM Solutions", href: "https://ai.siprahub.com/services/generative-ai-llm", external: true },
    { name: "AI-Powered Software Development", href: "https://ai.siprahub.com/services/ai-powered-software", external: true },
    { name: "MLOps & AI Infrastructure", href: "https://ai.siprahub.com/services/mlops-infrastructure", external: true },
    { name: "Packaged AI Solutions", href: "https://ai.siprahub.com/services/packaged-solutions", external: true }
  ]
}, {
  title: "Enterprise AI Training",
  items: [
    { name: "AI Training", href: "https://ai.siprahub.com/services/ai-academy", external: true },
    { name: "Claude Training", href: "https://ai.siprahub.com/claude-training", external: true }
  ]
}, {
  title: "AI Assessment",
  href: "https://ai.siprahub.com/assessment"
}, {
  title: "Our Approach",
  href: "https://ai.siprahub.com/approach"
}];

const technologyServices: NavLink[] = [{
  name: "Software Development",
  href: "/services/software-development"
}, {
  name: "Cybersecurity",
  href: "/services/cybersecurity"
}, {
  name: "Cloud & Infrastructure",
  href: "/services/cloud-infra"
}, {
  name: "Adaptive Delivery Solutions",
  href: "/services/software-delivery-models"
}];

const productsAndPlatforms: NavLink[] = [
  { name: "AIRIS – AI Recruitment Platform", href: "https://ai.siprahub.com/our-work/airis-ai-recruitment-platform", external: true },
  { name: "SipraOne – AI Employee Intranet Portal", href: "https://ai.siprahub.com/our-work/sipraone", external: true },
  { name: "NeuroAssist – 24/7 Clinic Digital Assistant", href: "https://ai.siprahub.com/our-work/digital-assistant-clinic", external: true },
  { name: "AI Service Desk Co-pilot for Insurance", href: "https://ai.siprahub.com/our-work/ai-service-desk-copilot", external: true },
  { name: "AI-Powered Learning Management System", href: "https://ai.siprahub.com/our-work/learning-management-system-antigravity", external: true },
  { name: "Editorial Workflow Operations Platform", href: "https://ai.siprahub.com/our-work/editorial-workflow", external: true },
  { name: "Enterprise Workforce Delivery & Billing Platform", href: "https://ai.siprahub.com/our-work/enterprise-workforce-delivery-billing-platform", external: true },
  { name: "PanelQ – AI IT Operations & Decision Intelligence Platform", href: "https://ai.siprahub.com/our-work/paneiq", external: true },
  { name: "Effecta® – Building a Connected Go-To-Market Foundation", href: "https://ai.siprahub.com/our-work/effecta-gtm-foundation", external: true }
];

// Thought Leadership and Newsletters have no pages yet, so they point at the Coming Soon page.
const knowledgeHub: NavLink[] = [
  { name: "Blogs & Articles", href: "https://ai.siprahub.com/blog", external: true },
  { name: "Thought Leadership", href: "/coming-soon" },
  { name: "Newsletters", href: "/coming-soon" },
  { name: "Research & Reports", href: "/resources" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services/");
  const isKnowledgeHubActive = location.pathname.startsWith("/resources");

  const desktopLinkClass = (active: boolean) => `text-sm font-medium transition-smooth pb-1 border-b-2 ${active ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`;
  const mobileLinkClass = "block text-sm font-medium text-foreground hover:text-primary transition-smooth";
  const mobileSubLinkClass = "block pl-4 text-sm text-foreground hover:text-primary transition-smooth";
  const closeMenu = () => setIsOpen(false);

  const renderDropdownItems = (items: NavLink[]) => items.map(item => <DropdownMenuItem key={item.name} asChild>
    {item.external ? <a href={item.href} className="w-full">{item.name}</a> : <Link to={item.href} className="w-full">{item.name}</Link>}
  </DropdownMenuItem>);

  const renderMobileSubLinks = (items: NavLink[]) => items.map(item => item.external ? <a key={item.name} href={item.href} className={mobileSubLinkClass} onClick={closeMenu}>
      {item.name}
    </a> : <Link key={item.name} to={item.href} className={mobileSubLinkClass} onClick={closeMenu}>
      {item.name}
    </Link>);

  return <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center h-24 overflow-hidden">
          <img src={logo} alt="SipraHub" className="w-auto object-contain" style={{ height: '50px' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className={desktopLinkClass(isActive("/"))}>
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 ${desktopLinkClass(false)}`}>
              Sipra AI <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 max-h-[80vh] overflow-y-auto">
              {sipraAI.map((section, index) => <div key={section.title}>
                {index > 0 && <DropdownMenuSeparator />}
                {section.items ? <>
                  <DropdownMenuLabel className="text-primary">{section.title}</DropdownMenuLabel>
                  {renderDropdownItems(section.items)}
                </> : <DropdownMenuItem asChild>
                  <a href={section.href} className="w-full font-semibold text-primary">{section.title}</a>
                </DropdownMenuItem>}
              </div>)}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 ${desktopLinkClass(isServicesActive)}`}>
              Technology Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {renderDropdownItems(technologyServices)}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 ${desktopLinkClass(false)}`}>
              Products & Platforms <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
              {renderDropdownItems(productsAndPlatforms)}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 ${desktopLinkClass(isKnowledgeHubActive)}`}>
              Knowledge Hub <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {renderDropdownItems(knowledgeHub)}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className={desktopLinkClass(isActive("/about"))}>
            About
          </Link>

          <a href="https://ai.siprahub.com/contact" className={desktopLinkClass(false)}>
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 min-h-[44px] min-w-[44px] border border-primary/20" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden py-4 space-y-4 border-t border-border">
        <Link to="/" className={mobileLinkClass} onClick={closeMenu}>
          Home
        </Link>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground">Sipra AI</span>
          {sipraAI.map(section => section.items ? <div key={section.title} className="space-y-2">
              <span className="block pl-4 text-sm font-semibold text-primary">{section.title}</span>
              <div className="pl-4">{renderMobileSubLinks(section.items)}</div>
            </div> : <a key={section.title} href={section.href} className="block pl-4 text-sm font-semibold text-primary" onClick={closeMenu}>
              {section.title}
            </a>)}
        </div>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground">Technology Services</span>
          {renderMobileSubLinks(technologyServices)}
        </div>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground">Products & Platforms</span>
          {renderMobileSubLinks(productsAndPlatforms)}
        </div>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground">Knowledge Hub</span>
          {renderMobileSubLinks(knowledgeHub)}
        </div>

        <Link to="/about" className={mobileLinkClass} onClick={closeMenu}>
          About
        </Link>

        <a href="https://ai.siprahub.com/contact" className={mobileLinkClass} onClick={closeMenu}>
          Contact Us
        </a>
      </div>}
    </div>
  </nav>;
};
export default Navigation;
