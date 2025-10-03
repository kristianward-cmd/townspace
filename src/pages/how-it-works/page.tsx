
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '24-48 hours',
      description: 'We schedule a quick 15-minute consultation to understand your business, services, target customers, and current marketing challenges.',
      details: [
        'Business overview and service offerings',
        'Target customer demographics',
        'Current website performance (if any)',
        'Local competition analysis',
        'Marketing goals and expectations'
      ],
      icon: 'ri-phone-line',
      image: 'https://readdy.ai/api/search-image?query=Casual%20relaxed%20Townspace%20team%20member%20having%20friendly%20Zoom%20video%20call%20with%20local%20service%20business%20owner%20on%20laptop%2C%20both%20people%20dressed%20casually%20in%20comfortable%20clothing%2C%20warm%20home%20office%20environment%20with%20natural%20lighting%2C%20laptop%20screen%20showing%20video%20conference%20interface%2C%20friendly%20business%20consultation%20atmosphere%2C%20cozy%20workspace%20setup%2C%20modern%20technology%20meeting%2C%20professional%20yet%20approachable%20conversation%20style&width=400&height=300&seq=discovery-casual-zoom&orientation=landscape'
    },
    {
      number: '02',
      title: 'Build & Launch',
      duration: '5-7 business days',
      description: 'Our team creates your custom website with optimized copy, local SEO setup, and AI integrations while you focus on your business.',
      details: [
        'Custom design matching your brand',
        'Conversion-optimized copy writing',
        'Local SEO setup with schema markup',
        'AI appointment booking integration',
        '24/7 AI customer service setup',
        'Mobile-responsive design',
        'Speed optimization',
        'Analytics and tracking setup'
      ],
      icon: 'ri-code-line',
      image: 'https://readdy.ai/api/search-image?query=Web%20developers%20working%20on%20professional%20website%20design%2C%20multiple%20monitors%20showing%20website%20layouts%2C%20modern%20development%20workspace%2C%20coding%20and%20design%20process%2C%20professional%20team%20collaboration%2C%20clean%20modern%20office%20environment%2C%20developers%20creating%20responsive%20websites%2C%20UI%2FUX%20design%20process%2C%20contemporary%20workspace%20with%20natural%20lighting&width=400&height=300&seq=build&orientation=landscape'
    },
    {
      number: '03',
      title: 'Go Live',
      duration: 'Immediate',
      description: 'Your website launches and immediately starts working to generate leads with AI appointment booking and customer service active 24/7.',
      details: [
        'Website goes live on your domain',
        'AI systems start taking appointments',
        'Customer service chat goes active',
        'Call tracking begins',
        'Analytics dashboard access',
        'Lead notifications setup'
      ],
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20professional%20AI%20avatar%20woman%20receptionist%20and%20online%20customer%20support%20agent%2C%20friendly%20virtual%20assistant%20with%20headset%2C%20modern%20digital%20interface%20background%2C%20holographic%20AI%20assistant%20appearance%2C%20professional%20business%20attire%2C%20warm%20welcoming%20smile%2C%20futuristic%20customer%20service%20technology%2C%20sleek%20modern%20office%20environment%2C%20high-tech%20customer%20support%20setup%2C%20digital%20AI%20receptionist%20interface&width=400&height=300&seq=ai-receptionist&orientation=landscape'
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      duration: 'Ongoing',
      description: 'We continuously monitor, test, and optimize your site to increase conversions, add new features, and keep you ahead of competitors.',
      details: [
        'A/B testing of headlines and forms',
        'Conversion rate optimization',
        'New page creation as needed',
        'SEO content updates',
        'Performance monitoring',
        'Security updates and maintenance',
        'Monthly performance reports'
      ],
      icon: 'ri-line-chart-line',
      image: 'https://readdy.ai/api/search-image?query=Analytics%20dashboard%20showing%20website%20performance%20improvements%2C%20conversion%20rate%20optimization%20charts%2C%20A%2FB%20testing%20results%2C%20business%20growth%20metrics%2C%20professional%20data%20visualization%2C%20modern%20analytics%20interface%2C%20performance%20monitoring%20screens%2C%20digital%20marketing%20analytics%2C%20clean%20dashboard%20design%20with%20graphs%20and%20charts&width=400&height=300&seq=improve&orientation=landscape'
    }
  ];

  const whatWeNeed = [
    'Business name and contact information',
    'List of services you offer',
    'Service area (cities/regions you serve)',
    'Current website (if you have one)',
    'Logo and brand colors (if available)',
    'Photos of your work (we can help source if needed)',
    'Any specific requirements or preferences'
  ];

  const faqs = [
    {
      question: 'How fast can you really launch my website?',
      answer: 'Most websites launch within 5-7 business days. Simple service businesses can be ready in 3-5 days, while more complex multi-service companies may take up to 7 days. We prioritize quality over speed.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, absolutely. We offer month-to-month terms with no long-term contracts. Simply give us 30 days notice and you can cancel anytime. No cancellation fees or penalties.'
    },
    {
      question: 'What if I want changes to my website?',
      answer: 'Changes are included! Minor updates and content changes are handled within 24-48 hours. Larger redesigns or new features are planned and implemented as part of our continuous improvement process.'
    },
    {
      question: 'Do you work with businesses outside the trades?',
      answer: 'While we specialize in local service businesses (HVAC, plumbing, roofing, etc.), we also work with other local businesses like restaurants, retail stores, professional services, and more.'
    },
    {
      question: 'How does the AI appointment booking work?',
      answer: 'Our AI chat system engages visitors, qualifies leads, and books appointments directly into your calendar. It works 24/7 and can handle multiple conversations simultaneously, never missing a potential customer.'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            How It <span className="text-amber-400">Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            From consultation to continuous optimization, here's exactly how we get your business online and generating leads
          </p>
          <div className="animate-fade-in-up">
            <Button size="lg">
              Start for $299/m
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-start gap-12 animate-fade-in-up`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-amber-600 dark:text-amber-400 font-semibold">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-5 h-5 flex items-center justify-center mr-3">
                            <i className="ri-check-line text-green-500"></i>
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What We Need From You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To get started, we'll need some basic information about your business. Don't worry - we'll guide you through everything.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {whatWeNeed.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Your Timeline to Success
          </h2>
          
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">Day 1</div>
                <div className="text-amber-100">Discovery Call</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Days 2-7</div>
                <div className="text-amber-100">Build & Setup</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Day 8</div>
                <div className="text-amber-100">Launch & Go Live</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Ongoing</div>
                <div className="text-amber-100">Optimize & Improve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Answered Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's get your business online and generating leads in just 5-7 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start for $299/m
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Book a 15-min Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
