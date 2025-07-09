import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, Building2, IndianRupee, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Indian Residential Complex"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Find Your Perfect
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Trusted real estate solutions for families in tier 2 & 3 cities. 
              From budget homes to luxury properties, we make homeownership dreams come true.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <Button variant="hero" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Properties
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Consult Expert
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">25+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Property Search Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-background/95 backdrop-blur shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Find Properties
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Property Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="plot">Plot</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Enter city or area" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Min Budget
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Min" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-20">₹10L - ₹20L</SelectItem>
                          <SelectItem value="20-50">₹20L - ₹50L</SelectItem>
                          <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                          <SelectItem value="100+">₹1Cr+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Max Budget
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Max" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">₹20L</SelectItem>
                          <SelectItem value="50">₹50L</SelectItem>
                          <SelectItem value="100">₹1Cr</SelectItem>
                          <SelectItem value="200+">₹2Cr+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button variant="secondary" size="lg" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search Properties
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="text-center">
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full mx-auto">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;