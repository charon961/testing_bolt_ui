import React, { useState } from 'react';
import { Search, MapPin, Star, CheckCircle, ArrowRight, Users, Briefcase, Sparkles, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const popularServices = [
    'Plumbing Services',
    'Electrical Work',
    'Home Cleaning',
    'HVAC Repair',
    'Kitchen Renovation',
    'Landscaping'
  ];

  const achievements = [
    { icon: <Users className="h-6 w-6" />, text: "10,000+ Trusted Vendors", color: "text-emerald-400" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Verified & Insured", color: "text-orange-400" },
    { icon: <Sparkles className="h-6 w-6" />, text: "Quality Guaranteed", color: "text-violet-400" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "Best Price Match", color: "text-rose-400" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-bold mb-8 animate-bounce-gentle">
              <Users className="h-5 w-5 mr-2 text-emerald-400" />
              #1 Service Marketplace Platform
              <Sparkles className="h-5 w-5 ml-2 text-emerald-400" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Find Trusted
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent animate-pulse-glow">
                Service Providers
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
                Near You
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-100 mb-10 leading-relaxed max-w-2xl">
              Connect with verified professionals for all your home and business needs. From quick repairs to major projects, 
              <span className="text-emerald-300 font-semibold"> find the right expert</span> in minutes.
            </p>

            {/* Search Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-luxury p-8 mb-10 border border-white/20 animate-scale-in">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 placeholder-primary-600 font-medium shadow-premium"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 placeholder-primary-600 font-medium shadow-premium"
                  />
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-600 transition-all transform hover:scale-[1.02] shadow-luxury hover:shadow-glow flex items-center justify-center group">
                Find Service Providers
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              {/* Popular Services */}
              <div className="mt-6">
                <p className="text-primary-200 mb-3 font-medium">Popular Services:</p>
                <div className="flex flex-wrap gap-3">
                  {popularServices.map((service, index) => (
                    <button
                      key={index}
                      className="text-sm bg-white/10 hover:bg-white/20 text-primary-100 hover:text-white px-4 py-2 rounded-full transition-all border border-white/20 hover:border-emerald-400/50 backdrop-blur-sm"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  <div className={`${achievement.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {achievement.icon}
                  </div>
                  <span className="text-primary-200 text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-elite">
              <img
                src="https://images.pexels.com/photos/5691574/pexels-photo-5691574.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional service provider at work"
                className="w-full h-[600px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-luxury p-6 border border-white/20 animate-bounce-gentle">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 text-xl">50,000+</p>
                    <p className="text-primary-600 font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-lg rounded-2xl shadow-luxury p-6 border border-white/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 text-xl">4.8/5</p>
                    <p className="text-primary-600 font-medium">Average Rating</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-luxury p-4 border border-white/20 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <Users className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                  <p className="font-bold text-primary-900">10K+</p>
                  <p className="text-primary-600 text-sm">Vendors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;