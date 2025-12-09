import './globals.css'

export const metadata = {
  title: 'BuildConnect - Construction & Home Services',
  description: 'Hire Fast & Reliable Construction & Home Services across India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Build</span>
              <span className="text-secondary">Connect</span>
            </h1>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 BuildConnect. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
