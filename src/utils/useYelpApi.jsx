import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'http://localhost:3000/api';

const useYelpApi = ({ term, location, sortBy, headers = { Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}` } }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `/`,
                    params: {
                        term: "food",
                        locatio: "Saint Louis",
                        sort_by: sortBy,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
                        ...headers,
                    },
                });
                console.log('working!')
                setResponse(response.data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [term, location, sortBy, headers])
    return { response, error, loading }
};

export default useYelpApi;

