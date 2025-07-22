
import { Button } from '@/components/ui/button';
import aboutHero from '@/assets/about-hero.jpg';
const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '₹500Cr+', label: 'Projects Value' },
    { value: '500+', label: 'Happy Families' },
    { value: '5+', label: 'Major Projects' }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Ramky Infra */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            About Ramky Infra Developers
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Ramky Infra Developers is a leading real estate development company committed to creating sustainable and eco-friendly living spaces. With a focus on innovation and quality, we have been shaping landscapes and transforming lives since our inception.
            </p>
            <p>
              Our projects are known for their thoughtful planning, superior design, and attention to detail. We believe in building communities that not only offer modern amenities but also promote a healthy and balanced lifestyle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-navy">
              Our Vision & Mission
            </h2>
            
            <div className="space-y-6">
              <div className="bg-luxury-cream/50 p-6 rounded-xl">
                <h3 className="text-2xl font-playfair font-semibold text-luxury-gold mb-3">Vision</h3>
                <p className="text-muted-foreground">
                  To be a pioneering force in the real estate industry, setting new standards for innovation, quality, and sustainability. We aspire to create vibrant, eco-conscious communities that enrich the lives of our residents and contribute positively to the environment.
                </p>
              </div>
              
              <div className="bg-luxury-cream/50 p-6 rounded-xl">
                <h3 className="text-2xl font-playfair font-semibold text-luxury-gold mb-3">Mission</h3>
                <p className="text-muted-foreground">
                  To create exceptional living spaces that blend modern amenities with sustainable practices. We are committed to delivering homes that not only meet the needs of our customers but also surpass their expectations. Through our dedication to quality, integrity, and customer satisfaction, we aim to build long-lasting relationships and create homes that inspire and endure.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutHero}
                alt="Ramky Infra Development - Sustainable and Nature-Integrated Real Estate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* DAMAC Partnership Section */}
        <div className="bg-luxury-navy text-luxury-cream rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ramky Infra Developers and DAMAC Dubai
            </h2>
            <p className="text-xl text-luxury-champagne mb-8">
              Associated Partnered with DAMAC Dubai for Projects like Cavalli, Elegance, and More!
            </p>
            <div className="space-y-4 text-luxury-cream/90 mb-8 text-left max-w-3xl mx-auto">
              <p>
                Ramky Infra Developers is proud to be a trusted associated partner with DAMAC Dubai, a renowned name in the real estate industry. Together, we are bringing to life prestigious projects that redefine luxury living in Dubai.
              </p>
              <p>
                Our collaboration includes iconic developments like Cavalli, Elegance, Safa One, Venice, and Safa Two. These projects showcase the epitome of luxury and architectural excellence, reflecting our commitment to delivering exceptional living spaces.
              </p>
              <p>
                At Ramky Infra Developers, we are dedicated to creating sustainable and innovative solutions that enhance the quality of life for our customers. Partnering with DAMAC Dubai allows us to combine our expertise and resources to deliver world-class projects that exceed expectations.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 mt-4"
            >
              View Our Projects
            </Button>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-navy mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guiding Ramky Infra with vision and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Director 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-1">Mr. Ramky</h3>
              <p className="text-luxury-gold font-medium">Managing Director</p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground italic">
                "Leading Real Estate Innovators"
              </p>
              <p className="text-muted-foreground">
                With a steadfast commitment to quality and excellence, we have successfully delivered projects that redefine the real estate sector.
              </p>
            </div>
          </div>

          {/* Director 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-playfair font-bold text-luxury-navy mb-1">Mrs.Haritha</h3>
              <p className="text-luxury-gold font-medium">Managing Director</p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground italic">
                "Leadership Quote"
              </p>
              <p className="text-muted-foreground">
                Brief description or message from the director. Highlight key achievements or philosophy.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-luxury-cream/50 rounded-xl">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-luxury-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Spacing */}
        <div className="mt-20"></div>
      </div>
    </section>
  );
};

export default About;
