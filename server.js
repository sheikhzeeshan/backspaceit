const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/api/services', (req, res) => {
    res.json(require('./data/services.json'));
});

app.get('/api/areas', (req, res) => {
    res.json(require('./data/areas.json'));
});

app.get('/api/testimonials', (req, res) => {
    res.json(require('./data/testimonials.json'));
});

// Serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 