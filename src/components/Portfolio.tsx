import React, { useState } from 'react';
import { ExternalLink, Calendar, DollarSign, Star, ArrowLeft, ArrowRight, Crown, Award, Sparkles } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Luxury Kitchen', 'Spa Bathroom', 'Elite Interiors', 'Custom Homes', 'Premium Commercial'];

  const projects = [
    {
      id: 1,
      title: 'Platinum Kitchen Transformation',
      category: 'Luxury Kitchen',
      client: 'Beverly Hills Estate',
      duration: '8 weeks',
      budget: '$125,000',
      rating: 5.0,
      description: 'Complete luxury kitchen renovation featuring custom Italian cabinetry, Calacatta marble countertops, and professional-grade appliances.',
      beforeImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Custom Italian Cabinetry', 'Calacatta Marble Countertops', 'Professional Appliances', 'Smart Home Integration'],
      testimonial: 'DanyYorks transformed our kitchen into a culinary masterpiece. The attention to detail is extraordinary!',
      badge: 'Award Winner',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      id: 2,
      title: 'Luxury Spa Bathroom Retreat',
      category: 'Spa Bathroom',
      client: 'Manhattan Penthouse',
      duration: '6 weeks',
      budget: '$85,000',
      rating: 5.0,
      description: 'Opulent bathroom renovation with heated marble floors, rain shower system, and custom vanities.',
      beforeImage: 'https://images.pexels.com/photos/6969859/pexels-photo-6969859.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/6969769/pexels-photo-6969769.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Heated Marble Floors', 'Rain Shower System', 'Custom Vanities', 'Smart Mirror Technology'],
      testimonial: 'Every morning feels like a luxury spa experience. Absolutely phenomenal craftsmanship!',
      badge: 'Premium',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      id: 3,
      title: 'Elite Open Concept Design',
      category: 'Elite Interiors',
      client: 'Malibu Residence',
      duration: '12 weeks',
      budget: '$180,000',
      rating: 5.0,
      description: 'Sophisticated open concept transformation with custom millwork, designer lighting, and premium finishes.',
      beforeImage: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/6969860/pexels-photo-6969860.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Custom Millwork', 'Designer Lighting', 'Premium Finishes', 'Architectural Details'],
      testimonial: 'The space feels like a luxury hotel suite. DanyYorks exceeded every expectation!',
      badge: 'Signature',
      gradient: 'from-luxury-500 to-luxury-600'
    },
    {
      id: 4,
      title: 'Architectural Estate Makeover',
      category: 'Custom Homes',
      client: 'Hamptons Estate',
      duration: '16 weeks',
      budget: '$350,000',
      rating: 5.0,
      description: 'Complete exterior and interior renovation of a prestigious estate with custom architectural elements.',
      beforeImage: 'https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Architectural Design', 'Custom Stonework', 'Landscape Integration', 'Smart Home Systems'],
      testimonial: 'Our home is now the crown jewel of the neighborhood. Truly exceptional work!',
      badge: 'Exclusive',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      id: 5,
      title: 'Master Suite Sanctuary',
      category: 'Elite Interiors',
      client: 'Pacific Heights Home',
      duration: '10 weeks',
      budget: '$95,000',
      rating: 5.0,
      description: 'Luxurious master suite addition with walk-in closet, spa bathroom, and private balcony.',
      beforeImage: 'https://images.pexels.com/photos/6969859/pexels-photo-6969859.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/6969873/pexels-photo-6969873.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Suite Addition', 'Walk-in Closet', 'Spa Bathroom', 'Private Balcony'],
      testimonial: 'Our dream master suite became reality. The quality is absolutely impeccable!',
      badge: 'Luxury',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      id: 6,
      title: 'Executive Office Transformation',
      category: 'Premium Commercial',
      client: 'Fortune 500 Headquarters',
      duration: '14 weeks',
      budget: '$450,000',
      rating: 4.9,
      description: 'Premium corporate office renovation with executive suites, conference rooms, and modern amenities.',
      beforeImage: 'https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Executive Suites', 'Smart Conference Rooms', 'Premium Materials', 'Technology Integration'],
      testimonial: 'Our new office space has dramatically improved productivity and client impressions!',
      badge: 'Corporate',
      gradient: 'from-dark-600 to-dark-700'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Award Winner': return 'bg-gradient-to-r from-secondary-500 to-secondary-600';
      case 'Premium': return 'bg-gradient-to-r from-primary-500 to-primary-600';
      case 'Signature': return 'bg-gradient-to-r from-luxury-500 to-luxury-600';
      case 'Exclusive': return 'bg-gradient-to-r from-accent-500 to-accent-600';
      case 'Luxury': return 'bg-gradient-to-r from-primary-600 to-primary-700';
      case 'Corporate': return 'bg-gradient-to-r from-dark-600 to-dark-700';
      default: return 'bg-gradient-to-r from-primary-500 to-primary-600';
    }
  };

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-elite">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className={`inline-block ${getBadgeColor(project.badge)} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                {project.badge}
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary-900 mb-3">{project.title}</h3>
              <p className="text-primary-600 text-lg">{project.client}</p>
            </div>
            <button
              onClick={onClose}
              className="text-primary-400 hover:text-primary-600 text-3xl font-light hover:bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center transition-all"
            >
              ×
            </button>
          </div>

          {/* Before/After Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary-900 mb-4 text-lg">Before</h4>
              <img
                src={project.beforeImage}
                alt="Before"
                className="w-full h-80 object-cover rounded-2xl shadow-premium"
              />
            </div>
            <div>
              <h4 className="font-bold text-primary-900 mb-4 text-lg">After</h4>
              <img
                src={project.afterImage}
                alt="After"
                className="w-full h-80 object-cover rounded-2xl shadow-premium"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center bg-primary-50 rounded-2xl p-6">
              <Calendar className="h-8 w-8 text-primary-600 mr-4" />
              <div>
                <p className="text-sm text-primary-500 font-medium">Duration</p>
                <p className="font-bold text-primary-900 text-lg">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center bg-secondary-50 rounded-2xl p-6">
              <DollarSign className="h-8 w-8 text-secondary-600 mr-4" />
              <div>
                <p className="text-sm text-secondary-600 font-medium">Investment</p>
                <p className="font-bold text-secondary-800 text-lg">{project.budget}</p>
              </div>
            </div>
            <div className="flex items-center bg-accent-50 rounded-2xl p-6">
              <Star className="h-8 w-8 text-accent-600 mr-4" />
              <div>
                <p className="text-sm text-accent-600 font-medium">Rating</p>
                <p className="font-bold text-accent-800 text-lg">{project.rating}/5.0</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h4 className="font-bold text-primary-900 mb-4 text-xl">Project Overview</h4>
            <p className="text-primary-700 text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="font-bold text-primary-900 mb-4 text-xl">Premium Features</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center text-primary-700">
                  <Crown className="h-5 w-5 text-secondary-500 mr-3" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h4 className="font-bold text-primary-900 mb-4 text-xl flex items-center">
              <Sparkles className="h-6 w-6 text-secondary-500 mr-2" />
              Client Testimonial
            </h4>
            <p className="text-primary-800 text-lg italic leading-relaxed">"{project.testimonial}"</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-primary-25 via-white to-secondary-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Crown className="h-5 w-5 mr-2" />
            Elite Portfolio Showcase
            <Award className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
            Our Masterpiece
            <span className="block bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Witness the extraordinary transformations that have earned DanyYorks recognition as the 
            <span className="text-secondary-600 font-semibold"> premier luxury home renovation company</span>. 
            Each project tells a story of exceptional craftsmanship and client satisfaction.
          </p>
        </div>

        {/* Premium Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-luxury'
                  : 'bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 border-2 border-primary-200 hover:border-primary-300 shadow-premium'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-luxury hover:shadow-elite transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Before/After Images */}
              <div className="relative h-80 overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={project.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt="After"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Premium Badge */}
                <div className={`absolute bottom-4 left-4 ${getBadgeColor(project.badge)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {project.badge}
                </div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <ExternalLink className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-secondary-400 mr-1" />
                    <span className="text-sm font-bold text-primary-900">{project.rating}</span>
                  </div>
                </div>
                
                <p className="text-primary-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-primary-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                  <span className="font-bold text-lg text-secondary-600">{project.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Premium CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 text-white shadow-elite relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-400 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <div className="relative">
              <Crown className="h-16 w-16 text-secondary-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Ready to Create Your Masterpiece?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Let DanyYorks transform your space into a work of art. Our elite team is ready to 
                bring your vision to life with uncompromising quality and attention to detail.
              </p>
              <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-10 py-4 rounded-2xl font-bold text-lg hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center">
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;