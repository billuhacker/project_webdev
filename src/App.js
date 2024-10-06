import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import image1 from './assets/image1_hotel.jpg'; // Import your first image
import image2 from './assets/image2.jpg'; // Import your second image
import image3 from './assets/image3.jpg'; // Import your second image

const mockListings = [
  {
    image: image1,  // Use the imported image
    title: 'Cozy Cabin',
    type: 'Entire home',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 120,
    rating: 4.5,
  },
  {
    image: image2,  // Use the imported image
    title: 'Luxurious Villa',
    type: 'Entire home',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 250,
    rating: 4.8,
  },
  {
    image: image3,  // Use the imported image
    title: 'Shandaaar Villa Jehlum',
    type: 'Entire home',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 350,
    rating: 4.9,
  },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-6">Discover Your Next Stay</h1>
        <SearchBar />
        <Categories />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
          {mockListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
