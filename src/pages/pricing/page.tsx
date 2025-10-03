
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const features = [
    'Custom website design and copy',
    'Fast, secure hosting with SSL',
    'Speed optimization',
    'Local SEO with schema markup',
    'Service and city pages',
    'AI Appointment Setter',
    '24/7 AI Customer Service Agent',
    'Ongoing A/B testing and CRO',
    'Analytics dashboard with call tracking',
    'Unlimited maintenance and updates',
    'Security monitoring and backups',
    'Month-to-month terms'
  ];

  const addOns = [
    {
      name: 'Advanced Local SEO',
      price: '$499/month',
      description: 'Enhanced SEO with content marketing, local citations, and review management',
      features: [
        'Monthly blog content creation',
        'Local citation building',
        'Review management system',
        'Competitor analysis',
        'Advanced keyword targeting'
      ]
    },
    {
      name: 'Google Ads Management',
      price: '$299/month',
      description: 'Professional Google Ads management with $149 monthly ad spend included',
      features: [
        '$149 monthly ad spend included',
        'Campaign setup and optimization',
        'Keyword research and bidding',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Monthly performance reports'
      ]
    },
    {
      name: 'Review Booster',
      price: '$99/month',
      description: 'Automated review collection and reputation system',
      features: [
        'Automated review requests',
        'Multi-platform review monitoring',
        'Review response management',
        'Reputation dashboard',
        'Review widget for website'
      ]
    },
    {
      name: 'Multi-Location',
      price: '$199/month',
      description: 'Additional location pages and local SEO for multi-location businesses',
      features: [
        'Individual location pages',
        'Location-specific SEO',
        'Local business listings',
        'Multi-location analytics',
        'Centralized management'
      ]
    }
  ];

  const badges = [
    { icon: 'ri-calendar-line', text: 'Month-to-Month' },
    { icon: 'ri-close-circle-line', text: 'No Long Contracts' },
    { icon: 'ri-rocket-line', text: 'Fast 5-7 Day Launch' },
    { icon: 'ri-robot-line', text: 'AI Included' }
  ];

  const handleStartPlan = () => {
    navigate('/checkout');
  };

  const handleBookDemo = () => {
    alert('Demo booking feature coming soon!');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Simple <span className="text-amber-400">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            One transparent price includes everything you need to dominate your local market
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 px-4 py-2 rounded-full font-semibold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className={badge.icon}></i>
                </div>
                {badge.text}
              </div>
            ))}
          </div>

          {/* Main Plan */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Website Rental
            </h2>
            <div className="mb-6">
              <span className="text-6xl md:text-7xl font-bold">$299</span>
              <span className="text-2xl">/month</span>
            </div>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Everything you need to dominate your local market and grow your business online
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleStartPlan}
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg rounded-lg bg-white text-amber-600 hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 focus:ring-white"
              >
                Start for $299/m
              </button>
              <button 
                onClick={handleBookDemo}
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg rounded-lg border-2 border-white text-white hover:bg-white hover:text-amber-600 focus:ring-white"
              >
                Book a 15-min Demo
              </button>
            </div>

            <div className="text-amber-100">
              <div className="w-5 h-5 flex items-center justify-center mx-auto mb-2">
                <i className="ri-shield-check-line"></i>
              </div>
              30-Day Money-Back Guarantee
            </div>
          </div>

          {/* Features List */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Everything Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center text-gray-700 dark:text-gray-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Optional <span className="text-amber-500">Add-ons</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Supercharge your results with these optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {addon.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-500">
                    {addon.price}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {addon.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-check-line text-green-500 text-sm"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" fullWidth>
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Compare the <span className="text-amber-500">Value</span>
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 dark:bg-gray-950 text-white">
              <div className="p-6">
                <h3 className="font-bold">Service</h3>
              </div>
              <div className="p-6 bg-amber-500 text-center">
                <h3 className="font-bold">Townspace</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold">Traditional</h3>
              </div>
            </div>

            {[
              { service: 'Website Design', townspace: 'Included', traditional: '$5,000+' },
              { service: 'Hosting & SSL', townspace: 'Included', traditional: '$200+/year' },
              { service: 'AI Features', townspace: 'Included', traditional: '$500+/month' },
              { service: 'Maintenance', townspace: 'Included', traditional: '$200+/month' },
              { service: 'Updates & Changes', townspace: 'Included', traditional: '$150+/hour' },
              { service: 'SEO Setup', townspace: 'Included', traditional: '$2,000+' },
              { service: 'Total First Year', townspace: '$3,588', traditional: '$15,000+' }
            ].map((row, index) => (
              <div
                key={row.service}
                className={`grid grid-cols-3 border-b border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
                } ${index === 6 ? 'font-bold' : ''}`}
              >
                <div className="p-4">
                  {row.service}
                </div>
                <div className="p-4 text-center bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-semibold">
                  {row.townspace}
                </div>
                <div className="p-4 text-center text-gray-600 dark:text-gray-300">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of local businesses already succeeding with Townspace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleStartPlan}
              className="inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg rounded-lg bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500 transform hover:scale-105"
            >
              Start for $299/m
            </button>
            <button 
              onClick={handleBookDemo}
              className="inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white"
            >
              Book a 15-min Demo
            </button>
          </div>
          <p className="text-gray-400">
            No setup fees • Cancel anytime • 30-day guarantee
          </p>
        </div>
      </section>
    </Layout>
  );
}
