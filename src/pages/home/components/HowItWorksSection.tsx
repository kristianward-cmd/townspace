
import Button from '../../../components/base/Button';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      duration: '24-48 hours',
      description: 'We learn about your business, services, and target customers through a quick consultation.',
      icon: 'ri-search-line',
      image: 'https://readdy.ai/api/search-image?query=Casual%20relaxed%20Townspace%20team%20member%20having%20friendly%20Zoom%20video%20call%20with%20local%20service%20business%20owner%20on%20laptop%2C%20both%20people%20dressed%20casually%20in%20comfortable%20clothing%2C%20warm%20home%20office%20environment%20with%20natural%20lighting%2C%20laptop%20screen%20showing%20video%20conference%20interface%2C%20friendly%20business%20consultation%20atmosphere%2C%20cozy%20workspace%20setup%2C%20modern%20technology%20meeting%2C%20professional%20yet%20approachable%20conversation%20style&width=400&height=300&seq=discovery-casual-zoom&orientation=landscape'
    },
    {
      number: '02',
      title: 'Build and Launch',
      duration: '5-7 days',
      description: 'Our team creates your custom website with optimized copy, local SEO, and AI integrations.',
      icon: 'ri-code-line',
      image: 'https://readdy.ai/api/search-image?query=Web%20developers%20working%20on%20professional%20website%20design%2C%20multiple%20monitors%20showing%20website%20layouts%2C%20modern%20development%20workspace%2C%20coding%20and%20design%20process%2C%20professional%20team%20collaboration&width=400&height=300&seq=build&orientation=landscape'
    },
    {
      number: '03',
      title: 'Calls and Bookings Go Live',
      duration: 'Immediate',
      description: 'Your website starts generating leads with AI appointment booking and customer service active.',
      icon: 'ri-phone-line',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20professional%20AI%20avatar%20woman%20receptionist%20and%20online%20customer%20support%20agent%2C%20friendly%20virtual%20assistant%20with%20headset%2C%20modern%20digital%20interface%20background%2C%20holographic%20AI%20assistant%20appearance%2C%20professional%20business%20attire%2C%20warm%20welcoming%20smile%2C%20futuristic%20customer%20service%20technology%2C%20sleek%20modern%20office%20environment%2C%20high-tech%20customer%20support%20setup%2C%20digital%20AI%20receptionist%20interface&width=400&height=300&seq=ai-receptionist&orientation=landscape'
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      duration: 'Ongoing',
      description: 'We continuously test and optimize your site to increase conversions and add new features.',
      icon: 'ri-line-chart-line',
      image: 'https://readdy.ai/api/search-image?query=Analytics%20dashboard%20showing%20website%20performance%20improvements%2C%20conversion%20rate%20optimization%20charts%2C%20A%2FB%20testing%20results%2C%20business%20growth%20metrics%2C%20professional%20data%20visualization&width=400&height=300&seq=improve&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It <span className="text-amber-500">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From consultation to continuous optimization, we handle everything so you can focus on your business
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
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
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <i className={`${step.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Step {step.number} of 4
                  </div>
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

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of local businesses already growing with Townspace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start for $299/m
              </Button>
              <Button variant="outline" size="lg">
                Book a 15-min Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
