import React from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Briefcase,
  Target,
  Award,
  Sparkles
} from 'lucide-react';

const VendorSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Grow Your Business',
      description: 'Access thousands of potential customers actively looking for your services',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Qualified Leads',
      description: 'Get matched with customers who need exactly what you offer',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Increase Revenue',
      description: 'Boost your income with a steady stream of new projects',
      color: 'text-violet-500',
      bgColor: 'bg-violet-50'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Build Reputation',
      description: 'Earn reviews and build credibility to attract more customers',
      color: 'text-rose-500',
      bgColor: 'bg-rose-50'
    }
  ];

  const features = [
    'Professional Profile Creation',
    'Lead Management Dashboard',
    'Secure Payment Processing',
    'Customer Review System',
    'Mobile App Access',
    'Marketing Tools & Analytics',
    'Priority Customer Support',
    '24/7 Platform Access'
  ];

  const stats = [
    { number: '10,000+', label: 'Active Vendors', icon: <Users className="h-6 w-6" /> },
    { number: '$2.5M+', label: 'Earned Monthly', icon: <DollarSign className="h-6 w-6" /> },
    { number: '4.8★', label: 'Vendor Rating', icon: <Star className="h-6 w-6" /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  return (
    <section id="vendors" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Briefcase className="h-5 w-5 mr-2" />
            For Service Providers
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Grow Your Business
            <span className="block bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              With ServiceHub
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful service providers who are growing their businesses and 
            <span className="text-emerald-300 font-semibold"> earning more</span> with our platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-8">
              Why Choose ServiceHub?
            </h3>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`${benefit.bgColor} ${benefit.color} p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-primary-200 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center">
                Start Growing Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-elite">
              <img
                src="https://images.pexels.com/photos/5691574/pexels-photo-5691574.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional service provider"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-luxury p-6 border border-white/20 animate-bounce-gentle">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 text-xl">$5,200</p>
                    <p className="text-primary-600 font-medium">Avg Monthly Earnings</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-luxury p-6 border border-white/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 text-xl">150+</p>
                    <p className="text-primary-600 font-medium">New Leads/Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20 animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-white text-center mb-12">
            Everything You Need to Succeed
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-luxury p-12 border border-white/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-emerald-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-primary-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <Briefcase className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Ready to Join Our Network?
            </h3>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Start connecting with customers today. Create your professional profile and begin 
              receiving qualified leads within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
                Join as Vendor
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white py-4 px-10 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 backdrop-blur-sm border border-white/20 inline-flex items-center justify-center">
                Learn More
                <Sparkles className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;