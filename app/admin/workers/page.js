'use client';
import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  'Painter', 'Electrician', 'Plumber', 'Carpenter', 
  'Mason', 'Welder', 'HVAC Technician', 'Roofer',
  'Tile Setter', 'Landscaper', 'General Contractor'
];

export default function AdminWorkers() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'John Doe', category: 'Painter', phone: '+1234567890', status: 'active', rating: 4.5 },
    { id: 2, name: 'Jane Smith', category: 'Electrician', phone: '+1234567891', status: 'active', rating: 4.8 },
    { id: 3, name: 'Mike Johnson', category: 'Plumber', phone: '+1234567892', status: 'blocked', rating: 4.2 }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWorker, setNewWorker] = useState({
    name: '', category: '', phone: '', email: '', experience: '', address: ''
  });
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleWorkerStatus = (id) => {
    setWorkers(workers.map(w => 
      w.id === id ? { ...w, status: w.status === 'active' ? 'blocked' : 'active' } : w
    ));
  };

  const deleteWorker = (id) => {
    if (confirm('Are you sure you want to delete this worker?')) {
      setWorkers(workers.filter(w => w.id !== id));
    }
  };

  const addWorker = (e) => {
    e.preventDefault();
    const worker = {
      id: workers.length + 1,
      ...newWorker,
      status: 'active',
      rating: 0
    };
    setWorkers([...workers, worker]);
    setNewWorker({ name: '', category: '', phone: '', email: '', experience: '', address: '' });
    setShowAddForm(false);
  };

  const filteredWorkers = workers.filter(w => {
    const matchesCategory = filterCategory === 'all' || w.category === filterCategory;
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         w.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">👷 Worker Management</h1>
            <p className="text-gray-400">Add, manage, and monitor all service workers</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all">
              ← Back to Dashboard
            </Link>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-semibold transition-all"
            >
              + Add New Worker
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <div className="text-3xl font-bold">{workers.length}</div>
            <div className="text-gray-400">Total Workers</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-md p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-400">{workers.filter(w => w.status === 'active').length}</div>
            <div className="text-gray-400">Active Workers</div>
          </div>
          <div className="bg-red-500/20 backdrop-blur-md p-6 rounded-xl">
            <div className="text-3xl font-bold text-red-400">{workers.filter(w => w.status === 'blocked').length}</div>
            <div className="text-gray-400">Blocked Workers</div>
          </div>
          <div className="bg-blue-500/20 backdrop-blur-md p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400">{CATEGORIES.length}</div>
            <div className="text-gray-400">Categories</div>
          </div>
        </div>

        {/* Add Worker Form */}
        {showAddForm && (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold mb-6">Add New Worker</h2>
            <form onSubmit={addWorker} className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={newWorker.name}
                onChange={(e) => setNewWorker({...newWorker, name: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              />
              <select
                required
                value={newWorker.category}
                onChange={(e) => setNewWorker({...newWorker, category: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              >
                <option value="" className="bg-gray-800">Select Category</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={newWorker.phone}
                onChange={(e) => setNewWorker({...newWorker, phone: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={newWorker.email}
                onChange={(e) => setNewWorker({...newWorker, email: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Years of Experience"
                value={newWorker.experience}
                onChange={(e) => setNewWorker({...newWorker, experience: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                value={newWorker.address}
                onChange={(e) => setNewWorker({...newWorker, address: e.target.value})}
                className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-500 focus:outline-none"
              />
              <div className="col-span-2 flex gap-4">
                <button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition-all">
                  Add Worker
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-lg font-semibold transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="🔍 Search workers by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-blue-500 focus:outline-none"
            />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="p-3 rounded-lg bg-white/20 border border-white/30 focus:border-blue-500 focus:outline-none"
            >
              <option value="all" className="bg-gray-800">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Workers Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/20">
              <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Rating</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredWorkers.map(worker => (
                <tr key={worker.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="p-4">{worker.id}</td>
                  <td className="p-4 font-semibold">{worker.name}</td>
                  <td className="p-4">
                    <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">
                      {worker.category}
                    </span>
                  </td>
                  <td className="p-4">{worker.phone}</td>
                  <td className="p-4">⭐ {worker.rating}</td>
                  <td className="p-4">
                    {worker.status === 'active' ? (
                      <span className="bg-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-500/30 text-red-400 px-3 py-1 rounded-full text-sm">
                        Blocked
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleWorkerStatus(worker.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          worker.status === 'active' 
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                            : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        }`}
                      >
                        {worker.status === 'active' ? 'Block' : 'Unblock'}
                      </button>
                      <button
                        onClick={() => deleteWorker(worker.id)}
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm font-semibold transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
