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
    <div>
      <h1>Booking Page</h1>
      <p>Property ID: {id}</p>
      <label>Check-In Date: <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} /></label>
      <br />
      <label>Check-Out Date: <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} /></label>
      <br />
      <button onClick={handleBooking}>Confirm Booking</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default BookingPage;
