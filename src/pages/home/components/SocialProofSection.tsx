
import { useEffect, useState } from 'react';

export default function SocialProofSection() {
  const industries = [
    { name: 'HVAC', icon: 'ri-temp-cold-line', count: '150+' },
    { name: 'Roofing', icon: 'ri-home-line', count: '120+' },
    { name: 'Plumbing', icon: 'ri-drop-line', count: '95+' },
    { name: 'Electrical', icon: 'ri-flashlight-line', count: '80+' },
    { name: 'Landscaping', icon: 'ri-plant-line', count: '110+' },
    { name: 'Cleaning', icon: 'ri-brush-line', count: '75+' },
    { name: 'Pest Control', icon: 'ri-bug-line', count: '45+' },
    { name: 'Auto Services', icon: 'ri-car-line', count: '65+' },
    { name: 'Movers', icon: 'ri-truck-line', count: '35+' },
    { name: 'Painters', icon: 'ri-paint-brush-line', count: '55+' }
  ];

  const allTestimonials = [
    {
      id: 1,
      name: 'Mike Rodriguez',
      business: 'Rodriguez HVAC',
      location: 'Phoenix, AZ',
      rating: 5,
      text: "Since switching to Townspace, our phone calls increased by 180%. The AI booking system works even when we're busy on jobs. Best investment we've made.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20business%20owner%20Mike%20Rodriguez%20in%20work%20uniform%20standing%20in%20front%20of%20service%20van%2C%20confident%20smile%2C%20middle-aged%20Hispanic%20man%2C%20professional%20headshot%20style&width=100&height=100&seq=mike1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      business: 'Elite Cleaning Services',
      location: 'Seattle, WA',
      rating: 5,
      text: "The month-to-month flexibility was perfect for us. No huge upfront costs, and they continuously improve our site. We're booked solid now!",
      image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20business%20owner%20Sarah%20Chen%20in%20business%20attire%2C%20Asian%20woman%2C%20confident%20professional%20headshot%2C%20modern%20office%20background&width=100&height=100&seq=sarah1&orientation=squarish'
    },
    {
      id: 3,
      name: 'Tom Williams',
      business: 'Williams Roofing Co.',
      location: 'Dallas, TX',
      rating: 5,
      text: "Their local SEO is incredible. We're ranking #1 for roofing in our area. The AI customer service handles calls 24/7 - game changer!",
      image: 'https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20Tom%20Williams%20wearing%20hard%20hat%20and%20safety%20vest%2C%20middle-aged%20Caucasian%20man%2C%20construction%20site%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=tom1&orientation=squarish'
    },
    {
      id: 4,
      name: 'Jennifer Martinez',
      business: 'Martinez Landscaping',
      location: 'Austin, TX',
      rating: 5,
      text: "We were skeptical about the AI features, but they actually work! Customers love being able to book consultations instantly. Our booking rate increased by 300%.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20landscaping%20business%20owner%20Jennifer%20Martinez%2C%20Hispanic%20woman%2C%20outdoor%20setting%20with%20plants%2C%20confident%20smile%2C%20business%20attire%2C%20professional%20portrait&width=100&height=100&seq=jennifer1&orientation=squarish'
    },
    {
      id: 5,
      name: 'David Park',
      business: 'Park Electrical Services',
      location: 'Portland, OR',
      rating: 5,
      text: "Fast launch was exactly what we needed. Our old website was embarrassing and we needed something professional quickly. Townspace delivered in 6 days.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20electrician%20David%20Park%20in%20work%20uniform%2C%20Asian%20man%2C%20electrical%20tools%20background%2C%20confident%20professional%20headshot%2C%20business%20success&width=100&height=100&seq=david1&orientation=squarish'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      business: 'Thompson Plumbing',
      location: 'Denver, CO',
      rating: 5,
      text: "The customer service is outstanding. They respond quickly to any requests and the monthly reports show exactly how our website is performing.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumbing%20business%20owner%20Lisa%20Thompson%2C%20middle-aged%20Caucasian%20woman%2C%20business%20attire%2C%20confident%20professional%20headshot%2C%20modern%20office%20background&width=100&height=100&seq=lisa1&orientation=squarish'
    },
    {
      id: 7,
      name: 'Carlos Gutierrez',
      business: 'Gutierrez Pest Control',
      location: 'Miami, FL',
      rating: 5,
      text: "Our emergency calls doubled after launching with Townspace. The 24/7 AI assistant captures leads even when we're sleeping. Revenue is up 220%!",
      image: 'https://readdy.ai/api/search-image?query=Professional%20pest%20control%20business%20owner%20Carlos%20Gutierrez%20in%20uniform%2C%20Hispanic%20man%2C%20confident%20smile%2C%20service%20truck%20background%2C%20professional%20headshot%20style&width=100&height=100&seq=carlos1&orientation=squarish'
    },
    {
      id: 8,
      name: 'Amanda Foster',
      business: 'Foster Auto Repair',
      location: 'Chicago, IL',
      rating: 5,
      text: "The local SEO results are amazing. We went from page 3 to #1 for auto repair in Chicago. New customers find us every day through Google.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20auto%20repair%20shop%20owner%20Amanda%20Foster%20in%20mechanic%20uniform%2C%20Caucasian%20woman%2C%20garage%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=amanda1&orientation=squarish'
    },
    {
      id: 9,
      name: 'Robert Kim',
      business: 'Kim Moving Services',
      location: 'Los Angeles, CA',
      rating: 5,
      text: "Townspace made our business look professional overnight. The booking system handles all our appointments and the website converts visitors into customers.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20moving%20company%20owner%20Robert%20Kim%20in%20business%20attire%2C%20Asian%20man%2C%20moving%20truck%20background%2C%20confident%20professional%20headshot&width=100&height=100&seq=robert1&orientation=squarish'
    },
    {
      id: 10,
      name: 'Maria Santos',
      business: 'Santos Painting',
      location: 'San Antonio, TX',
      rating: 5,
      text: "The before and after gallery feature showcases our work beautifully. We get compliments on our website daily and bookings have tripled.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20painting%20contractor%20Maria%20Santos%20in%20work%20clothes%2C%20Hispanic%20woman%2C%20paint%20supplies%20background%2C%20confident%20smile%2C%20professional%20portrait&width=100&height=100&seq=maria1&orientation=squarish'
    },
    {
      id: 11,
      name: 'James Wilson',
      business: 'Wilson HVAC Solutions',
      location: 'Atlanta, GA',
      rating: 5,
      text: "The AI chat feature answers customer questions instantly. Even during our busiest season, we never miss a lead. Our close rate improved by 40%.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20James%20Wilson%20in%20uniform%2C%20African%20American%20man%2C%20HVAC%20equipment%20background%2C%20confident%20professional%20headshot&width=100&height=100&seq=james1&orientation=squarish'
    },
    {
      id: 12,
      name: 'Rachel Green',
      business: 'Green Clean Solutions',
      location: 'Boston, MA',
      rating: 5,
      text: "The monthly optimization keeps improving our results. We started with 20 calls per month and now we're getting 80+. Had to hire more staff!",
      image: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20service%20owner%20Rachel%20Green%20in%20business%20attire%2C%20Caucasian%20woman%2C%20modern%20office%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=rachel1&orientation=squarish'
    },
    {
      id: 13,
      name: 'Tony Ricci',
      business: 'Ricci Roofing',
      location: 'Philadelphia, PA',
      rating: 5,
      text: "Storm season used to overwhelm us with calls. Now the AI handles initial inquiries and schedules estimates automatically. We're more organized than ever.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20Tony%20Ricci%20wearing%20hard%20hat%2C%20Italian%20American%20man%2C%20rooftop%20background%2C%20confident%20professional%20headshot&width=100&height=100&seq=tony1&orientation=squarish'
    },
    {
      id: 14,
      name: 'Susan Lee',
      business: 'Lee Electrical',
      location: 'San Diego, CA',
      rating: 5,
      text: "The emergency service feature is brilliant. Customers can request urgent electrical work anytime and we get notified immediately. Revenue up 190%.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20electrician%20Susan%20Lee%20in%20work%20uniform%2C%20Asian%20woman%2C%20electrical%20panel%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=susan1&orientation=squarish'
    },
    {
      id: 15,
      name: 'Mark Johnson',
      business: 'Johnson Landscaping',
      location: 'Nashville, TN',
      rating: 5,
      text: "The seasonal service reminders keep our customers engaged year-round. Spring bookings start in February now thanks to automated follow-ups.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20landscaper%20Mark%20Johnson%20in%20work%20clothes%2C%20Caucasian%20man%2C%20garden%20background%20with%20plants%2C%20confident%20smile%2C%20professional%20headshot&width=100&height=100&seq=mark1&orientation=squarish'
    },
    {
      id: 16,
      name: 'Patricia Davis',
      business: 'Davis Plumbing Pro',
      location: 'Houston, TX',
      rating: 5,
      text: "The review management system helped us go from 3.2 to 4.8 stars on Google. More reviews mean more trust and more customers calling us first.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20plumber%20Patricia%20Davis%20in%20work%20uniform%2C%20African%20American%20woman%2C%20plumbing%20tools%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=patricia1&orientation=squarish'
    },
    {
      id: 17,
      name: 'Kevin O\'Brien',
      business: 'O\'Brien Pest Solutions',
      location: 'Orlando, FL',
      rating: 5,
      text: "The subscription service feature automated our recurring treatments. Customers love the convenience and our monthly recurring revenue doubled.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20pest%20control%20technician%20Kevin%20O%20Brien%20in%20uniform%2C%20Irish%20American%20man%2C%20service%20van%20background%2C%20confident%20professional%20headshot&width=100&height=100&seq=kevin1&orientation=squarish'
    },
    {
      id: 18,
      name: 'Angela Rodriguez',
      business: 'Rodriguez Auto Care',
      location: 'Phoenix, AZ',
      rating: 5,
      text: "The appointment scheduling system eliminated phone tag completely. Customers book their own oil changes and inspections online. So much more efficient.",
      image: 'https://readdy.ai/api/search-image?query=Professional%20auto%20mechanic%20Angela%20Rodriguez%20in%20work%20uniform%2C%20Hispanic%20woman%2C%20auto%20shop%20background%2C%20confident%20professional%20portrait&width=100&height=100&seq=angela1&orientation=squarish'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % allTestimonials.length);
        setIsAnimating(false);
      }, 800);
    }, 8000);

    return () => clearInterval(interval);
  }, [allTestimonials.length]);

  const getVisibleTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % allTestimonials.length;
      testimonials.push(allTestimonials[index]);
    }
    return testimonials;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industries Served */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by <span className="text-amber-500">Local Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Over 800+ local service businesses trust Townspace to grow their online presence
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className={`${industry.icon} text-2xl text-amber-600 dark:text-amber-400`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {industry.name}
              </h3>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                {industry.count} clients
              </p>
            </div>
          ))}
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out ${
              isAnimating 
                ? 'opacity-0 transform translate-y-8 scale-95' 
                : 'opacity-100 transform translate-y-0 scale-100'
            }`}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-all duration-1000 ease-out ${
                  isAnimating 
                    ? 'opacity-0 transform translate-y-4' 
                    : 'opacity-100 transform translate-y-0'
                }`}
                style={{ 
                  transitionDelay: isAnimating ? '0ms' : `${index * 150}ms`
                }}
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.business}
                    </div>
                    <div className="text-sm text-amber-600 dark:text-amber-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(allTestimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index * 3);
                    setIsAnimating(false);
                  }, 800);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-amber-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-300 hover:scale-110'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="text-4xl font-bold text-amber-500 mb-2">800+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Clients</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-amber-500 mb-2">150%</div>
            <div className="text-gray-600 dark:text-gray-400">Avg. Call Increase</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-amber-500 mb-2">5-7</div>
            <div className="text-gray-600 dark:text-gray-400">Days to Launch</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
