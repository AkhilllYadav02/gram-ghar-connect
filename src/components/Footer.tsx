import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Property Search", href: "/services" },
    { name: "Home Buying", href: "/services" },
    { name: "Property Selling", href: "/services" },
    { name: "Investment Advisory", href: "/services" },
    { name: "Home Loans", href: "/services" },
  ];

  const locations = [
    "Kasia, Uttar Pradesh",
    "Gorakhpur, Uttar Pradesh",
    "Kushinagar, Uttar Pradesh"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-warm py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              Stay Updated with Latest Properties
            </h3>
            <p className="text-secondary-foreground/80 mb-6">
              Get notifications about new properties, market trends, and exclusive deals in your area.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/90 border-none"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="h-8 w-8" />
              <span className="text-2xl font-bold">Akshara Real Estate & Developers</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted real estate partner for tier 2 & 3 cities. Making homeownership dreams come true with transparency, trust, and expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 8090700108</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>info@Akshara.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Kasia, Kushinagar, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <div className="space-y-3">
              {locations.map((location) => (
                <div
                  key={location}
                  className="text-primary-foreground/80"
                >
                  {location}
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="bg-background/10 border-primary-foreground/20 hover:bg-secondary hover:border-secondary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 border-primary-foreground/20 hover:bg-secondary hover:border-secondary">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 border-primary-foreground/20 hover:bg-secondary hover:border-secondary">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 border-primary-foreground/20 hover:bg-secondary hover:border-secondary">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Akshara Real Estate & Developers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="/disclaimer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
