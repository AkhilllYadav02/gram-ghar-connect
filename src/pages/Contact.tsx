import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  MessageCircle,
  Calendar,
  User,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    budget: "",
    message: "",
    contactPreference: "phone"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      city: "Kasia",
      address: "Amiya Nagar, ward no 26, PO Kasia, Kushinagar, Uttar Pradesh, 274402",
      phone: "+91 8090700108",
      email: "info@akshara.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      manager: "Rajesh Sharma",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      city: "Kushinagar",
      address: "Amiya Nagar, ward no 26, PO Kasia, Kushinagar, Uttar Pradesh, 274402",
      phone: "+91 8090700108",
      email: "info@akshara.com",
      hours: "Mon-Sat: 9:30 AM - 6:30 PM",
      manager: "Priya Patel",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      city: "Gorakhpur",
      address: "Amiya Nagar, ward no 26, PO Kasia, Kushinagar, Uttar Pradesh, 274402",
      phone: "+91 8090700108",
      email: "info@akshara.com",
      hours: "Mon-Sat: 10:00 AM - 6:00 PM",
      manager: "Amit Kulkarni",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const propertyTypes = [
    "1 BHK Apartment",
    "2 BHK Apartment", 
    "3 BHK Apartment",
    "4 BHK Apartment",
    "Villa/Independent House",
    "Plot/Land",
    "Commercial Space",
    "Not Sure"
  ];

  const budgetRanges = [
    "Below ₹25 Lakhs",
    "₹25L - ₹50L",
    "₹50L - ₹75L",
    "₹75L - ₹1 Crore",
    "₹1 Cr - ₹2 Cr",
    "Above ₹2 Crores"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Thank you for contacting us!",
      description: "Our team will get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      propertyType: "",
      budget: "",
      message: "",
      contactPreference: "phone"
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to find your dream home? Get in touch with our expert team. 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Call Us Now</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our property experts</p>
                <Button variant="secondary" className="w-full">
                  +91 98765 43210
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp Chat</h3>
                <p className="text-muted-foreground mb-4">Quick responses to your queries</p>
                <Button variant="secondary" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Schedule Visit</h3>
                <p className="text-muted-foreground mb-4">Book a property viewing appointment</p>
                <Button variant="secondary" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Tell Us About Your Requirements
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our property consultant will get back to you 
                with personalized recommendations within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Preferred City
                    </label>
                    <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kasia">Kasia</SelectItem>
                        <SelectItem value="kushinagar">Kushinagar</SelectItem>
                        <SelectItem value="gorakhpur">Gorakhpur</SelectItem>
                        <SelectItem value="gorakhpur_city">Gorakhpur City</SelectItem>
                        <SelectItem value="kushinagar_airport">Kushinagar Airport</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Property Type
                    </label>
                    <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map(type => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map(range => (
                        <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, '-')}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Preferred Contact Method
                  </label>
                  <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange("contactPreference", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-warm rounded-xl flex items-center justify-center text-secondary-foreground flex-shrink-0">
                            <Building2 className="h-8 w-8" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-primary mb-2">{office.city} Office</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>{office.address}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>{office.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{office.hours}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>Manager: {office.manager}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="mt-4">
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-warm text-secondary-foreground">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-secondary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-4">Emergency Contact</h4>
                  <p className="text-muted-foreground mb-4">
                    For urgent property matters outside business hours:
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 90123 45678 (24/7)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">How quickly do you respond to inquiries?</h4>
                <p className="text-muted-foreground text-sm">We guarantee a response within 24 hours, usually much faster during business hours.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">Do you charge for initial consultations?</h4>
                <p className="text-muted-foreground text-sm">No, our initial consultation and property search assistance is completely free.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">Can you help with home loans?</h4>
                <p className="text-muted-foreground text-sm">Yes, we have partnerships with leading banks and can help you get the best loan rates.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">Do you provide legal assistance?</h4>
                <p className="text-muted-foreground text-sm">Absolutely! We have legal experts who handle all documentation and verification.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
