import { useState } from 'react';

import './App.module.css'
import '../Business/Business.css'
import '../BusinessList/BusinessList.module.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import useYelpApi from '../../utils/useYelpApi';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';



function App() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const { response, error, loading, fetchData } = useYelpApi({
    term,
    location,
    sortBy,
  });

  const handleSearch = () => {
    console.log('Searching with:', term, location, sortBy);
    fetchData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'fixed', width: '100%', zIndex: '1' }}><Navbar /></div>
        <Hero handleSearch={handleSearch} setTerm={setTerm} setLocation={setLocation} setSortBy={setSortBy} />
      </header>
      <main>
        <BusinessList response={response} error={error} loading={loading} />
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
