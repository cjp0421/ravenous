import { useState, useEffect } from 'react';

import './App.module.css'
import '../Business/Business.css'
import '../BusinessList/BusinessList.module.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
// import useYelpApi from '../../utils/useYelpApi';
// import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import { searchYelp } from './utils/api';


function App() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'fixed', width: '100%', zIndex: '1' }}><Navbar /></div>
        <Hero setTerm={setTerm} setLocation={setLocation} setSortBy={setSortBy} />
      </header>
      <main>
        {/* <BusinessList response={results} error={error} loading={isLoading} /> */}
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
