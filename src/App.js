import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import HomeScreen from "./components/screens/HomeScreen";
import FirstPage from "./components/customer/checkout/FirstPage";
import ContactDetail from "./components/customer/checkout/ContactDetail";
import PaymentMethod from "./components/customer/checkout/PaymentMethod";
import HistoryOrders from "./components/customer/HistoryOrders";
import OrderDetail from "./components/customer/OrderDetail";
import Successful from "./components/customer/checkout/Successful";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/checkout" element={<FirstPage />}>
            <Route path="/checkout/contact" element={<ContactDetail />}></Route>
            <Route path="/checkout/payment" element={<PaymentMethod />}></Route>
          </Route>
          <Route path="/successful" element={<Successful />}></Route>
          <Route path="/oldOrders" element={<HistoryOrders />}>
            <Route path="/oldOrders/:id" element={<OrderDetail />}></Route>
          </Route>
        </Routes>
        <footer>Footer content goes here</footer>
      </div>
    </Router>
  );
}

export default App;
