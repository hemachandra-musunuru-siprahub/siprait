import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const TermsOfService = () => {
  const sections: LegalSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern access to and use of the SipraHub website,{" "}
            <a
              href="https://www.siprahub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ce2124] font-medium hover:underline"
            >
              siprahub.com
            </a>
            , operated by SipraHub. By accessing or using this website, you agree to be bound by these Terms.
          </p>
          <p>
            These Terms apply to visitors, prospective clients, job applicants, and any other person who accesses or uses this website.
          </p>
        </div>
      ),
    },
    {
      id: "acceptance-of-terms",
      title: "Acceptance of These Terms",
      content: (
        <div className="space-y-4">
          <p>
            By using this website, you confirm that you accept these Terms and agree to comply with them. If you do not agree, please do not use this website.
          </p>
          <p>
            These Terms should be read together with our{" "}
            <Link to="/privacy" className="text-[#ce2124] font-medium hover:underline">
              Privacy Policy
            </Link>
            , which explains how we handle personal information.
          </p>
        </div>
      ),
    },
    {
      id: "about-siprahub",
      title: "About SipraHub",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub is a technology and AI consulting company providing AI strategy, software development, cloud, and related services to businesses ranging from SMEs to large enterprises. This website is intended to describe our services at a general level and to allow visitors to make enquiries.
          </p>
        </div>
      ),
    },
    {
      id: "use-of-this-website",
      title: "Use of This Website",
      content: (
        <div className="space-y-4">
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by, any third party.
          </p>
          <p className="font-semibold text-slate-800">You must not:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Attempt to gain unauthorized access to any part of this website or its underlying systems</li>
            <li>Introduce viruses, malware, or other harmful material to this website</li>
            <li>Use automated tools to scrape or extract content from this website without permission</li>
            <li>Misrepresent your identity or affiliation when making an enquiry</li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            Unless otherwise stated, the content on this website — including text, graphics, logos, and the SipraHub name and marks — is owned by or licensed to SipraHub and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may view and print pages from this website for personal, non-commercial reference. You may not reproduce, republish, or distribute content from this website for commercial purposes without our prior written consent.
          </p>
          <p className="text-sm text-slate-500 italic p-3 bg-slate-50 rounded-lg border border-slate-200">
            Intellectual property in deliverables created as part of a paid client engagement is governed by the relevant signed service agreement, not by these website Terms.
          </p>
        </div>
      ),
    },
    {
      id: "enquiries-and-consultations",
      title: "Enquiries, Consultations and Business Discussions",
      content: (
        <div className="space-y-4">
          <p>
            Visitors may contact SipraHub through website forms or other published contact channels to request information, discuss a project, or request a consultation.
          </p>
          <p>
            Submitting an enquiry or participating in an initial discussion is informational and exploratory in nature, and does not, by itself, create a client engagement, service contract, or obligation on either party.
          </p>
          <p>
            Project scope, deliverables, timelines, fees, or other commitments become binding only once set out in an applicable signed agreement, such as a proposal, Statement of Work, or service agreement.
          </p>
        </div>
      ),
    },
    {
      id: "client-engagements",
      title: "Client Engagements and Service Agreements",
      content: (
        <div className="space-y-4">
          <p>
            Where SipraHub and a client proceed with a paid engagement, that engagement is governed by its own signed agreement (such as a Master Service Agreement or Statement of Work), which will set out scope, fees, timelines, intellectual property ownership, confidentiality, and other contractual terms specific to that engagement.
          </p>
          <p>
            In the event of a conflict between these Terms and a signed client agreement, the signed client agreement will govern for matters within its scope.
          </p>
        </div>
      ),
    },
    {
      id: "no-professional-advice",
      title: "No Professional Advice",
      content: (
        <div className="space-y-4">
          <p>
            Content on this website is provided for general informational purposes only and does not constitute professional, legal, financial, or technical advice. You should not rely on website content as a substitute for advice from a qualified professional appropriate to your circumstances.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      content: (
        <div className="space-y-4">
          <p>
            This website may contain links to third-party websites or services. We do not control and are not responsible for the content, accuracy, or practices of any linked third-party site. Inclusion of a link does not imply endorsement.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimer-of-warranties",
      title: "Disclaimer of Warranties",
      content: (
        <div className="space-y-4">
          <p>
            This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent permitted by applicable law, SipraHub disclaims all warranties, express or implied, regarding this website, including as to accuracy, completeness, or fitness for a particular purpose.
          </p>
          <p>
            We do not warrant that this website will be uninterrupted, secure, or error-free.
          </p>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            To the fullest extent permitted by applicable law, SipraHub will not be liable for any indirect, incidental, special, or consequential loss or damage arising from your use of, or inability to use, this website.
          </p>
        </div>
      ),
    },
    {
      id: "indemnity",
      title: "Indemnity",
      content: (
        <div className="space-y-4">
          <p>
            You agree to indemnify and hold SipraHub harmless from any claims, losses, or expenses arising from your misuse of this website or breach of these Terms.
          </p>
        </div>
      ),
    },
    {
      id: "confidentiality-of-submissions",
      title: "Confidentiality of Website Submissions",
      content: (
        <div className="space-y-4">
          <p>
            Information you submit through an enquiry form or other published contact channel will be handled in accordance with our{" "}
            <Link to="/privacy" className="text-[#ce2124] font-medium hover:underline">
              Privacy Policy
            </Link>
            . Submitting an enquiry does not, by itself, create a confidentiality obligation broader than what is described in the Privacy Policy, unless a separate non-disclosure agreement is signed.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law-and-jurisdiction",
      title: "Governing Law and Jurisdiction",
      content: (
        <div className="space-y-4">
          <p>
            These Terms and any dispute, claim, or controversy arising out of or in connection with them or your use of this website shall be governed by and construed in accordance with the laws of India.
          </p>
          <p>
            Subject to applicable law, the competent courts in <strong>Bengaluru, Karnataka, India</strong> shall have jurisdiction over any legal proceedings arising under these Terms, except as otherwise stipulated in a signed client agreement.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-these-terms",
      title: "Changes to These Terms",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub may update these Terms from time to time to reflect changes in our website, services, or applicable law. The latest version will be published on this page with a revised &lsquo;Last Updated&rsquo; date. Continued use of this website after changes take effect constitutes acceptance of the updated Terms.
          </p>
        </div>
      ),
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content: (
        <div className="space-y-6">
          <p>
            For questions about these Terms, please contact:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                <MapPin className="h-4 w-4 text-[#ce2124]" />
                US Office
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>SipraHub Inc</strong>
                <br />
                16192 Coastal Highway
                <br />
                Lewes, Delaware 19958, USA
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                <MapPin className="h-4 w-4 text-[#ce2124]" />
                India Office
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>SipraHub</strong>
                <br />
                8th Floor, Tower 3B, BCIT
                <br />
                Bharatiya City, Thanisandra Main Road
                <br />
                Bengaluru – 560064, India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
            <Mail className="h-4 w-4 text-[#ce2124] shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Official Terms & Compliance Contact</p>
              <a
                href="mailto:hello@siprahub.com"
                className="text-[#ce2124] font-semibold hover:underline text-sm"
              >
                hello@siprahub.com
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms and"
      titleHighlight="Conditions"
      subtitle="Clear rules, intellectual property guidelines, and conditions governing your access to and use of the SipraHub website."
      badgeText="Legal"
      typeLabel="Terms"
      commitmentBanner={{
        title: "Website Terms of Use Overview",
        description:
          "These terms provide clear rules for using the SipraHub public website. Commercial client engagements and deliverables are governed separately under signed Master Service Agreements or Statements of Work.",
      }}
      contactBox={{
        title: "Terms Questions?",
        subtitle: "Contact our legal & compliance team.",
        email: "hello@siprahub.com",
      }}
      sections={sections}
      seoTitle="Terms and Conditions | SipraHub"
      seoDescription="Read the official Terms and Conditions and Website Terms of Use for SipraHub. Learn about website usage, intellectual property, disclaimers, and legal scope."
      canonicalUrl="https://www.siprahub.com/terms"
    />
  );
};

export default TermsOfService;
