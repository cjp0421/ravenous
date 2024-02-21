const express = require('express');
const cors = require('cors');

require('dotenv').config();
const apiKey = process.env.YELP_API_KEY;



const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Use bodyParser if needed
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

if (!apiKey) {
    console.error('Yelp API key is missing. Set the REACT_APP_YELP_API_KEY environment variable.');
    process.exit(1); // Exit the process with an error code
}

