import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const listings = [
    {
      id: 1,
      title: 'Luxurious Hotel in City Center',
      description: 'A comfortable and luxurious stay with all modern amenities.',
      image: '/assets/image1_hotel.jpg',
      price: 200,
      rating: 4.8,
      type: 'Hotel',
    },
    {
      id: 2,
      title: 'Cozy Apartment with Sea View',
      description: 'A beautiful sea-facing apartment with all comforts.',
      image: '/assets/image2.jpg',
      price: 150,
      rating: 4.7,
      type: 'Apartment',
    },
    {
      id: 3,
      title: 'Rustic Cottage in the Woods',
      description: 'A perfect getaway surrounded by nature.',
      image: '/assets/image3.jpg',
      price: 120,
      rating: 4.5,
      type: 'Cottage',
    },
  ];

  // Filter listings based on search query
  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main>
        <div className="container mx-auto mt-10">
          {/* Search Bar */}
          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search Location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Listings */}
          <h1 className="text-3xl font-bold mb-5 text-center">Discover Your Next Stay</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="border rounded-lg shadow-lg overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{listing.title}</h3>
                  <p className="text-sm text-gray-500">{listing.description}</p>
                  <p className="text-sm text-gray-700">Type: {listing.type}</p>
                  <p className="mt-2 text-lg font-bold">${listing.price} per night</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★</span>
                    <p className="ml-1 text-sm font-semibold">{listing.rating}</p>
                  </div>
                  {/* View Details Button */}
                  <button
                    onClick={() => (window.location.href = `/listings/${listing.id}`)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
