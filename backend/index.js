const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const yelp = require('yelp-fusion');
require('dotenv').config();
const apiKey = process.env.REACT_APP_YELP_API_KEY;
const client = yelp.client(process.env.REACT_APP_YELP_API_KEY);


const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

if (!process.env.REACT_APP_YELP_API_KEY) {
    console.error('Yelp API key is missing. Set the REACT_APP_YELP_API_KEY environment variable.');
    process.exit(1); // Exit the process with an error code
}
console.log(apiKey)
app.get('/api', (req, res) => {
    client.search({
        location: 'Saint Louis',
        // offset: '0',
        // limit: '50'
    }).then(response => {
        console.log(JSON.stringify(response.jsonBody));
        res.send(response.jsonBody.businesses);
    }).catch(e => {
        console.log(e);
    });
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});