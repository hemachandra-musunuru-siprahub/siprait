import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Users, 
  Briefcase, 
  Heart, 
  Globe, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Code,
  Brain,
  HeadphonesIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const careerCategories = [
    {
      icon: Users,
      title: "Marketing",
      jobCount: 0
    },
    {
      icon: Briefcase,
      title: "Business Development",
      jobCount: 1
    },
    {
      icon: Code,
      title: "Software Development",
      jobCount: 1
    },
    {
      icon: Brain,
      title: "Generative AI/AI",
      jobCount: 1
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Success",
      jobCount: 0
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Software Development /Gen AI Developer Intern",
      location: "Bengaluru, Karnataka",
      workMode: "Work from Home/Hybrid",
      categories: ["Software Development", "Generative AI/AI"],
      description: "Are you ready to move beyond classroom theory and start building real software? At SipraHub, we offer a hands-on internship designed for those who learn best by doing. We're seeking passionate, self-motivated interns to join our Chennai team and contribute directly to our products.",
      responsibilities: [
        "Write, test, and deploy code for our live applications",
        "Take full ownership of small projects, from initial concept to final launch",
        "Collaborate directly with our developers and designers to build and refine features",
        "Participate actively in team meetings and contribute your ideas"
      ],
      requirements: [
        "Is a natural self-starter with a strong desire to learn and grow",
        "Enjoys tinkering, building projects, and solving problems independently",
        "Has a solid foundation in at least one programming language (e.g., JavaScript, Python, etc.)",
        "Is an excellent communicator who thrives in a fast-paced environment"
      ],
      applicationInfo: "To apply, please send a brief introduction about yourself and a link to your work to contact@siprahub.com"
    },
    {
      id: 2,
      title: "Business Development Executive - Generative AI Solutions",
      location: "Bengaluru, Karnataka", 
      workMode: "Work from Home/Hybrid",
      category: "Business Development",
      description: "We are seeking a dynamic and ambitious Business Development Executive to drive the adoption of our innovative Generative AI solutions. This is a critical role for our growth, perfect for a tech-savvy sales professional who is passionate about AI and eager to evangelize its potential to prospective clients.",
      responsibilities: [
        "Identify and qualify new business opportunities through strategic prospecting, market research, industry events, and networking",
        "Develop a deep understanding of our Generative AI solutions and clearly articulate their value proposition and ROI to potential clients",
        "Manage the end-to-end sales cycle, from initial contact and discovery calls to conducting product demonstrations, preparing proposals, and negotiating contracts",
        "Build and maintain strong, long-lasting relationships with key stakeholders and decision-makers at prospective client organizations",
        "Collaborate closely with our technical and product teams to ensure client requirements are met and to provide valuable market feedback for product development",
        "Maintain accurate records of all sales activities, pipeline status, and customer interactions in our CRM system",
        "Achieve and consistently exceed monthly and quarterly sales targets"
      ],
      requirements: [
        "1-2 years of proven experience in B2B sales or business development, preferably within the SaaS, technology, or IT services sector",
        "A demonstrable track record of meeting and exceeding sales quotas",
        "Excellent communication, interpersonal, and presentation skills, with the ability to explain complex technical concepts to a non-technical audience",
        "A strong interest in and fundamental understanding of artificial intelligence, machine learning, and emerging technologies",
        "Self-motivated, results-oriented, with a proactive approach to building a robust sales pipeline",
        "Bachelor's degree in Business, Marketing, Information Technology, or a related field"
      ],
      applicationInfo: "Please apply by sending your resume and a brief cover letter explaining why you are interested in selling Generative AI solutions to contact@siprahub.com"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Open Work Culture",
      description: "Collaborative environment where ideas are valued, feedback is encouraged, and everyone has a voice."
    },
    {
      icon: Globe,
      title: "Flexible Work Options",
      description: "Remote work, hybrid arrangements, and flexible hours to support work-life balance."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive with flexible scheduling and time-off policies."
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning, skill development, and career advancement in cutting-edge technologies."
    }
  ];

  const values = [
    "Innovation & Creativity",
    "Collaboration & Teamwork", 
    "Continuous Learning",
    "Work-Life Balance",
    "Diversity & Inclusion",
    "Transparency & Open Communication"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Careers at SipraHub | Join Our Team"
        description="Explore career opportunities at SipraHub and work with a team building modern technology, digital and AI solutions."
        canonical="https://siprahub.com/careers"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
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
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Build the Future with{" "}
              <span className="text-orange-300">SipraHub</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Join a dynamic team of innovators, creators, and problem-solvers who are shaping the future of AI-driven digital transformation. 
              Experience our open work culture and flexible work options.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button 
                variant="glass" 
                size="xl" 
                className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm"
                onClick={() => {
                  document.getElementById('career-categories')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                View Open Positions
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline-white" 
                size="xl" 
                className="text-xl font-semibold px-8 py-4"
                asChild
              >
                <Link to="/careers/apply">
                  Share Resume
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section id="career-categories" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Explore Career <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover exciting career paths across different domains and contribute to cutting-edge AI solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {careerCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg border border-border shadow-sm">
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.jobCount} {category.jobCount === 1 ? 'opening' : 'openings'}
                        </p>
                      </div>
                    </div>
                    {selectedCategory === category.title ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {selectedCategory === category.title && (
                    <div className="px-6 pb-6 border-t border-border">
            {jobOpenings.filter(job => job.categories?.includes(category.title) || job.category === category.title).length > 0 ? (
              <div className="space-y-3 pt-4">
                {jobOpenings.filter(job => job.categories?.includes(category.title) || job.category === category.title).map((job) => (
                            <div key={job.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="flex-1">
                                <Link 
                                  to={`/jobs/${job.id}`}
                                  className="text-primary hover:text-primary-dark font-semibold text-lg hover:underline"
                                >
                                  {job.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1">{job.location} • {job.workMode}</p>
                              </div>
                              <div className="flex gap-2 flex-shrink-0">
                                <Button variant="outline" size="sm" asChild>
                                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                                </Button>
                                <Button variant="default" size="sm" asChild>
                                  <Link to="/careers/apply">Apply</Link>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="pt-4 text-center text-muted-foreground">
                          <p>No current openings in this category.</p>
                          <p className="text-sm mt-2">Check back soon for new opportunities!</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('career-categories')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                See All Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Work Culture & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Work at <span className="text-primary">SipraHub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience our unique work culture that values innovation, collaboration, and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="bg-gradient-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Work Culture Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Open Work <span className="text-primary">Culture</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At SipraHub, we believe in creating an environment where every team member can thrive. 
                Our open work culture encourages transparency, collaboration, and continuous learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We value diverse perspectives, encourage innovation, and provide the flexibility you need 
                to balance your personal and professional life while contributing to meaningful projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Transparent communication and regular feedback</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Cross-functional collaboration and knowledge sharing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span className="text-foreground">Opportunities for growth and skill development</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Flexible Work Options</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Remote Work</h4>
                  <p className="text-white/90 text-sm">Work from anywhere with full support and collaboration tools</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hybrid Arrangements</h4>
                  <p className="text-white/90 text-sm">Balance office collaboration with remote flexibility</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Flexible Hours</h4>
                  <p className="text-white/90 text-sm">Work when you're most productive with flexible scheduling</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Time Off</h4>
                  <p className="text-white/90 text-sm">Generous vacation and personal time policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
