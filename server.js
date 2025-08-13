const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular build output
app.use(express.static(path.join(__dirname, 'dist/chapadevs-website')));

// Handle Angular routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/chapadevs-website/index.html'));
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`ChaPaDevs website server running on port ${port}`);
});
