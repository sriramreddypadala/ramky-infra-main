import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Properties',
      links: ['Estates',  'Commercial', 'Investment','Luxury Homes']
    },
    {
      title: 'Services',
      links: ['Property Management', 'Consultation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Team', 'Careers']
    },
    {
      title: 'Support',
      links: ['Contact','Privacy']
    }
  ];

  return (
    <footer className="bg-luxury-navy text-luxury-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold luxury-text-gradient mb-4">
              RAMKY INFRA
            </h3>
            <p className="text-luxury-champagne leading-relaxed mb-6">
              Your premier destination for luxury real estate. Discover exceptional properties and experience unparalleled service in the world's most prestigious locations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
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
                className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8.3 19.5H5.2V9.3h3.1v10.2zM6.8 8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm12.7 11.5h-3.1v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9.3h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.7 2.4 4.7 5.5v5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-playfair font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-champagne/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-champagne text-sm">
              © 2025 Zidi digitals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <a href="#" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
