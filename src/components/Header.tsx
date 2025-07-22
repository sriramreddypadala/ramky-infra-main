import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { getAssetPath } from '@/utils/assetUtils';
import logo from '@/assets/home/images/ramky logo 2.png';


// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const mobileMenuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects' },
    { name: 'DAMAC Dubai', href: '/damac' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMenuOpen ? 'py-0' : 'py-2'
      }`}
    >
      {/* Glass morphism background */}
      <div className={`absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-white/70 to-white/40 dark:from-gray-900/70 dark:to-gray-900/40 
        shadow-lg border-b border-white/20 dark:border-gray-700/30 transition-all duration-500 ${
          scrolled || isMenuOpen ? 'opacity-100' : 'opacity-90 hover:opacity-100'
        }`}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block h-12 md:h-14 transition-transform duration-300 hover:scale-105">
              <img 
                src={logo} 
                alt="Ramky Infra & Developers" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = getAssetPath('/public/logo.png');
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <motion.div 
              className="flex items-center space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div 
                    key={item.name} 
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className={`px-5 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all duration-300 ${
                        isActive 
                          ? 'text-luxury-gold bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm' 
                          : 'text-foreground/90 hover:bg-white/20 hover:dark:bg-gray-800/30 hover:text-luxury-gold'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                    <motion.span 
                      className="absolute bottom-2 left-1/2 w-4/5 h-0.5 bg-luxury-gold origin-center rounded-full"
                      initial={{ scaleX: 0, x: '-50%' }}
                      animate={{ 
                        scaleX: isActive ? 1 : 0,
                        x: '-50%',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              key="menu-panel"
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Menu Header with Logo */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <Link to="/" className="block h-10" onClick={() => setIsMenuOpen(false)}>
                  <img 
                    src={logo} 
                    alt="Ramky Infra & Developers" 
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getAssetPath('/public/logo.png');
                    }}
                  />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive
                            ? 'text-luxury-gold bg-luxury-gold/10 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.icon && (
                          <item.icon 
                            className={`w-5 h-5 mr-3 ${
                              isActive ? 'text-luxury-gold' : 'text-gray-500 dark:text-gray-400'
                            }`} 
                          />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+919391633333"
                      className="flex items-center px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="bg-luxury-gold/10 p-2 rounded-lg mr-3">
                        <Phone className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Call us</div>
                        <div className="font-medium">+91 93916 33333</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:info@ramkyinfra.com"
                      className="flex items-center px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="bg-luxury-gold/10 p-2 rounded-lg mr-3">
                        <Mail className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Email us</div>
                        <div className="font-medium">info@ramkyinfra.com</div>
                      </div>
                    </a>
                    <a 
                      href="https://wa.me/919391633333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors mt-4"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.222-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.78-1.66-2.08-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.508-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.492.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.016a9.27 9.27 0 01-5.031-1.465l-.36-.214-3.741.982.998-3.648-.235-.374a9.3 9.3 0 01-1.452-4.8 9.325 9.325 0 0115.47-6.59 9.325 9.325 0 012.727 6.59 9.32 9.32 0 01-9.4 9.119z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
