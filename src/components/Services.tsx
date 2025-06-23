import React, { useState } from 'react';
import { 
  Crown, 
  Hammer, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Wind, 
  Home,
  Palette,
  Search,
  ArrowRight,
  Star,
  Award,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const serviceCategories = [
    'All',
    'Luxury Renovation',
    'Custom Construction',
    'Elite Design',
    'Premium Maintenance',
    'Smart Home'
  ];

  const services = [
    {
      id: 1,
      name: 'Luxury Kitchen Remodeling',
      category: 'Luxury Renovation',
      icon: <Crown className="h-8 w-8" />,
      description: 'Transform your kitchen into a culinary masterpiece with premium materials and cutting-edge design',
      rating: 4.9,
      projects: 650,
      startingPrice: '$45,000',
      features: ['Custom Italian Cabinetry', 'Quartz & Marble Countertops', 'Professional Appliances', 'Smart Kitchen Technology'],
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Most Popular',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      id: 2,
      name: 'Spa Bathroom Renovations',
      category: 'Luxury Renovation',
      icon: <Droplets className="h-8 w-8" />,
      description: 'Create your personal spa retreat with luxury fixtures and premium finishes',
      rating: 4.9,
      projects: 480,
      startingPrice: '$25,000',
      features: ['Rain Shower Systems', 'Heated Floors', 'Custom Vanities', 'Smart Mirrors'],
      image: 'https://images.pexels.com/photos/6969769/pexels-photo-6969769.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Premium',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      id: 3,
      name: 'Elite Interior Design',
      category: 'Elite Design',
      icon: <Palette className="h-8 w-8" />,
      description: 'Bespoke interior design services that reflect your unique style and sophistication',
      rating: 4.9,
      projects: 390,
      startingPrice: '$15,000',
      features: ['3D Visualization', 'Custom Furniture', 'Art Curation', 'Lighting Design'],
      image: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Award Winner',
      gradient: 'from-luxury-500 to-luxury-600'
    },
    {
      id: 4,
      name: 'Smart Home Integration',
      category: 'Smart Home',
      icon: <Zap className="h-8 w-8" />,
      description: 'Future-proof your home with intelligent automation and premium electrical systems',
      rating: 4.8,
      projects: 720,
      startingPrice: '$8,000',
      features: ['Home Automation', 'Smart Lighting', 'Security Systems', 'Energy Management'],
      image: 'https://images.pexels.com/photos/5691574/pexels-photo-5691574.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Trending',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      id: 5,
      name: 'Premium Plumbing Services',
      category: 'Premium Maintenance',
      icon: <Hammer className="h-8 w-8" />,
      description: 'Master craftsmen delivering exceptional plumbing solutions with luxury fixtures',
      rating: 4.8,
      projects: 850,
      startingPrice: '$500',
      features: ['Luxury Fixtures', 'Pipe Upgrades', 'Water Filtration', '24/7 Concierge Service'],
      image: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Reliable',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      id: 6,
      name: 'Climate Control Systems',
      category: 'Premium Maintenance',
      icon: <Wind className="h-8 w-8" />,
      description: 'Premium HVAC solutions for optimal comfort and energy efficiency',
      rating: 4.8,
      projects: 540,
      startingPrice: '$3,500',
      features: ['Smart Thermostats', 'Air Purification', 'Zoned Climate', 'Energy Optimization'],
      image: 'https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Eco-Friendly',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      id: 7,
      name: 'Custom Home Construction',
      category: 'Custom Construction',
      icon: <Home className="h-8 w-8" />,
      description: 'Architectural excellence in custom home building and major additions',
      rating: 4.9,
      projects: 125,
      startingPrice: '$500,000',
      features: ['Architectural Design', 'Premium Materials', 'Project Management', 'Quality Assurance'],
      image: 'https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Exclusive',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      id: 8,
      name: 'Luxury Painting Services',
      category: 'Luxury Renovation',
      icon: <Paintbrush className="h-8 w-8" />,
      description: 'Artisan painting services with premium materials and flawless execution',
      rating: 4.8,
      projects: 920,
      startingPrice: '$2,500',
      features: ['Premium Paints', 'Decorative Finishes', 'Color Consultation', 'Surface Preparation'],
      image: 'https://images.pexels.com/photos/6924998/pexels-photo-6924998.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Artistic',
      gradient: 'from-luxury-500 to-luxury-600'
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
      case 'Most Popular': return 'bg-gradient-to-r from-secondary-500 to-secondary-600';
      case 'Premium': return 'bg-gradient-to-r from-primary-500 to-primary-600';
      case 'Award Winner': return 'bg-gradient-to-r from-luxury-500 to-luxury-600';
      case 'Trending': return 'bg-gradient-to-r from-accent-500 to-accent-600';
      case 'Exclusive': return 'bg-gradient-to-r from-dark-700 to-dark-800';
      default: return 'bg-gradient-to-r from-primary-500 to-primary-600';
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Crown className="h-5 w-5 mr-2" />
            Premium Services Portfolio
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
            Our Elite Services
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            From luxury renovations to custom construction, we deliver 
            <span className="text-secondary-600 font-semibold"> exceptional craftsmanship</span> that 
            transforms your vision into reality.
          </p>
        </div>

        {/* Premium Search and Filter */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Premium Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search premium services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 placeholder-primary-500 font-medium shadow-premium transition-all"
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
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-luxury'
                      : 'bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 border-2 border-primary-200 hover:border-primary-300 shadow-premium'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Services Grid */}
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
                
                {/* Premium Badge */}
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
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-secondary-400 mr-1" />
                    <span className="text-sm font-bold text-primary-900">{service.rating}</span>
                    <span className="text-sm text-primary-500 ml-1">({service.projects})</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary-500 font-medium">Starting at</p>
                    <p className="font-bold text-lg text-secondary-600">{service.startingPrice}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-primary-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-primary-500 font-medium mt-2">
                        +{service.features.length - 3} more premium features
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-2xl font-bold hover:shadow-glow transition-all transform hover:scale-[1.02] flex items-center justify-center group`}>
                  Get Premium Quote
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

        {/* Premium CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 text-white shadow-elite relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-secondary-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-400 rounded-full blur-2xl"></div>
              </div>
            </div>
            
            <div className="relative">
              <Crown className="h-16 w-16 text-secondary-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Don't see your dream project?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                We specialize in custom solutions across all luxury home improvement categories. 
                Let our elite team bring your unique vision to life.
              </p>
              <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-10 py-4 rounded-2xl font-bold text-lg hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center">
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