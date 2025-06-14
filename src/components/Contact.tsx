
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: 'Office Location',
      value: 'KVR Holdings, 2nd Floor',
      description: 'Road #36, Jubilee Hills, Hyderabad'
    },
    {
      title: 'Phone',
      value: '+91 99668 58799',
      description: 'Available on call & WhatsApp for project inquiries'
    },
    {
      title: 'Email',
      value: 'admin@ramkyinfra.com',
      description: 'info@ramkyinfra.com for general inquiries'
    }
  ];

  const lifestyleOfferings = [
    'Free site visits for prospective buyers',
    'Free maintenance of plantation',
    '100% eco-friendly ventures'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            We Love to Hear from You! Let's Discuss Your Dream Home.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore Ramky Infra's open plots and gated villas offering luxury living in green surroundings. Whether you're interested in a custom-built home or ready-to-move villas, our team is here to help.
          </p>
        </div>

        {/* Lifestyle Offerings */}
        <div className="bg-luxury-cream/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6 text-center">
            Lifestyle Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleOfferings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-luxury-gold text-xl">✓</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{offering}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-luxury-champagne/30 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-navy mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-luxury-navy mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-navy mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-navy mb-2">
                    Message Box
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-luxury-champagne/50 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                    placeholder="Tell us about your dream property..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-luxury-navy hover:bg-luxury-charcoal text-luxury-cream font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-luxury-champagne/30 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-playfair font-semibold text-luxury-navy mb-2">
                    {info.title}
                  </h4>
                  <p className="text-lg font-medium text-luxury-gold mb-1">
                    {info.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Social Media Links */}
            <Card className="border-luxury-champagne/30">
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-semibold text-luxury-navy mb-4">
                  Connect With Us
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919010344488"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7 0l-1.1 1.1c-.1.1-.2.1-.3 0-1.2-1.1-2-2.5-2.2-4.1 0-.1 0-.3.1-.4l.3-.4c.1-.1.1-.3 0-.4l-.5-.6c-.1-.1-.3-.3-.4-.3h-.7c-.2 0-.3 0-.4.1l-.7 1.4c-.1.2-.3.4-.3.6-.1 1.2.3 2.5 1.1 3.5.8 1 1.9 1.7 3.1 2.1.5.2 1 .3 1.5.3.4 0 .8 0 1.2-.1.4-.1.7-.2 1-.4.3-.1.5-.3.7-.5l.6-.7c.1-.1.1-.3 0-.4l-1.1-1.1z"/>
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.8l-1.4 4.1 4.3-1.4c1.6 1 3.4 1.5 5.2 1.5 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.8 15.2c-1.3.7-2.8 1.1-4.3 1.1-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3 .2-.3c-1.2-1.7-1.9-3.7-1.9-5.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/ramky.infra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.1 0 3.5 0 4.7.1 3.2.1 4.6 1.6 4.7 4.7.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 3.2-1.6 4.6-4.7 4.7-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-3.2-.1-4.6-1.6-4.7-4.7-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-3.2 1.6-4.6 4.7-4.7 1.2-.1 1.6-.1 4.7-.1zm0-2.2c-3.2 0-3.6 0-4.9.1-4.2.2-6.1 2.1-6.3 6.3-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.2 4.2 2.1 6.1 6.3 6.3 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c4.2-.2 6.1-2.1 6.3-6.3.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.2-4.2-2.1-6.1-6.3-6.3-1.3-.1-1.7-.1-4.9-.1z"/>
                      <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/>
                      <circle cx="18.3" cy="5.7" r="1.4"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Ramky-infra-developers-pvt-ltd/61572977442262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.7-.8 8.4-4.9 8.4-9.9z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/RamkyInfra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="X (Twitter)"
                    title="X (Twitter)"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.9 8.3c-.7.4-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.8-5 1.8-.3 0-.6 0-.9-.1 1.8 1.2 3.9 1.8 6.1 1.8 7.3 0 11.3-6.1 11.3-11.3 0-.2 0-.4 0-.6.8-.6 1.5-1.3 2-2.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.threads.com/@ramky.infra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Threads"
                    title="Threads"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 8.5V4h-4.5v2.9h-3.2V4H7v4.5h3.2v3.2H7V16h4.5v-2.9h3.2V16H19v-4.5h-4.5V8.5H19z"/>
                    </svg>
                  </a>
                  <a
                    href="http://youtube.com/@ramkyinfra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5 6.2c0-1.9-1.5-3.4-3.4-3.4H3.9C2 2.8.5 4.3.5 6.2v11.6c0 1.9 1.5 3.4 3.4 3.4h16.2c1.9 0 3.4-1.5 3.4-3.4V6.2zM9 15.5V8.5l7 3.5-7 3.5z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ramky-infra-and-developers-pvt-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8.3 19.5H5.2V9.3h3.1v10.2zM6.8 8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm12.7 11.5h-3.1v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9.3h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.7 2.4 4.7 5.5v5z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-4">
            Visit Our Office
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to meet you in person. Visit us at our office to discuss your dream home.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-xl border border-luxury-champagne/30">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2389815104!2d78.4006!3d17.3976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzUxLjQiTiA3OMKwMjQnMDIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramky Infra Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-white p-6">
            <h4 className="text-xl font-playfair font-semibold text-luxury-navy mb-2">
              Ramky Infra Developers
            </h4>
            <p className="text-muted-foreground">
              KVR Holdings, 2nd Floor, Road #36, Jubilee Hills, Hyderabad
            </p>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/place/17°23'51.4%22N+78°24'02.2%22E/@17.3976,78.4006,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.3976!4d78.4006?entry=ttu&pb=!1m14!1m8!1m3!1d3807.2389815104!2d78.4006!3d17.3976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzUxLjQiTiA3OMKwMjQnMDIuMiJF!5e0!3m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-luxury-gold hover:text-luxury-champagne transition-colors mt-2"
                aria-label="Open in Google Maps"
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
