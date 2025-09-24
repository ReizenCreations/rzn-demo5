import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Visions() {
  const [scrollLocked, setScrollLocked] = useState(true);
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  // Lock/unlock scroll based on CTA visibility
  useEffect(() => {
    if (ctaInView && scrollLocked) {
      setScrollLocked(false);
    }
  }, [ctaInView, scrollLocked]);

  // Apply scroll lock to body
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [scrollLocked]);

  return (
    <div className={`min-h-screen ${scrollLocked ? 'overflow-hidden' : ''}`} style={{ backgroundColor: '#edfbff' }}>
      {/* Header */}
      <header className="w-full bg-gray-950 border-b border-gray-950">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="/" 
              className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <h1 className="text-2xl font-bold text-white">Our Visions</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={heroRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              heroInView 
                ? 'opacity-100 translate-y-0 animate-slide-up-fade-in' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Turning Visions Into Reality
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Reizen Creations, we believe every great success story starts with a vision. 
              Our mission is to transform your boldest ideas into market-dominating realities.
            </p>
          </div>

          <div 
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out ${
              cardsInView 
                ? 'opacity-100 translate-x-0 animate-slide-in-left' 
                : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the catalyst that transforms ambitious coaches and entrepreneurs 
                from dreamers into industry leaders, creating lasting impact in their markets.
              </p>
            </div>
            
            <div className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out ${
              cardsInView 
                ? 'opacity-100 translate-x-0 animate-slide-in-right' 
                : 'opacity-0 translate-x-8'
            }`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                We understand that your vision is unique. Our role is to provide the strategic 
                framework, creative execution, and growth systems to make it a reality.
              </p>
            </div>
          </div>

          <div 
            ref={ctaRef}
            className={`bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center transition-all duration-700 ease-out relative ${
              ctaInView 
                ? 'opacity-100 translate-y-0 animate-slide-up-fade-in' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Scroll unlock indicator */}
            {scrollLocked && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                  Scroll to unlock
                </div>
              </div>
            )}
            <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to turn your vision into market domination.
            </p>
            <a 
              href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Start Your Journey
            </a>
          </div>

          {/* Scroll progress indicator when locked */}
          {scrollLocked && (
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
              <div className="bg-black/80 text-white px-6 py-3 rounded-full flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Keep scrolling to reveal content</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* NEW ANIMATED SECTION BELOW */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              ref={heroRef}
              className={`text-center mb-16 transition-all duration-700 ease-out ${
                heroInView 
                  ? 'opacity-100 translate-y-0 animate-slide-up-fade-in' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Animated Vision Section
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                This section demonstrates the scroll-triggered animations you requested
              </p>
            </div>

            <div 
              ref={cardsRef}
              className="grid md:grid-cols-2 gap-12 mb-16"
            >
              <div className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-700 ease-out ${
                cardsInView 
                  ? 'opacity-100 translate-x-0 animate-slide-in-left' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Left Animation</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  This card slides in from the left when you scroll down to this section. 
                  The animation is smooth and engaging, creating visual interest.
                </p>
              </div>
              
              <div className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-700 ease-out ${
                cardsInView 
                  ? 'opacity-100 translate-x-0 animate-slide-in-right' 
                  : 'opacity-0 translate-x-8'
              }`}>
                <h3 className="text-3xl font-bold text-indigo-600 mb-4">Right Animation</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  This card slides in from the right, creating a balanced and dynamic 
                  effect as both cards animate into view simultaneously.
                </p>
              </div>
            </div>

            <div 
              ref={ctaRef}
              className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl text-center transition-all duration-700 ease-out ${
                ctaInView 
                  ? 'opacity-100 translate-y-0 animate-slide-up-fade-in' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-4xl font-bold mb-6">Final Animated Section</h3>
              <p className="text-xl mb-8 opacity-90">
                This section slides up and fades in when it enters the viewport
              </p>
              <div className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg inline-block">
                Animation Complete!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visions;