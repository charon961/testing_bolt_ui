import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  Shield,
  Award,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Home Services',
    'Construction & Renovation',
    'Professional Services',
    'Business Services',
    'Automotive Services',
    'Health & Wellness',
    'Technology Services',
    'Creative Services'
  ];

  const companyLinks = [
    'About ServiceHub',
    'How It Works',
    'Success Stories',
    'Careers',
    'Press & Media',
    'Blog',
    'Help Center',
    'Contact Us'
  ];

  const supportLinks = [
    'Customer Support',
    'Vendor Support',
    'Safety Guidelines',
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Accessibility',
    'Site Map'
  ];

  const popularCities = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA'
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white p-4 rounded-2xl shadow-luxury">
                  <div className="w-12 h-12 flex items-center justify-center font-display font-bold text-3xl">S</div>
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-400 rounded-full p-2">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-3xl font-display font-bold">ServiceHub</h3>
                <p className="text-emerald-300 font-semibold">Connect • Serve • Succeed</p>
              </div>
            </div>
            
            <p className="text-primary-100 mb-8 leading-relaxed text-lg">
              ServiceHub is the leading marketplace connecting customers with trusted service providers. 
              Whether you need services or want to grow your business, we make it simple, safe, and successful.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-sm">
                <Shield className="h-6 w-6 text-emerald-400 mr-3" />
                <span className="text-primary-200">Verified & Insured</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-6 w-6 text-orange-400 mr-3" />
                <span className="text-primary-200">Award Winning</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-6 w-6 text-orange-400 mr-3" />
                <span className="text-primary-200">4.8★ Rating</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-6 w-6 text-emerald-400 mr-3" />
                <span className="text-primary-200">24/7 Support</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-4" />
                <span className="text-primary-200 font-semibold">1-800-SERVICE</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-4" />
                <span className="text-primary-200">support@servicehub.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-400 mr-4" />
                <span className="text-primary-200">Serving Nationwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Users className="h-5 w-5 text-emerald-400 mr-2" />
              Popular Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-emerald-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Award className="h-5 w-5 text-orange-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-emerald-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Sparkles className="h-5 w-5 text-orange-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-emerald-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="mt-16 pt-12 border-t border-primary-700/50">
          <h4 className="text-xl font-bold mb-8 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-emerald-400 mr-2" />
            Popular Cities
          </h4>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {popularCities.map((city, index) => (
              <div key={index} className="text-primary-200 hover:text-emerald-300 transition-colors cursor-pointer">
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-primary-700/50">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-emerald-400 mr-2" />
                  Stay Connected
                </h4>
                <p className="text-primary-200 text-lg">
                  Get the latest updates, tips, and exclusive offers from ServiceHub.
                </p>
              </div>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white placeholder-primary-200 font-medium"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 rounded-r-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-bold text-white shadow-luxury">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700/50 bg-primary-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-primary-200 font-medium">
              © {currentYear} ServiceHub. All rights reserved. | Connecting Communities Since 2020
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a 
                href="#" 
                className="text-primary-300 hover:text-emerald-300 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-emerald-300 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-emerald-300 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-emerald-300 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;