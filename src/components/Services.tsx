
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, User } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Luxury Residential',
      description: 'Exceptional homes in the most prestigious neighborhoods worldwide',
      features: ['Personal concierge service', 'Exclusive property access', 'Custom home design']
    },
    {
      icon: Search,
      title: 'Investment Properties',
      description: 'Strategic real estate investments with guaranteed returns',
      features: ['Market analysis', 'Portfolio management', 'Risk assessment']
    },
    {
      icon: User,
      title: 'Personal Advisory',
      description: 'Dedicated experts guiding your luxury real estate journey',
      features: ['24/7 support', 'Market insights', 'Personalized recommendations']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience unparalleled service with our comprehensive luxury real estate solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group luxury-hover bg-luxury-cream/20 border-luxury-champagne/30 hover:border-luxury-gold/50 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
