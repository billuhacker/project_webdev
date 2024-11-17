const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Static data for listings
const listings = [
    {
        id: 1,
        title: "Cozy Cottage",
        type: "Cottage",
        amenities: ["WiFi", "Air Conditioning", "Kitchen"],
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 120,
        images: ["/images/cottage.jpg"]
    },
    {
        id: 2,
        title: "Modern Apartment",
        type: "Apartment",
        amenities: ["WiFi", "Elevator", "Washer"],
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 85,
        images: ["/images/apartment.jpg"]
    }
];

// Routes
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

app.get('/api/listings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const listing = listings.find(item => item.id === id);
    if (listing) {
        res.json(listing);
    } else {
        res.status(404).send('Listing not found');
    }
});

app.post('/api/bookings', (req, res) => {
    const { id, checkIn, checkOut } = req.body;
    // Mock booking success response
    res.status(200).json({ message: 'Booking successful', id, checkIn, checkOut });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
