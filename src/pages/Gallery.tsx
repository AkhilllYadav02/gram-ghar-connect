import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List, Heart, Share2, Download, Eye } from "lucide-react";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Projects", count: 48 },
    { id: "residential", name: "Residential", count: 28 },
    { id: "commercial", name: "Commercial", count: 12 },
    { id: "villa", name: "Villa Projects", count: 8 },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sunrise Residency - Phase 1",
      category: "residential",
      location: "Nashik, Maharashtra",
      type: "2 & 3 BHK Apartments",
      status: "Completed",
      year: "2023",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 24,
      featured: true
    },
    {
      id: 2,
      title: "Green Valley Villas",
      category: "villa",
      location: "Aurangabad, Maharashtra",
      type: "3 & 4 BHK Villas",
      status: "Under Construction",
      year: "2024",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 18,
      featured: false
    },
    {
      id: 3,
      title: "City Heights Complex",
      category: "residential",
      location: "Jalgaon, Maharashtra",
      type: "1 & 2 BHK Apartments",
      status: "Ready to Move",
      year: "2023",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 32,
      featured: true
    },
    {
      id: 4,
      title: "Business Plaza",
      category: "commercial",
      location: "Nashik, Maharashtra",
      type: "Office Spaces",
      status: "Completed",
      year: "2022",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 15,
      featured: false
    },
    {
      id: 5,
      title: "Royal Gardens",
      category: "villa",
      location: "Aurangabad, Maharashtra", 
      type: "Luxury Villas",
      status: "Completed",
      year: "2023",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 28,
      featured: true
    },
    {
      id: 6,
      title: "Tech Park Centre",
      category: "commercial",
      location: "Pune, Maharashtra",
      type: "IT Office Complex",
      status: "Under Construction",
      year: "2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: 12,
      featured: false
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our completed and ongoing projects across Maharashtra. 
            From modern apartments to luxury villas, see how we transform dreams into reality.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30 sticky top-[120px] z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1 max-w-2xl">
              <TabsList className="grid w-full grid-cols-4">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} of {galleryItems.length} projects
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === "grid" ? "w-full h-64" : "w-full h-48 sm:w-80 sm:h-48"
                    }`}
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
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.featured && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-background/90">
                      {item.status}
                    </Badge>
                  </div>
                  
                  {/* Image Count */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur px-2 py-1 rounded-full text-xs">
                    {item.images} photos
                  </div>
                </div>
                
                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === item.category)?.name}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-1">{item.type}</p>
                  <p className="text-sm text-muted-foreground mb-4">{item.location}</p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      View Gallery
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;