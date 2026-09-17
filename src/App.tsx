import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Cybersecurity from "./pages/services/Cybersecurity";
import AppliedAI from "./pages/services/AppliedAI";
import AIAdvisoryConsulting from "./pages/services/AIAdvisoryConsulting";
import AIAutomation from "./pages/services/AIAutomation";
import AIDevelopment from "./pages/services/AIDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import SoftwareDeliveryModels from "./pages/services/SoftwareDeliveryModels";
import CloudInfra from "./pages/services/CloudInfra";
import ServicesHub from "./pages/ServicesHub";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import CareersJobs from "./pages/CareersJobs";
import ResumeSubmission from "./pages/ResumeSubmission";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BlogPostDetail from "./pages/BlogPostDetail";
import ResourceDetail from "./pages/ResourceDetail";

const queryClient = new QueryClient();

const RedirectToOurWork = () => {
  useEffect(() => {
    window.location.replace("https://ai.siprahub.com/our-work");
  }, []);
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply" element={<ResumeSubmission />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route path="/careers/jobs" element={<CareersJobs />} />
            <Route path="/case-studies" element={<RedirectToOurWork />} />
            <Route path="/our-work" element={<RedirectToOurWork />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourceDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/ai-services" element={<AppliedAI />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/ai-advisory-consulting" element={<AIAdvisoryConsulting />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/ai-consulting" element={<Navigate to="/services/ai-advisory-consulting" replace />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/software-delivery-models" element={<SoftwareDeliveryModels />} />
            <Route path="/services/cloud-infra" element={<CloudInfra />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
