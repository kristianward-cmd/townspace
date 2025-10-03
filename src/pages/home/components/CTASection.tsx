
import { useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function CTASection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Local Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of local businesses already growing with Townspace. 
              Start your website rental today for just $299/month.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start for $299/month
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call 1-555-TOWNSPACE
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-primary-100">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-shield-check-line text-secondary-400"></i>
                </div>
                30-day guarantee
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-time-line text-secondary-400"></i>
                </div>
                5-7 day launch
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-customer-service-2-line text-secondary-400"></i>
                </div>
                24/7 support
              </div>
            </div>
          </div>

          {/* Right Content - Calendly Widget */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/townspace/new-meeting"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary-400 mb-2">500+</div>
            <div className="text-primary-100">Websites Launched</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-400 mb-2">4.9★</div>
            <div className="text-primary-100">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
            <div className="text-primary-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
