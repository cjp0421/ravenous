
import axios from 'axios';

const backendUrl = 'http://localhost:3001';

export async function searchYelpApi(location = 'Saint Louis', term = 'soup') {
    try {
        const response = await axios.get(`${backendUrl}/search`, {
            params: {
                location: location,
                term: term,
            },
        });
        console.log(response.data.businesses)
        const businesses = response.data;
        return { businesses: businesses, error: null };
    } catch (error) {
        console.error('Error fetching data from backend', error.response ? error.response.data : error.message);
        // throw new Error('Internal Server Error');
        return { businesses: [], error: { message: 'Internal Server Error' } };
    }
}
