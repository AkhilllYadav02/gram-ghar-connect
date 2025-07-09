import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building2, 
  Users, 
  Award, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Target,
  Heart,
  Shield,
  Star,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin
} from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("company");

  const stats = [
    { icon: <Building2 className="h-8 w-8" />, value: "500+", label: "Properties Sold" },
    { icon: <Users className="h-8 w-8" />, value: "1000+", label: "Happy Families" },
    { icon: <Award className="h-8 w-8" />, value: "25+", label: "Projects Completed" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "15+", label: "Cities Served" },
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to make homeownership accessible in tier 2/3 cities" },
    { year: "2019", title: "First 100 Families", description: "Helped our first 100 families find their dream homes" },
    { year: "2021", title: "Multi-city Expansion", description: "Expanded operations to 10+ cities across Maharashtra" },
    { year: "2023", title: "Digital Transformation", description: "Launched advanced online property search and virtual tours" },
    { year: "2024", title: "Industry Recognition", description: "Awarded 'Best Real Estate Partner for Tier 2/3 Cities'" },
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "15+ years",
      education: "MBA Real Estate, IIM Pune",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with extensive experience in real estate development and customer relations.",
      specialization: "Strategic Planning, Market Analysis"
    },
    {
      name: "Priya Patel",
      role: "Head of Sales",
      experience: "12+ years",
      education: "MBA Marketing, Pune University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Expert in customer relationship management and property consulting for residential projects.",
      specialization: "Residential Sales, Customer Relations"
    },
    {
      name: "Amit Kulkarni",
      role: "Technical Head",
      experience: "10+ years",
      education: "B.Tech Civil, COEP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Ensures all projects meet the highest quality standards and technical excellence.",
      specialization: "Project Management, Quality Assurance"
    },
    {
      name: "Sneha Desai",
      role: "Legal Advisor",
      experience: "8+ years",
      education: "LLB Property Law, Mumbai University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Specialist in property law, ensuring all transactions are legally compliant and secure.",
      specialization: "Property Law, Legal Compliance"
    }
  ];

  const careers = [
    {
      title: "Property Consultant",
      department: "Sales",
      location: "Nashik, Maharashtra",
      type: "Full-time",
      experience: "2-5 years",
      description: "Help families find their perfect home with expert guidance and personalized service.",
      requirements: ["Strong communication skills", "Real estate experience preferred", "Local market knowledge", "Customer-focused approach"]
    },
    {
      title: "Marketing Executive",
      department: "Marketing",
      location: "Aurangabad, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive marketing campaigns and digital presence to reach more potential homebuyers.",
      requirements: ["Digital marketing experience", "Content creation skills", "Social media expertise", "Creative mindset"]
    },
    {
      title: "Legal Assistant",
      department: "Legal",
      location: "Nashik, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Support legal processes and documentation for property transactions.",
      requirements: ["Law degree preferred", "Documentation skills", "Attention to detail", "Property law knowledge"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImage}
            alt="Our Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About GramGhar Connect
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Bridging dreams with reality in tier 2 & 3 cities. We're not just a real estate company; 
              we're your trusted partners in finding the perfect home for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center text-secondary-foreground mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
            </TabsList>

            {/* Company Tab */}
            <TabsContent value="company" className="space-y-16">
              {/* Mission & Vision */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    To make homeownership accessible and affordable for families in tier 2 & 3 cities 
                    by providing transparent, trustworthy, and comprehensive real estate solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Customer-First Approach</h4>
                        <p className="text-muted-foreground">Every decision we make prioritizes our customers' needs and dreams.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Transparency & Trust</h4>
                        <p className="text-muted-foreground">Complete transparency in pricing, processes, and property details.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Community Focus</h4>
                        <p className="text-muted-foreground">Building communities, not just selling properties.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-warm rounded-3xl p-8 text-secondary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg mb-6">
                    To become the most trusted real estate partner in tier 2 & 3 cities across India, 
                    empowering families to achieve their homeownership dreams.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5" />
                      <span>Excellence in service delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5" />
                      <span>Innovation in property solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5" />
                      <span>Sustainable community development</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Timeline */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Journey</h2>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Expert Team</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our diverse team of real estate professionals brings years of experience 
                  and deep local market knowledge to serve you better.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 sm:h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                              <p className="text-secondary font-semibold">{member.role}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Linkedin className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{member.experience} experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <GraduationCap className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{member.education}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                          
                          <Badge variant="outline" className="text-xs">
                            {member.specialization}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Careers Tab */}
            <TabsContent value="careers" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Join Our Growing Team</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Be part of a dynamic team that's transforming the real estate landscape in tier 2 & 3 cities. 
                  We offer competitive packages, growth opportunities, and a chance to make a real impact.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-muted/30 rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-primary text-center mb-8">Why Work With Us?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center text-secondary-foreground mx-auto mb-4">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Career Growth</h4>
                    <p className="text-sm text-muted-foreground">Clear career progression paths and skill development opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center text-secondary-foreground mx-auto mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Great Culture</h4>
                    <p className="text-sm text-muted-foreground">Collaborative environment with focus on work-life balance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center text-secondary-foreground mx-auto mb-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Competitive Package</h4>
                    <p className="text-sm text-muted-foreground">Attractive salary, incentives, and comprehensive benefits</p>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Current Openings</h3>
                {careers.map((job, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-primary">{job.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4" />
                                  {job.department}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {job.type}
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline">{job.experience}</Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          
                          <div>
                            <h5 className="font-semibold text-primary mb-2">Requirements:</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 min-w-[120px]">
                          <Button variant="secondary">Apply Now</Button>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact for careers */}
              <div className="bg-gradient-sunset rounded-3xl p-8 text-center text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Match?</h3>
                <p className="mb-6">We're always looking for talented individuals. Send us your resume!</p>
                <Button variant="outline" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Resume
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;