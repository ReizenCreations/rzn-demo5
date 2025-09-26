import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

function Visions() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate gradient position based on scroll (moves slower for subtle effect)
  const gradientOffset = scrollY * 0.1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Header */}
      <header className="w-full border-b" style={{ backgroundColor: '#0a0a0a', borderColor: '#0a0a0a' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="/" 
              className="hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2" style={{ color: '#edfbff' }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <h1 className="text-2xl font-bold" style={{ color: '#edfbff' }}>Reizen</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <span 
                style={{ 
                  background: `linear-gradient(90deg, #edfbff ${Math.max(0, 20 - gradientOffset)}%, #60a5fa ${Math.max(10, 30 - gradientOffset)}%, #60a5fa ${Math.min(70, 50 + gradientOffset)}%, #edfbff ${Math.min(100, 80 + gradientOffset)}%)`,
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text',
                  filter: 'blur(0.3px)',
                  transition: 'filter 0.3s ease'
                }}
              >
                Turning Visions Into Reality
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#edfbff' }}>
              I write all this copy myself, freestyle. Best I can do to be genuine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#edfbff' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0a0a0a' }}>Our Vision</h2>
              <p className="leading-relaxed" style={{ color: '#0a0a0a' }}>
                To be the catalyst that transforms ambitious coaches and entrepreneurs 
                from dreamers into industry leaders, creating lasting impact in their markets.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#edfbff' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0a0a0a' }}>Your Vision</h2>
              <p className="leading-relaxed" style={{ color: '#0a0a0a' }}>
                My vision is unique. My role is to provide the strategic 
                framework & creative execution to make it a reality for You. 
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#edfbff' }}> Ready? </h2>
            <p className="text-xl mb-8 opacity-90" style={{ color: '#edfbff' }}>
              Let's get to work, the market is moving
            </p>
            <a 
              href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 inline-block" style={{ backgroundColor: '#edfbff', color: '#2563eb' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1f2ff'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#edfbff'}
            >
              ' insert same broken record button '
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Visions;