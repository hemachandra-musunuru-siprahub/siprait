import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ArrowRight, Send, CheckCircle, AlertCircle, Loader2, Clock, User, Building, Grid, MessageSquare, Users, Monitor, TrendingUp, Headset, Shield, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ─── Netlify Forms helper ─────────────────────────────────────────────────────
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
// ──────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  project: string;
  contactTime: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  project?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "software-development", label: "Software Development" },
  { value: "applied-ai", label: "Applied AI Services" },
  { value: "ai-consulting", label: "AI Consulting Services" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { value: "odc-setup", label: "ODC Setup" },
  { value: "maintenance", label: "System Maintenance" },
];

const TIME_OPTIONS = [
  { value: "morning", label: "Morning (9 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 5 PM)" },
  { value: "evening", label: "Evening (5 PM – 8 PM)" },
  { value: "flexible", label: "Flexible" },
];

const INITIAL_FORM: FormData = {
  name: "", email: "", company: "", service: "", project: "", contactTime: "",
};

/* ─── Validation ─────────────────────────────────────────────────────────────── */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim())
    errors.name = "Full name is required.";

  if (!data.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service)
    errors.service = "Please select a service.";

  if (!data.project.trim())
    errors.project = "Please describe your project.";

  return errors;
}

/* ─── Component ───────────────────────────────────────────────────────────────── */
const ContactSection = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const { toast } = useToast();

  /* Field helpers */
  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [key]: e.target.value }));
      if (errors[key as keyof FormErrors])
        setErrors(prev => ({ ...prev, [key]: undefined }));
    },
  });

  const handleSelectChange = (key: keyof FormData) => (value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors])
      setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  /* Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    const body = encode({
      "form-name": "contact",
      name: form.name,
      email: form.email,
      company: form.company || "—",
      service: SERVICE_OPTIONS.find(s => s.value === form.service)?.label ?? form.service,
      project: form.project,
      contact_time: TIME_OPTIONS.find(t => t.value === form.contactTime)?.label ?? "Flexible",
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (err) {
      console.error("Netlify Forms error:", err);
      setStatus("error");
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at contact@siprahub.com.",
        variant: "destructive",
      });
    } finally {
      // Reset status after a short delay so the button returns to normal
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* ─── Render ──────────────────────────────────────────────────────────────── */
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Let's Build and{" "}
            <span className="text-primary">Scale Together</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Start your AI-driven transformation with SipraHub today!
          </p>
        </div>

        {/* ── Contact Form ────────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card animate-fade-up" id="contact-form">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Get Free Consultation
              </h3>

              {/* ✅ Success banner */}
              {status === "success" && (
                <div className="flex items-start gap-3 mb-5 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 animate-fade-up">
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-0.5">Our team will reach out within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* ❌ Error banner */}
              {status === "error" && (
                <div className="flex items-start gap-3 mb-5 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 animate-fade-up">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm mt-0.5">
                      Please try again or email{" "}
                      <a href="mailto:contact@siprahub.com" className="underline font-medium">
                        contact@siprahub.com
                      </a>
                      {" "}directly.
                    </p>
                  </div>
                </div>
              )}

              {/* Hidden form so Netlify detects it at build time */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="text" name="company" />
                <input type="text" name="service" />
                <textarea name="project"></textarea>
                <input type="text" name="contact_time" />
              </form>

              <form
                onSubmit={handleSubmit}
                noValidate
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Your full name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={!!errors.name}
                        className={`pl-9 h-11 ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                        {...field("name")}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      Business Email <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={!!errors.email}
                        className={`pl-9 h-11 ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                        {...field("email")}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company Name <span className="text-primary">*</span></Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="company"
                        placeholder="Your organization"
                        className="pl-9 h-11"
                        {...field("company")}
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-1.5">
                    <Label htmlFor="service">
                      Service Interest <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <Grid className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                      <Select value={form.service} onValueChange={handleSelectChange("service")}>
                        <SelectTrigger
                          id="service"
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={`pl-9 h-11 ${errors.service ? "border-red-400 focus:ring-red-400" : ""}`}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map(o => (
                            <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.service && (
                      <p id="service-error" className="text-xs text-red-500">{errors.service}</p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <Label htmlFor="project">
                      Project Description <span className="text-primary">*</span>
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="project"
                        placeholder="Tell us about your project"
                        className={`pl-9 min-h-[88px] py-2.5 resize-none ${errors.project ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                        aria-describedby={errors.project ? "project-error" : undefined}
                        aria-invalid={!!errors.project}
                        value={form.project}
                        onChange={(e) => {
                          setForm(prev => ({ ...prev, project: e.target.value }));
                          if (errors.project) setErrors(prev => ({ ...prev, project: undefined }));
                        }}
                      />
                    </div>
                    {errors.project && (
                      <p id="project-error" className="text-xs text-red-500">{errors.project}</p>
                    )}
                  </div>

                  {/* Preferred Contact Time */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-time">Preferred Contact Time <span className="text-primary">*</span></Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                      <Select value={form.contactTime} onValueChange={handleSelectChange("contactTime")}>
                        <SelectTrigger id="contact-time" className="pl-9 h-11">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_OPTIONS.map(o => (
                            <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-1 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto min-w-[200px] font-semibold px-8 py-3 text-white shadow-md transition-all duration-200"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="h-3.5 w-3.5 text-primary shrink-0" />
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* ── Get in Touch ────────────────────────────────────────────────── */}
        <div className="mt-10 max-w-5xl mx-auto animate-fade-up delay-300">
          <div className="bg-[#fffdfd] border border-red-100 rounded-2xl shadow-sm overflow-hidden">
            {/* Header strip */}
            <div className="px-6 py-5 border-b border-red-50">
              <h3 className="text-lg font-bold text-foreground mb-0.5">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">We're here to help you on your AI transformation journey.</p>
            </div>

            {/* Four contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white">
              {/* Email */}
              <div className="flex flex-col items-center text-center px-6 py-8 border-b sm:border-b-0 sm:border-r border-gray-100">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center mb-3 text-[#a01526]">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">Email Us</h4>
                <a href="mailto:contact@siprahub.com" className="text-[#a01526] font-semibold text-sm hover:underline mb-1.5 break-all">
                  contact@siprahub.com
                </a>
                <p className="text-[11px] text-muted-foreground leading-relaxed">We'll reply to you as soon as possible.</p>
              </div>

              {/* Call */}
              <div className="flex flex-col items-center text-center px-6 py-8 border-b sm:border-b-0 lg:border-r border-gray-100">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center mb-3 text-[#a01526]">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">Call Us</h4>
                <p className="text-[#a01526] font-semibold text-sm mb-1.5">+91-9900245353</p>
                <p className="text-[11px] text-muted-foreground">Mon - Sat | 9:30 AM - 6:30 PM</p>
              </div>

              {/* US Office */}
              <div className="flex flex-col items-center text-center px-6 py-8 border-b sm:border-r sm:border-b-0 border-gray-100">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center mb-3 text-[#a01526]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">US Office</h4>
                <p className="text-[#a01526] font-semibold text-sm mb-0 text-center leading-snug">
                  SipraHub Inc<br />16192 Coastal Highway<br />Lewes, Delaware 19958
                </p>
              </div>

              {/* India Office */}
              <div className="flex flex-col items-center text-center px-6 py-8">
                <div className="w-11 h-11 bg-red-50 rounded-full flex items-center justify-center mb-3 text-[#a01526]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">India Office</h4>
                <p className="text-[#a01526] font-semibold text-sm mb-0 text-center leading-snug">
                  8th Floor, Tower 3B, BCIT<br />Bharatiya City, Thanisandra Main Road<br />Bengaluru – 560064
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Why Choose SipraHub? ────────────────────────────────────────── */}
        <div className="mt-10 bg-gradient-to-br from-[#6b0f1a] to-[#1a1c23] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Why Choose SipraHub?</h3>
            <div className="h-1 w-12 bg-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Users className="h-8 w-8 text-[#a01526]" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-semibold mb-2">Free initial<br />consultation</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Understand your needs and explore possibilities with our experts.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Monitor className="h-8 w-8 text-[#a01526]" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-semibold mb-2">Tailored AI-driven<br />solutions</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Custom solutions built for your unique business goals.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <TrendingUp className="h-8 w-8 text-[#a01526]" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-semibold mb-2">Proven track record<br />of success</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Delivering measurable results across industries.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Headset className="h-8 w-8 text-[#a01526]" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-semibold mb-2">24/7 ongoing<br />support</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                We're here whenever you need us, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;