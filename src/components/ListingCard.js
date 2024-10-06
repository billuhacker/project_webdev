const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{type} • {guests} guests • {bedrooms} bedrooms • {bathrooms} bathrooms</p>
      <p className="text-lg font-bold mt-2">${price} per night</p>
      <p className="text-yellow-500 mt-2">⭐ {rating}</p>
    </div>
  );
};

export default ListingCard;
