
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Mike Rodriguez',
      business: 'Rodriguez HVAC',
      location: 'Phoenix, AZ',
      rating: 5,
      date: '2024-01-15',
      text: "Townspace completely transformed our business. We went from 12 calls per month to 45+ calls consistently. The AI booking system is incredible - it works even when we're busy on jobs. Our revenue has tripled since switching. Best investment we've ever made for our HVAC business.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20business%20owner%20Mike%20Rodriguez%20in%20work%20uniform%2C%20confident%20smile%2C%20middle-aged%20Hispanic%20man%2C%20professional%20headshot%20style%2C%20business%20success&width=80&height=80&seq=mike-review&orientation=squarish',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      business: 'Elite Cleaning Services',
      location: 'Seattle, WA',
      rating: 5,
      date: '2024-01-10',
      text: "The month-to-month flexibility was perfect for our growing business. No huge upfront costs like other web companies wanted. They continuously improve our site and we're always ranking higher in Google. We're booked solid now and had to hire 3 more cleaners!",
      image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20business%20owner%20Sarah%20Chen%20in%20business%20attire%2C%20Asian%20woman%2C%20confident%20professional%20headshot%2C%20modern%20office%20background%2C%20business%20success&width=80&height=80&seq=sarah-review&orientation=squarish',
      verified: true
    },
    {
      id: 3,
      name: 'Tom Williams',
      business: 'Williams Roofing Co.',
      location: 'Dallas, TX',
      rating: 5,
      date: '2024-01-08',
      text: "Their local SEO is incredible. We're ranking #1 for 'roofing Dallas' and several other key terms. The AI customer service handles calls 24/7 - absolute game changer! We've gone from $25k to $78k monthly revenue. Couldn't be happier with Townspace.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20Tom%20Williams%20wearing%20hard%20hat%2C%20middle-aged%20Caucasian%20man%2C%20construction%20site%20background%2C%20confident%20professional%20portrait%2C%20business%20success&width=80&height=80&seq=tom-review&orientation=squarish',
      verified: true
    },
    {
      id: 4,
      name: 'Jennifer Martinez',
      business: 'Martinez Landscaping',
      location: 'Austin, TX',
      rating: 5,
      date: '2024-01-05',
      text: "We were skeptical about the AI features, but they actually work! Customers love being able to book consultations instantly. The website looks so professional and we get compliments all the time. Our booking rate increased by 300% in just 3 months.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20landscaping%20business%20owner%20Jennifer%20Martinez%2C%20Hispanic%20woman%2C%20outdoor%20setting%20with%20plants%2C%20confident%20smile%2C%20business%20attire%2C%20professional%20portrait&width=80&height=80&seq=jennifer-review&orientation=squarish',
      verified: true
    },
    {
      id: 5,
      name: 'David Park',
      business: 'Park Electrical Services',
      location: 'Portland, OR',
      rating: 5,
      date: '2024-01-03',
      text: "Fast launch was exactly what we needed. Our old website was embarrassing and we needed something professional quickly. Townspace delivered in 6 days and we started getting calls immediately. The ongoing optimization keeps improving our results every month.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20electrician%20David%20Park%20in%20work%20uniform%2C%20Asian%20man%2C%20electrical%20tools%20background%2C%20confident%20professional%20headshot%2C%20business%20success&width=80&height=80&seq=david-review&orientation=squarish',
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      business: 'Thompson Plumbing',
      location: 'Denver, CO',
      rating: 5,
      date: '2023-12-28',
      text: "The customer service is outstanding. They respond quickly to any requests and the monthly reports show exactly how our website is performing. We've seen a 250% increase in emergency calls since launch. Highly recommend to any plumbing business.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumbing%20business%20owner%20Lisa%20Thompson%2C%20middle-aged%20Caucasian%20woman%2C%20business%20attire%2C%20confident%20professional%20headshot%2C%20modern%20office%20background&width=80&height=80&seq=lisa-review&orientation=squarish',
      verified: true
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: 'ri-star-fill' },
    { number: '800+', label: 'Happy Clients', icon: 'ri-user-heart-line' },
    { number: '150%', label: 'Avg Call Increase', icon: 'ri-phone-line' },
    { number: '98%', label: 'Client Retention', icon: 'ri-heart-line' }
  ];

  const platforms = [
    { name: 'Google Reviews', rating: '4.9', count: '247', icon: 'ri-google-fill' },
    { name: 'Facebook', rating: '4.8', count: '156', icon: 'ri-facebook-fill' },
    { name: 'Better Business Bureau', rating: 'A+', count: '89', icon: 'ri-building-line' },
    { name: 'Trustpilot', rating: '4.9', count: '134', icon: 'ri-shield-check-line' }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Client <span className="text-amber-400">Reviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            See what local business owners are saying about their Townspace experience
          </p>
          
          {/* Overall Rating */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8 animate-fade-in-up">
            <div className="text-5xl font-bold text-amber-400 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-star-fill text-amber-400 text-xl"></i>
                </div>
              ))}
            </div>
            <div className="text-gray-300">Based on 800+ reviews</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Clients <span className="text-amber-500">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-star-fill text-amber-400"></i>
                      </div>
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-check-line"></i>
                      </div>
                      Verified
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {review.business}
                    </div>
                    <div className="text-sm text-amber-600 dark:text-amber-400">
                      {review.location}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted Across <span className="text-amber-500">All Platforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${platform.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <div className="text-2xl font-bold text-amber-500 mb-1">
                  {platform.rating}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {platform.count} reviews
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
            Join Our Happy Clients
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start growing your business with a website that actually works
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
