import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  BookOpen,
  Lightbulb,
  Shield,
  Code,
  Cloud,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Tag
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogResources = () => {
  const blogPosts = [
    {
      title: "AI Trends 2025: Discover the latest AI innovations shaping industries",
      excerpt: "Explore the cutting-edge AI technologies that are revolutionizing businesses across sectors, from generative AI to autonomous systems.",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      tags: ["AI", "Innovation", "Technology Trends", "Business"],
      icon: TrendingUp,
      featured: true
    },
    {
      title: "Legacy Modernization Guide: Strategies for AI-driven system re-engineering",
      excerpt: "Learn how to transform your legacy systems with AI-powered modernization strategies that deliver measurable business value.",
      category: "Digital Transformation",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      tags: ["Legacy Systems", "Modernization", "AI", "Digital Transformation"],
      icon: Code,
      featured: true
    },
    {
      title: "Cybersecurity Best Practices: How AI enhances threat detection and prevention",
      excerpt: "Discover how artificial intelligence is revolutionizing cybersecurity with advanced threat detection and automated response systems.",
      category: "Cybersecurity",
      readTime: "10 min read",
      publishDate: "Dec 5, 2024",
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Best Practices"],
      icon: Shield,
      featured: false
    },
    {
      title: "Agile vs. Waterfall: Choosing the right methodology for your project",
      excerpt: "A comprehensive comparison of development methodologies to help you select the best approach for your software projects.",
      category: "Project Management",
      readTime: "6 min read",
      publishDate: "Nov 28, 2024",
      tags: ["Agile", "Waterfall", "Project Management", "Methodology"],
      icon: Users,
      featured: false
    },
    {
      title: "ODC Scalability: Cost-effective strategies for offshore development",
      excerpt: "Learn how to build and scale offshore development centers that deliver high-quality results while optimizing costs.",
      category: "Offshore Development",
      readTime: "9 min read",
      publishDate: "Nov 20, 2024",
      tags: ["ODC", "Offshore", "Scalability", "Cost Optimization"],
      icon: Cloud,
      featured: false
    }
  ];

  const resourceCategories = [
    {
      title: "White Papers",
      description: "In-depth research and analysis on industry trends",
      count: "15+ Papers",
      icon: BookOpen
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      count: "25+ Studies",
      icon: Lightbulb
    },
    {
      title: "Best Practices",
      description: "Proven methodologies and implementation guides",
      count: "30+ Guides",
      icon: Shield
    },
    {
      title: "Technical Documentation",
      description: "Comprehensive technical guides and tutorials",
      count: "50+ Docs",
      icon: Code
    }
  ];

  const featuredTopics = [
    {
      title: "AI Implementation Strategy",
      description: "Complete guide to implementing AI in your organization",
      type: "Guide",
      downloads: "2.5K"
    },
    {
      title: "Cloud Migration Checklist",
      description: "Step-by-step checklist for successful cloud migration",
      type: "Checklist",
      downloads: "1.8K"
    },
    {
      title: "Cybersecurity Framework",
      description: "Comprehensive security framework for modern businesses",
      type: "Framework",
      downloads: "3.2K"
    },
    {
      title: "Digital Transformation ROI Calculator",
      description: "Calculate the ROI of your digital transformation initiatives",
      type: "Tool",
      downloads: "1.5K"
    }
  ];

  const stats = [
    { label: "Articles Published", value: "150+", icon: BookOpen },
    { label: "Monthly Readers", value: "25K+", icon: Users },
    { label: "Resource Downloads", value: "50K+", icon: TrendingUp },
    { label: "Industry Experts", value: "20+", icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Blog & Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Thought Leadership in{" "}
              <span className="text-primary-light">AI and Digital Transformation</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay informed with SipraHub's expert insights, industry analysis, 
              and practical resources for your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/60 text-white hover:text-white/80 shadow-lg" asChild>
                <a href="https://ai.siprahub.com/our-work">
                  Download Resources
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with our latest articles on AI, digital transformation, and industry best practices.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group h-full flex flex-col">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted group-hover:scale-110 transition-bounce">
                      <post.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.publishDate}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="lg" className="w-full mt-auto">
                    Read More
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Resource Library
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of resources to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {category.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs mt-auto">
                    {category.count}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Download our most popular resources and tools to get started with your transformation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 mb-3">
                        {topic.type}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {topic.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Downloads</div>
                      <div className="text-sm font-semibold text-primary">{topic.downloads}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="lg" className="w-full mt-auto">
                    Download Now
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get the latest insights, industry trends, and exclusive resources 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground border-0"
            />
            <Button size="xl" variant="glass" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm">
              Subscribe
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Let our experts help you implement the insights and strategies 
            from our resources in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" className="text-lg font-semibold" asChild>
              <Link to="/contact">
                Get Expert Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline-white" asChild>
              <Link to="/blog">
                Browse All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogResources;
