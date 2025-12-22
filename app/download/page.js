export default function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            📱 Download BuildConnect App
          </h1>
          <p className="text-2xl text-gray-300">
            Get instant access to construction & home services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* iOS Download */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-8xl mb-6">🍎</div>
              <h2 className="text-3xl font-bold mb-4">iOS App</h2>
              <p className="text-gray-300 mb-6">
                Available for iPhone & iPad
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300">
                ↓ Download on App Store
              </button>
              <p className="text-sm text-gray-400 mt-4">
                Requires iOS 14.0 or later
              </p>
            </div>
          </div>

          {/* Android Download */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-8xl mb-6">🤖</div>
              <h2 className="text-3xl font-bold mb-4">Android App</h2>
              <p className="text-gray-300 mb-6">
                Available for all Android devices
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300">
                ↓ Get it on Google Play
              </button>
              <p className="text-sm text-gray-400 mt-4">
                Requires Android 8.0 or later
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">App Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Instant Booking</h4>
              <p className="text-gray-400">Book services in seconds</p>
            </div>
            <div className="text-center p-4">
              <div className="text-5xl mb-4">📍</div>
              <h4 className="text-xl font-semibold mb-2">Real-time Tracking</h4>
              <p className="text-gray-400">Track your service provider</p>
            </div>
            <div className="text-center p-4">
              <div className="text-5xl mb-4">💳</div>
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-400">Safe & encrypted transactions</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-orange-400 hover:text-orange-300 text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
