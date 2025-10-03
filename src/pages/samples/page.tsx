
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

export default function Samples() {
  const beforeAfter = [
    {
      business: 'Rodriguez HVAC',
      industry: 'HVAC',
      location: 'Phoenix, AZ',
      before: {
        calls: '12/month',
        bookings: '8/month',
        revenue: '$15,000/month'
      },
      after: {
        calls: '45/month',
        bookings: '32/month',
        revenue: '$48,000/month'
      },
      improvement: {
        calls: '+275%',
        bookings: '+300%',
        revenue: '+220%'
      },
      image: 'https://readdy.ai/api/search-image?query=Before%20and%20after%20website%20comparison%20showing%20old%20outdated%20HVAC%20website%20versus%20modern%20professional%20Townspace%20design%2C%20split%20screen%20comparison%2C%20web%20design%20improvement&width=600&height=400&seq=hvac-ba&orientation=landscape'
    },
    {
      business: 'Elite Cleaning Services',
      industry: 'Cleaning',
      location: 'Seattle, WA',
      before: {
        calls: '8/month',
        bookings: '5/month',
        revenue: '$8,000/month'
      },
      after: {
        calls: '28/month',
        bookings: '22/month',
        revenue: '$26,000/month'
      },
      improvement: {
        calls: '+250%',
        bookings: '+340%',
        revenue: '+225%'
      },
      image: 'https://readdy.ai/api/search-image?query=Before%20and%20after%20website%20comparison%20showing%20old%20basic%20cleaning%20service%20website%20versus%20modern%20professional%20Townspace%20design%2C%20web%20design%20transformation%2C%20cleaning%20business&width=600&height=400&seq=cleaning-ba&orientation=landscape'
    },
    {
      business: 'Williams Roofing Co.',
      industry: 'Roofing',
      location: 'Dallas, TX',
      before: {
        calls: '15/month',
        bookings: '10/month',
        revenue: '$25,000/month'
      },
      after: {
        calls: '52/month',
        bookings: '38/month',
        revenue: '$78,000/month'
      },
      improvement: {
        calls: '+247%',
        bookings: '+280%',
        revenue: '+212%'
      },
      image: 'https://readdy.ai/api/search-image?query=Before%20and%20after%20website%20comparison%20showing%20old%20outdated%20roofing%20website%20versus%20modern%20professional%20Townspace%20design%2C%20roofing%20contractor%20web%20design%20improvement&width=600&height=400&seq=roofing-ba&orientation=landscape'
    }
  ];

  const features = [
    {
      title: 'Mobile-First Design',
      description: 'Optimized for the 80% of customers who search on mobile',
      icon: 'ri-smartphone-line'
    },
    {
      title: 'Fast Loading Speed',
      description: 'Under 3 seconds load time to keep visitors engaged',
      icon: 'ri-speed-line'
    },
    {
      title: 'Local SEO Optimized',
      description: 'Built to rank high in local search results',
      icon: 'ri-map-pin-line'
    },
    {
      title: 'Conversion Focused',
      description: 'Every element designed to generate leads and calls',
      icon: 'ri-target-line'
    },
    {
      title: 'AI Integration',
      description: '24/7 appointment booking and customer service',
      icon: 'ri-robot-line'
    },
    {
      title: 'Professional Copy',
      description: 'Persuasive content that converts visitors to customers',
      icon: 'ri-edit-line'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Real <span className="text-amber-400">Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            See how local businesses transformed their online presence and dramatically increased calls and bookings
          </p>
          <div className="animate-fade-in-up">
            <Button size="lg">
              Start for $299/m
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Before & <span className="text-amber-500">After</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real businesses, real results. See the dramatic improvements our clients achieved.
            </p>
          </div>

          <div className="space-y-20">
            {beforeAfter.map((case_study, index) => (
              <div
                key={case_study.business}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Case Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {case_study.business}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold">
                    {case_study.industry} • {case_study.location}
                  </p>
                </div>

                {/* Before/After Image */}
                <div className="mb-8">
                  <img
                    src={case_study.image}
                    alt={`${case_study.business} before and after`}
                    className="w-full rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Before */}
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
                    <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 text-center">
                      Before Townspace
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Calls:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{case_study.before.calls}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Bookings:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{case_study.before.bookings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Revenue:</span>
                        <span className="font-semibold text-red-600 dark:text-red-400">{case_study.before.revenue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Improvement */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-4 text-center">
                      Improvement
                    </h4>
                    <div className="space-y-3 text-center">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {case_study.improvement.calls}
                      </div>
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {case_study.improvement.bookings}
                      </div>
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {case_study.improvement.revenue}
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
                    <h4 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 text-center">
                      After Townspace
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Calls:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{case_study.after.calls}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Bookings:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{case_study.after.bookings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Monthly Revenue:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{case_study.after.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Our Websites <span className="text-amber-500">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            See a <span className="text-amber-500">Live Demo</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience a fully functional Townspace website in action
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Button size="lg">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-external-link-line"></i>
                </div>
                View Live Demo Site
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive demo showing AI booking, customer service, and conversion features
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of local businesses already growing with Townspace
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
