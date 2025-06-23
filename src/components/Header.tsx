import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, MapPin, Phone, Star, Users, Briefcase } from 'lucide-react';

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
      category: 'Home Services',
      items: ['Plumbing & Repairs', 'Electrical Services', 'HVAC & Heating', 'Cleaning Services'],
      icon: <Users className="h-5 w-5" />
    },
    {
      category: 'Construction',
      items: ['Home Renovation', 'Kitchen Remodeling', 'Bathroom Renovation', 'Roofing Services'],
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      category: 'Professional Services',
      items: ['Interior Design', 'Landscaping', 'Painting Services', 'Handyman Services'],
      icon: <Star className="h-5 w-5" />
    },
    {
      category: 'Business Services',
      items: ['Commercial Cleaning', 'Office Setup', 'IT Support', 'Marketing Services'],
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-luxury border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="font-medium">1-800-SERVICE</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-emerald-400" />
                <span>Nationwide Service Network</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="font-medium">10,000+ Trusted Vendors</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-emerald-400" />
                <span className="font-bold">4.8/5</span>
                <span className="ml-1">• 50,000+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white p-3 rounded-xl shadow-luxury group-hover:shadow-glow transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="font-display font-bold text-2xl">S</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 bg-orange-400 rounded-full p-1">
                <Users className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <h1 className={`text-3xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                ServiceHub
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-primary-100'
              }`}>
                Connect • Serve • Succeed
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
                    ? 'text-primary-700 hover:text-emerald-600' 
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                Find Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Services Dropdown */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-[600px] bg-white shadow-luxury rounded-2xl mt-3 py-6 border border-gray-100 animate-fade-in-down"
                >
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3 group">
                        <div className="flex items-center space-x-2 text-primary-900 group-hover:text-emerald-600 transition-colors">
                          {service.icon}
                          <h3 className="font-bold text-sm">{service.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx}>
                              <a 
                                href="#" 
                                className="text-sm text-gray-600 hover:text-emerald-600 block py-1 transition-colors hover:translate-x-1 transform duration-200"
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
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-premium">
                      Browse All Services
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#vendors" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-300'
            }`}>
              For Vendors
            </a>
            <a href="#how-it-works" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-300'
            }`}>
              How It Works
            </a>
            <a href="#testimonials" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-300'
            }`}>
              Reviews
            </a>
            <a href="#contact" className={`font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-primary-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-300'
            }`}>
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-primary-700 hover:text-emerald-600 font-semibold px-4 py-2 rounded-lg transition-all">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-premium hover:shadow-glow animate-pulse-glow">
              Join as Vendor
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-primary-700 hover:text-emerald-600 hover:bg-primary-50' 
                : 'text-white hover:text-emerald-300 hover:bg-white/10'
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
            <a href="#services" className="block text-primary-700 hover:text-emerald-600 font-semibold py-2">Find Services</a>
            <a href="#vendors" className="block text-primary-700 hover:text-emerald-600 font-semibold py-2">For Vendors</a>
            <a href="#how-it-works" className="block text-primary-700 hover:text-emerald-600 font-semibold py-2">How It Works</a>
            <a href="#testimonials" className="block text-primary-700 hover:text-emerald-600 font-semibold py-2">Reviews</a>
            <a href="#contact" className="block text-primary-700 hover:text-emerald-600 font-semibold py-2">Contact</a>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button className="w-full text-primary-700 hover:text-emerald-600 font-semibold py-2">Sign In</button>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-premium">
                Join as Vendor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;