
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('[data-url*="calendly.com"]')?.closest('section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Small%20business%20startup%20team%20of%20web%20developers%20and%20SEO%20specialists%20working%20together%20in%20modern%20coworking%20space%2C%20young%20entrepreneurs%20coding%20and%20analyzing%20website%20analytics%2C%20laptops%20with%20code%20and%20SEO%20dashboards%2C%20collaborative%20atmosphere%2C%20natural%20lighting%2C%20startup%20energy%2C%20professional%20photography%20style%2C%20tech%20startup%20environment%2C%20digital%20marketing%20focus&width=1920&height=1080&seq=hero-startup-bg&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Rent a High-Performing Local Website for{' '}
                <span className="text-amber-400">$299/month</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                We build, host, optimize, and continuously improve your website to drive more calls and appointments. No upfront costs, cancel anytime.
              </p>
              
              {/* Phone Number */}
              <div className="mb-8">
                <a
                  href="tel:+1-555-TOWNSPACE"
                  className="inline-flex items-center text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    <i className="ri-phone-line"></i>
                  </div>
                  1-555-TOWNSPACE
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start for $299/m
                </Button>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white border-0"
                  onClick={scrollToCalendly}
                >
                  Book a 15-min Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  No upfront costs
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  AI included
                </div>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Why Rent Your Website Instead of Owning?
                </h3>
                
                {/* Video Placeholder */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6 cursor-pointer group" style={{ aspectRatio: '16/9' }} onClick={openVideoModal}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-xl">
                      <div className="w-8 h-8 flex items-center justify-center ml-1">
                        <i className="ri-play-fill text-white text-2xl group-hover:scale-110 transition-transform duration-200"></i>
                      </div>
                    </button>
                  </div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Casual%20relaxed%20Townspace%20team%20member%20having%20friendly%20Zoom%20video%20call%20with%20small%20business%20owner%20on%20laptop%2C%20both%20people%20dressed%20casually%20in%20comfortable%20clothing%2C%20warm%20home%20office%20environment%20with%20natural%20lighting%2C%20laptop%20screen%20showing%20video%20conference%20interface%2C%20friendly%20conversation%20between%20service%20provider%20and%20client%2C%20relaxed%20professional%20atmosphere%2C%20cozy%20workspace%20setup%2C%20modern%20technology%20meeting&width=640&height=360&seq=video-thumb-casual-zoom&orientation=landscape"
                    alt="Explainer video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Key Points */}
                <div className="space-y-3 text-white">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-amber-400"></i>
                    </div>
                    Zero upfront fee
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-amber-400"></i>
                    </div>
                    Continuous improvements
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-amber-400"></i>
                    </div>
                    AI appointment booking
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-amber-400"></i>
                    </div>
                    24/7 AI support
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-amber-400"></i>
                    </div>
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl mx-4 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            </button>
            
            {/* Video Container */}
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Why Rent Your Website Instead of Owning?"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Why Rent Your Website Instead of Owning?
              </h3>
              <p className="text-gray-300">
                Discover how website rental can transform your local business
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
