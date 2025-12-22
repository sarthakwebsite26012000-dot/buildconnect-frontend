'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes rotate3d {
          from { transform: perspective(1000px) rotateY(0deg) rotateX(10deg); }
          to { transform: perspective(1000px) rotateY(360deg) rotateX(10deg); }
        }
        
        @keyframes craneSwing {
          0%, 100% { transform: perspective(1000px) rotateY(-20deg) rotateZ(0deg); }
          50% { transform: perspective(1000px) rotateY(-20deg) rotateZ(15deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }
        
        @keyframes buildUp {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }

        .building-3d {
          transform-style: preserve-3d;
          animation: rotate3d 20s linear infinite;
        }
        
        .tool-3d {
          transform-style: preserve-3d;
          animation: float 3s ease-in-out infinite;
        }
        
        .crane-3d {
          transform-style: preserve-3d;
          animation: craneSwing 4s ease-in-out infinite;
        }
        
        .build-animation {
          animation: buildUp 1.5s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white overflow-hidden relative">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Hero Section with 3D Construction Scene */}
        <section className="relative min-h-screen flex items-center justify-center perspective-[2000px] overflow-hidden py-20">
          {/* 3D City Buildings */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-8 px-4" style={{
            transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.3}px)`
          }}>
            {/* Building 1 */}
            <div className="building-3d w-24 h-48 bg-gradient-to-t from-blue-600 to-blue-400 relative build-animation" style={{
              animationDelay: '0s',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 gap-2 p-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-yellow-300/50 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Building 2 - Tallest */}
            <div className="building-3d w-32 h-64 bg-gradient-to-t from-orange-600 to-orange-400 relative build-animation" style={{
              animationDelay: '0.3s',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
            }}>
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 gap-2 p-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-yellow-300/50 rounded-sm"></div>
                ))}
              </div>
              {/* Crane on top */}
              <div className="crane-3d absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-2 h-16 bg-yellow-500"></div>
                <div className="w-24 h-2 bg-yellow-500 -ml-11"></div>
              </div>
            </div>

            {/* Building 3 */}
            <div className="building-3d w-20 h-40 bg-gradient-to-t from-cyan-600 to-cyan-400 relative build-animation" style={{
              animationDelay: '0.6s',
              boxShadow: '0 15px 40px rgba(0,0,0,0.5)'
            }}>
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 gap-2 p-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="bg-yellow-300/50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating 3D Tools */}
          <div className="absolute top-20 left-20 tool-3d text-6xl" style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            animationDelay: '0s'
          }}>
            🔨
          </div>
          <div className="absolute top-40 right-32 tool-3d text-6xl" style={{
            transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
            animationDelay: '1s'
          }}>
            🔧
          </div>
          <div className="absolute bottom-40 left-32 tool-3d text-6xl" style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${-mousePosition.y}px)`,
            animationDelay: '2s'
          }}>
            ⚙️
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Build</span>
                <span className="text-orange-500">Connect</span>
              </h1>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                  textShadow: '0 20px 40px rgba(0,0,0,0.5)'
                }}>
              <span className="block text-white">Hire Fast &</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Reliable Services
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-200 mb-12">
              🏗️ Professional Construction & Home Services
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/download">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-300"
                        style={{transformStyle: 'preserve-3d'}}>
                  Download App
                </button>
              </Link>
              <Link href="/booking">
                <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300"
                        style={{transformStyle: 'preserve-3d'}}>
                  Book Now →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services with 3D Cards */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Construction', price: '₹500/day', icon: '🏗️' },
                { name: 'Plumbing', price: '₹300/visit', icon: '🔧' },
                { name: 'Electrical', price: '₹350/visit', icon: '⚡' },
                { name: 'Carpentry', price: '₹500/day', icon: '🪚' },
                { name: 'Painting', price: '₹25/sqft', icon: '🎨' },
                { name: 'Cleaning', price: '₹250/visit', icon: '🧹' }
              ].map((service, i) => (
                <div key={i} 
                     className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transform hover:scale-105 hover:rotateY-10 transition-all duration-500"
                     style={{
                       transformStyle: 'preserve-3d',
                       transform: `perspective(1000px) rotateY(${i % 2 === 0 ? 5 : -5}deg)`
                     }}>
                  <div className="text-7xl mb-6 tool-3d">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-orange-500 font-bold text-2xl mb-6">{service.price}</p>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 border-t border-white/10 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2025 BuildConnect. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
