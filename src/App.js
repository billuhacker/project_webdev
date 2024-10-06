import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';

const mockListings = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Cozy Cabin',
    type: 'Entire home',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 120,
    rating: 4.5,
  },
  // Add more listings as needed
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Light gray background */}
      <Navbar />
      <div className="container mx-auto px-4"> {/* Centered container */}
        <h1 className="text-3xl font-bold text-center my-6">Discover Your Next Stay</h1> {/* Header */}
        <SearchBar />
        <Categories />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
