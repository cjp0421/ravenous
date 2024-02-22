// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { useState, useEffect } from 'react';



// const useYelpApi = ({ term, location }) => {

//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         let ignore = false;
//         const fetchData = async () => {
//             setIsLoading(true);

//             try {
//                 const response = await axios.get(`/search`, {  // Changed the URL to a relative path
//                     baseURL: 'http://localhost:3001',  // Set the baseURL to the proxy server
//                     params: {
//                         term: term,
//                         location: location,
//                     },

//                 });
//                 if (ignore === false) {
//                     setData(response.data)
//                     setError(null);
//                     setIsLoading(false)
//                 }
//             } catch (error) {
//                 if (ignore === false) {
//                     setData(null)
//                     setError(error)
//                     setIsLoading(false)
//                 }

//             }
//             setIsLoading(false)
//         }


//         fetchData();
//         return () => {
//             ignore = true;
//         }
//     }, [location, term]);

//     return { data, isLoading, error }

// };

// export default useYelpApi;