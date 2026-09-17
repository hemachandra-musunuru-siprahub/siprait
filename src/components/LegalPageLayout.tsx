import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { FileText, Mail, CheckCircle2 } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface LegalPageLayoutProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  badgeText?: string;
  heroImage?: string;
  typeLabel?: string; // e.g. "Policy" or "Terms"
  commitmentBanner?: {
    title: string;
    description: string;
  };
  contactBox?: {
    title: string;
    subtitle: string;
    email: string;
  };
  sections: LegalSection[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const LegalPageLayout = ({
  title = "Privacy",
  titleHighlight = "Policy",
  subtitle = "How SipraHub collects, uses, shares, retains, and protects your personal information.",
  badgeText = "Legal",
  heroImage = aboutHero,
  typeLabel = "Policy",
  commitmentBanner,
  contactBox = {
    title: "Privacy Questions?",
    subtitle: "Contact our designated Privacy Officer.",
    email: "hello@siprahub.com",
  },
  sections,
  seoTitle,
  seoDescription,
  canonicalUrl,
}: LegalPageLayoutProps) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <SEO
        title={seoTitle || `${title} ${titleHighlight} | SipraHub`}
        description={seoDescription || subtitle}
        canonical={canonicalUrl}
      />
      <Navigation />

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative text-white py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {badgeText && (
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/40 font-semibold">
              {badgeText}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            {title} <span className="text-orange-300">{titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </section>

      {/* ── Main 2-Column Content Container ───────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── Left Sticky Sidebar (TOC) ──────────────────────────────────── */}
          <aside className="lg:col-span-4 sticky top-24 space-y-5">
            {/* TOC Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#ce2124] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#ce2124]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    TABLE OF CONTENTS
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {sections.length} {typeLabel} Sections
                  </p>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="mt-4 space-y-0.5">
                {sections.map((section, idx) => {
                  const isActive = activeId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all duration-150 block truncate ${
                        isActive
                          ? "bg-red-50 text-[#ce2124] font-semibold"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-normal"
                      }`}
                    >
                      <span>{idx + 1}. </span>
                      <span>{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Questions / Contact Box */}
            {contactBox && (
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h4 className="text-xs font-bold text-slate-900">
                  {contactBox.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 mb-2.5">
                  {contactBox.subtitle}
                </p>
                <a
                  href={`mailto:${contactBox.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#ce2124] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ce2124]" />
                  {contactBox.email}
                </a>
              </div>
            )}
          </aside>

          {/* ── Right Column (Main Content Card) ─────────────────────────── */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100">
            {/* Top Commitment Banner (if provided) */}
            {commitmentBanner && (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6 mb-10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#14532d] mb-1">
                    {commitmentBanner.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {commitmentBanner.description}
                  </p>
                </div>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-12">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  {/* Section Title with number box & red accent line */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md border border-red-200 bg-white text-[#ce2124] font-bold text-sm min-w-[28px] shrink-0">
                        {idx + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                    <div className="w-10 h-0.5 bg-[#ce2124] rounded-full mt-1.5 ml-0.5" />
                  </div>

                  {/* Section Body */}
                  <div className="text-slate-600 leading-relaxed text-[15px] sm:text-base space-y-4">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPageLayout;
