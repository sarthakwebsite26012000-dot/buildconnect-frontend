'use client';
import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  'Painter', 'Electrician', 'Plumber', 'Carpenter', 
  'Mason', 'Welder', 'HVAC Technician', 'Roofer',
  'Tile Setter', 'Landscaper', 'General Contractor'
];

export default function WorkerRegister() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', category: '', experience: '',
    address: '', city: '', state: '', zipCode: '', skills: '',
    description: '', availability: 'Full-time'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-black text-white flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-8">✅</div>
          <h1 className="text-5xl font-bold mb-4">Registration Submitted!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for registering with BuildConnect. Your profile is under review.
            Our admin team will verify your details and activate your account within 24-48 hours.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">What's Next?</h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• Admin will review your profile and credentials</li>
              <li>• Once approved, you can start receiving job requests</li>
              <li>• Keep your phone accessible for verification calls</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all">
              Back to Home
            </Link>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all"
            >
              Register Another Worker
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">👷 Worker Registration</h1>
          <p className="text-xl text-gray-300">
            Join BuildConnect and start receiving job opportunities
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                >
                  <option value="" className="bg-gray-800">Select Your Category *</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Location</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Street Address *"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="col-span-2 p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City *"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="State *"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                  className="col-span-2 p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Professional Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Professional Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Years of Experience *"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <textarea
                  placeholder="List your skills (e.g., Residential painting, Commercial work, Interior design)"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  rows="3"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <textarea
                  placeholder="Brief description about yourself and your work"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                />
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({...formData, availability: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                >
                  <option value="Full-time" className="bg-gray-800">Full-time</option>
                  <option value="Part-time" className="bg-gray-800">Part-time</option>
                  <option value="Weekends Only" className="bg-gray-800">Weekends Only</option>
                  <option value="On Contract" className="bg-gray-800">On Contract</option>
                </select>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-blue-500/20 p-4 rounded-lg">
              <p className="text-sm text-gray-300">
                ℹ️ By registering, you agree to our terms and conditions. Your profile will be reviewed by our admin team before activation.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Registration
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-orange-400 hover:text-orange-300 text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
