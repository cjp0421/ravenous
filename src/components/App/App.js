import React from 'react';

import './App.module.css'
import '../Business/Business.css'
import '../BusinessList/BusinessList.module.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero'

import BusinessList from '../BusinessList/BusinessList';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'fixed', width: '100%', zIndex: '1' }}><Navbar /></div>
        <Hero />
      </header>
      <main>
        <BusinessList />
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
