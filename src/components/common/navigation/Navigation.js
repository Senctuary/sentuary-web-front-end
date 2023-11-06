import React, { useEffect, useState } from "react";
import "../styles/Navigation.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const logo = require("../../../assets/images/logo.png");

const Navigation = () => {
  const [cartNumber, setCartNumber] = useState(0);

  const updateCartNumber = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || {};
    setCartNumber(cartItems.length);
  };

  useEffect(() => {
    updateCartNumber();

    window.addEventListener("cartUpdated", updateCartNumber);

    return () => {
      window.removeEventListener("cartUpdated", updateCartNumber);
    };
  }, []);

  return (
    <div className="navigation">
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="crop-logo"></img>
        </Link>
      </div>

      <div className="center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="profile-btn">
          <Link
            to={"/checkout/contact"}
            className="shopping-cart-btn"
            style={{ margin: "0 10px 5px 15px", position: "relative" }}
          >
            <i className="fa fa-shopping-cart" style={{ color: "#1E1E1E" }}></i>
            {cartNumber > 0 ? (
              <span className="badge">{cartNumber}</span>
            ) : null}
          </Link>

          <button className="user-btn" style={{ margin: "0" }}>
            <i className="fa fa-2x fa-user" style={{ color: "#1E1E1E" }}></i>
          </button>
        </div>
        <div className="menu-btn">
          <button className="bars-btn" style={{ margin: "0" }}>
            <i className="fa fa-bars" style={{ color: "#1E1E1E" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
