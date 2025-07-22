import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { X, ArrowLeft, MapPin, Home, Leaf, Car, FileText, Play, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import PlotInfo from '@/components/PlotInfo';
import { getAssetPath } from '@/utils/assetUtils';
import brindavanam from '@/assets/DJI_0188.jpg';
import villa from '@/assets/villa.jpg';

interface Project {
  id: number;
  name: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  features: string[];
  ecoFeatures: string[];
  location: string;
  locationLink: string;
  layoutPdf?: string;
  connectivity: string[];
}

// Mock data - in a real app, this would come from an API
const projects = [
  {
    id: 1,
    name: 'Brindavanam',
    tagline: 'Gated Community with Open Plots & Villas',
    image: getAssetPath(brindavanam),
    description: 'Welcome to Brindavanam Gated Community, where nature meets luxury. Nestled amidst lush greenery, our gated community features a range of open plots and villas designed to provide you with the perfect blend of tranquility and modern amenities.',
    highlights: [
      'Premium open plots in a gated community',
      'Meticulously landscaped with gardens and water bodies',
      '24/7 security and gated access',
      'Prime location on Srisailam-Bangalore Highway',
      'Proximity to Amazon Data Centre and Pharma City',
      'Easy access to ORR and Gachibowli',
      'Vastu-compliant plots',
      'Sustainable living with green initiatives'
    ],
    features: [
      'Premium Open Plots', 'Gated Community', '24/7 Security',
      'Landscaped Gardens', 'Water Harvesting', 'Wide Roads',
      'Clubhouse', 'Swimming Pool', 'Sports Facilities',
      'Children\'s Play Area'
    ],
    ecoFeatures: [
      'Rainwater harvesting', 'Solar lighting', 'Green spaces',
      'Waste management', 'Energy-efficient design'
    ],
    location: 'Along 6-lane Srisailam Highway to Bangalore Highway',
    locationLink: 'https://maps.app.goo.gl/577wBZCLSsKWFjEE6',
    layoutPdf: '/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf',
    connectivity: [
      '1 hour to Gachibowli',
      '25 minutes to Outer Ring Road',
      'Close to Amazon Data Centre',
      'Near World\'s Largest Pharma City',
      'Easy access to Rajiv Gandhi International Airport'
    ]
  },
  {
    id: 2,
    name: 'Ramky Villa',
    tagline: 'EcoLife Community',
    image: getAssetPath(villa),
    description: 'A thoughtfully designed gated villa enclave that brings together luxury living and sustainable lifestyle. Set in a serene, green environment, this community is where your dream of eco-conscious, premium living becomes reality.',
    highlights: [
      'Premium gated villa community on 10 acres',
      'Eco-friendly features and sustainable living',
      'Vastu-compliant architecture',
      'Private gardens with each villa',
      'High-end finishes and fittings',
      'Peaceful, pollution-free environment',
      'High appreciation zone',
      'Ideal for both living & investment'
    ],
    features: [
      '3 & 4 BHK Villas', 'Private Gardens', 'Clubhouse with Fitness Studio',
      'Swimming Pool & Yoga Deck', 'Children\'s Play Area',
      'Walking/Jogging Tracks', 'Meditation Garden', 'Community Hall',
      '24/7 Security & CCTV'
    ],
    ecoFeatures: [
      'Rainwater harvesting systems',
      'Solar-powered street lighting',
      'Organic waste management',
      'Low-flow water fixtures',
      'Eco-certified building materials'
    ],
    location: 'Along 6-lane Srisailam Highway',
    connectivity: [
      'Near Pharma City & Amazon Data Centre',
      '25 minutes to Outer Ring Road',
      '1 hour to Gachibowli IT Hub',
      'Easy access to Rajiv Gandhi International Airport'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{videoId: string, title: string} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (videoId: string, title: string) => {
    setCurrentVideo({ videoId, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-navy">Project not found</h2>
          <Link to="/projects" className="text-luxury-gold hover:underline mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream/10">
      <Header />
      <main className="min-h-[calc(100vh-64px)]">
        {/* Page Header */}
        <div className="pt-24 md:pt-28 pb-8 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="ghost" asChild className="text-luxury-cream/80 hover:text-luxury-gold hover:bg-luxury-navy/50">
                  <Link to="/projects" className="flex items-center">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Projects
                  </Link>
                </Button>
              </div>
              
              {/* Project Hero */}
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                  {project.name}
                </h1>
                <p className="text-xl text-luxury-gold mb-6">{project.tagline}</p>
                <div className="flex items-center text-luxury-champagne">
                  <MapPin className="w-5 h-5 mr-2" />
                  <a 
                    href={project.locationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-luxury-gold transition-colors"
                  >
                    {project.location}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Main Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    About {project.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    Project Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-luxury-gold mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    Features & Amenities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-luxury-cream/30 p-3 rounded-lg">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plot Availability - Only show for Brindavanam */}
                {project.name === 'Brindavanam' && <PlotInfo />}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Info */}
                <Card className="border-luxury-gold/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      Project Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                        <p className="text-luxury-navy">
                          {project.name.includes('Villa') ? 'Villa Community' : 'Plotted Development'}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                        <a 
                          href={project.locationLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-luxury-navy hover:underline hover:text-luxury-gold transition-colors"
                        >
                          {project.location}
                        </a>
                      </div>
                      
                      {project.ecoFeatures && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground flex items-center">
                            <Leaf className="w-4 h-4 mr-2 text-luxury-gold" />
                            Eco Features
                          </h4>
                          <ul className="mt-2 space-y-1">
                            {project.ecoFeatures.map((feature, index) => (
                              <li key={index} className="text-luxury-navy text-sm">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground flex items-center">
                          <Car className="w-4 h-4 mr-2 text-luxury-gold" />
                          Connectivity
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {project.connectivity.map((item, index) => (
                            <li key={index} className="text-luxury-navy text-sm flex">
                              <span className="text-luxury-gold mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      {project.name === 'Brindavanam' ? (
                        <a 
                          href={getAssetPath('/src/assets/brouchures/Flyer .pdf')}
                          download="Brindavanam-Brochure.pdf"
                          className="block w-full"
                        >
                          <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold flex items-center justify-center gap-2 py-6 text-base">
                            <FileText className="w-5 h-5" />
                            Download Brochure
                          </Button>
                        </a>
                      ) : (
                        <a 
                          href={getAssetPath('/src/assets/brouchures/Flyer .pdf')}
                          download="Ramky-Villa-Brochure.pdf"
                          className="block w-full"
                        >
                          <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold flex items-center justify-center gap-2 py-6 text-base">
                            <FileText className="w-5 h-5" />
                            Download Brochure
                          </Button>
                        </a>
                      )}
                      
                      <a href="tel:7416665003" className="block w-full">
                        <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 py-6 text-base">
                          Contact Sales
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Location Map */}
                <Card className="border-luxury-gold/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      Location Map
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <a 
                        href="https://maps.app.goo.gl/577wBZCLSsKWFjEE6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-center p-4"
                      >
                        <div className="mb-2">
                          <MapPin className="w-12 h-12 mx-auto text-luxury-gold" />
                        </div>
                        <p className="text-luxury-navy dark:text-luxury-cream font-medium">View on Google Maps</p>
                        <p className="text-sm text-muted-foreground mt-1">Click to open in a new tab</p>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Layout Plan */}
                {project.name === 'Brindavanam' && project.layoutPdf && (
                  <Card className="border-luxury-gold/30 mt-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-semibold mb-4">
                        Layout Plan
                      </h3>
                      <div className="rounded-lg overflow-hidden border border-luxury-gold/20 bg-luxury-cream/10 p-4">
                        <div className="flex items-center justify-center">
                          <img 
                            src={getAssetPath('/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf')} 
                            alt="Brindavanam Layout Plan" 
                            className="max-w-full h-auto max-h-[600px] object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a1f4e1b0a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a1f4e1b0a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22290.5625%22%20y%3D%22331.5%22%3ELayout%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                              target.alt = 'Layout image failed to load. Please check the file path.';
                            }}
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <a 
                            href={getAssetPath('/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-luxury-gold hover:underline"
                          >
                            View Full Size
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground">
                          Brindavanam Gated Community Layout Plan
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Modal */}
        {isModalOpen && currentVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div 
              ref={modalRef}
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        {/* Contact Section */}
        <section className="bg-luxury-navy text-luxury-cream py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Interested in {project.name}?
              </h2>
              <p className="text-xl text-luxury-champagne mb-8">
                Contact our sales team today to schedule a site visit or request more information about this exclusive project.
              </p>
              
              <div className="mt-12 pt-8 border-t border-luxury-gold/20">
                <h3 className="text-xl font-playfair font-semibold mb-6">Prefer to call us?</h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <div className="relative w-full sm:w-auto">
                    <div className="relative group">
                      <Button 
                        onClick={() => {
                          window.location.href = 'tel:+917416665003';
                        }}
                        variant="outline"
                        className="w-full sm:w-auto border-luxury-gold text-luxury-gold hover:bg-luxury-gold/5 hover:text-luxury-gold/90 font-medium px-8 py-6 text-base sm:text-lg group-hover:pr-24 transition-all duration-300"
                      >
                        <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span>Call Sales Team</span>
                      </Button>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-luxury-gold/80 text-sm font-medium bg-luxury-navy/50 px-3 py-1 rounded-full border border-luxury-gold/30">
                          +91 74166 65003
                        </span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={`mailto:sales@ramkyinfra.com?subject=Enquiry about ${encodeURIComponent(project.name)}`}
                    className="block w-full sm:w-auto"
                  >
                    <Button variant="outline" className="w-full sm:w-auto border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 px-8 py-6 text-base sm:text-lg">
                      Email Us
                    </Button>
                  </a>
                </div>
                
                <div className="mt-8 w-full">
                  <div className="max-w-md mx-auto">
                    {project.layoutPdf && (
                      <a 
                        href={getAssetPath(project.layoutPdf)}
                        download={`${project.name.replace(/\s+/g, '-')}-Layout-Plan.pdf`}
                        className="block w-full"
                      >
                        <Button 
                          className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 py-6 text-lg flex items-center justify-center gap-3"
                        >
                          <FileText className="w-6 h-6 flex-shrink-0" />
                          <span>Download Layout Plan</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
