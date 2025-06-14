
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Brindavanam Resident',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Ramky Infra made my dream of owning a home a reality. Their attention to detail and focus on creating livable communities stood out to me. The gated security and green spaces make it perfect for family living.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Dwaraka Resident',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332905?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The construction quality is exceptional and the amenities are world-class. Living in Dwaraka feels like being in a resort every day. The clubhouse and landscaped gardens are our favorite spots.'
    },
    {
      id: 3,
      name: 'Anil Reddy',
      location: 'Dubai Investor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Their partnership with DAMAC Dubai opened excellent investment opportunities for us. The Elegance Tower project near Burj Khalifa has been a fantastic investment choice with great returns.'
    },
    {
      id: 4,
      name: 'Sunitha Rao',
      location: 'Brindavanam Resident',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The nature-integrated design and eco-friendly approach of Ramky Infra impressed us. The Goshala and green infrastructure create a unique living experience that connects us with nature.'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Dwaraka Resident',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Excellent connectivity to Hyderabad and airport makes daily commuting easy. The rainwater harvesting and sustainable features show their commitment to environmental responsibility.'
    },
    {
      id: 6,
      name: 'Meera Patel',
      location: 'Dubai Investor',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The Venice project inspired by Italian architecture is simply stunning. Ramky Infra\'s international collaboration brings world-class luxury to our investment portfolio.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-luxury-champagne max-w-3xl mx-auto">
              Hear from our satisfied residents and investors about their experience with Ramky Infra
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="luxury-hover bg-luxury-cream/20 border-luxury-champagne/30">
                  <CardContent className="p-8">
                    {/* Rating Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-luxury-navy">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-luxury-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-8">
              Trusted by Hundreds of Families
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold luxury-text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold luxury-text-gradient mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold luxury-text-gradient mb-2">2000+</div>
                <div className="text-muted-foreground">Units Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold luxury-text-gradient mb-2">99%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
