import logo from './images/chillipepper.jpg';
import './App.css';
import Business from './Business.js';
import './Business.css'
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="businessComponent">
          <Business className="business" />
          <Business className="business" />

        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
