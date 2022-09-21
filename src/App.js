import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ZARA for men
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

      </header>
    </div>
  );
}

export default App;
