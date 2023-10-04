import logo from './assets/images/logo.png';
import './App.css';

import Navigation from './components/common/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
