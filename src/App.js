import logo from './images/chillipepper.jpg';
import './App.css';
import Business from './Business.js';
import './Business.css'
import Navbar from './Navbar';
import Hero from './Hero';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <header className="App-header">
        <div className="businessComponent">
          <Business className="business" />
          <Business className="business" />

        </div>

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
