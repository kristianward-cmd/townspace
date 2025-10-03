
import { useParams, Link } from 'react-router-dom';
import Layout from '../../../components/feature/Layout';
import Button from '../../../components/base/Button';

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  fullContent: string;
}

const blogPostsData: BlogPostData[] = [
  {
    id: '1',
    title: 'How Local SEO Can Transform Your Small Business in 2024',
    content: 'Local SEO has become more crucial than ever for small businesses looking to compete in their local markets.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'SEO',
    image: 'https://readdy.ai/api/search-image?query=modern%20small%20business%20owner%20working%20on%20laptop%20with%20local%20SEO%20analytics%20dashboard%20showing%20growth%20charts%20and%20location%20pins%2C%20professional%20office%20environment%20with%20natural%20lighting%2C%20clean%20minimalist%20background&width=1200&height=600&seq=blogpost1&orientation=landscape',
    slug: 'local-seo-transform-small-business-2024',
    fullContent: `
      <h2>The Local SEO Revolution</h2>
      <p>Local SEO has become more crucial than ever for small businesses looking to compete in their local markets. With over 46% of all Google searches having local intent, optimizing your online presence for local search is no longer optional—it's essential for survival and growth.</p>
      
      <h3>Why Local SEO Matters More Than Ever</h3>
      <p>The digital landscape has fundamentally shifted how consumers discover and choose local businesses. Today's customers are more likely to search for "plumber near me" than flip through a phone book. This behavioral change presents both an opportunity and a challenge for local businesses.</p>
      
      <h3>Key Local SEO Strategies for 2024</h3>
      <h4>1. Optimize Your Google My Business Profile</h4>
      <p>Your Google My Business (GMB) profile is often the first impression potential customers have of your business. Ensure your profile is complete, accurate, and regularly updated with fresh content, photos, and customer reviews.</p>
      
      <h4>2. Focus on Local Keywords</h4>
      <p>Research and target keywords that include your city, neighborhood, or region. Tools like Google Keyword Planner and SEMrush can help identify high-value local search terms relevant to your business.</p>
      
      <h4>3. Build Local Citations</h4>
      <p>Consistent NAP (Name, Address, Phone) information across all online directories and platforms is crucial for local SEO success. Focus on quality directories relevant to your industry and location.</p>
      
      <h3>Measuring Your Local SEO Success</h3>
      <p>Track key metrics such as local search rankings, Google My Business insights, website traffic from local searches, and most importantly, phone calls and appointments generated from your online presence.</p>
      
      <h3>Common Local SEO Mistakes to Avoid</h3>
      <ul>
        <li>Inconsistent business information across platforms</li>
        <li>Neglecting customer reviews and responses</li>
        <li>Ignoring mobile optimization</li>
        <li>Focusing only on Google and ignoring other local directories</li>
      </ul>
      
      <h3>The Future of Local SEO</h3>
      <p>As voice search and AI continue to evolve, local businesses must adapt their SEO strategies. Focus on conversational keywords, featured snippets, and providing comprehensive, helpful content that answers local customers' questions.</p>
    `
  },
  {
    id: '2',
    title: 'Website Design Trends That Actually Convert Visitors to Customers',
    content: 'Not all design trends are created equal. Learn which website design elements are proven to increase conversions.',
    author: 'Mike Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://readdy.ai/api/search-image?query=modern%20website%20design%20mockup%20on%20computer%20screen%20showing%20conversion%20optimization%20elements%2C%20clean%20interface%20with%20call-to-action%20buttons%2C%20professional%20workspace%20with%20design%20tools%2C%20bright%20natural%20lighting&width=1200&height=600&seq=blogpost2&orientation=landscape',
    slug: 'website-design-trends-convert-visitors-customers',
    fullContent: `
      <h2>Design That Converts: Beyond Pretty Pictures</h2>
      <p>In the world of web design, aesthetics and functionality must work hand in hand to create websites that not only look great but also convert visitors into paying customers. The latest data shows that businesses with well-designed websites see conversion rates up to 200% higher than those with outdated designs.</p>
      
      <h3>The Psychology of Conversion-Focused Design</h3>
      <p>Understanding user psychology is crucial for creating designs that convert. Users make decisions within milliseconds of landing on your site, and your design must immediately communicate trust, value, and clarity.</p>
      
      <h3>Essential Design Elements That Drive Conversions</h3>
      <h4>1. Clear Value Proposition</h4>
      <p>Your homepage should immediately answer three questions: What do you do? How does it help me? Why should I choose you? This information should be visible above the fold and communicated clearly.</p>
      
      <h4>2. Strategic Use of White Space</h4>
      <p>White space isn't wasted space—it's a powerful design tool that improves readability, focuses attention, and creates a sense of sophistication and professionalism.</p>
      
      <h4>3. Compelling Call-to-Action Buttons</h4>
      <p>Your CTA buttons should stand out visually and use action-oriented language. Test different colors, sizes, and placements to optimize for maximum clicks.</p>
      
      <h3>Mobile-First Design Principles</h3>
      <p>With mobile traffic accounting for over 60% of web browsing, your design must prioritize the mobile experience. This means larger touch targets, simplified navigation, and fast-loading images.</p>
      
      <h3>Trust Signals That Boost Conversions</h3>
      <ul>
        <li>Customer testimonials and reviews</li>
        <li>Professional photography</li>
        <li>Security badges and certifications</li>
        <li>Contact information and physical address</li>
        <li>Social media presence</li>
      </ul>
      
      <h3>Testing and Optimization</h3>
      <p>The best-converting designs are those that have been tested and refined based on real user data. Implement A/B testing for key elements like headlines, CTAs, and page layouts to continuously improve performance.</p>
    `
  }
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-6"
          >
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-arrow-left-line"></i>
            </div>
            Back to Blog
          </Link>
          
          <div className="flex items-center mb-4">
            <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm ml-4">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-amber-600 font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <p className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover object-top rounded-xl"
          />
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
        
        {/* Article Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-amber-600 font-semibold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-600">Digital Marketing Expert</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-100 hover:bg-amber-100 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="ri-twitter-line text-gray-600 hover:text-amber-600"></i>
              </button>
              <button className="w-10 h-10 bg-gray-100 hover:bg-amber-100 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="ri-linkedin-line text-gray-600 hover:text-amber-600"></i>
              </button>
              <button className="w-10 h-10 bg-gray-100 hover:bg-amber-100 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="ri-facebook-line text-gray-600 hover:text-amber-600"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <article key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover object-top"
                />
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <span className="ml-4">{relatedPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {relatedPost.title}
                  </h3>
                  
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
                  >
                    Read Article
                    <div className="w-4 h-4 inline-flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let us help you build a website that converts visitors into customers. 
            Get started with a free consultation today.
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
