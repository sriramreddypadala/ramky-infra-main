import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Leaf, ShieldCheck } from "lucide-react";
// Video is now served from the public directory
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-luxury-navy text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black/60 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
          width="1920"
          height="1080"
          onLoadStart={(e) => console.log('Video loading started')}
          onCanPlay={(e) => {
            console.log('Video can play');
            const video = e.target as HTMLVideoElement;
            video.play().catch(error => {
              console.error('Autoplay error:', error);
            });
          }}
          onError={(e) => {
            console.error('Video error:', e);
            const video = e.target as HTMLVideoElement;
            console.error('Video error details:', video.error);
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold text-sm font-medium px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              DTCP & RERA Approved Projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
              Premium <span className="text-luxury-gold">Luxury Plots</span> in Hyderabad's Most Sought-After Locations
            </h1>
            
            <p className="text-xl text-luxury-champagne/90 mb-8 max-w-2xl">
              Invest in DTCP & RERA approved open plots and luxury villas across Hyderabad, Kadthal, and Fourth Future City. Experience eco-friendly, IGBC certified living with premium amenities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy text-lg h-14 px-8 rounded-lg font-semibold">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[/* eslint-disable @typescript-eslint/no-unused-vars */
                { icon: <MapPin className="w-6 h-6 text-luxury-gold" />, text: 'Prime Locations' },
                { icon: <CheckCircle className="w-6 h-6 text-luxury-gold" />, text: 'DTCP & RERA Approved' },
                { icon: <Leaf className="w-6 h-6 text-luxury-gold" />, text: 'Eco-Friendly Projects' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-lg"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>        
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-white/70 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
