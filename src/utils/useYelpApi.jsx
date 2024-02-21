import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'http://localhost:3001';

const useYelpApi = ({ term, location, sortBy, headers = { Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}` } }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('useYelpApi - Fetching data...');
                const response = await axios({
                    method: 'GET',
                    url: '/api',
                    params: {
                        location: location || "Saint Louis",  // Use provided location or default to "Saint Louis"
                        term: term || "food",  // Use provided term or default to "food"
                        sort_by: sortBy || 'best_match',
                    },
                    headers: {
                        ...headers,
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,

                    },
                });
                console.log('working!')
                setResponse(response.data);
            } catch (error) {
                console.log('useYelpApi - Setting loading to false...');
                setLoading(false);
                console.error('useYelpApi - Error:', error);
                setError(error)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [term, location, sortBy, headers]);

    return { response, error, loading };
};

export default useYelpApi;