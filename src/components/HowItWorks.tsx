import React from 'react';
import { Search, UserCheck, Calendar, Star, ArrowRight, Users, CheckCircle, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const customerSteps = [
    {
      id: 1,
      icon: <Search className="h-10 w-10" />,
      title: 'Describe Your Need',
      description: 'Tell us what service you need and where you\'re located. Be as specific as possible for better matches.',
      details: ['Quick Service Request', 'Location-Based Matching', 'Detailed Requirements', 'Photo Upload Option'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 2,
      icon: <UserCheck className="h-10 w-10" />,
      title: 'Get Matched',
      description: 'We connect you with verified professionals in your area who specialize in your specific needs.',
      details: ['Verified Professionals', 'Background Checked', 'Insurance Verified', 'Customer Reviews'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 3,
      icon: <Calendar className="h-10 w-10" />,
      title: 'Compare & Book',
      description: 'Review quotes, check ratings, and book the professional that best fits your needs and budget.',
      details: ['Multiple Quotes', 'Compare Prices', 'Read Reviews', 'Instant Booking'],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50'
    },
    {
      id: 4,
      icon: <Star className="h-10 w-10" />,
      title: 'Get It Done',
      description: 'Your chosen professional completes the work. Rate your experience to help others.',
      details: ['Quality Work', 'Progress Updates', 'Secure Payment', 'Review & Rate'],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50'
    }
  ];

  const vendorSteps = [
    {
      id: 1,
      icon: <UserCheck className="h-10 w-10" />,
      title: 'Create Profile',
      description: 'Sign up and create your professional profile with services, experience, and credentials.',
      details: ['Professional Profile', 'Service Categories', 'Portfolio Upload', 'Credential Verification'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 2,
      icon: <Search className="h-10 w-10" />,
      title: 'Get Leads',
      description: 'Receive qualified leads from customers in your area looking for your services.',
      details: ['Qualified Leads', 'Local Customers', 'Service Matching', 'Lead Notifications'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 3,
      icon: <Calendar className="h-10 w-10" />,
      title: 'Send Quotes',
      description: 'Respond to customer requests with competitive quotes and showcase your expertise.',
      details: ['Quick Response', 'Competitive Pricing', 'Detailed Proposals', 'Direct Communication'],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50'
    },
    {
      id: 4,
      icon: <Star className="h-10 w-10" />,
      title: 'Grow Business',
      description: 'Complete jobs, earn reviews, and build your reputation to attract more customers.',
      details: ['Secure Payments', 'Customer Reviews', 'Business Growth', 'Repeat Customers'],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50'
    }
  ];

  const [activeTab, setActiveTab] = React.useState('customers');

  const achievements = [
    { number: '50,000+', label: 'Projects Completed', icon: <CheckCircle className="h-8 w-8" /> },
    { number: '4.8★', label: 'Average Rating', icon: <Star className="h-8 w-8" /> },
    { number: '10,000+', label: 'Verified Vendors', icon: <Users className="h-8 w-8" /> },
    { number: '24/7', label: 'Customer Support', icon: <Sparkles className="h-8 w-8" /> }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-white via-emerald-25 to-orange-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-orange-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Users className="h-5 w-5 mr-2" />
            How ServiceHub Works
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
            Simple Process,
            <span className="block bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent">
              Amazing Results
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Whether you're looking for services or providing them, our platform makes it 
            <span className="text-emerald-600 font-semibold"> easy to connect</span> and get things done.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-2xl p-2 shadow-luxury border border-gray-100">
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === 'customers'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-premium'
                  : 'text-primary-600 hover:text-emerald-600'
              }`}
            >
              For Customers
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === 'vendors'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-premium'
                  : 'text-primary-600 hover:text-orange-600'
              }`}
            >
              For Vendors
            </button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-orange-300 to-violet-300 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'customers' ? customerSteps : vendorSteps).map((step, index) => (
              <div 
                key={step.id} 
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-3xl shadow-luxury border border-gray-100 p-8 hover:shadow-elite transition-all duration-500 transform hover:-translate-y-2 relative z-10 group">
                  {/* Step Number */}
                  <div className={`absolute -top-6 left-8 bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-luxury`}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`${step.bgColor} text-primary-700 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">{step.title}</h3>
                    <p className="text-primary-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-primary-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < (activeTab === 'customers' ? customerSteps : vendorSteps).length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-20">
                    <ArrowRight className="h-8 w-8 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 shadow-elite relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group">
                    <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {achievement.number}
                    </div>
                    <div className="text-primary-200 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-3xl shadow-luxury p-12 border border-gray-100">
            <Users className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-primary-700 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers and successful service providers on ServiceHub. 
              Your next great project or business opportunity is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
                Find Services Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
                Join as Vendor
                <Users className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;