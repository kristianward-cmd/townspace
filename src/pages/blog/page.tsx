
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Local SEO Can Transform Your Small Business in 2024',
    excerpt: 'Discover the latest local SEO strategies that are driving real results for small businesses. Learn how to dominate local search results and attract more customers.',
    content: 'Local SEO has become more crucial than ever for small businesses looking to compete in their local markets. With over 46% of all Google searches having local intent, optimizing your online presence for local search is no longer optional—it\'s essential for survival and growth.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'SEO',
    image: 'https://readdy.ai/api/search-image?query=modern%20small%20business%20owner%20working%20on%20laptop%20with%20local%20SEO%20analytics%20dashboard%20showing%20growth%20charts%20and%20location%20pins%2C%20professional%20office%20environment%20with%20natural%20lighting%2C%20clean%20minimalist%20background&width=800&height=400&seq=blog1&orientation=landscape',
    slug: 'local-seo-transform-small-business-2024'
  },
  {
    id: '2',
    title: 'Website Design Trends That Actually Convert Visitors to Customers',
    excerpt: 'Not all design trends are created equal. Learn which website design elements are proven to increase conversions and drive more business results.',
    content: 'In the world of web design, aesthetics and functionality must work hand in hand to create websites that not only look great but also convert visitors into paying customers. The latest data shows that businesses with well-designed websites see conversion rates up to 200% higher than those with outdated designs.',
    author: 'Mike Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://readdy.ai/api/search-image?query=modern%20website%20design%20mockup%20on%20computer%20screen%20showing%20conversion%20optimization%20elements%2C%20clean%20interface%20with%20call-to-action%20buttons%2C%20professional%20workspace%20with%20design%20tools%2C%20bright%20natural%20lighting&width=800&height=400&seq=blog2&orientation=landscape',
    slug: 'website-design-trends-convert-visitors-customers'
  },
  {
    id: '3',
    title: 'The Complete Guide to Google My Business Optimization',
    excerpt: 'Master Google My Business to increase your local visibility, attract more customers, and build trust in your community. Step-by-step optimization guide included.',
    content: 'Google My Business is one of the most powerful free tools available to local businesses, yet many business owners barely scratch the surface of its potential. A fully optimized GMB profile can increase your chances of appearing in local search results by up to 70%.',
    author: 'Lisa Rodriguez',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Local Marketing',
    image: 'https://readdy.ai/api/search-image?query=Google%20My%20Business%20interface%20on%20smartphone%20and%20laptop%20showing%20local%20business%20listing%20with%205-star%20reviews%20and%20location%20map%2C%20professional%20business%20owner%20managing%20online%20presence%2C%20modern%20office%20setting&width=800&height=400&seq=blog3&orientation=landscape',
    slug: 'complete-guide-google-my-business-optimization'
  },
  {
    id: '4',
    title: 'Why Your Website Speed Matters More Than You Think',
    excerpt: 'Website speed directly impacts your search rankings, user experience, and bottom line. Learn how to optimize your site for lightning-fast performance.',
    content: 'Page speed is no longer just a nice-to-have feature—it\'s a critical ranking factor that directly affects your business success. Studies show that a one-second delay in page load time can result in a 7% reduction in conversions, 11% fewer page views, and a 16% decrease in customer satisfaction.',
    author: 'David Park',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Performance',
    image: 'https://readdy.ai/api/search-image?query=website%20speed%20optimization%20dashboard%20showing%20fast%20loading%20times%20and%20performance%20metrics%2C%20computer%20screen%20with%20speed%20test%20results%2C%20modern%20tech%20workspace%20with%20clean%20minimalist%20background&width=800&height=400&seq=blog4&orientation=landscape',
    slug: 'website-speed-matters-more-than-you-think'
  },
  {
    id: '5',
    title: 'Content Marketing Strategies That Drive Local Business Growth',
    excerpt: 'Create content that resonates with your local audience and drives real business results. Proven strategies from successful local businesses.',
    content: 'Content marketing for local businesses requires a different approach than national brands. Your content needs to speak directly to your local community, address local concerns, and establish your business as a trusted local authority.',
    author: 'Jennifer Walsh',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Content Marketing',
    image: 'https://readdy.ai/api/search-image?query=local%20business%20owner%20creating%20content%20marketing%20strategy%20with%20laptop%20and%20notepad%2C%20community%20photos%20and%20local%20landmarks%20in%20background%2C%20warm%20natural%20lighting%2C%20professional%20yet%20approachable%20setting&width=800&height=400&seq=blog5&orientation=landscape',
    slug: 'content-marketing-strategies-local-business-growth'
  },
  {
    id: '6',
    title: 'Mobile-First Design: Why Your Website Must Be Mobile-Optimized',
    excerpt: 'With over 60% of searches happening on mobile devices, mobile optimization is critical. Learn the essential elements of mobile-first design.',
    content: 'Mobile-first design isn\'t just a trend—it\'s a necessity. Google\'s mobile-first indexing means that the mobile version of your website is now the primary version that Google uses for ranking and indexing. If your site isn\'t mobile-optimized, you\'re missing out on the majority of potential customers.',
    author: 'Alex Thompson',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Mobile',
    image: 'https://readdy.ai/api/search-image?query=responsive%20website%20design%20showing%20mobile%20phone%20and%20desktop%20computer%20with%20same%20website%20adapting%20to%20different%20screen%20sizes%2C%20modern%20UI%20design%20elements%2C%20clean%20professional%20workspace&width=800&height=400&seq=blog6&orientation=landscape',
    slug: 'mobile-first-design-website-mobile-optimized'
  }
];

const categories = ['All', 'SEO', 'Design', 'Local Marketing', 'Performance', 'Content Marketing', 'Mobile'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Local Business Growth Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights, proven strategies, and actionable tips to help your local business thrive online. 
              Stay ahead of the competition with our latest articles on SEO, web design, and digital marketing.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Featured Article
              </span>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover object-top"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{filteredPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-amber-600 font-semibold text-sm">
                          {filteredPosts[0].author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{filteredPosts[0].author}</p>
                        <p className="text-sm text-gray-500">{new Date(filteredPosts[0].date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${filteredPosts[0].slug}`}>
                      <Button variant="primary" size="sm">
                        Read Article
                        <div className="w-4 h-4 flex items-center justify-center ml-2">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-amber-600 font-semibold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <div className="w-4 h-4 inline-flex items-center justify-center ml-1">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Local Business Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights, strategies, and tips delivered to your inbox weekly. 
            Join over 5,000 local business owners who trust our content.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              required
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Local Business?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Stop reading about success and start experiencing it. Get a high-performing website 
            that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Free Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
