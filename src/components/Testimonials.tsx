import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, MapPin, Calendar, Crown, Award, Sparkles } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Victoria Sterling',
      location: 'Beverly Hills, CA',
      rating: 5,
      date: '2 weeks ago',
      service: 'Luxury Kitchen Renovation',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'DanyYorks transformed our kitchen into an absolute masterpiece. The attention to detail, premium materials, and flawless execution exceeded every expectation. Our home has become the envy of the neighborhood!',
      projectImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Platinum Client',
      investment: '$125,000'
    },
    {
      id: 2,
      name: 'Alexander Chen',
      location: 'Manhattan, NY',
      rating: 5,
      date: '1 month ago',
      service: 'Penthouse Renovation',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Working with DanyYorks was an extraordinary experience. Their team of master craftsmen delivered impeccable quality and sophistication. Every detail was executed to perfection, creating a truly luxurious living space.',
      projectImage: 'https://images.pexels.com/photos/6969769/pexels-photo-6969769.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Elite Client',
      investment: '$280,000'
    },
    {
      id: 3,
      name: 'Isabella Rodriguez',
      location: 'Malibu, CA',
      rating: 5,
      date: '3 weeks ago',
      service: 'Custom Home Design',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'DanyYorks didn\'t just renovate our home - they created a work of art. The design vision, premium materials, and exceptional craftsmanship resulted in a space that perfectly reflects our lifestyle and taste.',
      projectImage: 'https://images.pexels.com/photos/6969870/pexels-photo-6969870.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Signature Client',
      investment: '$450,000'
    },
    {
      id: 4,
      name: 'Jonathan Blackwood',
      location: 'Hamptons, NY',
      rating: 5,
      date: '5 days ago',
      service: 'Estate Transformation',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The transformation of our estate by DanyYorks is nothing short of spectacular. Their attention to architectural details and use of premium materials has created a timeless masterpiece that will be treasured for generations.',
      projectImage: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Heritage Client',
      investment: '$650,000'
    },
    {
      id: 5,
      name: 'Sophia Williams',
      location: 'Pacific Heights, SF',
      rating: 5,
      date: '2 months ago',
      service: 'Interior Design Excellence',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'DanyYorks elevated our home to museum-quality standards. Their interior design expertise and access to exclusive materials created spaces that are both functional and breathtakingly beautiful. Absolutely phenomenal!',
      projectImage: 'https://images.pexels.com/photos/6969860/pexels-photo-6969860.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Design Connoisseur',
      investment: '$180,000'
    },
    {
      id: 6,
      name: 'Marcus Thompson',
      location: 'Scottsdale, AZ',
      rating: 5,
      date: '6 weeks ago',
      service: 'Smart Home Integration',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The smart home integration by DanyYorks is revolutionary. They seamlessly blended cutting-edge technology with luxury design, creating an intelligent home that anticipates our every need. Truly impressive innovation!',
      projectImage: 'https://images.pexels.com/photos/8413299/pexels-photo-8413299.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Tech Pioneer',
      investment: '$95,000'
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
        className={`h-6 w-6 ${i < rating ? 'text-secondary-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Platinum Client': return 'bg-gradient-to-r from-secondary-500 to-secondary-600';
      case 'Elite Client': return 'bg-gradient-to-r from-primary-500 to-primary-600';
      case 'Signature Client': return 'bg-gradient-to-r from-luxury-500 to-luxury-600';
      case 'Heritage Client': return 'bg-gradient-to-r from-accent-500 to-accent-600';
      case 'Design Connoisseur': return 'bg-gradient-to-r from-primary-600 to-primary-700';
      case 'Tech Pioneer': return 'bg-gradient-to-r from-dark-600 to-dark-700';
      default: return 'bg-gradient-to-r from-primary-500 to-primary-600';
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-luxury-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-secondary-300 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Crown className="h-5 w-5 mr-2" />
            Client Success Stories
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            What Our Elite Clients
            <span className="block bg-gradient-to-r from-secondary-400 to-secondary-300 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Discover why discerning homeowners choose DanyYorks for their most important projects. 
            <span className="text-secondary-300 font-semibold"> Excellence speaks for itself</span>.
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
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full p-6 shadow-luxury">
                <Quote className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Client Badge */}
                <div className={`inline-block ${getBadgeColor(testimonials[currentIndex].badge)} text-white px-4 py-2 rounded-full text-sm font-bold mb-6`}>
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

                {/* Service & Investment */}
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-bold">
                    {testimonials[currentIndex].service}
                  </span>
                  <span className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-bold">
                    Investment: {testimonials[currentIndex].investment}
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
                    <Award className="h-6 w-6 text-secondary-600" />
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
                    ? 'bg-secondary-400 w-12' 
                    : 'bg-white/30 w-4 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Premium Stats Summary */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-luxury p-10 border border-white/20 animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-400 mb-3 group-hover:scale-110 transition-transform">
                4.9★
              </div>
              <div className="text-white font-semibold">Average Rating</div>
              <div className="text-primary-200 text-sm mt-2">Based on 3,500+ reviews</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-3 group-hover:scale-110 transition-transform">
                99%
              </div>
              <div className="text-white font-semibold">Would Recommend</div>
              <div className="text-primary-200 text-sm mt-2">To friends & family</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-400 mb-3 group-hover:scale-110 transition-transform">
                3,500+
              </div>
              <div className="text-white font-semibold">Elite Projects</div>
              <div className="text-primary-200 text-sm mt-2">Completed successfully</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-3 group-hover:scale-110 transition-transform">
                12hr
              </div>
              <div className="text-white font-semibold">Response Time</div>
              <div className="text-primary-200 text-sm mt-2">Average quote delivery</div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <Crown className="h-16 w-16 text-secondary-400 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Ready to Join Our Elite Clientele?
          </h3>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
            Experience the DanyYorks difference and discover why discerning homeowners trust us 
            with their most prestigious projects. Your dream transformation awaits.
          </p>
          <button className="bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-900 px-12 py-5 rounded-2xl font-bold text-lg hover:from-secondary-400 hover:to-secondary-300 transition-all transform hover:scale-105 shadow-luxury">
            Get Your Premium Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;