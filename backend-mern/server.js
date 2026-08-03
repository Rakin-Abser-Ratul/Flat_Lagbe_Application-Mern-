require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

// Test route to verify server is working locally
app.get('/api/test', (req, res) => {
  res.json({ message: 'Flat Lagbe backend running locally!' });
});

// Import and use your routes here as you build them:
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/flats', require('./routes/flats'));

// Database Connection & Server Startup
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas (flat_lagbe_db)');
    app.listen(PORT, () => console.log(`🚀 Server running locally on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ Database connection error:', err));