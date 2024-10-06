import React, { useState } from 'react';  // Make sure to import useState

const categories = ['Beachfront', 'Cabins', 'Trending'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="flex overflow-x-auto p-4 space-x-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveCategory(category)}
          className={`p-2 rounded-lg transition-all ${
            activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
