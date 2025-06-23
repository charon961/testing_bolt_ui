import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Star, 
  Users, 
  TrendingUp, 
  Crown, 
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for new service providers',
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: <Users className="h-8 w-8" />,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      features: [
        'Up to 10 leads per month',
        'Basic profile creation',
        'Customer messaging',
        'Mobile app access',
        'Payment processing',
        'Basic analytics'
      ],
      limitations: [
        'Limited to 3 service categories',
        'Standard customer support',
        'Basic profile customization'
      ],
      badge: null,
      popular: false
    },
    {
      name: 'Professional',
      description: 'Most popular for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      features: [
        'Up to 50 leads per month',
        'Enhanced profile with portfolio',
        'Priority customer messaging',
        'Advanced mobile features',
        'Secure payment processing',
        'Detailed analytics & insights',
        'Customer review management',
        'Lead filtering & preferences',
        'Business growth tools'
      ],
      limitations: [
        'Limited to 10 service categories'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For established service companies',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      icon: <Crown className="h-8 w-8" />,
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      features: [
        'Unlimited leads',
        'Premium profile with branding',
        'Priority support & messaging',
        'Full mobile app suite',
        'Advanced payment features',
        'Comprehensive analytics',
        'Review management system',
        'Advanced lead filtering',
        'Marketing automation tools',
        'Team management features',
        'API access',
        'Custom integrations'
      ],
      limitations: [],
      badge: 'Best Value',
      popular: false
    }
  ];

  const customerFeatures = [
    'Free to post service requests',
    'Get multiple quotes instantly',
    'Verified vendor profiles',
    'Secure messaging system',
    'Review and rating system',
    'Dispute resolution support',
    '24/7 customer support',
    'Mobile app access'
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12);
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-orange-100 text-primary-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Star className="h-5 w-5 mr-2" />
            Vendor Pricing Plans
            <Sparkles className="h-5 w-5 ml-2" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl lg:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            Start growing your business today with our flexible pricing plans. 
            <span className="text-emerald-600 font-semibold"> No setup fees</span>, cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-2xl p-2 shadow-luxury border border-gray-100">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-premium'
                  : 'text-primary-600 hover:text-emerald-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-premium'
                  : 'text-primary-600 hover:text-emerald-600'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-luxury border-2 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in ${
                plan.popular 
                  ? 'border-orange-200 shadow-elite' 
                  : 'border-gray-100 hover:border-emerald-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`${plan.bgColor} ${plan.textColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                  <p className="text-primary-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary-900">${getPrice(plan)}</span>
                    <span className="text-primary-600 ml-2">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-emerald-600 text-sm font-medium mt-2">
                      Save ${getSavings(plan)} per year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start">
                      <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 px-6 rounded-2xl font-bold hover:shadow-glow transition-all transform hover:scale-[1.02] flex items-center justify-center group`}>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Section */}
        <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 text-white shadow-elite relative overflow-hidden mb-20 animate-fade-in-up">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                For Customers - Always Free!
              </h3>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Finding great service providers should never cost you anything. 
                That's why ServiceHub is completely free for customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customerFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <Check className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
                  <p className="text-white font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center">
                Start Finding Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-8">
            Questions About Pricing?
          </h3>
          <p className="text-xl text-primary-700 mb-8 max-w-3xl mx-auto">
            Our team is here to help you choose the right plan for your business. 
            Get personalized recommendations and answers to all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-luxury inline-flex items-center justify-center">
              Talk to Sales
              <Users className="ml-3 h-6 w-6" />
            </button>
            <button className="bg-white text-primary-700 hover:text-emerald-600 px-10 py-4 rounded-2xl font-bold text-lg border-2 border-primary-200 hover:border-emerald-300 transition-all transform hover:scale-105 shadow-premium inline-flex items-center justify-center">
              View FAQ
              <Sparkles className="ml-3 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;