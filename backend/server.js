const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const renterRoutes = require('./routes/renterRoutes');
const renteeRoutes = require('./routes/renteeRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/imgRoutes');
require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(errorHandler);
app.use(express.json()); // Ensure this middleware is correctly placed before Multer

const PORT = process.env.PORT || 5000;

app.use('/renter/books', renterRoutes);
app.use('/rentee/books', renteeRoutes);
app.use('/users', userRoutes);

app.use(uploadRoutes);
app.use('/uploads', express.static('./uploads'));

// Connect to MongoDB with options
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Root path!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
