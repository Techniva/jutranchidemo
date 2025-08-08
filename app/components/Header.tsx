'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Search, Phone, Mail, Settings, Users, Lightbulb, Gavel, Sprout, Monitor, Video, Stethoscope, Pill, UserCheck, Brain, GraduationCap, Briefcase, Heart, BookOpen, FileText, Zap, DollarSign, Award, Target, Database, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)
  const [isResearchOpen, setIsResearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Row - Contact Info and Portals */}
      <div className={`py-2 transition-all duration-300 ${
        isScrolled ? 'bg-[#0c4da2]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm text-white">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+91 9XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">info@jutranchi.ac.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm">Student Portal</span>
              <span className="text-xs sm:text-sm">Faculty Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Logo and Navigation */}
      <div className={`pt-2 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Column - Logo and Text */}
            <div className="flex items-center space-x-2 pb-2">
              <div className="relative">
                <Image
                  src="/JUT_Logo.png"
                  alt="JUT Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <div className={isScrolled ? 'text-gray-900' : 'text-white'}>
                <h1 className="text-sm lg:text-xl">झारखण्ड प्रौद्योगिकी विश्वविद्यालय</h1>
                <p className="text-xs lg:text-lg">JHARKHAND UNIVERSITY OF TECHNOLOGY</p>
                <p className="text-xs opacity-80">Jharkhand, Ranchi</p>
              </div>
            </div>

            {/* Right Column - Navigation Menus */}
            <div className="hidden lg:flex flex-col space-y-4">
              {/* Top Row - Secondary Navigation */}
              <nav className="flex items-center justify-end space-x-8">
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Career Centre</a>
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>News</a>
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Events</a>
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Blog</a>
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Careers</a>
                <a href="#" className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Contact us</a>
              </nav>

              {/* Bottom Row - Main Navigation */}
              <nav className="flex items-center space-x-8 pt-4">
                <a href="/" className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Home</a>
                <div className="relative group">
                  <button 
                    className={`flex items-center space-x-1 font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-[#0c4da2]' 
                        : 'text-white hover:text-yellow-300'
                    }`}
                    onMouseEnter={() => setIsAcademicsOpen(true)}
                    onMouseLeave={() => setIsAcademicsOpen(false)}
                  >
                    <span>Academics</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isAcademicsOpen && (
                    <div 
                      className="absolute top-full right-0 mt-0 left-[-727px] w-[1440px] bg-white shadow-2xl opacity-100 visible transition-all duration-300 border-t-4 border-[#0c4da2]"
                      onMouseEnter={() => setIsAcademicsOpen(true)}
                      onMouseLeave={() => setIsAcademicsOpen(false)}
                    >
                      <div className="container mx-auto py-2 px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Left Column - Engineering & Technology */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Engineering & Technology</h3>
                              <p className="text-gray-600 text-sm mt-1">Comprehensive engineering programs</p>
                            </div>
                            <div className="space-y-2">
                              <a href="/engineering-and-technology" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Settings className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-[#0c4da2] transition-colors">Engineering & Technology</span>
                                  <p className="text-xs text-gray-600">Advanced engineering programs</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-transparent hover:border-green-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-green-600 transition-colors">Management</span>
                                  <p className="text-xs text-gray-600">Business administration</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 transition-all duration-300 border border-transparent hover:border-purple-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Lightbulb className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">Science & Humanities</span>
                                  <p className="text-xs text-gray-600">Liberal arts and sciences</p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Middle Column - Additional Programs */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Professional Programs</h3>
                              <p className="text-gray-600 text-sm mt-1">Specialized professional degrees</p>
                            </div>
                            <div className="space-y-2 pb-2">
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 border border-transparent hover:border-orange-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Gavel className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-orange-600 transition-colors">Law</span>
                                  <p className="text-xs text-gray-600">Legal studies and practice</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-transparent hover:border-emerald-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Sprout className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-emerald-600 transition-colors">Agricultural Sciences</span>
                                  <p className="text-xs text-gray-600">Agriculture and farming</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-cyan-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Monitor className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-cyan-600 transition-colors">Distance Education</span>
                                  <p className="text-xs text-gray-600">Online learning programs</p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Right Column - Medicine & Health Sciences */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Medicine & Health Sciences</h3>
                              <p className="text-gray-600 text-sm mt-1">Healthcare and medical programs</p>
                            </div>
                            <div className="space-y-2 pb-2">
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 border border-transparent hover:border-red-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Stethoscope className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-red-600 transition-colors">Medicine</span>
                                  <p className="text-xs text-gray-600">Medical degree programs</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-300 border border-transparent hover:border-pink-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Heart className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-pink-600 transition-colors">Dentistry</span>
                                  <p className="text-xs text-gray-600">Dental care programs</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-indigo-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Pill className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-indigo-600 transition-colors">Pharmacy</span>
                                  <p className="text-xs text-gray-600">Pharmaceutical studies</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Section - Quick Links */}
                        <div className="pt-2 border-t border-gray-200">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#0c4da2] to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-[#0c4da2] transition-colors">Admissions</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-green-600 transition-colors">Student Life</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Briefcase className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">Career Services</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Search className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-orange-600 transition-colors">Program Finder</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative group">
                  <button 
                    className={`flex items-center space-x-1 font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-[#0c4da2]' 
                        : 'text-white hover:text-yellow-300'
                    }`}
                    onMouseEnter={() => setIsResearchOpen(true)}
                    onMouseLeave={() => setIsResearchOpen(false)}
                  >
                    <span>Research</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isResearchOpen && (
                    <div 
                      className="absolute top-full right-0 mt-0 left-[-860px] w-[1440px] bg-white shadow-2xl opacity-100 visible transition-all duration-300 border-t-4 border-[#0c4da2]"
                      onMouseEnter={() => setIsResearchOpen(true)}
                      onMouseLeave={() => setIsResearchOpen(false)}
                    >
                      <div className="container mx-auto py-2 px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Left Column - Research Management */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Research Management</h3>
                              <p className="text-gray-600 text-sm mt-1">Research governance and oversight</p>
                            </div>
                            <div className="space-y-2">
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-[#0c4da2] transition-colors">Research Council</span>
                                  <p className="text-xs text-gray-600">Research governance body</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-transparent hover:border-green-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-green-600 transition-colors">Research Profile</span>
                                  <p className="text-xs text-gray-600">Research achievements</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 transition-all duration-300 border border-transparent hover:border-purple-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Gavel className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">Intellectual Property Rights</span>
                                  <p className="text-xs text-gray-600">IP protection and patents</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 border border-transparent hover:border-orange-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-orange-600 transition-colors">Thesis Repository</span>
                                  <p className="text-xs text-gray-600">Research publications</p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Middle Column - Research Resources */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Research Resources</h3>
                              <p className="text-gray-600 text-sm mt-1">Research tools and publications</p>
                            </div>
                            <div className="space-y-2 pb-2">
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-transparent hover:border-emerald-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <FileText className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-emerald-600 transition-colors">Research Ordinances & Gazette</span>
                                  <p className="text-xs text-gray-600">Research policies</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-cyan-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-cyan-600 transition-colors">Research Journals</span>
                                  <p className="text-xs text-gray-600">Academic publications</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-indigo-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Search className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-indigo-600 transition-colors">Research Opportunities</span>
                                  <p className="text-xs text-gray-600">Research positions</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 border border-transparent hover:border-red-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-red-600 transition-colors">Technology Transfer</span>
                                  <p className="text-xs text-gray-600">Commercialization</p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Right Column - Research Support */}
                          <div className="space-y-4">
                            <div className="border-b-2 border-[#0c4da2] pb-2">
                              <h3 className="text-xl font-bold text-gray-900">Research Support</h3>
                              <p className="text-gray-600 text-sm mt-1">Funding and guidelines</p>
                            </div>
                            <div className="space-y-2 pb-2">
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-300 border border-transparent hover:border-pink-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <DollarSign className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-pink-600 transition-colors">R&D- Grants to Faculty</span>
                                  <p className="text-xs text-gray-600">Research funding</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 border border-transparent hover:border-yellow-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Award className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-yellow-600 transition-colors">Awards & Honours</span>
                                  <p className="text-xs text-gray-600">Research recognition</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 border border-transparent hover:border-teal-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Target className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-teal-600 transition-colors">Major Area of Research</span>
                                  <p className="text-xs text-gray-600">Research focus areas</p>
                                </div>
                              </a>
                              <a href="#" className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-violet-200">
                                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Database className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="text-gray-900 font-semibold text-sm group-hover:text-violet-600 transition-colors">Data- Ph.D. Scholars</span>
                                  <p className="text-xs text-gray-600">Research student data</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Section - Quick Links */}
                        <div className="pt-2 border-t border-gray-200">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#0c4da2] to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-[#0c4da2] transition-colors">Academic Integrity</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-green-600 transition-colors">Research Guidelines</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">Projects & Consultants</span>
                            </a>
                            <a href="#" className="group text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-orange-600 transition-colors">Research Portal</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>Campus Life</a>
                <a href="#" className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>International</a>
                <a href="#" className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>About</a>
                <button className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0c4da2]' 
                    : 'text-white hover:text-yellow-300'
                }`}>
                  <Search className="w-5 h-5" />
                </button>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-all duration-300 ease-out transform hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#0c4da2]' 
                  : 'text-white hover:text-yellow-300'
              } ${isMenuOpen ? 'rotate-90' : 'rotate-0'} animate-buttonPulse`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                <Menu className={`w-6 h-6 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <>
            {/* Backdrop */}
            <div 
              className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-out ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Mobile Menu Panel */}
            <div className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 transform transition-all duration-500 ease-out ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
            }`}>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/mobile-format.svg"
                        alt="JUT Logo"
                        width={150}
                        height={150}
                        className="rounded-lg"
                      />
                      
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-90"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Navigation Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="flex flex-col space-y-2">
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '100ms' }}>Career Centre</a>
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '150ms' }}>News</a>
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '200ms' }}>Events</a>
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '250ms' }}>Blog</a>
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '300ms' }}>Careers</a>
                      <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '350ms' }}>Contact us</a>
                      
                      <div className={`border-t pt-4 mt-4 border-gray-200 transition-all duration-300 ease-out transform ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`} style={{ transitionDelay: '400ms' }}>
                        <a href="/" className={`font-medium py-2 transition-all duration-300 ease-out transform block ${
                          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`} style={{ transitionDelay: '450ms' }}>Home</a>
                        <div>
                          <button 
                            className={`font-medium py-2 transition-all duration-300 ease-out transform w-full text-left ${
                              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`} style={{ transitionDelay: '500ms' }}
                            onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                          >
                            Academics
                          </button>
                          {isAcademicsOpen && (
                            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                              <a href="/engineering-and-technology" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Engineering & Technology</a>
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Management</a>
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Science & Humanities</a>
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Medicine & Health Sciences</a>
                            </div>
                          )}
                        </div>
                        <div>
                          <button 
                            className={`font-medium py-2 transition-all duration-300 ease-out transform w-full text-left ${
                              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`} style={{ transitionDelay: '550ms' }}
                            onClick={() => setIsResearchOpen(!isResearchOpen)}
                          >
                            Research
                          </button>
                          {isResearchOpen && (
                            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Research Management</a>
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Research Resources</a>
                              <a href="#" className="block py-1 transition-colors text-gray-600 hover:text-[#0c4da2]">Research Support</a>
                            </div>
                          )}
                        </div>
                        <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform block ${
                          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`} style={{ transitionDelay: '600ms' }}>Campus Life</a>
                        <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform block ${
                          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`} style={{ transitionDelay: '650ms' }}>International</a>
                        <a href="#" className={`font-medium py-2 transition-all duration-300 ease-out transform block ${
                          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`} style={{ transitionDelay: '700ms' }}>About</a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </>
        </div>
      </div>
    </header>
  )
} 