import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
