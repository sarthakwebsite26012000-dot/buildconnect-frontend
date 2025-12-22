'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true);
        setError('');

        // TODO: replace this URL with your real backend endpoint for the current user
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/bookings/my`,
          {
            credentials: 'include', // if you use cookies/session
          }
        );

        if (!res.ok) {
          throw new Error('Failed to load bookings');
        }

        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error(err);
        setError('Could not load your bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const handlePayNow = async (bookingId) => {
    try {
      // TODO: integrate with your payment gateway
      // Example flow: call backend to create payment session, then redirect
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/payments/create-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ bookingId }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to start payment');
      }

      const data = await res.json();

      // If backend returns a redirect URL to Razorpay/Stripe/etc.
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert('Payment session created (mock). Integrate your gateway here.');
      }
    } catch (err) {
      console.error(err);
      alert('Could not start payment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My Bookings
        </h1>
        <p className="text-gray-300 mb-8">
          View your upcoming and past service bookings and complete payments securely.
        </p>

        {loading && (
          <div className="text-gray-300 text-lg">Loading your bookings...</div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-500/20 border border-red-500/60 px-4 py-3 text-red-100">
            {error}
          </div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center">
            <p className="text-xl mb-4">You have no bookings yet.</p>
            <Link
              href="/booking"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition"
            >
              Book a Service
            </Link>
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-1">
                    {booking.serviceName || booking.category || 'Service Booking'}
                  </h2>
                  <p className="text-gray-300">
                    Worker: <span className="font-semibold">
                      {booking.workerName || 'Assigned soon'}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Date: <span className="font-semibold">
                      {booking.date}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Time: <span className="font-semibold">
                      {booking.timeSlot || booking.time}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Address:{' '}
                    <span className="font-semibold">
                      {booking.addressLine || booking.address}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    Amount:{' '}
                    <span className="font-semibold text-orange-400">
                      ₹{booking.amount}
                    </span>
                  </p>
                  <p className="text-gray-300 mt-1">
                    Status:{' '}
                    <span
                      className={
                        booking.paymentStatus === 'PAID'
                          ? 'text-green-400 font-semibold'
                          : 'text-yellow-300 font-semibold'
                      }
                    >
                      {booking.paymentStatus || 'PENDING'}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-stretch gap-3 min-w-[200px]">
                  {booking.paymentStatus !== 'PAID' && (
                    <button
                      onClick={() => handlePayNow(booking.id)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition"
                    >
                      Pay Now
                    </button>
                  )}
                  <Link
                    href={`/booking/${booking.id}`}
                    className="w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-xl transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/"
            className="text-orange-400 hover:text-orange-300 text-lg"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
