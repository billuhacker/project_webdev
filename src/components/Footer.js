const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="flex justify-center space-x-6">
        <a href="#support" className="hover:underline">Support</a>
        <a href="#community" className="hover:underline">Community</a>
        <a href="#hosting" className="hover:underline">Hosting</a>
        <a href="#about" className="hover:underline">About</a>
      </div>
      <p className="text-center mt-4">© 2024 Airbnb</p>
    </footer>
  );
};

export default Footer;
