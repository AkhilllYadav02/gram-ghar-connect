import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Building2, 
  MapPin, 
  Calculator, 
  FileText, 
  Shield,
  TrendingUp,
  Users,
  Search,
  CheckCircle,
  Clock,
  Award,
  Phone,
  Mail
} from "lucide-react";

const ServicesPage = () => {
  const servicePackages = [
    {
      name: "Basic Home Search",
      price: "Free",
      description: "Perfect for first-time buyers looking for basic assistance",
      features: [
        "Property search assistance",
        "Basic market information",
        "Initial consultation",
        "Property viewing coordination",
        "Basic documentation guidance"
      ],
      popular: false
    },
    {
      name: "Premium Home Buying",
      price: "₹25,000",
      description: "Comprehensive service for serious home buyers",
      features: [
        "Dedicated property consultant",
        "Detailed market analysis",
        "Legal verification support",
        "Loan assistance & coordination",
        "Negotiation support",
        "Complete documentation help",
        "Post-purchase support"
      ],
      popular: true
    },
    {
      name: "Investment Advisory",
      price: "₹50,000",
      description: "Expert guidance for property investment decisions",
      features: [
        "Investment opportunity analysis",
        "ROI calculations & projections",
        "Market trend analysis",
        "Portfolio diversification advice",
        "Tax planning guidance",
        "Exit strategy planning",
        "Ongoing market updates"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your requirements and budget",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Property Search",
      description: "Curated property options based on your specific criteria",
      icon: <Search className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Site Visits",
      description: "Organized property viewings with expert guidance",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Legal Verification",
      description: "Complete legal due diligence and document verification",
      icon: <Shield className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Loan Assistance",
      description: "Help with loan applications and bank coordination",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: 6,
      title: "Final Documentation",
      description: "Complete registration and handover process",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Comprehensive real estate solutions designed specifically for families in tier 2 & 3 cities. 
            From property search to legal documentation, we handle everything.
          </p>
          <Button variant="hero" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Main Services Component */}
      <Services />

      {/* Service Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your needs and budget. All packages include our signature 
              customer support and satisfaction guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'border-secondary shadow-warm' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={pkg.popular ? "secondary" : "outline"} 
                    className="w-full"
                  >
                    {pkg.price === "Free" ? "Get Started" : "Choose Package"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined 6-step process designed to make your property buying journey 
              smooth, transparent, and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center text-secondary-foreground mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="text-lg font-bold text-primary mb-2">
                    Step {step.step}: {step.title}
                  </div>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose GramGhar Connect?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">24-hour response guarantee on all inquiries</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">100% Legal</h3>
                <p className="text-sm text-muted-foreground">Complete legal verification and compliance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">15+ years of combined real estate experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Best Deals</h3>
                <p className="text-sm text-muted-foreground">Negotiated pricing and exclusive opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get started today with a free consultation. Our experts are here to guide you 
              through every step of your property journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;