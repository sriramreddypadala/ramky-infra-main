
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$12,500,000',
      beds: 6,
      baths: 8,
      sqft: '8,500',
      type: 'Villa'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      title: 'Contemporary Penthouse',
      location: 'Manhattan, NY',
      price: '$18,750,000',
      beds: 4,
      baths: 5,
      sqft: '6,200',
      type: 'Penthouse'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80',
      title: 'Waterfront Estate',
      location: 'Malibu, CA',
      price: '$22,000,000',
      beds: 8,
      baths: 10,
      sqft: '12,000',
      type: 'Estate'
    }
  ];

  return (
    <section id="properties" className="py-20 bg-luxury-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of the world's most exceptional luxury properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group luxury-hover bg-background border-0 shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 backdrop-blur-sm text-luxury-navy px-3 py-1 rounded-full text-sm font-bold">
                    {property.price}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-2">
                  {property.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></span>
                  {property.location}
                </p>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
                
                <Button className="w-full bg-luxury-navy hover:bg-luxury-charcoal text-luxury-cream font-medium">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-luxury-cream font-semibold px-8"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
