const express = require('express');
const path = require('path');
const app = require('./src/app'); // your express app from src/app.js

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Fallback to index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
