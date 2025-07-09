import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar,
  Users,
  Bed,
  Bath,
  Square,
  IndianRupee,
  Clock,
  Building2,
  Home,
  TreePine,
  Car,
  Wifi,
  Dumbbell,
  ShoppingCart,
  GraduationCap,
  Hospital,
  Eye,
  Heart,
  Share2,
  Phone
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "completed", name: "Completed", count: 8 },
    { id: "ongoing", name: "Ongoing", count: 3 },
    { id: "upcoming", name: "Upcoming", count: 1 },
  ];

  const projects = [
    {
      id: 1,
      name: "Sunrise Residency",
      status: "completed",
      location: "Nashik, Maharashtra",
      type: "Residential Apartments",
      units: "2 & 3 BHK",
      totalUnits: 150,
      soldUnits: 150,
      priceRange: "₹35L - ₹65L",
      possession: "Immediate",
      area: "950 - 1,450 sqft",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Swimming Pool", "Gym", "Garden", "Parking", "Security", "Power Backup"],
      highlights: ["Prime Location", "Ready to Move", "All Units Sold", "Premium Amenities"],
      description: "Modern residential complex with all essential amenities in the heart of Nashik.",
      featured: true
    },
    {
      id: 2,
      name: "Green Valley Villas",
      status: "ongoing",
      location: "Aurangabad, Maharashtra",
      type: "Independent Villas",
      units: "3 & 4 BHK",
      totalUnits: 48,
      soldUnits: 32,
      priceRange: "₹75L - ₹1.2Cr",
      possession: "Dec 2024",
      area: "1,800 - 2,500 sqft",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Club House", "Swimming Pool", "Gardens", "Private Parking", "24/7 Security"],
      highlights: ["Luxury Villas", "Gated Community", "67% Sold", "Premium Location"],
      description: "Luxury villa project with spacious homes and world-class amenities.",
      featured: true
    },
    {
      id: 3,
      name: "City Heights",
      status: "completed",
      location: "Jalgaon, Maharashtra",
      type: "Affordable Housing",
      units: "1 & 2 BHK",
      totalUnits: 200,
      soldUnits: 195,
      priceRange: "₹25L - ₹45L",
      possession: "Immediate",
      area: "650 - 950 sqft",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Playground", "Community Hall", "Parking", "Water Supply", "Electricity"],
      highlights: ["Affordable Housing", "Family Friendly", "98% Sold", "Great Connectivity"],
      description: "Affordable housing project designed for young families and first-time buyers.",
      featured: false
    },
    {
      id: 4,
      name: "Business Plaza",
      status: "completed",
      location: "Nashik, Maharashtra",
      type: "Commercial Complex",
      units: "Office Spaces",
      totalUnits: 80,
      soldUnits: 75,
      priceRange: "₹15L - ₹50L",
      possession: "Immediate",
      area: "300 - 1,000 sqft",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Parking", "Lift", "Power Backup", "Security", "Conference Room"],
      highlights: ["Commercial Hub", "Prime Location", "High ROI", "Modern Design"],
      description: "Premium commercial complex perfect for offices, clinics, and retail spaces.",
      featured: false
    },
    {
      id: 5,
      name: "Harmony Heights",
      status: "ongoing",
      location: "Ahmednagar, Maharashtra",
      type: "Mid-Range Apartments",
      units: "2 & 3 BHK",
      totalUnits: 120,
      soldUnits: 85,
      priceRange: "₹42L - ₹68L",
      possession: "Mar 2025",
      area: "1,100 - 1,350 sqft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Gym", "Garden", "Children Play Area", "Parking", "Lift"],
      highlights: ["Construction in Progress", "71% Pre-sold", "Modern Amenities", "Great Value"],
      description: "Contemporary apartment complex with modern amenities and excellent connectivity.",
      featured: false
    },
    {
      id: 6,
      name: "Royal Gardens Phase 2",
      status: "upcoming",
      location: "Aurangabad, Maharashtra",
      type: "Luxury Apartments",
      units: "3 & 4 BHK",
      totalUnits: 90,
      soldUnits: 25,
      priceRange: "₹85L - ₹1.5Cr",
      possession: "Dec 2025",
      area: "1,650 - 2,200 sqft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Swimming Pool", "Spa", "Gym", "Clubhouse", "Landscaped Gardens", "Concierge"],
      highlights: ["Pre-Launch Offer", "Luxury Living", "Premium Location", "Early Bird Discount"],
      description: "Ultra-luxury apartment complex with premium amenities and world-class design.",
      featured: true
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" || project.status === activeCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-accent text-accent-foreground";
      case "ongoing": return "bg-secondary text-secondary-foreground";
      case "upcoming": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <Building2 className="h-4 w-4" />;
      case "ongoing": return <Clock className="h-4 w-4" />;
      case "upcoming": return <Calendar className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our carefully crafted residential and commercial projects across Maharashtra. 
            Each project reflects our commitment to quality, design, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">Total Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-muted-foreground">Units Delivered</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Cities</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-[120px] z-40 border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="bg-background/90 border-none">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-background/90 border-none">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-background/90 border-none">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} flex items-center gap-1`}>
                      {getStatusIcon(project.status)}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  {/* Sold Percentage */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold">
                    {Math.round((project.soldUnits / project.totalUnits) * 100)}% Sold
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-1">{project.type}</p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Units:</span>
                      <span className="ml-1 font-semibold">{project.units}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Area:</span>
                      <span className="ml-1 font-semibold">{project.area}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <span className="ml-1 font-semibold text-secondary">{project.priceRange}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Possession:</span>
                      <span className="ml-1 font-semibold">{project.possession}</span>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      View Details
                    </Button>
                    <Button variant="secondary" className="flex-1" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">No projects match the selected criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Projects?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get detailed information about any project, schedule site visits, 
              or discuss investment opportunities with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Site Visit
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Building2 className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;