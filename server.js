const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

// Routes for your PHP files would become Express routes
app.post('/contact', (req, res) => {
    // Handle contact form submission
    console.log(req.body);
    res.send('Form submitted successfully');
});

app.post('/reserve', (req, res) => {
    // Handle reservation form submission
    console.log(req.body);
    res.send('Reservation submitted successfully');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 