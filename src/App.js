import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import HomeScreen from "./components/screens/HomeScreen";
import FirstPage from "./components/customer/checkout/FirstPage";
import ContactDetail from "./components/customer/checkout/ContactDetail";
import PaymentMethod from "./components/customer/checkout/PaymentMethod";
import HistoryOrders from "./components/customer/HistoryOrders";
import OrderDetail from "./components/customer/OrderDetail";
import Successful from "./components/customer/checkout/Successful";
import CustomizeScreen from "./components/screens/CustomizeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import AdminDashboard from "./components/screens/AdminDashboard";
import AddProductScreen from "./components/screens/AddProductScreen";

function Header() {
  // Use useLocation inside a component function
  const location = useLocation();

  return (
    <header className="App-header">
      {location.pathname !== "/login" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/admin/add-product" && <Navigation />}
    </header>
  );
}

function PrivateRoute({ element, isAuthenticated }) {
  const location = useLocation();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
}

function checkLogin() {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return false;
  }
  return true;
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render the Header component */}
        <Header />
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          {/* ADMIN FLOW */}
          <Route
            path="/admin"
            element={
              <PrivateRoute
                element={<AdminDashboard />}
                isAuthenticated={checkLogin()}
              />
            }
          />
          <Route path="/admin/add-product" element={<AddProductScreen />} />
          {/* CUSTOMER FLOW */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/customize/:id" element={<CustomizeScreen />} />
          <Route path="/checkout" element={<FirstPage />}>
            <Route path="/checkout/contact" element={<ContactDetail />} />
            <Route path="/checkout/payment" element={<PaymentMethod />} />
          </Route>
          <Route path="/successful" element={<Successful />} />
          <Route path="/oldOrders" element={<HistoryOrders />}>
            <Route path="/oldOrders/:id" element={<OrderDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
