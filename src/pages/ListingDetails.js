import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((error) => console.error('Error fetching listing:', error));
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>Type: {listing.type}</p>
      <p>Amenities: {listing.amenities.join(', ')}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Price per night: ${listing.price}</p>
      <button onClick={() => window.location.href = `/book/${id}`}>Book Now</button>
    </div>
  );
}

export default ListingDetails;
