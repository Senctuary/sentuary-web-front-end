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
import Successful from "./components/customer/checkout/Successful";
import CustomizeScreen from "./components/screens/CustomizeScreen";
import ChatGPT from "./components/customer/ChatGPT";
import OrderDetail from "./components/admin/OrderDetail";
import AddProductScreen from "./components/admin/AddProductScreen";
import LoginScreen from "./components/admin/LoginScreen";
import AdminDashboard from "./components/admin/AdminDashboard";
import ReactGA from "react-ga";
import { useEffect } from "react";

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

function GoogleAnalytics() {
  const { location, pathname, search } = useLocation();
  // if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID);
  // }
  useEffect(() => {
    ReactGA.pageview(pathname + search);
  }, [location]);
}

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleAnalytics />
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            {/* ADMIN FLOW */}
            {/* <Route
            path="/admin"
            element={
              <PrivateRoute
                element={<AdminDashboard />}
                isAuthenticated={checkLogin()}
              />
            }
          /> */}
            <Route path="/admin" element={<AdminDashboard />} />
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

        <ChatGPT />
      </div>
    </Router>
  );
}

export default App;
