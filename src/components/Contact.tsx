import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Star,
  MessageCircle,
  Calendar,
  DollarSign,
  Crown,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const premiumServices = [
    'Luxury Kitchen Renovation',
    'Spa Bathroom Remodel',
    'Custom Home Construction',
    'Elite Interior Design',
    'Smart Home Integration',
    'Premium Electrical Services',
    'Luxury Plumbing & Fixtures',
    'Climate Control Systems',
    'Architectural Modifications',
    'Outdoor Living Spaces',
    'Other Premium Service'
  ];

  const budgetRanges = [
    'Under $25,000',
    '$25,000 - $75,000',
    '$75,000 - $150,000',
    '$150,000 - $300,000',
    '$300,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'ASAP - Emergency',
    'Within 2 weeks',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    'Planning phase'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-elite p-12 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-luxury">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">Thank You for Choosing DanyYorks!</h2>
            <p className="text-xl text-primary-700 mb-8 leading-relaxed">
              We've received your premium project details and our elite team will contact you within 
              <span className="font-bold text-secondary-600"> 12 hours</span> with a detailed consultation proposal.
            </p>
            
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-primary-900 mb-6 text-xl flex items-center justify-center">
                <Crown className="h-6 w-6 text-secondary-500 mr-2" />
                Your Premium Experience Begins Now
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Elite Team Assignment</p>
                    <p className="text-sm text-primary-600">Master craftsmen selected for your project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Premium Consultation</p>
                    <p className="text-sm text-primary-600">Detailed project planning & 3D visualization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Luxury Proposal</p>
                    <p className="text-sm text-primary-600">Comprehensive quote with premium options</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    projectType: '',
                    budget: '',
                    timeline: '',
                    message: '',
                    address: ''
                  });
                }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-luxury"
              >
                Submit Another Request
              </button>
              <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-8 py-4 rounded-2xl font-bold hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary-25 via-white to-secondary-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Crown className="h-5 w-5 mr-2" />
            Premium Consultation Request
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-6">
            Get Your Elite
            <span className="block bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your space with DanyYorks? Our elite team provides 
            <span className="text-secondary-600 font-semibold"> complimentary premium consultations</span> 
            with detailed project planning and 3D visualizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Premium Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-luxury p-10 border border-gray-100 animate-scale-in">
              {/* Premium Progress Bar */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold text-primary-900">Step {currentStep} of 3</span>
                  <span className="text-primary-600 font-medium">{Math.round((currentStep / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-primary-100 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-secondary-500 to-secondary-400 h-3 rounded-full transition-all duration-700 shadow-glow"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Premium Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <Crown className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                      <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                        Let's Begin Your Journey
                      </h3>
                      <p className="text-primary-600">Share your contact details for our premium consultation</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Property Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                          placeholder="Project location"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Premium Project Details */}
                {currentStep === 2 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <Award className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                      <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                        Your Dream Project
                      </h3>
                      <p className="text-primary-600">Tell us about your vision and requirements</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary-900 mb-3">
                        Premium Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                      >
                        <option value="">Select your premium service</option>
                        {premiumServices.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Investment Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                        >
                          <option value="">Select investment range</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-3">
                          Preferred Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                        >
                          <option value="">When would you like to start?</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Premium Project Vision */}
                {currentStep === 3 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <div className="text-center mb-8">
                      <Sparkles className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
                      <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                        Share Your Vision
                      </h3>
                      <p className="text-primary-600">Help us understand your style and preferences</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary-900 mb-3">
                        Describe Your Dream Project
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={8}
                        className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 text-primary-900 font-medium shadow-premium transition-all"
                        placeholder="Share your vision, style preferences, specific requirements, inspiration, or any questions you have. The more details you provide, the better we can tailor our premium consultation to your needs..."
                      />
                    </div>

                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
                      <h4 className="font-bold text-primary-900 mb-4 text-xl flex items-center">
                        <Crown className="h-6 w-6 text-secondary-500 mr-2" />
                        Your Premium Experience Includes
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center text-primary-700">
                          <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                          Complimentary design consultation
                        </div>
                        <div className="flex items-center text-primary-700">
                          <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                          3D visualization & planning
                        </div>
                        <div className="flex items-center text-primary-700">
                          <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                          Premium material selection
                        </div>
                        <div className="flex items-center text-primary-700">
                          <CheckCircle className="h-5 w-5 text-accent-500 mr-3" />
                          Detailed project timeline
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Premium Navigation Buttons */}
                <div className="flex justify-between mt-12">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 border-2 border-primary-300 text-primary-700 rounded-2xl font-bold hover:bg-primary-50 hover:border-primary-400 transition-all transform hover:scale-105 shadow-premium"
                    >
                      Previous Step
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-8 py-4 rounded-2xl font-bold hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-accent-600 hover:to-accent-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      Request Premium Consultation
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Premium Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-luxury p-8 border border-gray-100 animate-slide-in-right">
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8 flex items-center">
                <Crown className="h-6 w-6 text-secondary-500 mr-2" />
                Premium Contact
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Elite Hotline</h4>
                    <p className="text-primary-700 font-semibold">(555) 123-YORK</p>
                    <p className="text-sm text-primary-500">24/7 Premium Support</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Premium Email</h4>
                    <p className="text-primary-700 font-semibold">elite@danyorks.com</p>
                    <p className="text-sm text-primary-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Service Territory</h4>
                    <p className="text-primary-700 font-semibold">Nationwide Premium Markets</p>
                    <p className="text-sm text-primary-500">Elite service areas</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-luxury-500 to-luxury-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Consultation Hours</h4>
                    <p className="text-primary-700 font-semibold">Mon-Fri: 7AM-8PM</p>
                    <p className="text-primary-700 font-semibold">Sat-Sun: 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Quick Actions */}
            <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 text-white shadow-elite relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-accent-400/20 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 text-secondary-400 mr-2" />
                  Need Immediate Assistance?
                </h3>
                <p className="mb-8 text-primary-100">
                  Our premium concierge team is standing by to assist with urgent projects and consultations.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-2xl font-bold transition-all flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Premium Live Chat
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-2xl font-bold transition-all flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Elite Hotline
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Trust Indicators */}
            <div className="bg-white rounded-3xl shadow-luxury p-8 border border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-secondary-400 mr-2" />
                  <span className="font-bold text-3xl text-primary-900">4.9</span>
                  <span className="text-primary-600 ml-1 text-lg">/5.0</span>
                </div>
                <p className="text-primary-600 mb-6 font-medium">Based on 3,500+ elite projects</p>
                
                <div className="grid grid-cols-3 gap-6 text-center text-sm">
                  <div>
                    <div className="font-bold text-xl text-secondary-600">3,500+</div>
                    <div className="text-primary-600 font-medium">Elite Projects</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-accent-600">99%</div>
                    <div className="text-primary-600 font-medium">Satisfied</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-luxury-600">12hr</div>
                    <div className="text-primary-600 font-medium">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;