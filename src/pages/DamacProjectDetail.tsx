import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Home, Leaf, Car, FileText } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const projects = [
  {
    id: 1,
    name: 'AKOYA Oxygen',
    tagline: 'Dubai\'s Green Heart',
    image: '/src/assets/damac media/Akoya Oxygen.jpg',
    gallery: [
      '/src/assets/damac media/Akoya Oxygen.jpg',
      '/src/assets/damac media/Akoya Oxygen.jpg',
      '/src/assets/damac media/Akoya Oxygen.jpg',
      '/src/assets/damac media/Akoya Oxygen.jpg',
      '/src/assets/damac media/Akoya Oxygen.jpg'
    ],
    description: 'A green oasis in the heart of Dubai, AKOYA Oxygen offers a unique blend of nature and modern living with its lush landscapes and contemporary villas.',
    highlights: [
      '75% green open spaces',
      'Luxury villas with private gardens',
      'World-class amenities',
      'Tranquil surroundings'
    ],
    features: [
      'Luxury Villas', 'Private Gardens', 'Swimming Pools',
      'Golf Course', 'Spa & Wellness', 'Fitness Center'
    ],
    location: 'Dubai, UAE',
    locationLink: '#',
    connectivity: [
      '25 minutes to Downtown Dubai',
      '30 minutes to Dubai Marina',
      '35 minutes to Dubai International Airport'
    ]
  },
  {
    id: 2,
    name: 'AYKON CITY',
    tagline: 'Ultra-Luxury Waterfront Living',
    image: '/src/assets/damac media/AYKON CITY.jpg',
    gallery: [
      '/src/assets/damac media/AYKON CITY.jpg',
      '/src/assets/damac media/AYKON CITY.jpg',
      '/src/assets/damac media/AYKON CITY.jpg',
      '/src/assets/damac media/AYKON CITY.jpg',
      '/src/assets/damac media/AYKON CITY.jpg'
    ],
    description: 'A masterpiece of design, AYKON CITY offers ultra-luxury waterfront living with exclusive interiors and finishes.',
    highlights: [
      'Stunning waterfront views',
      'Private beach access',
      'Exclusive residents-only amenities',
      'Luxury living spaces'
    ],
    features: [
      'Luxury Apartments', 'Private Beach', 'Infinity Pool',
      'Fine Dining', 'Spa & Wellness', 'Fitness Center'
    ],
    location: 'Dubai, UAE',
    locationLink: '#',
    connectivity: [
      '10 minutes to Dubai Marina',
      '15 minutes to Palm Jumeirah',
      '20 minutes to Burj Khalifa'
    ]
  },
  {
    id: 3,
    name: 'DAMAC Hills',
    tagline: 'Luxury Living with Golf Course Views',
    image: '/src/assets/damac media/damac hills.jpg',
    gallery: [
      '/src/assets/damac media/damac hills.jpg',
      '/src/assets/damac media/damac hills.jpg',
      '/src/assets/damac media/damac hills.jpg',
      '/src/assets/damac media/damac hills.jpg',
      '/src/assets/damac media/damac hills.jpg'
    ],
    description: 'An exclusive gated community featuring luxury villas and apartments with stunning views of the Trump International Golf Club Dubai.',
    highlights: [
      'Golf course views',
      'Luxury villas and apartments',
      'World-class amenities',
      'Tranquil surroundings'
    ],
    features: [
      'Golf Course Access', 'Swimming Pools', 'Tennis Courts',
      'Gym & Spa', 'Retail Outlets', 'Fine Dining'
    ],
    location: 'Dubai, UAE',
    locationLink: '#',
    connectivity: [
      '20 minutes to Downtown Dubai',
      '25 minutes to Dubai Marina',
      '30 minutes to Dubai International Airport'
    ]
  },
  {
    id: 4,
    name: 'DAMAC Lagoons',
    tagline: 'Mediterranean Inspired Waterfront Living',
    image: '/src/assets/damac media/DAMAC Lagoons.jpg',
    gallery: [
      '/src/assets/damac media/DAMAC Lagoons.jpg',
      '/src/assets/damac media/DAMAC Lagoons.jpg',
      '/src/assets/damac media/DAMAC Lagoons.jpg',
      '/src/assets/damac media/DAMAC Lagoons.jpg',
      '/src/assets/damac media/DAMAC Lagoons.jpg'
    ],
    description: 'Experience the charm of Mediterranean living at DAMAC Lagoons, featuring crystal lagoons and luxury villas with private beach access.',
    highlights: [
      'Private beach access',
      'Crystal clear lagoons',
      'Luxury villas with private pools',
      'World-class amenities'
    ],
    features: [
      'Private Beach', 'Infinity Pools', 'Waterfront Villas',
      'Fine Dining', 'Spa & Wellness', 'Water Sports'
    ],
    location: 'Dubai, UAE',
    locationLink: '#',
    connectivity: [
      '15 minutes to Dubai Marina',
      '20 minutes to Palm Jumeirah',
      '25 minutes to Dubai International Airport'
    ]
  },
  {
    id: 5,
    name: 'DAMAC Tower Nine Elms London',
    tagline: 'Luxury Living in the Heart of London',
    image: '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg',
    gallery: [
      '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg',
      '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg',
      '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg',
      '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg',
      '/src/assets/damac media/DAMAC Tower Nine Elms London.jpeg'
    ],
    description: 'Experience luxury living in one of London\'s most prestigious neighborhoods with stunning views of the River Thames and city skyline.',
    highlights: [
      'Prime London location',
      'Luxury apartments with premium finishes',
      'World-class amenities',
      'Stunning city and river views'
    ],
    features: [
      'Luxury Apartments', '24/7 Concierge', 'Fitness Center',
      'Private Cinema', 'Residents Lounge', 'Landscaped Gardens'
    ],
    location: 'Nine Elms, London, UK',
    locationLink: '#',
    connectivity: [
      '5 minutes to Vauxhall Station',
      '10 minutes to Westminster',
      '30 minutes to Heathrow Airport'
    ]
  },
];

const DamacProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-luxury-cream/10 flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">Project Not Found</h1>
            <p className="text-lg text-luxury-navy/80 mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <Button asChild className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy">
              <Link to="/damac">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to DAMAC Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream/10 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/90 to-transparent" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-end pb-12">
            <div className="max-w-4xl">
              <Button asChild variant="ghost" className="mb-6 pl-0 text-luxury-cream hover:bg-transparent hover:text-luxury-gold">
                <Link to="/damac">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to DAMAC Projects
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-luxury-cream mb-4">
                {project.name}
              </h1>
              <p className="text-xl text-luxury-gold mb-6">{project.tagline}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy">
                  <a href="#contact">
                    Enquire Now
                  </a>
                </Button>
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                  <FileText className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-playfair font-bold text-luxury-navy mb-6">Project Overview</h2>
                <div className="prose max-w-none text-luxury-navy/80">
                  <p className="text-lg mb-6">{project.description}</p>
                  
                  <h3 className="text-xl font-playfair font-semibold text-luxury-navy mt-8 mb-4">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-luxury-gold mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-playfair font-semibold text-luxury-navy mt-8 mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-luxury-cream/30 p-3 rounded-lg">
                        <span className="text-luxury-gold mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-luxury-navy mb-4">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-luxury-navy/60 mb-1">Location</h4>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-luxury-gold mr-2" />
                          <span>{project.location}</span>
                        </div>
                        <a 
                          href={project.locationLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-luxury-gold hover:underline mt-1 inline-block"
                        >
                          View on Map
                        </a>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-luxury-navy/60 mb-2">Connectivity</h4>
                        <ul className="space-y-2">
                          {project.connectivity.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Car className="h-4 w-4 text-luxury-gold mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-luxury-navy/10">
                        <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy">
                          Schedule a Site Visit
                        </Button>
                        <Button variant="outline" className="w-full mt-3 border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-luxury-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-playfair font-bold text-luxury-navy mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery ? (
                project.gallery.map((image, index) => (
                  <div key={index} className="aspect-square bg-luxury-navy/5 rounded-lg overflow-hidden group">
                    <img 
                      src={image} 
                      alt={`${project.name} - ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))
              ) : (
                // Fallback in case gallery is not defined
                <div className="aspect-square bg-luxury-navy/5 rounded-lg overflow-hidden flex items-center justify-center">
                  <p className="text-luxury-navy/50">No images available</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">Enquire About {project.name}</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                    <select
                      id="country"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-luxury-gold focus:border-transparent text-luxury-cream"
                    >
                      <option value="">Select Country</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="saudi">Saudi Arabia</option>
                      <option value="qatar">Qatar</option>
                      <option value="kuwait">Kuwait</option>
                      <option value="oman">Oman</option>
                      <option value="bahrain">Bahrain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                    placeholder="Your message or questions about the project"
                    defaultValue={`I'm interested in learning more about ${project.name}. Please provide more information.`}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/30 bg-white/10 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-luxury-cream/80">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy"
                    size="lg"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DamacProjectDetail;
