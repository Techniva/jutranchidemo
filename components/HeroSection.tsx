'use client'

import VideoBackground from './VideoBackground'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/jut.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Video Background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
                Welcome to <span className="text-yellow-400">JUT Ranchi</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 max-w-2xl">
                Empowering students with quality education and innovative learning at Jharkhand University of Technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">5000+</div>
                    <div className="text-sm text-white">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">200+</div>
                    <div className="text-sm text-white">Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">50+</div>
                    <div className="text-sm text-white">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">95%</div>
                    <div className="text-sm text-white">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 