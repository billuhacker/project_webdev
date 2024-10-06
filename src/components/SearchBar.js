import React, { useState } from 'react';  // Import useState

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', location);
  };

  return (
    <div className="flex justify-center mt-6 mb-6">
      <input
        type="text"
        placeholder="Search Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border-2 border-gray-300 p-3 w-80 rounded-l-lg focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
