'use client';
import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = ['All', 'Painter', 'Electrician', 'Plumber', 'Carpenter', 'Mason', 'Welder', 'HVAC Technician', 'Roofer', 'Tile Setter', 'Landscaper', 'General Contractor'];

const WORKERS_DATA = [
  { id: 1, name: 'John Doe', category: 'Painter', rating: 4.8, experience: '8 years', phone: '+1 (555) 123-4567', location: 'New York, NY', availability: 'Available', image: '👨‍🎨' },
  { id: 2, name: 'Jane Smith', category: 'Electrician', rating: 4.9, experience: '10 years', phone: '+1 (555) 234-5678', location: 'Los Angeles, CA', availability: 'Available', image: '👩‍🔧' },
  { id: 3, name: 'Mike Johnson', category: 'Plumber', rating: 4.6, experience: '6 years', phone: '+1 (555) 345-6789', location: 'Chicago, IL', availability: 'Busy', image: '👨‍🔧' },
  { id: 4, name: 'Sarah Williams', category: 'Carpenter', rating: 4.7, experience: '12 years', phone: '+1 (555) 456-7890', location: 'Houston, TX', availability: 'Available', image: '👩‍🏭' },
  { id: 5, name: 'David Brown', category: 'Mason', rating: 4.5, experience: '15 years', phone: '+1 (555) 567-8901', location: 'Phoenix, AZ', availability: 'Available', image: '👨‍🏭' },
  { id: 6, name: 'Emily Davis', category: 'Electrician', rating: 4.8, experience: '7 years', phone: '+1 (555) 678-9012', location: 'Philadelphia, PA', availability: 'Available', image: '👩‍🔧' },
];

export default function Workers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkers = WORKERS_DATA.filter(worker => {
    const matchesCategory = selectedCategory === 'All' || worker.category === selectedCategory;
    const matchesSearch = worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         worker.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         worker.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">👷 Find Service Workers</h1>
          <p className="text-2xl text-gray-300">
            Browse and connect with verified professionals in your area
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl mb-8">
          <input
            type="text"
            placeholder="🔍 Search by name, category, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 text-lg rounded-lg bg-white/20 border border-white/30 focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-xl text-gray-300">
            Found <span className="text-orange-400 font-bold">{filteredWorkers.length}</span> workers
          </p>
        </div>

        {/* Workers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkers.map(worker => (
            <div
              key={worker.id}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl"
            >
              {/* Worker Avatar */}
              <div className="text-center mb-4">
                <div className="text-7xl mb-3">{worker.image}</div>
                <h3 className="text-2xl font-bold mb-1">{worker.name}</h3>
                <span className="bg-blue-500/30 px-4 py-1 rounded-full text-sm">
                  {worker.category}
                </span>
              </div>

              {/* Worker Details */}
              <div className="space-y-3 text-gray-300 mb-4">
                <div className="flex items-center justify-between">
                  <span>⭐ Rating:</span>
                  <span className="font-semibold text-yellow-400">{worker.rating}/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>💼 Experience:</span>
                  <span className="font-semibold">{worker.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>📍 Location:</span>
                  <span className="font-semibold text-sm">{worker.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>🟢 Status:</span>
                  <span className={`font-semibold ${
                    worker.availability === 'Available' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {worker.availability}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={`tel:${worker.phone}`}
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-center py-3 rounded-lg font-semibold transition-all"
                >
                  📞 Call Now
                </a>
                <Link
                  href="/booking"
                  className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-center py-3 rounded-lg font-semibold transition-all"
                >
                  📅 Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredWorkers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-4">🔍</div>
            <h3 className="text-3xl font-bold mb-2">No workers found</h3>
            <p className="text-xl text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Are you a service worker?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Join our platform and start receiving job requests from customers
          </p>
          <Link
            href="/worker/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Register as Worker →
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="text-orange-400 hover:text-orange-300 text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
