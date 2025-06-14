import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">
                Get In Touch
              </h1>
              <p className="text-luxury-charcoal/80 max-w-2xl mx-auto">
                Have questions about our properties or interested in a site visit? 
                Fill out the form below or contact us directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-luxury-navy mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-charcoal/80 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal/80 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-luxury-charcoal/80 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-luxury-charcoal/80 mb-1">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-luxury-navy text-white p-8 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-semibold text-luxury-gold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-luxury-champagne">Our Office</h3>
                        <p className="text-luxury-champagne/80">
                          123 Business Avenue, Hyderabad, 
                          <br />
                          Telangana 500032, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-luxury-champagne">Email Us</h3>
                        <a href="mailto:info@ramkyinfra.com" className="text-luxury-champagne/80 hover:text-luxury-gold transition-colors">
                          info@ramkyinfra.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-luxury-champagne">Call Us</h3>
                        <a href="tel:+917416665003" className="text-luxury-champagne/80 hover:text-luxury-gold transition-colors">
                          +91 74166 65003
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-luxury-champagne">Working Hours</h3>
                        <p className="text-luxury-champagne/80">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-medium text-luxury-champagne mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-luxury-gold/10 hover:bg-luxury-gold/20 p-2 rounded-full transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-5 w-5 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-luxury-gold/10 hover:bg-luxury-gold/20 p-2 rounded-full transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="bg-luxury-gold/10 hover:bg-luxury-gold/20 p-2 rounded-full transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-luxury-gold/10 hover:bg-luxury-gold/20 p-2 rounded-full transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
