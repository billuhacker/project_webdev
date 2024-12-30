import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = () => {
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, checkIn, checkOut })
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error creating booking:', error));
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Booking Page</h1>
      <p className="mb-4"><span className="font-semibold">Property ID:</span> {id}</p>
      <div className="space-y-4">
        <div>
          <label className="block font-semibold">Check-In Date:</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Check-Out Date:</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Confirm Booking
        </button>
        {message && (
          <p className="text-green-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

export default BookingPage;
