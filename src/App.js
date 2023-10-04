import logo from "./assets/images/logo.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import HomeScreen from "./components/screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <footer>Footer content goes here</footer>
      </div>
    </Router>
  );
}

export default App;
