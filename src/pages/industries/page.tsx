
import { Link } from 'react-router-dom';
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

export default function Industries() {
  const industries = [
    {
      name: 'HVAC',
      slug: 'hvac',
      icon: 'ri-temp-cold-line',
      description: 'Heating, ventilation, and air conditioning services',
      clients: '150+',
      avgIncrease: '180%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20fixing%20air%20conditioning%20unit%20outside%20beside%20residential%20house%2C%20technician%20in%20uniform%20working%20on%20outdoor%20AC%20unit%2C%20residential%20home%20exterior%2C%20professional%20service%20repair%2C%20summer%20day%20with%20clear%20sky%2C%20expert%20HVAC%20maintenance%20and%20repair%20service%2C%20modern%20suburban%20house%20setting%2C%20technical%20expertise%20in%20air%20conditioning%20repair&width=400&height=300&seq=hvac-outdoor-repair&orientation=landscape'
    },
    {
      name: 'Roofing',
      slug: 'roofing',
      icon: 'ri-home-line',
      description: 'Residential and commercial roofing services',
      clients: '120+',
      avgIncrease: '165%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20roofer%20installing%20shingles%20on%20residential%20home%2C%20safety%20equipment%2C%20blue%20sky%20background%2C%20quality%20craftsmanship%2C%20professional%20roofing%20work&width=400&height=300&seq=roofing&orientation=landscape'
    },
    {
      name: 'Plumbing',
      slug: 'plumbing',
      icon: 'ri-drop-line',
      description: 'Residential and commercial plumbing solutions',
      clients: '95+',
      avgIncrease: '145%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumber%20fixing%20pipes%20under%20kitchen%20sink%2C%20modern%20tools%2C%20clean%20residential%20setting%2C%20expert%20plumbing%20service%2C%20professional%20uniform&width=400&height=300&seq=plumbing&orientation=landscape'
    },
    {
      name: 'Electrical',
      slug: 'electrical',
      icon: 'ri-flashlight-line',
      description: 'Licensed electrical installation and repair',
      clients: '80+',
      avgIncrease: '155%',
      image: 'https://readdy.ai/api/search-image?query=Licensed%20electrician%20working%20on%20electrical%20panel%2C%20safety%20equipment%2C%20professional%20tools%2C%20modern%20residential%20electrical%20work%2C%20expert%20electrical%20service&width=400&height=300&seq=electrical&orientation=landscape'
    },
    {
      name: 'Landscaping',
      slug: 'landscaping',
      icon: 'ri-plant-line',
      description: 'Landscape design and maintenance services',
      clients: '110+',
      avgIncrease: '170%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20landscaper%20designing%20beautiful%20garden%2C%20lush%20green%20plants%2C%20modern%20landscape%20design%2C%20outdoor%20beautification%2C%20professional%20landscaping%20service&width=400&height=300&seq=landscaping&orientation=landscape'
    },
    {
      name: 'Cleaning',
      slug: 'cleaning',
      icon: 'ri-brush-line',
      description: 'Residential and commercial cleaning services',
      clients: '75+',
      avgIncrease: '190%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20team%20working%20in%20modern%20office%20space%2C%20cleaning%20supplies%2C%20spotless%20environment%2C%20professional%20cleaning%20service%2C%20team%20collaboration&width=400&height=300&seq=cleaning&orientation=landscape'
    },
    {
      name: 'Pest Control',
      slug: 'pest-control',
      icon: 'ri-bug-line',
      description: 'Safe and effective pest management',
      clients: '45+',
      avgIncrease: '200%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20pest%20control%20technician%20treating%20residential%20property%2C%20safety%20equipment%2C%20professional%20uniform%2C%20effective%20pest%20management%2C%20residential%20service&width=400&height=300&seq=pest&orientation=landscape'
    },
    {
      name: 'Movers',
      slug: 'movers',
      icon: 'ri-truck-line',
      description: 'Professional moving and relocation services',
      clients: '35+',
      avgIncrease: '175%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20moving%20team%20loading%20furniture%20into%20moving%20truck%2C%20careful%20handling%2C%20residential%20moving%20service%2C%20professional%20movers%20in%20uniform&width=400&height=300&seq=movers&orientation=landscape'
    },
    {
      name: 'Painters',
      slug: 'painters',
      icon: 'ri-paint-brush-line',
      description: 'Interior and exterior painting services',
      clients: '55+',
      avgIncrease: '150%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20painter%20painting%20interior%20wall%20with%20roller%2C%20clean%20workspace%2C%20quality%20paint%20job%2C%20residential%20painting%20service%2C%20professional%20painting%20equipment&width=400&height=300&seq=painters&orientation=landscape'
    },
    {
      name: 'Handyman',
      slug: 'handyman',
      icon: 'ri-hammer-line',
      description: 'General home repair and maintenance',
      clients: '85+',
      avgIncrease: '140%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20handyman%20fixing%20cabinet%20in%20modern%20kitchen%2C%20various%20tools%2C%20home%20repair%20service%2C%20skilled%20craftsman%2C%20residential%20maintenance&width=400&height=300&seq=handyman&orientation=landscape'
    },
    {
      name: 'Tree Services',
      slug: 'tree-services',
      icon: 'ri-leaf-line',
      description: 'Tree removal, trimming, and care',
      clients: '40+',
      avgIncrease: '185%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20arborist%20trimming%20large%20tree%20with%20safety%20equipment%2C%20tree%20care%20service%2C%20residential%20property%2C%20professional%20tree%20maintenance&width=400&height=300&seq=tree&orientation=landscape'
    },
    {
      name: 'Smart Home',
      slug: 'smart-home',
      icon: 'ri-home-wifi-line',
      description: 'Smart home automation and security systems',
      clients: '65+',
      avgIncrease: '160%',
      image: 'https://readdy.ai/api/search-image?query=Professional%20smart%20home%20technician%20installing%20home%20automation%20system%2C%20modern%20residential%20interior%2C%20smart%20devices%20and%20control%20panels%2C%20professional%20installation%20service%2C%20high-tech%20home%20security%20setup%2C%20expert%20smart%20home%20integration&width=400&height=300&seq=smart-home&orientation=landscape'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Industries We <span className="text-amber-400">Serve</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Specialized websites for local service businesses that drive real results
          </p>
          <div className="animate-fade-in-up">
            <Button size="lg">
              Start for $299/m
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                      <i className={`${industry.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors duration-200">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-amber-600 dark:text-amber-400 font-semibold">
                      {industry.clients} clients
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-semibold">
                      +{industry.avgIncrease} calls
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Local Businesses <span className="text-amber-500">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-focus-line text-3xl text-amber-600 dark:text-amber-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Industry Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand your industry's unique challenges and customer needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-3xl text-amber-600 dark:text-amber-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Local SEO Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for local search to help customers find you first
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-3xl text-amber-600 dark:text-amber-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Conversion Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every element designed to turn visitors into paying customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Your Industry?
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
