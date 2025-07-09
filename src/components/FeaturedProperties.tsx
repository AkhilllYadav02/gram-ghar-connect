import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart, Star } from "lucide-react";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Sunrise Residency",
      location: "Nashik, Maharashtra",
      price: "₹45 Lakhs",
      type: "2 BHK Apartment",
      beds: 2,
      baths: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      status: "Ready to Move",
      featured: true
    },
    {
      id: 2,
      title: "Green Valley Villas",
      location: "Aurangabad, Maharashtra",
      price: "₹85 Lakhs",
      type: "3 BHK Villa",
      beds: 3,
      baths: 3,
      area: "2,500 sqft",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      status: "Under Construction",
      featured: false
    },
    {
      id: 3,
      title: "City Heights",
      location: "Jalgaon, Maharashtra",
      price: "₹32 Lakhs",
      type: "1 BHK Apartment",
      beds: 1,
      baths: 1,
      area: "800 sqft",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      status: "Ready to Move",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium properties in prime locations across tier 2 & 3 cities, 
            offering the perfect blend of comfort, convenience, and affordability.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Content */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-background/90">
                    {property.status}
                  </Badge>
                </div>
                
                <button className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
                
                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-primary">{property.price}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="text-sm font-medium">{property.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">rating</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{property.title}</h3>
                <p className="text-muted-foreground mb-1">{property.type}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-3 w-full">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    Contact
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-12">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;