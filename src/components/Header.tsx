import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, MapPin, Phone, Star, Crown, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: 'Luxury Renovations',
      items: ['Premium Kitchen Remodeling', 'Spa Bathroom Renovations', 'Master Suite Transformations', 'Whole Home Makeovers'],
      icon: <Crown className="h-5 w-5" />
    },
    {
      category: 'Custom Construction',
      items: ['Home Additions & Extensions', 'Custom Home Building', 'Outdoor Living Spaces', 'Architectural Modifications'],
      icon: <Award className="h-5 w-5" />
    },
    {
      category: 'Interior Design',
      items: ['Luxury Interior Design', 'Space Planning & Layout', 'Custom Furniture & Fixtures', 'Color & Material Consultation'],
      icon: <Star className="h-5 w-5" />
    },
    {
      category: 'Premium Services',
      items: ['Electrical & Smart Home', 'Plumbing & Luxury Fixtures', 'HVAC & Climate Control', 'Concierge Maintenance'],
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-luxury border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-secondary-400" />
                <span className="font-medium">(555) 123-YORK</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-secondary-400" />
                <span>Serving Premium Markets Nationwide</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Crown className="h-4 w-4 mr-2 text-secondary-400" />
                <span className="font-medium">Award-Winning Excellence</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-secondary-400" />
                <span className="font-bold">4.9/5</span>
                <span className="ml-1">• 3,500+ Elite Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Premium Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white p-3 rounded-xl shadow-luxury group-hover:shadow-glow transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="font-serif font-bold text-2xl">D</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 bg-secondary-400 rounded-full p-1">
                <Crown className="h-3 w-3 text-primary-900" />
              </div>
            </div>
            <div className="ml-4">
              <h1 className={`text-3xl font-serif font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                DanyYorks
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-primary-100'
              }`}>
                Premium Home Transformations
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900' 
                    : 'text-white hover:text-secondary-300'
                }`}
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Premium Services Dropdown */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-[600px] bg-white shadow-luxury rounded-2xl mt-3 py-6 border border-gray-100 animate-fade-in-down"
                >
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3 group">
                        <div className="flex items-center space-x-2 text-primary-900 group-hover:text-primary-700 transition-colors">
                          {service.icon}
                          <h3 className="font-bold text-sm">{service.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx}>
                              <a 
                                href="#" 
                                className="text-sm text-gray-600 hover:text-primary-600 block py-1 transition-colors hover:translate-x-1 transform duration-200"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 px-6">
                    <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-[1.02] shadow-premium">
                      View All Premium Services
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#portfolio" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-primary-900' 
                : 'text-white hover:text-secondary-300'
            }`}>
              Elite Portfolio
            </a>
            <a href="#about" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-primary-900' 
                : 'text-white hover:text-secondary-300'
            }`}>
              Our Story
            </a>
            <a href="#testimonials" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-primary-900' 
                : 'text-white hover:text-secondary-300'
            }`}>
              Client Stories
            </a>
            <a href="#contact" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-primary-900' 
                : 'text-white hover:text-secondary-300'
            }`}>
              Contact
            </a>
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-secondary-500 via-secondary-400 to-secondary-500 text-primary-900 px-8 py-3 rounded-xl font-bold hover:from-secondary-400 hover:to-secondary-400 transition-all transform hover:scale-105 shadow-premium hover:shadow-glow animate-pulse-glow">
              Get Premium Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50' 
                : 'text-white hover:text-secondary-300 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-primary-700 hover:text-primary-900 font-semibold py-2">Our Services</a>
            <a href="#portfolio" className="block text-primary-700 hover:text-primary-900 font-semibold py-2">Elite Portfolio</a>
            <a href="#about" className="block text-primary-700 hover:text-primary-900 font-semibold py-2">Our Story</a>
            <a href="#testimonials" className="block text-primary-700 hover:text-primary-900 font-semibold py-2">Client Stories</a>
            <a href="#contact" className="block text-primary-700 hover:text-primary-900 font-semibold py-2">Contact</a>
            <button className="w-full bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-6 py-3 rounded-xl font-bold mt-4 shadow-premium">
              Get Premium Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;