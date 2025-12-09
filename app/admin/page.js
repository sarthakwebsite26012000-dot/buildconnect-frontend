'use client'
import { useState } from 'react'

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('bookings')

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple auth - In production, use proper authentication
    if (username === 'admin' && password === 'buildconnect2025') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials!')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Build<span className="text-secondary">Connect</span></h1>
            <p className="text-gray-600 mt-2">Admin Dashboard</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
            <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-gray-700">
              <p><strong>Demo Credentials:</strong></p>
              <p>Username: <code className="bg-gray-200 px-2 py-1 rounded">admin</code></p>
              <p>Password: <code className="bg-gray-200 px-2 py-1 rounded">buildconnect2025</code></p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold"><span className="text-primary">Build</span><span className="text-secondary">Connect</span> Admin</h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Logout</button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm">Total Bookings</h3>
            <p className="text-3xl font-bold text-primary mt-2">847</p>
            <p className="text-green-500 text-sm mt-1">↑ 12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm">Active Workers</h3>
            <p className="text-3xl font-bold text-secondary mt-2">324</p>
            <p className="text-green-500 text-sm mt-1">↑ 8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm">Revenue</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">₹2.4L</p>
            <p className="text-green-500 text-sm mt-1">↑ 15% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm">Satisfaction</h3>
            <p className="text-3xl font-bold text-yellow-500 mt-2">4.8★</p>
            <p className="text-gray-500 text-sm mt-1">Based on 245 reviews</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b">
            <nav className="flex">
              {['bookings', 'services', 'workers', 'users'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold capitalize ${
                    activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Service</th>
                        <th className="px-4 py-2 text-left">Customer</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#1234', service: 'Plumber', customer: 'Rajesh Kumar', date: '2025-12-10', status: 'Completed', amount: '₹450' },
                        { id: '#1235', service: 'Electrician', customer: 'Priya Sharma', date: '2025-12-11', status: 'Pending', amount: '₹600' },
                        { id: '#1236', service: 'Painter', customer: 'Amit Patel', date: '2025-12-12', status: 'In Progress', amount: '₹1200' },
                      ].map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3">{booking.id}</td>
                          <td className="px-4 py-3">{booking.service}</td>
                          <td className="px-4 py-3">{booking.customer}</td>
                          <td className="px-4 py-3">{booking.date}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                              booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold">{booking.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Manage Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Plumbing', active: true, bookings: 145 },
                    { name: 'Electrical', active: true, bookings: 132 },
                    { name: 'Painting', active: true, bookings: 98 },
                    { name: 'Carpentry', active: false, bookings: 67 },
                  ].map((service, i) => (
                    <div key={i} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.bookings} bookings this month</p>
                      </div>
                      <button className={`px-4 py-2 rounded ${
                        service.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {service.active ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'workers' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Active Workers</h2>
                <p className="text-gray-600">324 verified professionals ready to serve</p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  {['Plumbers', 'Electricians', 'Painters'].map((type, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg">{type}</h3>
                      <p className="text-2xl font-bold text-primary mt-2">{Math.floor(Math.random() * 100) + 50}</p>
                      <p className="text-sm text-gray-600">Available now</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Registered Users</h2>
                <p className="text-gray-600">1,247 active customers</p>
                <div className="mt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">New registrations this week: <strong className="text-primary">87</strong></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
