import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/siprahub-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services/");
  const services = [{
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
  return <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center h-24 overflow-hidden">
          <img src={logo} alt="SipraHub" className="w-auto object-contain" style={{ height: '50px' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium transition-smooth pb-1 border-b-2 ${isActive("/") ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium transition-smooth pb-1 border-b-2 ${isActive("/about") ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-smooth pb-1 border-b-2 ${isServicesActive ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {/* Software Development first */}
              <DropdownMenuItem asChild>
                <Link to="/services/software-development" className="w-full">
                  Software Development
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="https://ai.siprahub.com" className="w-full">
                  AI Services
                </a>
              </DropdownMenuItem>
                
                {/* Other services */}
              {services.filter(service => service.name !== "Software Development").map(service => <DropdownMenuItem key={service.href} asChild>
                <Link to={service.href} className="w-full">
                  {service.name}
                </Link>
              </DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/case-studies" className={`text-sm font-medium transition-smooth pb-1 border-b-2 ${isActive("/case-studies") ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
            Case Studies
          </Link>
          <Link to="/careers" className={`text-sm font-medium transition-smooth pb-1 border-b-2 ${isActive("/careers") ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
            Careers
          </Link>
          <Link to="/contact" className={`text-sm font-medium transition-smooth pb-1 border-b-2 ${isActive("/contact") ? "text-primary border-primary" : "text-foreground hover:text-primary border-transparent"}`}>
            Contact
          </Link>

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
        <Link to="/" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
          About Us
        </Link>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-muted-foreground">Services</span>

          {/* Software Development first */}
          <Link to="/services/software-development" className="block pl-4 text-sm text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
            Software Development
          </Link>

          <a href="https://ai.siprahub.com" className="block pl-4 text-sm text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
            AI Services
          </a>

          {/* Other services */}
          {services.filter(service => service.name !== "Software Development").map(service => <Link key={service.href} to={service.href} className="block pl-4 text-sm text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
            {service.name}
          </Link>)}
        </div>

        <Link to="/case-studies" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
          Case Studies
        </Link>
        <Link to="/careers" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
          Careers
        </Link>
        <Link to="/contact" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>}
    </div>
  </nav>;
};
export default Navigation;