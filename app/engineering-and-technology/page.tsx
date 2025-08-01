'use client'

import { Header, Footer } from '@/components'
import { Settings, Briefcase, Lightbulb, Monitor, Video, GraduationCap, Users, BookOpen, Target, Award } from 'lucide-react'

export default function EngineeringAndTechnology() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-[130px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/tech_park.jpg)', // Added background image
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto pt-[200px]">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
                Engineering & Technology
              </h1>
              <p className="text-xl mb-20 pb-3 max-w-3xl mx-auto">
                Empowering students with cutting-edge engineering education and innovative technology programs at Jharkhand University of Technology.
              </p>
             
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Engineering Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of engineering and technology programs designed to prepare you for the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Computer Science Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Computer Science Engineering</h3>
                <p className="text-gray-600 mb-4">Learn programming, algorithms, and software development with modern technologies.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Software Development</li>
                  <li>• Artificial Intelligence</li>
                  <li>• Data Science</li>
                  <li>• Cybersecurity</li>
                </ul>
              </div>

              {/* Mechanical Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mechanical Engineering</h3>
                <p className="text-gray-600 mb-4">Design and manufacture mechanical systems with advanced engineering principles.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Machine Design</li>
                  <li>• Manufacturing</li>
                  <li>• Robotics</li>
                  <li>• Automation</li>
                </ul>
              </div>

              {/* Electrical Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Engineering</h3>
                <p className="text-gray-600 mb-4">Power systems, electronics, and electrical circuit design and analysis.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Power Systems</li>
                  <li>• Electronics</li>
                  <li>• Control Systems</li>
                  <li>• Renewable Energy</li>
                </ul>
              </div>

              {/* Civil Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Civil Engineering</h3>
                <p className="text-gray-600 mb-4">Infrastructure development, construction, and environmental engineering.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Structural Design</li>
                  <li>• Transportation</li>
                  <li>• Environmental</li>
                  <li>• Construction</li>
                </ul>
              </div>

              {/* Chemical Engineering */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Engineering</h3>
                <p className="text-gray-600 mb-4">Process design, chemical manufacturing, and industrial applications.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Process Design</li>
                  <li>• Chemical Manufacturing</li>
                  <li>• Industrial Chemistry</li>
                  <li>• Safety Engineering</li>
                </ul>
              </div>

              {/* Information Technology */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Information Technology</h3>
                <p className="text-gray-600 mb-4">IT infrastructure, networking, and digital technology solutions.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Network Administration</li>
                  <li>• Database Management</li>
                  <li>• Web Development</li>
                  <li>• Cloud Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Engineering Programs?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State-of-the-art facilities, experienced faculty, and industry partnerships for your engineering career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0c4da2] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Learn from industry experts and experienced professors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Labs</h3>
                <p className="text-gray-600">State-of-the-art laboratories and equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Partnerships</h3>
                <p className="text-gray-600">Strong connections with leading companies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Placement</h3>
                <p className="text-gray-600">Excellent placement record with top companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#0c4da2] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Engineering & Technology at a Glance</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1500+</div>
                <div className="text-sm">Engineering Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-sm">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-sm">Laboratories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-sm">Placement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Engineering Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our engineering programs and become part of the next generation of innovators and problem solvers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0c4da2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply for Engineering
              </button>
              <button className="border-2 border-[#0c4da2] text-[#0c4da2] px-8 py-3 rounded-lg font-semibold hover:bg-[#0c4da2] hover:text-white transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
} 