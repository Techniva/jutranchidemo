import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JUT Ranchi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide world-class education with state-of-the-art facilities and experienced faculty members.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0c4da2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-[#0c4da2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-600">Comprehensive curriculum designed by industry experts</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0c4da2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#0c4da2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Learn from experienced professors and industry professionals</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0c4da2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#0c4da2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Connect</h3>
            <p className="text-gray-600">Strong partnerships with leading companies and organizations</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-[#0c4da2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#0c4da2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Research Focus</h3>
            <p className="text-gray-600">Cutting-edge research facilities and opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
} 