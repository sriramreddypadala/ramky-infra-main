import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, FileText } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  features: string[];
  location: string;
  connectivity: string[];
  ecoFeatures?: string[];
}

const Projects = () => {
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      name: 'Brindavanam',
      tagline: 'Gated Community with Open Plots & Villas',
      image: '/src/assets/DJI_0188.JPG',
      description: 'Welcome to Brindavanam Gated Community, where nature meets luxury. Nestled amidst lush greenery, our gated community features a range of open plots and villas designed to provide you with the perfect blend of tranquility and modern amenities.',
      highlights: [
        'Premium open plots in a gated community',
        'Meticulously landscaped with gardens and water bodies',
        '24/7 security and gated access',
        'Prime location on Srisailam-Bangalore Highway',
      ],
      features: [
        'Premium Open Plots', 'Gated Community', '24/7 Security',
        'Landscaped Gardens', 'Water Harvesting', 'Wide Roads',
        'Clubhouse', 'Swimming Pool', 'Sports Facilities',
        'Children\'s Play Area'
      ],
      location: 'Along 6-lane Srisailam Highway to Bangalore Highway',
      connectivity: [
        '1 hour to Gachibowli',
        '25 minutes to Outer Ring Road',
        'Close to Amazon Data Centre',
        'Near World\'s Largest Pharma City'
      ],
      ecoFeatures: [
        'Rainwater harvesting', 'Solar lighting', 'Green spaces',
        'Waste management', 'Energy-efficient design'
      ]
    },
    {
      id: 2,
      name: 'Ramky Villa',
      tagline: 'EcoLife Community',
      image: '/src/assets/villa.JPG',
      description: 'A thoughtfully designed gated villa enclave that brings together luxury living and sustainable lifestyle. Set in a serene, green environment, this community is where your dream of eco-conscious, premium living becomes reality.',
      highlights: [
        'Premium gated villa community on 10 acres',
        'Eco-friendly features and sustainable living',
        'Vastu-compliant architecture',
        'Private gardens with each villa',
      ],
      features: [
        '3 & 4 BHK Villas', 'Private Gardens', 'Clubhouse with Fitness Studio',
        'Swimming Pool & Yoga Deck', 'Children\'s Play Area',
        'Walking/Jogging Tracks', 'Meditation Garden', 'Community Hall',
        '24/7 Security & CCTV'
      ],
      location: 'Along 6-lane Srisailam Highway',
      connectivity: [
        'Near Pharma City & Amazon Data Centre',
        '25 minutes to Outer Ring Road',
        '1 hour to Gachibowli IT Hub',
        'Easy access to Rajiv Gandhi International Airport'
      ],
      ecoFeatures: [
        'Rainwater harvesting systems',
        'Solar-powered street lighting',
        'Organic waste management',
        'Low-flow water fixtures',
        'Eco-certified building materials'
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-luxury-cream/10">
      <Header />
      <main className="pt-20">

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-luxury-gold/50 h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-white mb-1">{project.name}</h3>
                        <p className="text-luxury-champagne">{project.tagline}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-playfair font-bold text-luxury-navy mb-2">{project.name}</h3>
                    <p className="text-luxury-charcoal/80 mb-4">{project.tagline}</p>
                    
                    <div className="flex items-center text-sm text-luxury-charcoal/70 mb-4">
                      <MapPin className="w-4 h-4 mr-1 text-luxury-gold" />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full group-hover:bg-luxury-gold group-hover:text-luxury-navy transition-colors"
                      >
                        <Link to={`/projects/${project.id}`} className="flex items-center justify-center">
                          View Details 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
