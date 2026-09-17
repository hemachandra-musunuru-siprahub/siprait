import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  const sections: LegalSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how SipraHub collects, uses, shares, retains, and protects personal information when you visit our website, contact us, submit a business enquiry, apply for an opportunity, or otherwise interact with us through our online channels.
          </p>
          <p>
            This Privacy Policy should be read together with any additional privacy notice or contractual terms that may apply to a specific service, recruitment process, or business engagement.
          </p>
        </div>
      ),
    },
    {
      id: "scope-of-policy",
      title: "Scope of This Policy",
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy applies to personal information collected through the SipraHub website and related online interactions controlled by SipraHub.
          </p>
          <p>
            It does not automatically apply to third-party websites, platforms, or services linked from our website. Those third parties may process information under their own privacy policies and terms.
          </p>
        </div>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <div className="space-y-5">
          <p>
            The information we collect depends on how you interact with SipraHub.
          </p>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-800 text-base">3.1 Business Enquiry and Contact Information</h3>
            <p>When you contact us or submit a business enquiry, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Full name</li>
              <li>Business email address</li>
              <li>Company or organization name</li>
              <li>Service interest</li>
              <li>Project requirements or project description</li>
              <li>Preferred contact time or other contact preferences</li>
              <li>Other information you voluntarily include in a form, email, or communication</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-800 text-base">3.2 Job Applicant and Recruitment Information</h3>
            <p>If you apply for an opportunity or share your resume with SipraHub, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Name and contact details</li>
              <li>Resume or CV</li>
              <li>Employment history</li>
              <li>Educational qualifications</li>
              <li>Skills and professional experience</li>
              <li>Portfolio or professional-profile information, where provided</li>
              <li>Other information you voluntarily provide during the recruitment process</li>
            </ul>
            <p className="text-sm text-slate-500 italic mt-2">
              Where required for recruitment, onboarding, background verification, client compliance, or legal requirements, SipraHub may request additional information with appropriate notice and, where required, consent.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-800 text-base">3.3 Website and Technical Information</h3>
            <p>When you use our website, certain technical or usage information may be collected automatically, depending on the technologies enabled on the website. This may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>IP address</li>
              <li>Browser, device, and operating-system information</li>
              <li>Pages viewed and interactions with the website</li>
              <li>Referral or source information</li>
              <li>Cookie identifiers and similar analytics information</li>
              <li>Other technical information reasonably required for website operation, security, and performance</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-collect-information",
      title: "How We Collect Information",
      content: (
        <div className="space-y-4">
          <p>We may collect personal information:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Directly from you when you complete a website form or submit an enquiry</li>
            <li>When you communicate with SipraHub through email or other approved communication channels</li>
            <li>When you submit a resume or participate in recruitment</li>
            <li>Automatically through cookies, analytics, or similar website technologies</li>
            <li>From authorized service providers, recruitment partners, or business partners where necessary and lawful</li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-use-personal-information",
      title: "How We Use Personal Information",
      content: (
        <div className="space-y-4">
          <p>SipraHub may use personal information for specified business purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Responding to enquiries and requests</li>
            <li>Understanding business, project, and service requirements</li>
            <li>Providing information about SipraHub services and potential engagements</li>
            <li>Communicating with prospective clients, clients, applicants, and other business contacts</li>
            <li>Processing job applications and managing recruitment activities</li>
            <li>Operating, maintaining, securing, and improving our website</li>
            <li>Measuring website usage and performance</li>
            <li>Detecting or preventing misuse, fraud, unauthorized access, and security incidents</li>
            <li>Maintaining appropriate business, administrative, and compliance records</li>
            <li>Meeting contractual, regulatory, or legal obligations</li>
            <li>Establishing, exercising, or defending legal rights where necessary</li>
          </ul>
          <p className="text-sm text-slate-500 mt-2">
            Where processing requires consent under applicable law, SipraHub will seek appropriate consent and provide relevant information about the processing.
          </p>
        </div>
      ),
    },
    {
      id: "cookies-and-analytics",
      title: "Cookies and Analytics",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub may use cookies, analytics tools, and similar technologies to operate the website, understand how visitors use it, measure performance, maintain security, and improve the user experience.
          </p>
          <p>
            Where required by applicable law, SipraHub will provide appropriate notice and/or obtain consent for technologies that are not strictly necessary for the operation of the website.
          </p>
          <p>
            You may also be able to control certain cookies through your browser settings. Disabling some cookies may affect website functionality.
          </p>
        </div>
      ),
    },
    {
      id: "how-we-share-information",
      title: "How We Share Information",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <p className="font-semibold text-slate-800">
              SipraHub does not sell personal information.
            </p>
          </div>
          <p>We may share personal information only where reasonably necessary, including with:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Service providers supporting website hosting, analytics, communications, IT, recruitment, or other authorized business operations</li>
            <li>Professional advisers such as legal, accounting, or compliance advisers where necessary</li>
            <li>Authorized contractors, partners, or clients where disclosure is necessary for a legitimate and communicated business purpose</li>
            <li>Government authorities, regulators, courts, or law-enforcement bodies where disclosure is required or permitted by law</li>
            <li>Relevant parties in connection with a merger, acquisition, restructuring, financing, or transfer of business assets, subject to applicable requirements</li>
          </ul>
          <p className="text-sm text-slate-500 mt-2">
            Where third parties process personal information on SipraHub&apos;s behalf, SipraHub expects them to process it only for authorized purposes and with appropriate safeguards.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-services-and-links",
      title: "Third-Party Services and Links",
      content: (
        <div className="space-y-4">
          <p>
            Our website and business processes may use or link to third-party platforms and services. Third parties may process information under their own privacy policies and terms. SipraHub is not responsible for the independent privacy practices of third-party websites or services.
          </p>
          <p>
            We encourage users to review the privacy information of any third-party service before providing personal information directly to that service.
          </p>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub uses reasonable technical and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, misuse, loss, or destruction.
          </p>
          <p>
            Depending on the relevant system and risk, these measures may include access controls, authentication controls, approved storage practices, secure communication practices, device-security requirements, software and security updates, and incident-reporting procedures.
          </p>
          <p>
            While we maintain rigorous security practices, no method of internet transmission or electronic storage can be guaranteed to be 100% secure. Accordingly, SipraHub cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub retains personal information only for as long as reasonably necessary for the purpose for which it was collected, or as required for legitimate business, contractual, recruitment, security, record-keeping, or legal obligations.
          </p>
          <p>
            When personal information is no longer required, SipraHub will take appropriate steps to delete, anonymize, or securely dispose of it, subject to applicable legal and operational requirements.
          </p>
        </div>
      ),
    },
    {
      id: "international-data-processing",
      title: "International Data Processing",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub works with global clients and may use service providers or business operations in more than one location. Where personal information is transferred to or processed in another country, SipraHub will do so in accordance with applicable data-protection requirements and any applicable transfer restrictions.
          </p>
        </div>
      ),
    },
    {
      id: "your-privacy-rights",
      title: "Your Privacy Rights",
      content: (
        <div className="space-y-4">
          <p>
            Depending on applicable law and the circumstances of the processing, you may have rights in relation to your personal information. These may include the ability to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Request information about personal data being processed and relevant processing activities</li>
            <li>Request correction of inaccurate or misleading personal information</li>
            <li>Request completion or updating of personal information</li>
            <li>Request erasure of personal information where applicable</li>
            <li>Withdraw consent where processing is based on consent, subject to applicable consequences and legal requirements</li>
            <li>Raise a grievance regarding the handling of your personal information</li>
          </ul>
          <p className="text-sm text-slate-500 mt-2">
            These rights may be subject to conditions, exceptions, or limitations under applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "exercising-rights-and-grievance",
      title: "Exercising Your Rights & Grievance",
      content: (
        <div className="space-y-4">
          <p>
            To exercise an applicable privacy right or raise a concern about the handling of personal information, please contact SipraHub using the privacy/grievance contact details in the Contact Us section.
          </p>
          <p>
            SipraHub may request information reasonably necessary to verify the identity of the person making a request and to protect personal information from unauthorized disclosure.
          </p>
          <p>
            SipraHub will review and respond to privacy requests and grievances in accordance with applicable legal requirements.
          </p>
        </div>
      ),
    },
    {
      id: "job-applicant-information",
      title: "Job Applicant Information",
      content: (
        <div className="space-y-4">
          <p>
            Personal information submitted for recruitment may be used to evaluate applications, communicate with candidates, manage interviews and recruitment activities, perform permitted verification activities, and meet employment, client, or compliance requirements where applicable.
          </p>
          <p>
            SipraHub&apos;s internal HR framework states that personal information collected during background verification is treated as confidential, access is restricted to authorized personnel, and the information is used for verification purposes.
          </p>
          <p>
            Where a third-party recruitment or background-verification provider is used, candidate information may be shared with that provider as necessary for the relevant process and subject to applicable requirements.
          </p>
        </div>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub&apos;s website and business-to-business services are not designed to solicit personal information from children.
          </p>
          <p>
            If SipraHub processes personal information relating to a child in a context where special legal requirements apply, SipraHub will handle that information in accordance with applicable law, including any applicable parental or guardian consent requirements.
          </p>
        </div>
      ),
    },
    {
      id: "changes-to-this-privacy-policy",
      title: "Changes to This Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            SipraHub may update this Privacy Policy from time to time to reflect changes in our website, services, technology, business practices, or applicable legal requirements.
          </p>
          <p>
            The latest version will be published on this page with an updated &lsquo;Last Updated&rsquo; date. Where required by applicable law, additional notice will be provided for material changes.
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
            For questions, privacy requests, or grievances relating to this Privacy Policy or SipraHub&apos;s handling of personal information, please contact:
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
              <p className="text-xs text-slate-500">Official Privacy & Grievance Contact</p>
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
      title="Privacy"
      titleHighlight="Policy"
      subtitle="How SipraHub collects, uses, shares, retains, and protects your personal information across our website and business channels."
      badgeText="Legal"
      typeLabel="Policy"
      commitmentBanner={{
        title: "Our Privacy Commitment",
        description:
          "SipraHub does not sell your personal information. We gather and process data strictly for lawful business communication, service delivery, security, recruitment, and regulatory compliance.",
      }}
      contactBox={{
        title: "Privacy Questions?",
        subtitle: "Contact our designated Privacy Officer.",
        email: "hello@siprahub.com",
      }}
      sections={sections}
      seoTitle="Privacy Policy | SipraHub"
      seoDescription="Learn how SipraHub collects, protects, and manages personal information. Read our comprehensive Privacy Policy covering enquiries, recruitment data, and cookies."
      canonicalUrl="https://www.siprahub.com/privacy"
    />
  );
};

export default PrivacyPolicy;
