import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight, FileText } from 'lucide-react';
import akoyaOxygen from '@/assets/damac media/Akoya Oxygen.jpg';
import aykonCity from '@/assets/damac media/AYKON CITY.jpg';
import damacLagoons from '@/assets/damac media/DAMAC Lagoons.jpg';
import damacTowerNineElmsLondon from '@/assets/damac media/DAMAC Tower Nine Elms London.jpeg';
import damacLogo from '@/assets/damac media/damac logo.png';
import damacHills from '@/assets/damac media/damac hills.jpg';
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

const DamacProjects = () => {
  // DAMAC Projects data
  const projects: Project[] = [
    {
      id: 1,
      name: 'AKOYA Oxygen',
      tagline: 'Dubai\'s Green Heart',
      image: akoyaOxygen,
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
      image: aykonCity,
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
      image: damacHills,
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
      image: damacLagoons,
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
      image: damacTowerNineElmsLondon,
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
      connectivity: [
        '5 minutes to Vauxhall Station',
        '10 minutes to Westminster',
        '30 minutes to Heathrow Airport'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream/10">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-luxury-navy text-luxury-cream py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/90 to-luxury-navy/70"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src={damacLogo} 
                  alt="DAMAC Properties" 
                  className="h-20 md:h-28 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">DAMAC Properties</h1>
              <p className="text-xl md:text-2xl text-luxury-gold max-w-3xl mx-auto">
                Discover luxury living with DAMAC's premium properties in Dubai's most prestigious locations
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-luxury-gold/50 h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-playfair font-bold mb-2">{project.name}</h3>
                      <p className="text-luxury-navy/80 mb-4 line-clamp-2">{project.description}</p>
                      <div className="mb-4">
                        <div className="flex items-center text-luxury-navy/70 mb-2">
                          <MapPin className="h-4 w-4 mr-2 text-luxury-gold" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-luxury-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Interested in DAMAC Properties?</h2>
            <p className="text-luxury-champagne/80 max-w-2xl mx-auto">
              Fill out the form below and our representative will get back to you with more information about our exclusive DAMAC properties.
            </p>
          </div>
          
          <Card className="bg-luxury-navy-light border-luxury-gold/20">
            <CardContent className="p-6">
              <form 
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  
                  // Show loading state
                  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalButtonText = submitButton.textContent;
                  submitButton.disabled = true;
                  submitButton.textContent = 'Sending...';
                  
                  try {
                    const formDataObj = {
                      name: formData.get('name'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      project: formData.get('project'),
                      message: formData.get('message')
                    };
                    
                    console.log('Submitting form data:', formDataObj);
                    
                    const response = await fetch('https://script.google.com/macros/s/AKfycbz8L7HlQ2kACNHBm-49U_0DuFagmyFvIfZtADvosYNqpauvi0ePpST23ISilpMkiaaF/exec', {
                      method: 'POST',
                      body: JSON.stringify(formDataObj),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      mode: 'no-cors' // Add this to handle CORS
                    });
                    
                    console.log('Response status:', response.status);
                    console.log('Response headers:', [...response.headers.entries()]);
                    
                    let result;
                    try {
                      // Try to parse response as JSON
                      result = await response.text();
                      console.log('Raw response text:', result);
                      result = result ? JSON.parse(result) : {};
                    } catch (e) {
                      console.warn('Could not parse response as JSON:', e);
                      result = {};
                    }
                    
                    console.log('Parsed response:', result);
                    
                    if (response.ok || response.status === 0) { // status 0 for no-cors mode
                      alert('Thank you for your inquiry! We will get back to you soon.');
                      form.reset();
                    } else {
                      throw new Error(result.error || `Form submission failed with status ${response.status}`);
                    }
                  } catch (error) {
                    console.error('Form submission error:', error);
                    alert('There was a problem submitting the form. Please try again later.');
                  } finally {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-champagne/80 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded bg-luxury-navy border border-luxury-gold/30 text-white placeholder-luxury-gold/50 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                      required
                    />

                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-champagne/80 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 rounded bg-luxury-navy border border-luxury-gold/30 text-white placeholder-luxury-gold/50 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-luxury-champagne/80 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-2 rounded bg-luxury-navy border border-luxury-gold/30 text-white placeholder-luxury-gold/50 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-luxury-champagne/80 mb-1">Project of Interest</label>
                    <select
                      id="project"
                      name="project"
                      className="w-full px-4 py-2 rounded bg-luxury-navy border border-luxury-gold/30 text-white focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                      defaultValue=""
                      required
                    >
                      <option value="">Select a project</option>
                      {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-champagne/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-2 rounded bg-luxury-navy border border-luxury-gold/30 text-white placeholder-luxury-gold/50 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 rounded border-luxury-gold/50 bg-luxury-navy text-luxury-gold focus:ring-luxury-gold"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-luxury-champagne/80">
                    I agree to the <a href="/privacy" className="text-luxury-gold hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-medium py-3 text-base"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DamacProjects;
