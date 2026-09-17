// ─── Assets ──────────────────────────────────────────────────────────────────
import dhiChatInterface from "@/assets/dhi-chat-interface.png";
import dhiLandingPage from "@/assets/dhi-landing-page.png";
import copilotInterface from "@/assets/copilot-interface.png";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CaseStudyMetric {
    label: string;
    value: string;
}

export interface CaseStudyImage {
    url: string;
    alt: string;
    caption?: string;
}

export interface CaseStudyStats {
    duration: string;
    team: string;
    revenue?: string;
    employees: string;
}

export interface CaseStudy {
    id: number;
    title: string;
    company: string;
    useCase: string;
    industry: string;
    businessFunction: string;
    aiTechnologies: string[];
    /** Short one-sentence outcome shown on listing cards */
    outcome: string;
    metrics: CaseStudyMetric[];
    stats: CaseStudyStats;
    about: string;
    challenge: string;
    challengeQuote?: string;
    solution: string;
    solutionQuote?: string;
    results: string[];
    testimonial: string;
    testimonialAuthor: string;
    testimonialRole?: string;
    testimonialCompany: string;
    images?: CaseStudyImage[];
    serviceLink?: string;
    serviceName?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: "Digital Assistant for Clinic - 24/7 Patient Queries",
        company: "Poorna Neuro",
        useCase: "24/7 Patient Support",
        industry: "Healthcare",
        businessFunction: "Patient Services",
        serviceLink: "/services/ai-services",
        serviceName: "AI Services & Implementation",
        aiTechnologies: ["Natural Language Processing", "Voice AI", "Multilingual AI"],
        outcome: "Instant, accurate answers at any hour, in preferred language and mode",
        metrics: [
            { label: "Languages Supported", value: "6" },
            { label: "Availability", value: "24/7" },
            { label: "Staff Time Freed", value: "40%" },
        ],
        stats: {
            duration: "3 months",
            team: "5 AI engineers",
            revenue: "N/A",
            employees: "20+",
        },
        about:
            "Poorna Neuro is a specialized neurology clinic providing comprehensive neurological care to patients. With a diverse patient base speaking multiple regional languages, the clinic needed to ensure consistent, accessible communication across all touchpoints.",
        challenge:
            "Patients needed doctor, service and location details outside clinic hours, but had no way to get instant answers. Administrative staff were overloaded with repetitive queries, pulling time from complex tasks. The clinic wanted consistent, accurate, multilingual information for a diverse patient base.",
        challengeQuote:
            "Our patients were calling after hours with basic questions, and we had no way to help them. Our staff was spending too much time on repetitive queries when they should have been focused on more important tasks.",
        solution:
            "SipraHub built 'Dhi', a natural voice and text assistant with low-latency audio for hands-free conversations. The solution provides full multilingual support across six regional languages (English, Hindi, Tamil, Telugu, Kannada, Malayalam) to maximise accessibility. Safety guardrails restrict knowledge to verified clinic information and politely decline medical advice, ensuring patient safety and regulatory compliance.",
        solutionQuote:
            "With Dhi, our patients can get instant answers at any hour, in their preferred language. The system has transformed how we communicate with our patients and freed up our staff to focus on what matters most.",
        results: [
            "Patients receive instant, accurate answers at any hour, in their preferred language and mode",
            "Staff time is freed for scheduling, billing and patient care, improving operational efficiency",
            "A modern digital front door that strengthens the clinic's brand and accessibility",
            "40% reduction in administrative staff workload handling routine queries",
            "Support for 6 regional languages ensuring accessibility for diverse patient base",
            "24/7 availability providing consistent service outside clinic hours",
        ],
        testimonial:
            "Dhi has been a game-changer for our clinic. Our patients love the instant responses in their preferred language, and our staff can focus on more meaningful work. This is the future of patient communication.",
        testimonialAuthor: "Dr. Rajesh B Iyer",
        testimonialRole: "",
        testimonialCompany: "Poorna Neuro",
        images: [
            {
                url: dhiChatInterface,
                alt: "Dhi AI Assistant Chat Interface",
                caption: "Dhi's conversational interface provides instant responses to patient queries",
            },
            {
                url: dhiLandingPage,
                alt: "Meet Dhi - Your 24/7 Healthcare Assistant",
                caption: "Dhi supports six regional languages for maximum accessibility",
            },
        ],
    },
    {
        id: 2,
        title: "AI Service Desk Co-pilot for Insurance",
        company: "Insurance Company",
        useCase: "Live Agent Augmentation",
        industry: "Insurance",
        businessFunction: "Customer Support",
        serviceLink: "/services/ai-services",
        serviceName: "AI Solutions & Automation",
        aiTechnologies: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Management"],
        outcome: "Faster resolutions with fewer errors through real-time co-pilot support",
        metrics: [
            { label: "Resolution Time", value: "-30%" },
            { label: "Service Quality", value: "+45%" },
            { label: "Training Time", value: "-50%" },
        ],
        stats: {
            duration: "2 months",
            team: "4 AI specialists",
            revenue: "N/A",
            employees: "150+",
        },
        about:
            "A leading insurance company with a large customer support team handling thousands of live chat interactions daily. The company needed to improve service quality and consistency while reducing the time and cost of training new agents.",
        challenge:
            "Service quality varied in stressful live chats and empathy was inconsistent. Agents spent time identifying intent and sentiment, extracting policy data and searching knowledge. There was no real-time procedural guidance on next best actions, which increased handling time and errors.",
        challengeQuote:
            "Our agents were struggling to maintain consistent quality during high-pressure interactions. They spent too much time searching for information instead of helping customers, and we saw service quality varying significantly across our team.",
        solution:
            "SipraHub developed an AI co-pilot that provides live analysis of customer intent and sentiment so agents understand goals and tone instantly. The system offers one-click suggested replies plus automatic extraction of key details like policy numbers and names. Contextual checklists and quick actions enable agents to take immediate action, for example opening a claim form directly from the chat.",
        solutionQuote:
            "The AI co-pilot has transformed how our agents work. They get instant insights into customer needs and sentiment, with suggested responses and actions that help them resolve issues faster and more empathetically.",
        results: [
            "Faster resolutions with fewer errors through real-time co-pilot support",
            "More consistent, empathetic responses that raise service quality",
            "Lower training time and higher agent productivity, leading to happier customers",
            "30% reduction in average resolution time",
            "45% improvement in customer satisfaction scores",
            "50% reduction in new agent training time",
        ],
        testimonial:
            "The AI co-pilot has revolutionized our customer support operations. Our agents are more confident, efficient, and empathetic. Customer satisfaction has soared, and we're able to get new agents productive much faster.",
        testimonialAuthor: "Sarah Williams",
        testimonialRole: "Head of Customer Support",
        testimonialCompany: "Insurance Company",
        images: [
            {
                url: copilotInterface,
                alt: "AI Co-Pilot Real-time Assistance Interface",
                caption:
                    "Real-time intent and sentiment analysis with suggested responses for faster, more empathetic customer support",
            },
        ],
    },
    {
        id: 3,
        title: "Editorial Management Platform",
        company: "ContentConcepts Editorial Services",
        useCase: "End-to-end Manuscript Editing Workflow",
        industry: "Publishing",
        businessFunction: "Operations",
        serviceLink: "/services/software-development",
        serviceName: "Custom Software Development",
        aiTechnologies: ["Workflow Automation", "Document Management", "Authentication Systems"],
        outcome: "Streamlined operations through automated assignment and role-based access",
        metrics: [
            { label: "User Roles", value: "3" },
            { label: "Email Templates", value: "7" },
            { label: "Workflow Automation", value: "100%" },
        ],
        stats: {
            duration: "4 months",
            team: "6 developers",
            revenue: "N/A",
            employees: "15+",
        },
        about:
            "ContentConcepts Editorial Services is a USA-based editorial services company providing manuscript editing services to academic and professional clients. With a distributed team of editors and growing client base, they needed a comprehensive platform to manage the entire editing workflow from quote request to final delivery.",
        challenge:
            "ContentConcepts faced significant operational challenges with conflicting role models between platform roles and application roles, unreliable authentication and redirect handling during sign-in and sign-out, and complex status management across customers, editors, and administrators. Additionally, handling uploads and versions of original and edited files required reliable feedback mechanisms to ensure smooth operations.",
        challengeQuote:
            "We needed a platform that could seamlessly manage the entire manuscript editing workflow while handling multiple user roles, complex status transitions, and reliable file management. Our existing processes were manual and error-prone.",
        solution:
            "SipraHub developed a comprehensive editorial management platform with a clear multi-role model using a custom 'app_role' field, role-based routing, and granular permissions. The platform includes a public quote flow with real-time pricing by word count and service type, delivery estimates, document upload, and automatic job IDs with PR-, SE-, and PE- prefixes. The customer dashboard enables quote requests, simulated payments, status tracking, and file downloads. The editor dashboard supports assignment acceptance/rejection, multi-file uploads, progress tracking with status badges, and completion emails. An admin panel provides live statistics, order assignment, user management, and an email template manager. The solution features stable Google OAuth with fallback methods, error handling, explicit redirect URLs, and robust Base64 file handling with array-based document storage and progress indicators.",
        solutionQuote:
            "The platform has transformed our operations. We now have complete visibility into every manuscript's journey, automated notifications keep everyone informed, and our editors can focus on what they do best—editing.",
        results: [
            "Streamlined operations through automated assignment and notifications",
            "Role-based access with tailored interfaces for each user type (customers, editors, administrators)",
            "Real-time tracking that gives all stakeholders visibility of manuscript status",
            "Scalable, modular architecture that supports rapid feature additions",
            "Professional, responsive user experience with clear loading, error and success states",
            "Seven automated email templates for new orders, assignments, acceptances, rejections, and completions",
            "Reliable file handling with progress indicators and version management",
        ],
        testimonial:
            "SipraHub's editorial management platform has completely transformed how we operate. Our team can now manage hundreds of manuscripts simultaneously with complete visibility and control. The automated workflows save us countless hours every week.",
        testimonialAuthor: "Sarah Miller",
        testimonialRole: "Operations Director",
        testimonialCompany: "ContentConcepts Editorial Services",
    },
];

/** Look up a single case study by its numeric id string (matches URL param). */
export const getCaseStudyById = (id: string): CaseStudy | undefined =>
    CASE_STUDIES.find((s) => String(s.id) === id);
