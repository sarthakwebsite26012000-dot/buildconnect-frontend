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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          🏗️ Book Your Service
        </h1>

        {message.text && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.type === 'success' ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-lg">Full Name</label>
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
              <label className="block mb-2 text-lg">Email</label>
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
              <label className="block mb-2 text-lg">Phone</label>
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
              <label className="block mb-2 text-lg">Service Type</label>
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
              <label className="block mb-2 text-lg">Project Details</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
                placeholder="Describe your project..."
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Booking Request'}
          </button>
        </form>

        <Link href="/" className="block text-center mt-8 text-blue-300 hover:text-blue-200">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
