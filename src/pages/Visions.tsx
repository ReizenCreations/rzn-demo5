import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Visions() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Header */}
      <header className="w-full border-b" style={{ backgroundColor: '#0a0a0a', borderColor: '#0a0a0a' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="/" 
              className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </a>
            <h1 className="text-2xl font-bold text-white">For a better world, a better America</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#ddbb97' }}>
              Turning Visions Into Reality
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
            </p>
            <p className="text-xl leading-relaxed" style={{ color: '#04de7d' }}>
              I write all this copy myself, freestyle. Best I can do to be genuine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the catalyst that transforms ambitious coaches and entrepreneurs 
                from dreamers into industry leaders, creating lasting impact in their markets.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                My vision is unique. My role is to provide the strategic 
                framework & creative execution to make it a reality for You. 
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6"> Ready? </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's get to work, the market is moving
            </p>
            <a 
              href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200 inline-block"
              style={{ color: '#04de7d' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f1f1f'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a0a0a'}
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