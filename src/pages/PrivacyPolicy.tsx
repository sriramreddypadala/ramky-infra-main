import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Ramky Infra';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-cream">
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </motion.div>

        <Card className="border-luxury-gold/30 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="prose max-w-none text-luxury-navy">
              <div className="mb-8">
                <p className="text-lg mb-6">
                  At Ramky Infra, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Information We Collect</h2>
                  <p>We may collect personal information including but not limited to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Personal identification information (Name, email address, phone number)</li>
                    <li>Contact information including email address and phone number</li>
                    <li>Demographic information such as postcode, preferences, and interests</li>
                    <li>Other information relevant to customer surveys and/or offers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">How We Use Your Information</h2>
                  <p>We require this information to understand your needs and provide you with better service, and in particular for the following reasons:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Internal record keeping</li>
                    <li>To improve our products and services</li>
                    <li>To periodically send promotional emails about new projects, special offers, or other information which we think you may find interesting</li>
                    <li>To contact you for market research purposes</li>
                    <li>To customize the website according to your interests</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Security</h2>
                  <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Links to Other Websites</h2>
                  <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and such sites are not governed by this privacy statement.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Controlling Your Personal Information</h2>
                  <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                    <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@ramkyinfra.com</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Changes to This Policy</h2>
                  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date below.</p>
                  <p className="mt-4 font-medium">This policy was last updated on June 10, 2025.</p>
                </div>

                <div className="pt-8">
                  <h2 className="text-2xl font-playfair font-semibold text-luxury-gold mb-4">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="mt-4 space-y-2">
                    <li>Email: info@ramkyinfra.com</li>
                    <li>Phone: +91 40 4567 4567</li>
                    <li>Address: Ramky Towers, Financial District, Nanakramguda, Hyderabad, Telangana 500032</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
