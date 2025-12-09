'use client'
import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeWorkers: 0,
    pendingRequests: 0
  })
  const [bookings, setBookings] = useState([])
  const [services, setServices] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    // Fetch stats from API
    // Replace with actual API calls
    setStats({
      totalBookings: 156,
      totalRevenue: 45680,
      activeWorkers: 24,
      pendingRequests: 8
    })

    // Sample bookings data
    setBookings([
      { id: 1, user: 'John Doe', service: 'Plumbing', date: '2024-12-15', status: 'Completed', amount: 2500 },
      { id: 2, user: 'Jane Smith', service: 'Electrical', date: '2024-12-14', status: 'Pending', amount: 3200 },
      { id: 3, user: 'Mike Johnson', service: 'Carpentry', date: '2024-12-13', status: 'In Progress', amount: 4500 }
    ])

    // Sample services data
    setServices([
      { id: 1, name: 'Plumbing', category: 'Home Services', rating: 4.8, bookings: 45 },
      { id: 2, name: 'Electrical', category: 'Home Services', rating: 4.6, bookings: 38 },
      { id: 3, name: 'Carpentry', category: 'Construction', rating: 4.9, bookings: 52 }
    ])
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BuildConnect Admin</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-medium">Admin</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-screen p-6">
          <ul className="space-y-2">
            {['dashboard', 'bookings', 'services', 'workers', 'users', 'settings'].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize transition ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Total Bookings</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalBookings}</p>
                  <p className="text-green-500 text-sm mt-2">↑ 12% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Total Revenue</h3>
                  <p className="text-3xl font-bold text-green-600">₹{stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-green-500 text-sm mt-2">↑ 8% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Active Workers</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.activeWorkers}</p>
                  <p className="text-green-500 text-sm mt-2">↑ 3 new this week</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">Pending Requests</h3>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingRequests}</p>
                  <p className="text-orange-500 text-sm mt-2">Requires attention</p>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">User</th>
                        <th className="text-left py-3 px-4">Service</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{booking.user}</td>
                          <td className="py-3 px-4">{booking.service}</td>
                          <td className="py-3 px-4">{booking.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                              booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-medium">₹{booking.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Top Services</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.category}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Rating</p>
                          <p className="font-bold text-yellow-500">⭐ {service.rating}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Bookings</p>
                          <p className="font-bold">{service.bookings}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-blue-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-600 transition">
                  Add New Service
                </button>
                <button className="bg-green-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-600 transition">
                  Verify Worker
                </button>
                <button className="bg-purple-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-purple-600 transition">
                  View All Bookings
                </button>
              </div>
            </>
          )}

          {activeTab === 'bookings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
              <p className="text-gray-600">Bookings management interface will be displayed here.</p>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Services Management</h2>
              <p className="text-gray-600">Services management interface will be displayed here.</p>
            </div>
          )}

          {activeTab === 'workers' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Workers Management</h2>
              <p className="text-gray-600">Workers management interface will be displayed here.</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Users Management</h2>
              <p className="text-gray-600">Users management interface will be displayed here.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p className="text-gray-600">Settings interface will be displayed here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
