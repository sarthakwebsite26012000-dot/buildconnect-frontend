export default function Booking() {
  return (
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { API_BASE_URL } from '@/lib/apiConfig'

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
    preferredDate: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage({ type: '', text: '' })
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        setMessage({ type: 'success', text: 'Booking submitted successfully! We will contact you soon.' })
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          projectDetails: '',
          preferredDate: ''
        })
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to submit booking' })
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          🏗️ Book Your Service
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-500/20 border border-green-500 text-green-200' 
                : 'bg-red-500/20 border border-red-500 text-red-200'
            }`}>
              {message.text}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Service Type</label>
              <select 
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
              >
                <option value="" className="bg-gray-800">Select a service</option>
                <option value="Construction" className="bg-gray-800">Construction</option>
                <option value="Renovation" className="bg-gray-800">Renovation</option>
                <option value="Plumbing" className="bg-gray-800">Plumbing</option>
                <option value="Electrical" className="bg-gray-800">Electrical</option>
                <option value="Painting" className="bg-gray-800">Painting</option>
                <option value="Carpentry" className="bg-gray-800">Carpentry</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Project Details</label>
              <textarea 
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                rows="4"
                placeholder="Describe your project requirements..."
              ></textarea>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Preferred Date</label>
              <input 
                type="date" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/"
            className="text-orange-400 hover:text-orange-300 font-semibold text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white p-8">
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
