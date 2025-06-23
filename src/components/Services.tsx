import React, { useState } from 'react';
import { 
  Wrench, 
  Zap, 
  Droplets, 
  Wind, 
  Home,
  Palette,
  Search,
  ArrowRight,
  Star,
  Users,
  Sparkles,
  TrendingUp,
  Hammer,
  Scissors,
  Car,
  Laptop
} from 'lucide-react';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const serviceCategories = [
    'All',
    'Home Services',
    'Construction',
    'Professional',
    'Business',
    'Automotive'
  ];

  const services = [
    {
      id: 1,
      name: 'Plumbing Services',
      category: 'Home Services',
      icon: <Droplets className="h-8 w-8" />,
      description: 'Professional plumbing repairs, installations, and emergency services',
      rating: 4.8,
      providers: 850,
      startingPrice: '$75',
      features: ['Emergency Service', 'Licensed Plumbers', 'Free Estimates', '24/7 Availability'],
      image: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Most Popular',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 2,
      name: 'Electrical Services',
      category: 'Home Services',
      icon: <Zap className="h-8 w-8" />,
      description: 'Certified electricians for wiring, repairs, and installations',
      rating: 4.9,
      providers: 720,
      startingPrice: '$85',
      features: ['Licensed Electricians', 'Safety Certified', 'Code Compliant', 'Warranty Included'],
      image: 'https://images.pexels.com/photos/5691574/pexels-photo-5691574.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Top Rated',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      name: 'Home Cleaning',
      category: 'Home Services',
      icon: <Sparkles className="h-8 w-8" />,
      description: 'Professional house cleaning services for busy homeowners',
      rating: 4.7,
      providers: 1200,
      startingPrice: '$60',
      features: ['Eco-Friendly Products', 'Insured Teams', 'Flexible Scheduling', 'Satisfaction Guaranteed'],
      image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Eco-Friendly',
      gradient: 'from-violet-500 to-violet-600'
    },
    {
      id: 4,
      name: 'HVAC Services',
      category: 'Home Services',
      icon: <Wind className="h-8 w-8" />,
      description: 'Heating, ventilation, and air conditioning repair and maintenance',
      rating: 4.8,
      providers: 540,
      startingPrice: '$95',
      features: ['Energy Efficient', 'Emergency Repairs', 'Maintenance Plans', 'Licensed Technicians'],
      image: 'https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Energy Saver',
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      id: 5,
      name: 'Home Renovation',
      category: 'Construction',
      icon: <Hammer className="h-8 w-8" />,
      description: 'Complete home remodeling and renovation services',
      rating: 4.9,
      providers: 320,
      startingPrice: '$2,500',
      features: ['Design Consultation', 'Project Management', 'Quality Materials', 'Licensed Contractors'],
      image: 'https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Premium',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 6,
      name: 'Interior Design',
      category: 'Professional',
      icon: <Palette className="h-8 w-8" />,
      description: 'Professional interior design and space planning services',
      rating: 4.8,
      providers: 280,
      startingPrice: '$150',
      features: ['3D Visualization', 'Style Consultation', 'Space Planning', 'Furniture Selection'],
      image: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Creative',
      gradient: 'from-violet-500 to-violet-600'
    },
    {
      id: 7,
      name: 'Landscaping',
      category: 'Professional',
      icon: <TrendingUp className="h-8 w-8" />,
      description: 'Professional landscaping and garden maintenance services',
      rating: 4.7,
      providers: 650,
      startingPrice: '$120',
      features: ['Design & Install', 'Maintenance Plans', 'Seasonal Care', 'Plant Warranty'],
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Seasonal',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 8,
      name: 'Auto Repair',
      category: 'Automotive',
      icon: <Car className="h-8 w-8" />,
      description: 'Certified automotive repair and maintenance services',
      rating: 4.6,
      providers: 420,
      startingPrice: '$89',
      features: ['Certified Mechanics', 'Diagnostic Service', 'Parts Warranty', 'Mobile Service'],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Mobile',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'Top Rated': return 'bg-gradient-to-r from-orange-500 to-orange-600';
      case 'Eco-Friendly': return 'bg-gradient-to-r from-violet-500 to-violet-600';
      case 'Energy Saver': return 'bg-gradient-to-r from-rose-500 to-rose-600';
      case 'Premium': return 'bg-gradient-to-r from-primary-600 to-primary-700';
      default: return 'bg-gradient-to-r from-primary-500 to-primary-600';
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-orange-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Users className="h-5 w-5 mr-2" />
            Popular Services
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
            Find the Right Service
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Browse our most popular services and connect with 
            <span className="text-emerald-600 font-semibold"> verified professionals</span> in your area.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 placeholder-primary-500 font-medium shadow-premium transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-luxury'
                      : 'bg-white text-primary-600 hover:bg-emerald-50 hover:text-emerald-700 border-2 border-primary-200 hover:border-emerald-300 shadow-premium'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl shadow-luxury hover:shadow-elite transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(service.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {service.badge}
                </div>
                
                {/* Service Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 text-primary-600 shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-orange-400 mr-1" />
                    <span className="text-sm font-bold text-primary-900">{service.rating}</span>
                    <span className="text-sm text-primary-500 ml-1">({service.providers})</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary-500 font-medium">Starting at</p>
                    <p className="font-bold text-lg text-emerald-600">{service.startingPrice}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-primary-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-primary-500 font-medium mt-2">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-2xl font-bold hover:shadow-glow transition-all transform hover:scale-[1.02] flex items-center justify-center group`}>
                  Get Quotes
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="text-primary-300 mb-6">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">No services found</h3>
            <p className="text-primary-600 text-lg">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 text-white shadow-elite relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            <div className="relative">
              <Users className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Don't see what you need?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                We have thousands of service providers across all categories. 
                Tell us what you need and we'll connect you with the right professionals.
              </p>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center">
                Request Custom Service
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;