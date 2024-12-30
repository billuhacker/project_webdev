import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetch call (replace with your API call)
    fetch(`/api/listings/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch listing details');
        }
        return res.json();
      })
      .then((data) => setListing(data))
      .catch((error) => setError(error.message));
  }, [id]);

  // Handle loading state
  if (!listing && !error) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  // Handle error state
  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Error: {error}. Please try again later.
      </p>
    );
  }

  // Render listing details
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div>
          <p>
            <span className="font-semibold">Type:</span> {listing.type}
          </p>
          <p>
            <span className="font-semibold">Amenities:</span>{' '}
            {listing.amenities.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Guests:</span> {listing.guests}
          </p>
          <p>
            <span className="font-semibold">Bedrooms:</span> {listing.bedrooms}
          </p>
          <p>
            <span className="font-semibold">Bathrooms:</span> {listing.bathrooms}
          </p>
          <p className="text-xl font-semibold mt-4">
            Price per night: ${listing.price}
          </p>
          <button
            onClick={() => (window.location.href = `/book/${id}`)}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
