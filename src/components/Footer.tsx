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
  Crown,
  Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const premiumServices = [
    'Luxury Kitchen Renovation',
    'Spa Bathroom Remodel',
    'Custom Home Construction',
    'Elite Interior Design',
    'Smart Home Integration',
    'Premium Electrical Services',
    'Luxury Plumbing & Fixtures',
    'Climate Control Systems'
  ];

  const companyLinks = [
    'About DanyYorks',
    'Our Elite Team',
    'Careers',
    'Press & Awards',
    'Design Blog',
    'Case Studies',
    'Premium Partners',
    'Contact Us'
  ];

  const supportLinks = [
    'Premium Support',
    'Client Portal',
    'Design Guidelines',
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Accessibility',
    'Site Map'
  ];

  const eliteLocations = [
    'Beverly Hills, CA',
    'Manhattan, NY',
    'Malibu, CA',
    'Hamptons, NY',
    'Pacific Heights, SF',
    'Scottsdale, AZ',
    'Miami Beach, FL',
    'Aspen, CO'
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 text-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Premium Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary-500 via-secondary-400 to-secondary-600 text-primary-900 p-4 rounded-2xl shadow-luxury">
                  <div className="w-12 h-12 flex items-center justify-center font-serif font-bold text-3xl">D</div>
                </div>
                <div className="absolute -top-2 -right-2 bg-accent-400 rounded-full p-2">
                  <Crown className="h-4 w-4 text-primary-900" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-3xl font-serif font-bold">DanyYorks</h3>
                <p className="text-secondary-300 font-semibold">Premium Home Transformations</p>
              </div>
            </div>
            
            <p className="text-primary-100 mb-8 leading-relaxed text-lg">
              For over a decade, DanyYorks has been the premier choice for discerning homeowners 
              seeking exceptional craftsmanship and luxury home transformations. We don't just 
              renovate homes – we create masterpieces.
            </p>

            {/* Premium Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-sm">
                <Shield className="h-6 w-6 text-accent-400 mr-3" />
                <span className="text-primary-200">Licensed & Insured</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-6 w-6 text-secondary-400 mr-3" />
                <span className="text-primary-200">Award Winning</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-6 w-6 text-secondary-400 mr-3" />
                <span className="text-primary-200">4.9★ Elite Rating</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-6 w-6 text-accent-400 mr-3" />
                <span className="text-primary-200">24/7 Premium Support</span>
              </div>
            </div>

            {/* Premium Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-400 mr-4" />
                <span className="text-primary-200 font-semibold">(555) 123-YORK</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-400 mr-4" />
                <span className="text-primary-200">elite@danyorks.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-secondary-400 mr-4" />
                <span className="text-primary-200">Serving Premium Markets Nationwide</span>
              </div>
            </div>
          </div>

          {/* Premium Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Crown className="h-5 w-5 text-secondary-400 mr-2" />
              Premium Services
            </h4>
            <ul className="space-y-4">
              {premiumServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-secondary-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
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
              <Award className="h-5 w-5 text-secondary-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-secondary-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center">
              <Sparkles className="h-5 w-5 text-secondary-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-secondary-300 transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Elite Service Areas */}
        <div className="mt-16 pt-12 border-t border-primary-700/50">
          <h4 className="text-xl font-bold mb-8 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-secondary-400 mr-2" />
            Elite Service Areas
          </h4>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {eliteLocations.map((location, index) => (
              <div key={index} className="text-primary-200 hover:text-secondary-300 transition-colors cursor-pointer">
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Premium Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-primary-700/50">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Crown className="h-6 w-6 text-secondary-400 mr-2" />
                  Join Our Elite Circle
                </h4>
                <p className="text-primary-200 text-lg">
                  Receive exclusive design insights, luxury trends, and special offers for our premium clientele.
                </p>
              </div>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white placeholder-primary-200 font-medium"
                />
                <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 px-8 py-4 rounded-r-2xl hover:from-secondary-400 hover:to-secondary-300 transition-all font-bold text-primary-900 shadow-luxury">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Bar */}
      <div className="border-t border-primary-700/50 bg-primary-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-primary-200 font-medium">
              © {currentYear} DanyYorks. All rights reserved. | Premium Home Transformations Since 2010
            </div>
            
            {/* Premium Social Links */}
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a 
                href="#" 
                className="text-primary-300 hover:text-secondary-300 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-secondary-300 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-secondary-300 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-primary-300 hover:text-secondary-300 transition-all transform hover:scale-110"
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