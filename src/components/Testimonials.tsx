import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, MapPin, Calendar, Users, Award, Sparkles } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      date: '1 week ago',
      service: 'Kitchen Renovation',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'ServiceHub made finding a contractor so easy! I got 5 quotes within hours and found the perfect team for my kitchen renovation. The quality was outstanding and the price was fair.',
      projectImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Verified Customer',
      type: 'customer'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'Denver, CO',
      rating: 5,
      date: '3 days ago',
      service: 'Plumbing Services',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'As a plumber, ServiceHub has transformed my business. I get 20+ qualified leads per week and my revenue has increased by 60%. The platform is easy to use and customers are genuine.',
      projectImage: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Top Vendor',
      type: 'vendor'
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Seattle, WA',
      rating: 5,
      date: '2 weeks ago',
      service: 'House Cleaning',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'I found an amazing cleaning service through ServiceHub. They were professional, thorough, and reasonably priced. Now I have more time to focus on what matters most to me.',
      projectImage: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Happy Customer',
      type: 'customer'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Phoenix, AZ',
      rating: 5,
      date: '5 days ago',
      service: 'Electrical Services',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'ServiceHub has been a game-changer for my electrical business. The lead quality is excellent and the payment system is secure. I\'ve grown my team from 2 to 8 people in just 6 months!',
      projectImage: 'https://images.pexels.com/photos/5691574/pexels-photo-5691574.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Growing Business',
      type: 'vendor'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      location: 'Miami, FL',
      rating: 5,
      date: '1 month ago',
      service: 'Interior Design',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The interior designer I found through ServiceHub completely transformed my living space. The process was smooth, communication was excellent, and the results exceeded my expectations.',
      projectImage: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Design Lover',
      type: 'customer'
    },
    {
      id: 6,
      name: 'Carlos Mendez',
      location: 'Los Angeles, CA',
      rating: 5,
      date: '2 weeks ago',
      service: 'Landscaping',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'ServiceHub connects me with homeowners who truly value quality landscaping. The platform\'s tools help me manage my business efficiently, and I love seeing my customer reviews grow.',
      projectImage: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Master Landscaper',
      type: 'vendor'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-6 w-6 ${i < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getBadgeColor = (type: string) => {
    return type === 'vendor' 
      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
      : 'bg-gradient-to-r from-orange-500 to-orange-600';
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
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
            <Users className="h-5 w-5 mr-2" />
            Success Stories
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            What Our Community
            <span className="block bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Is Saying
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Hear from customers who found great services and vendors who grew their businesses with 
            <span className="text-emerald-300 font-semibold"> ServiceHub</span>.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div
            className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-elite p-10 lg:p-16 border border-white/20"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-8 left-10">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full p-6 shadow-luxury">
                <Quote className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Badge */}
                <div className={`inline-block ${getBadgeColor(testimonials[currentIndex].type)} text-white px-4 py-2 rounded-full text-sm font-bold mb-6`}>
                  {testimonials[currentIndex].badge}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                  <span className="ml-3 text-lg font-bold text-primary-900">
                    {testimonials[currentIndex].rating}.0 out of 5
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-primary-800 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-6 shadow-premium"
                  />
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex items-center text-primary-600 mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {testimonials[currentIndex].location}
                    </div>
                    <div className="flex items-center text-primary-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold">
                    {testimonials[currentIndex].service}
                  </span>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    testimonials[currentIndex].type === 'vendor' 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-violet-100 text-violet-800'
                  }`}>
                    {testimonials[currentIndex].type === 'vendor' ? 'Service Provider' : 'Customer'}
                  </span>
                </div>
              </div>

              {/* Project Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].projectImage}
                    alt={`${testimonials[currentIndex].service} project`}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-luxury border border-gray-200 transition-all hover:scale-110"
            >
              <ArrowLeft className="h-6 w-6 text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-luxury border border-gray-200 transition-all hover:scale-110"
            >
              <ArrowRight className="h-6 w-6 text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-4 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-emerald-400 w-12' 
                    : 'bg-white/30 w-4 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-luxury p-10 border border-white/20 animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                4.8★
              </div>
              <div className="text-white font-semibold">Average Rating</div>
              <div className="text-primary-200 text-sm mt-2">From 50,000+ reviews</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-white font-semibold">Would Recommend</div>
              <div className="text-primary-200 text-sm mt-2">To friends & family</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                50,000+
              </div>
              <div className="text-white font-semibold">Happy Customers</div>
              <div className="text-primary-200 text-sm mt-2">And growing daily</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                10,000+
              </div>
              <div className="text-white font-semibold">Trusted Vendors</div>
              <div className="text-primary-200 text-sm mt-2">Verified professionals</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <Users className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Whether you need services or want to provide them, ServiceHub is your gateway to success. 
            Join our thriving community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury">
              Find Services
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-luxury">
              Become a Vendor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;