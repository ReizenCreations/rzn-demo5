import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Play, Star, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Award, Target, Rocket, Wrench } from 'lucide-react';
import Visions from './pages/Visions';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Get public URLs for your logo images
const headerLogoUrl = supabase.storage.from('RznWebAssets').getPublicUrl('R.22.svg').data.publicUrl;
const footerLogoUrl = supabase.storage.from('RznWebAssets').getPublicUrl('R.20.png').data.publicUrl;

// Get public URL for video thumbnail
const videoThumbnailUrl = supabase.storage.from('RznWebAssets').getPublicUrl('rznwth1.png').data.publicUrl;

// Get public URLs for service icons
const icon1Url = supabase.storage.from('RznWebAssets').getPublicUrl('i4.svg').data.publicUrl;
const icon2Url = supabase.storage.from('RznWebAssets').getPublicUrl('i5.svg').data.publicUrl;
const icon3Url = supabase.storage.from('RznWebAssets').getPublicUrl('i6.svg').data.publicUrl;

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      {/* Header */}
      <header className="w-full bg-gray-950 border-b border-gray-950">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center">
            <img 
              src={headerLogoUrl} 
              alt="Reizen Creations Logo" 
             className="w-48 md:w-80 h-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="pt-20 pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-16 leading-tight">
              Everyone is selling, few are converting... Here's how Reizen helps coaches fix that 
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> and scale fast</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              
            </p>
            
            {/* Video Player */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
                {!isVideoPlaying ? (
                  <div className="relative w-full h-full bg-gray-800 flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
                    <img 
                      src={videoThumbnailUrl} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110">
                        <Play className="w-12 h-12 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/OiYVRtxKYqU?autoplay=1&modestbranding=1&rel=0&showinfo=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=0&end=0&loop=0&playlist=OiYVRtxKYqU&volume=75"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
            </div>

            <a 
              href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services That Scale
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#edfbff' }}>
              Comprehensive marketing solutions designed for explosive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                iconUrl: icon1Url,
                title: "Strategic Brand Positioning",
                description: "Position your brand as the undisputed leader in your market with data-driven positioning strategies.",
                features: ["Competitive Analysis", "Brand Architecture"]
              },
              {
                iconUrl: icon2Url,
                title: "Digital Marketing Acceleration",
                description: "Accelerate your digital presence with cutting-edge campaigns that convert prospects into loyal customers.",
                features: ["Social Media Strategy", "SEO Optimization"]
              },
              {
                iconUrl: icon3Url,
                title: "Growth Hacking Systems",
                description: "Implement growth systems that scale automatically, driving consistent revenue growth month over month.",
                features: ["Conversion Optimization", "Performance Analytics", "Funnel Building"]
              }
            ].map((service, index) => (
              <div key={index} className="p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-xs md:max-w-md mx-auto" style={{ backgroundColor: '#edfbff' }}>
                <div className="text-blue-600 mb-6">
                  <img 
                    src={service.iconUrl} 
                    alt={`${service.title} icon`}
                    className="w-16 h-auto"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Partnership Opportunity */}
      <section className="py-20 animated-gradient-bg relative overflow-hidden">
        {/* Animated border overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-0.5 opacity-80 legendary-shimmer" style={{ background: 'linear-gradient(to right, #2563eb, #edfbff, #2563eb, #edfbff, #2563eb)' }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-80 legendary-shimmer" style={{ background: 'linear-gradient(to right, #edfbff, #2563eb, #edfbff, #2563eb, #edfbff)' }}></div>
        </div>
        
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60">
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center border rounded-full px-6 py-2 mb-6" style={{ backgroundColor: 'rgba(237, 251, 255, 0.1)', borderColor: 'rgba(237, 251, 255, 0.2)' }}>
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#edfbff' }}>Partnership Opportunity</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              I Don't Have Testimonials Yet...
            </h3>
            <p className="text-xl text-gray-300 font-medium">
              Here's why that might be a <span className="text-emerald-400 font-bold">good thing</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12 mb-12" style={{ backgroundColor: 'rgba(237, 251, 255, 0.05)', borderColor: 'rgba(237, 251, 255, 0.1)' }}>
            <div className="space-y-8 text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                  Everyone wants a story <em>after</em> it's been written—I'm offering you <span className="text-emerald-400 font-bold">page one</span>
                </p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 md:p-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Do you want to be the reason the line outside gets longer
                </h4>
                <p className="text-lg text-emerald-200">
                  or the coach standing in line?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="border rounded-xl p-6" style={{ backgroundColor: 'rgba(237, 251, 255, 0.05)', borderColor: 'rgba(237, 251, 255, 0.1)' }}>
                  <div className="text-emerald-400 mb-4">
                    <TrendingUp className="h-8 w-8 mx-auto" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-3">Trusted Partnership</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Imagine placing your workload on a trusted partner where all they ask for in return is a piece of the pie <span className="text-emerald-400 font-semibold">when the work is done</span>
                  </p>
                </div>
                
                <div className="border rounded-xl p-6" style={{ backgroundColor: 'rgba(237, 251, 255, 0.05)', borderColor: 'rgba(237, 251, 255, 0.1)' }}>
                  <div className="text-emerald-400 mb-4">
                    <Star className="h-8 w-8 mx-auto" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-3">Results-Driven Focus</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You won't be <span className="text-red-400 font-semibold">client #47</span> lost in the shuffle—I will let the results do the talking, once I've made them happen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in contact with me...
              </h4>
              <p className="text-xl text-emerald-100 mb-8">
                if you are ready to win, <span className="font-bold">together</span>
              </p>
              <a 
                href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center justify-center mx-auto"
                style={{ backgroundColor: '#edfbff' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1f2ff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#edfbff'}
              >
                Start Our Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-950 relative overflow-hidden" style={{ color: '#edfbff' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Numbers Don't Lie
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#edfbff', opacity: 0.8 }}>
              Wait... something's missing
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
            {[
              { number: "0%", label: "Average Revenue Growth" },
              { number: "0%", label: "Client Retention Rate" },
              { number: "0+", label: "Customers Acquired" },
              { number: "0", label: "Successful Campaigns" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2563eb' }}>{stat.number}</div>
                <div style={{ color: '#edfbff', opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-30">Ready to Write The Success Stories?</h3>
            <p className="text-xl mb-32 max-w-2xl mx-auto" style={{ color: '#edfbff', opacity: 0.8 }}>
              Our competition, mine and yours—they're not slowing down
            </p>
            <a 
              href="https://forms.gle/7hvhgiXNQhdsU7Gv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
              style={{ 
                background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                color: '#edfbff'
              }}
            >
              <span>Claim Free Strategy Session</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12" style={{ color: '#edfbff' }}>
        <div className="container mx-auto px-6 text-center">
          <img 
            src={footerLogoUrl} 
            alt="Reizen Creations Logo" 
            className="w-15 h-auto mx-auto mb-6 opacity-80"
          />
          <p className="mb-4" style={{ color: '#edfbff', opacity: 0.6 }}>
            © 2025 Reizen Creations. All rights reserved.
          </p>
          <p style={{ color: '#edfbff', opacity: 0.4 }}>
            Turning <a href="/visions" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition-colors duration-200">visions</a> into market domination, one campaign at a time.
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edfbff' }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visions" element={<Visions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;