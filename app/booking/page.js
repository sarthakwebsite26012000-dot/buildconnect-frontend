export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          🏗️ Book Your Service
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-2">Service Type</label>
              <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none">
                <option value="" className="bg-gray-800">Select a service</option>
                <option value="construction" className="bg-gray-800">Construction</option>
                <option value="renovation" className="bg-gray-800">Renovation</option>
                <option value="plumbing" className="bg-gray-800">Plumbing</option>
                <option value="electrical" className="bg-gray-800">Electrical</option>
                <option value="painting" className="bg-gray-800">Painting</option>
                <option value="carpentry" className="bg-gray-800">Carpentry</option>
              </select>
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-2">Project Details</label>
              <textarea 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                rows="4"
                placeholder="Describe your project requirements..."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-lg font-semibold mb-2">Preferred Date</label>
              <input 
                type="date" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
        
        <div className="text-center mt-8">
          <a href="/" className="text-orange-400 hover:text-orange-300 text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
