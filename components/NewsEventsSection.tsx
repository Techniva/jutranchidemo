import { Calendar } from 'lucide-react'

export default function NewsEventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#0c4da2]" />
                  <span className="text-sm text-gray-500">December 15, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">JUT Ranchi Ranks #1 in State Engineering Colleges</h3>
                <p className="text-gray-600">Our university has been ranked first among all engineering colleges in Jharkhand for academic excellence and placement records.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#0c4da2]" />
                  <span className="text-sm text-gray-500">December 10, 2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">New Research Center Inaugurated</h3>
                <p className="text-gray-600">State-of-the-art research center for artificial intelligence and machine learning has been inaugurated on campus.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0c4da2]">
                <h3 className="text-lg font-semibold mb-2">Annual Tech Fest 2024</h3>
                <p className="text-gray-600 mb-3">Join us for the biggest technical festival featuring workshops, competitions, and industry talks.</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>January 20-22, 2024</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-lg font-semibold mb-2">Placement Drive 2024</h3>
                <p className="text-gray-600 mb-3">Leading companies will visit campus for recruitment of final year students.</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>February 15-20, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 