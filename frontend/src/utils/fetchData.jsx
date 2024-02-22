// utils/api.js
import axios from 'axios';

const backendUrl = 'http://localhost:3001'; // Update with your actual backend URL

export async function searchYelp(term = 'food', location = 'Los Angeles') {
    try {
        const response = await axios.get(`${backendUrl}/search`, {
            params: {
                term: term,
                location: location,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data from backend', error.response ? error.response.data : error.message);
        throw new Error('Internal Server Error');
    }
}
