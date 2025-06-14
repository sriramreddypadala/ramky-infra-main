import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair font-bold text-luxury-navy mb-8 text-center">
              About Ramky Infra & Developers
            </h1>
            
            <div className="prose max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-luxury-gold mb-4">Our Story</h2>
                <p className="text-luxury-charcoal/90 leading-relaxed mb-6">
                  Ramky Infra & Developers is a premier real estate development company with a legacy of excellence in creating 
                  landmark properties. With years of experience in the industry, we have established ourselves as a trusted name 
                  in delivering quality homes and commercial spaces.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-luxury-gold mb-4">Our Vision</h2>
                <p className="text-luxury-charcoal/90 leading-relaxed mb-6">
                  To be the most trusted and respected real estate developer by creating sustainable communities and 
                  delivering exceptional value to our customers, employees, and stakeholders.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-luxury-gold mb-4">Our Mission</h2>
                <ul className="list-disc pl-6 text-luxury-charcoal/90 space-y-2">
                  <li>To deliver high-quality, innovative, and sustainable real estate solutions</li>
                  <li>To exceed customer expectations through superior service and attention to detail</li>
                  <li>To create value for all stakeholders through ethical business practices</li>
                  <li>To contribute positively to the communities we serve</li>
                </ul>
              </section>

              <section className="text-center mt-16">
                <h2 className="text-2xl font-semibold text-luxury-navy mb-6">Ready to find your dream home?</h2>
                <Button asChild className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 py-6 text-lg">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
