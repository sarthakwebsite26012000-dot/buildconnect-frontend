export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hire Fast & Reliable<br />
            <span className="text-orange-400">Construction & Home Services</span>
          </h1>
          <p className="text-xl mb-8">Book verified professionals for all your construction and home needs</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg">Download App</button>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">Book Now</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Construction Labour', price: 'From ₹500/day' },
              { name: 'Plumbers', price: 'From ₹300/visit' },
              { name: 'Electricians', price: 'From ₹350/visit' },
              { name: 'Carpenters', price: 'From ₹500/day' },
              { name: 'Painting', price: 'From ₹25/sqft' },
              { name: 'Housekeeping', price: 'From ₹250/visit' },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{service.price}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose BuildConnect?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Verified Workers', emoji: '✓' },
              { title: 'Transparent Pricing', emoji: '💰' },
              { title: 'Quick Booking', emoji: '⚡' },
              { title: 'Secure Payment', emoji: '🛡️' },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">25+</h3>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">8000+</h3>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">32k+</h3>
              <p className="text-xl">Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Download the BuildConnect app and book your service today!</p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">Download Now</button>
        </div>
      </section>
    </div>
  )
}
