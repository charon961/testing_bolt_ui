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
  Users,
  Briefcase,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userTypes = [
    'Customer looking for services',
    'Service provider wanting to join',
    'Existing vendor with questions',
    'Business partnership inquiry',
    'Media/Press inquiry',
    'Other'
  ];

  const subjects = [
    'General Information',
    'Technical Support',
    'Billing Questions',
    'Partnership Opportunities',
    'Feature Requests',
    'Report an Issue',
    'Other'
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

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-elite p-12 border border-white/20">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-luxury">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">Thank You for Reaching Out!</h2>
            <p className="text-xl text-primary-700 mb-8 leading-relaxed">
              We've received your message and our team will get back to you within 
              <span className="font-bold text-emerald-600"> 24 hours</span>. We're excited to help you succeed with ServiceHub!
            </p>
            
            <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-primary-900 mb-6 text-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-500 mr-2" />
                What Happens Next?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Quick Response</p>
                    <p className="text-sm text-primary-600">Our team reviews your inquiry</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Personal Contact</p>
                    <p className="text-sm text-primary-600">We reach out with solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-4 mt-2"></div>
                  <div>
                    <p className="font-semibold text-primary-900">Get Started</p>
                    <p className="text-sm text-primary-600">Begin your ServiceHub journey</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    userType: '',
                    subject: '',
                    message: ''
                  });
                }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-luxury"
              >
                Send Another Message
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury">
                Explore ServiceHub
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-orange-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <MessageCircle className="h-5 w-5 mr-2" />
            Get in Touch
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Have questions about ServiceHub? Need help getting started? Our friendly team is 
            <span className="text-emerald-600 font-semibold"> ready to assist you</span> every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-luxury p-10 border border-gray-100 animate-scale-in">
              <div className="mb-8">
                <h3 className="text-3xl font-display font-bold text-primary-900 mb-4">
                  Send Us a Message
                </h3>
                <p className="text-primary-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
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
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
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
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-3">
                      I am a... *
                    </label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
                    >
                      <option value="">Select your role</option>
                      {userTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 mb-3">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-primary-900 font-medium shadow-premium transition-all"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-[1.02] shadow-luxury hover:shadow-glow flex items-center justify-center group"
                >
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-luxury p-8 border border-gray-100 animate-slide-in-right">
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-8 flex items-center">
                <Users className="h-6 w-6 text-emerald-500 mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Phone Support</h4>
                    <p className="text-primary-700 font-semibold">1-800-SERVICE</p>
                    <p className="text-sm text-primary-500">Mon-Fri: 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Email Support</h4>
                    <p className="text-primary-700 font-semibold">support@servicehub.com</p>
                    <p className="text-sm text-primary-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Headquarters</h4>
                    <p className="text-primary-700 font-semibold">San Francisco, CA</p>
                    <p className="text-sm text-primary-500">Serving nationwide</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-premium">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Business Hours</h4>
                    <p className="text-primary-700 font-semibold">24/7 Platform Access</p>
                    <p className="text-sm text-primary-500">Support: Mon-Fri 8AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-8 text-white shadow-elite relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Sparkles className="h-6 w-6 text-emerald-400 mr-2" />
                  Quick Actions
                </h3>
                <p className="mb-8 text-primary-100">
                  Need immediate help? Try these quick options to get started right away.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-2xl font-bold transition-all flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Live Chat Support
                  </button>
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-2xl font-bold transition-all flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Briefcase className="mr-3 h-5 w-5" />
                    Vendor Application
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-3xl shadow-luxury p-8 border border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="font-bold text-3xl text-primary-900">4.8</span>
                  <span className="text-primary-600 ml-1 text-lg">/5.0</span>
                </div>
                <p className="text-primary-600 mb-6 font-medium">Based on 50,000+ reviews</p>
                
                <div className="grid grid-cols-3 gap-6 text-center text-sm">
                  <div>
                    <div className="font-bold text-xl text-emerald-600">50K+</div>
                    <div className="text-primary-600 font-medium">Happy Users</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-orange-600">10K+</div>
                    <div className="text-primary-600 font-medium">Vendors</div>
                  </div>
                  <div>
                    <div className="font-bold text-xl text-violet-600">24/7</div>
                    <div className="text-primary-600 font-medium">Support</div>
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