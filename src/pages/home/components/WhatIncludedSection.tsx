
export default function WhatIncludedSection() {
  const features = [
    {
      icon: 'ri-palette-line',
      title: 'Design and Copy',
      description: 'Professional website design with conversion-optimized copy tailored to your business'
    },
    {
      icon: 'ri-server-line',
      title: 'Hosting and SSL',
      description: 'Fast, secure hosting with SSL certificate and 99.9% uptime guarantee'
    },
    {
      icon: 'ri-speed-line',
      title: 'Speed Tuning',
      description: 'Optimized for lightning-fast loading times and superior user experience'
    },
    {
      icon: 'ri-search-line',
      title: 'Local SEO',
      description: 'Schema markup, meta optimization, service and city pages for local visibility'
    },
    {
      icon: 'ri-robot-line',
      title: 'AI Appointment Setter',
      description: 'Smart booking system that converts visitors into scheduled appointments 24/7'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 AI Customer Service',
      description: 'Intelligent chat support that answers questions and qualifies leads around the clock'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Ongoing CRO Tests',
      description: 'Continuous A/B testing of headlines, forms, and offers to maximize conversions'
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Analytics Dashboard',
      description: 'Comprehensive tracking with call analytics and conversion reporting'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Unlimited Maintenance',
      description: 'Security updates, backups, and technical maintenance included'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What <span className="text-amber-500">$299/month</span> Includes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to dominate your local market and grow your business online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-shield-check-line"></i>
            </div>
            30-Day Money-Back Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
