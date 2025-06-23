import React from 'react';
import { Search, UserCheck, Calendar, Star, ArrowRight, Crown, Award, Sparkles, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="h-10 w-10" />,
      title: 'Discover & Consult',
      description: 'Share your vision with our luxury home specialists. We provide personalized consultations to understand your unique requirements and style preferences.',
      details: ['Premium Consultation', 'Design Assessment', 'Budget Planning', 'Timeline Discussion'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      id: 2,
      icon: <UserCheck className="h-10 w-10" />,
      title: 'Elite Team Selection',
      description: 'We handpick master craftsmen and elite professionals specifically for your project. All team members are vetted, licensed, and carry comprehensive insurance.',
      details: ['Master Craftsmen', 'Licensed Professionals', 'Insurance Verified', 'Background Checked'],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    {
      id: 3,
      icon: <Calendar className="h-10 w-10" />,
      title: 'Premium Planning',
      description: 'Detailed project planning with 3D visualizations, premium material selection, and precise scheduling. Your dedicated project manager ensures seamless execution.',
      details: ['3D Visualization', 'Material Selection', 'Project Management', 'Quality Assurance'],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50'
    },
    {
      id: 4,
      icon: <Star className="h-10 w-10" />,
      title: 'Flawless Execution',
      description: 'Experience the DanyYorks difference with meticulous attention to detail, premium materials, and exceptional craftsmanship that exceeds expectations.',
      details: ['Premium Materials', 'Quality Craftsmanship', 'Regular Updates', 'Final Inspection'],
      color: 'from-luxury-500 to-luxury-600',
      bgColor: 'bg-luxury-50'
    }
  ];

  const achievements = [
    { number: '3,500+', label: 'Elite Projects', icon: <Crown className="h-8 w-8" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="h-8 w-8" /> },
    { number: '24/7', label: 'Premium Support', icon: <Award className="h-8 w-8" /> },
    { number: '4.9★', label: 'Average Rating', icon: <Sparkles className="h-8 w-8" /> }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-25 to-secondary-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Crown className="h-5 w-5 mr-2" />
            The DanyYorks Experience
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
            How We Transform
            <span className="block bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">
              Your Vision
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Our proven process ensures every project receives the attention to detail and 
            <span className="text-secondary-600 font-semibold"> premium craftsmanship</span> that 
            defines the DanyYorks standard.
          </p>
        </div>

        {/* Premium Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-300 to-accent-300 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
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
                          <CheckCircle className="h-4 w-4 text-accent-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-20">
                    <ArrowRight className="h-8 w-8 text-secondary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Premium Stats Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 shadow-elite relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-400 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group">
                    <div className="text-secondary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-secondary-300 transition-colors">
                      {achievement.number}
                    </div>
                    <div className="text-primary-200 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-3xl shadow-luxury p-12 border border-gray-100">
            <Crown className="h-16 w-16 text-secondary-500 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary-900 mb-6">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-primary-700 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have trusted DanyYorks with their most 
              important home transformation projects. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-10 py-4 rounded-2xl font-bold text-lg hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
                Start Your Project Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
                Schedule Consultation
                <Calendar className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;