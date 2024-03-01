import { useState, useEffect } from 'react';

import './App.module.css'
import '../Business/Business.css'
import '../BusinessList/BusinessList.module.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import BusinessList from '../BusinessList/BusinessList';
import { searchYelpApi } from '../../utils/fetchData';


function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({ location: "Saint Louis", term: "Soup", sort_by: "best_match" });

  const searchYelp = async (location, term, sort_by) => {
    setIsLoading(true);

    try {
      const { businesses, error } = await searchYelpApi(location, term, sort_by);
      setBusinesses(businesses);
      setIsLoading(false)
      setError(error);

    } catch (error) {
      setError(error)
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const { location, term, sort_by } = searchParams;
    searchYelp(location, term, sort_by);
  }, [searchParams]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'fixed', width: '100%', zIndex: '1' }}><Navbar /></div>
        <Hero searchParams={searchParams} setSearchParams={setSearchParams} />
      </header>
      <main>
        <BusinessList businesses={businesses} error={error} loading={isLoading} />
      </main>
      <footer>
        <a
          className="App-link"
          href="https://github.com/cjp0421/ravenous"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Code
        </a>
      </footer>
    </div>
  );
}


export default App;
