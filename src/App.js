import logo from './assets/images/logo.png';
import './App.css';

import QuantityAdjustButton from './components/common/buttons/QuantityAdjustButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <QuantityAdjustButton />
      </header>
    </div>
  );
}

export default App;
