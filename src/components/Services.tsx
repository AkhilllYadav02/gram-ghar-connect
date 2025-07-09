import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  MapPin, 
  Calculator, 
  FileText, 
  Shield,
  TrendingUp,
  Users,
  Search
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Property Search",
      description: "Find your perfect property with our advanced search filters and expert guidance.",
      features: ["Advanced Filters", "Location Insights", "Price Analysis", "Virtual Tours"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Buying",
      description: "Complete assistance in buying your dream home with legal and financial support.",
      features: ["Legal Verification", "Loan Assistance", "Negotiation Support", "Registration Help"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Property Selling",
      description: "Sell your property at the best price with our marketing expertise and wide network.",
      features: ["Market Valuation", "Professional Photography", "Marketing Strategy", "Quick Sale"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Investment Advisory",
      description: "Make smart property investments with our market insights and trend analysis.",
      features: ["Market Research", "ROI Analysis", "Future Potential", "Risk Assessment"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Home Loans",
      description: "Get the best home loan deals with competitive interest rates and quick approval.",
      features: ["Multiple Bank Options", "Best Interest Rates", "Quick Processing", "Documentation Help"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Legal Services",
      description: "Complete legal assistance for property transactions with expert verification.",
      features: ["Title Verification", "Agreement Drafting", "Registration", "Compliance Check"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored for tier 2 & 3 cities. 
            From property search to legal assistance, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center text-secondary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Property Journey?
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get expert consultation and personalized property solutions tailored to your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Shield className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;