import axios from 'axios';
import { useState, useEffect } from 'react';

// headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
// }

axios.defaults.baseURL = 'https://api.yelp.com/v3';

const useYelpApi = ({ endpoint, method, body = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const apiKey = process.env.REACT_APP_YELP_API_KEY;

            if (!apiKey) {
                setError('API key not found. Please set API key in environment variable.')
                setLoading(false);
                return
            }

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            };

            const res = await axios({
                method,
                url: endpoint,
                data: JSON.parse(body),
                headers,
            });

            setResponse(res.data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchData();
    }, [method, endpoint, body]);

    return { response, error, loading };
};

export default useYelpApi;

