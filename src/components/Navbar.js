const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white shadow-lg">
      <div className="text-2xl font-bold">Airbnb</div>
      <div className="flex space-x-4 text-lg">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#experiences" className="hover:text-gray-300">Experiences</a>
        <a href="#online-experiences" className="hover:text-gray-300">Online Experiences</a>
      </div>
      <div>
        <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">Login/Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
