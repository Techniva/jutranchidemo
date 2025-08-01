export default function ProgramsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of undergraduate and postgraduate programs designed for your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0c4da2] p-6 text-white">
              <h3 className="text-xl font-semibold">Engineering</h3>
              <p className="text-[#0c4da2]/80">Bachelor of Technology</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Science Engineering</li>
                <li>• Mechanical Engineering</li>
                <li>• Electrical Engineering</li>
                <li>• Civil Engineering</li>
              </ul>
              <button className="mt-4 text-[#0c4da2] font-semibold hover:text-[#0a3d8a] transition-colors">
                Learn More →
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-secondary-600 p-6 text-white">
              <h3 className="text-xl font-semibold">Management</h3>
              <p className="text-secondary-100">Bachelor of Business Administration</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600">
                <li>• Business Administration</li>
                <li>• Marketing Management</li>
                <li>• Finance Management</li>
                <li>• Human Resources</li>
              </ul>
              <button className="mt-4 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 p-6 text-white">
              <h3 className="text-xl font-semibold">Science</h3>
              <p className="text-green-100">Bachelor of Science</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600">
                <li>• Physics</li>
                <li>• Chemistry</li>
                <li>• Mathematics</li>
                <li>• Biotechnology</li>
              </ul>
              <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 