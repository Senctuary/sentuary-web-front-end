import logo from './assets/images/logo.png';
import './App.css';

import SeeMoreButton from "./components/common/buttons/SeeMoreButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SeeMoreButton />
      </header>
    </div>
  );
}

export default App;
