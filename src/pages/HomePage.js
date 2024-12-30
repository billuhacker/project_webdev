import React from 'react';

function HomePage() {
  const listings = [
    { id: 1, title: 'Cozy Cottage' },
    { id: 2, title: 'Modern Apartment' }
  ];

  return (
    <div>
      <h1>Available Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <a href={`/listings/${listing.id}`}>{listing.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
