'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    // Load Tawk.to live chat
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 overflow-hidden">
        {/* 3D Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
               }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            Hire Fast & Reliable<br />
            <span className="text-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              Construction & Home Services
            </span>
          </h1>
          <p className="text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Book verified professionals for all your construction and home needs
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/download">
              <button className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-xl font-semibold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-orange-500/50">
                Download App
              </button>
            </Link>
            <Link href="/booking">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-5 rounded-xl font-semibold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white scroll-animate">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Simple, fast, and secure</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Book', desc: 'Choose your service and schedule', icon: '📅', color: 'blue' },
              { step: '2', title: 'Pay', desc: 'Secure online payment', icon: '💳', color: 'orange' },
              { step: '3', title: 'Done', desc: 'Professional completes the job', icon: '✅', color: 'green' },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className={`mx-auto w-24 h-24 bg-${item.color}-100 rounded-full flex items-center justify-center text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <div className={`absolute top-12 left-1/2 -ml-4 w-8 h-8 bg-${item.color}-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-blue-50 scroll-animate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🔒', title: 'Secure Payments', desc: '256-bit SSL encryption' },
              { icon: '🛡️', title: 'Insured Workers', desc: 'Full liability coverage' },
              { icon: '✓', title: 'Background Checked', desc: 'Verified professionals' },
              { icon: '⭐', title: 'Top Rated', desc: '4.8/5 average rating' },
            ].map((badge, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-4">{badge.icon}</div>
                <h3 className="font-bold text-xl mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Professional services at competitive prices</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Construction Labour', price: 'From ₹500/day', img: '🏗️', rating: '4.9' },
              { name: 'Plumbers', price: 'From ₹300/visit', img: '🔧', rating: '4.8' },
              { name: 'Electricians', price: 'From ₹350/visit', img: '⚡', rating: '4.9' },
              { name: 'Carpenters', price: 'From ₹500/day', img: '🪚', rating: '4.7' },
              { name: 'Painting', price: 'From ₹25/sqft', img: '🎨', rating: '4.8' },
              { name: 'Housekeeping', price: 'From ₹250/visit', img: '🧹', rating: '4.9' },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.img}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-gray-500 text-sm">(500+ reviews)</span>
                </div>
                <p className="text-orange-600 font-bold text-xl mb-6">{service.price}</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 scroll-animate">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Why Choose BuildConnect?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Verified Workers', desc: 'All professionals undergo strict background checks', icon: '✓' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, clear pricing structure', icon: '💰' },
              { title: 'Quick Booking', desc: 'Book services in under 2 minutes', icon: '⚡' },
              { title: 'Secure Payment', desc: 'Multiple payment options with full protection', icon: '🛡️' },
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="font-bold text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white scroll-animate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: '25+', label: 'Years Experience', icon: '📅' },
              { number: '8000+', label: 'Projects Completed', icon: '✅' },
              { number: '32k+', label: 'Professionals', icon: '👷' },
            ].map((stat, i) => (
              <div key={i} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-6xl font-bold mb-3">{stat.number}</h3>
                <p className="text-2xl text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center scroll-animate">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 text-orange-100">Download the BuildConnect app and book your service today!</p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-xl font-semibold text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300">
            Download Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="
