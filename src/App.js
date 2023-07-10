
import './App.css';
import './Business.css'
import Navbar from './Navbar';
import Hero from './Hero';
import React from 'react';
import BusinessList from './BusinessList';



function App() {
  return (
    <div className="App">



      <Navbar />
      <Hero />
      <header className="App-header">

        <BusinessList />

        <a
          className="App-link"
          href="https://github.com/cjp0421/ravenous"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Code
        </a>
      </header>
    </div>
  );
}


export default App;
