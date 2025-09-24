import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Visions() {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();
  const { ref: ctaRef, isInView: ctaInView } = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edfbff' }}>
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
            className={`bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center transition-all duration-700 ease-out ${
              ctaInView 
                ? 'opacity-100 translate-y-0 animate-slide-up-fade-in' 
                : 'opacity-0 translate-y-8'
            }`}
          >
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
        </div>
      </main>
    </div>
  );
}

export default Visions;