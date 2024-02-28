const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();
const apiKey = process.env.YELP_API_KEY;

if (!apiKey) {
    console.error('Yelp API key is missing. Set the REACT_APP_YELP_API_KEY environment variable.');
    process.exit(1); // Exit the process with an error code
}

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Use bodyParser if needed
app.use(express.json());

const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search';

app.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.term;
        const location = req.query.location;

        const response = await axios.get(yelpApiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            params: {
                location: location,
                term: searchTerm,

            },
        });

        const businesses = response.data.businesses;
        res.json(businesses);
    } catch (error) {
        console.error('Error fetching data from Yelp API', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


