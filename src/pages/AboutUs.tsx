import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, CheckCircle, Star, ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import missionVision from "@/assets/mission-vision.jpg";
import prasannaHeadshot from "/lovable-uploads/6e0bce80-e062-44ce-aae6-b11c691642e9.png";
import senthilHeadshot from "/lovable-uploads/d5656f33-44b5-47fc-b32b-ae0db542c2ae.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Prasanna Kumar",
      role: "CEO",
      description: "With extensive experience in setting up digital businesses and running cybersecurity operations, Prasanna provides strategic leadership and a deep understanding of business execution.",
      image: prasannaHeadshot,
      linkedin: "https://www.linkedin.com/in/prasannakumarpn/"
    },
    {
      name: "Senthil Natarajan",
      role: "Industry Advisor",
      description: "Senthil has worked with Fortune 500 companies worldwide, leading digital transformation initiatives and creating custom AI-powered solutions.",
      image: senthilHeadshot,
      linkedin: "https://www.linkedin.com/in/hisenthil/"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in honest, transparent, and ethical partnerships with our clients."
    },
    {
      icon: CheckCircle,
      title: "Innovation",
      description: "We are committed to staying ahead of the curve, continuously exploring new technologies to deliver superior results."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest quality in every solution we build, ensuring it is robust, reliable, and secure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              About <span className="text-orange-300">SipraHub</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              AI-Driven Digital Transformation & IT Services. We build secure, intelligent, and scalable software solutions that drive growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="default" size="xl" className="text-xl font-bold px-8 py-4 bg-white text-[#b91c1c] hover:bg-white/90 shadow-lg border-none flex items-center gap-2" asChild>
                <Link to="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-3 h-6 w-6 text-[#b91c1c] stroke-[2.5]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our expertise spans cybersecurity, artificial intelligence, and business process redesign, honed through years of work with <strong>Fortune 500 companies</strong> in the US and UK. We focus on building secure, efficient, and future-proof IT solutions using the latest technology stacks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build software; we build <strong>no-nonsense IT solutions</strong> that solve real-world business problems. Our unique approach combines deep technical knowledge with strategic business insight.
              </p>
            </div>
            <div className="relative">
              <img
                src={teamCollaboration}
                alt="Team collaboration and innovation"
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={missionVision}
                alt="Mission and vision visualization"
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with secure, intelligent, and scalable software solutions that drive growth and operational excellence.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a trusted partner in digital transformation, helping businesses harness the power of AI to innovate, compete, and lead in their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-muted mb-6 group-hover:scale-110 transition-bounce">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strength lies in the complementary expertise of our leadership team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Approach</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What We Do and How We Do It
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We specialize in developing custom software solutions powered by AI, tailored to your specific needs. From initial strategy to final implementation, we work closely with you to understand your goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's enhancing cybersecurity, automating workflows, or creating intelligent business applications, we deliver solutions that provide tangible results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the business side, we leverage our experience with top analyst firms to define the best strategy for your business. On the tech front, we use a modern tech stack to deliver solutions that are not only fast and effective but also secure and designed for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey with SipraHub today! Get in touch with our team to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers#career-categories" className="text-white">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/careers/apply" className="text-white">
                Send Your Resume
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>contact@siprahub.com</p>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default AboutUs;