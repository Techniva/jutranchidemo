import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#0c4da2] rounded-lg flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/JUT_Logo.png"
                  alt="JUT Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              </div>
              <div>
                <h3 className="font-bold">JUT Ranchi</h3>
                <p className="text-sm text-gray-400">Jharkhand University of Technology</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with quality education and innovative learning for a brighter future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 9XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@jutranchi.ac.in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#0c4da2] rounded-full flex items-center justify-center hover:bg-[#0a3d8a] transition-colors">
                <span className="text-white font-semibold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-semibold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-white font-semibold">yt</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Jharkhand University of Technology, Ranchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 