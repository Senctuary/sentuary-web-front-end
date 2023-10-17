import React, { useEffect, useState } from "react";
import "../styles/Navigation.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const logo = require("../../../assets/images/logo.png");

const Navigation = () => {
  // const [cartNumber, setCartNumber] = useState(0);

  // let cartItems;

  // setInterval(() => {
  //   // cartItems = JSON.parse(localStorage.getItem("cart"))?.length;
  //   // setCartNumber(cartItems);
  //   // console.log(cartItems);
  // }, 1000);

  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartNumber")) || 0;
    setCartNumber(cartItems);

    const updateCartNumber = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartNumber")) || 0;
      setCartNumber(cartItems);
    };

    window.addEventListener("cartUpdated", updateCartNumber);

    return () => {
      window.removeEventListener("cartUpdated", updateCartNumber);
    };
  }, []);

  return (
    <div className="navigation">
      <div className="left">
        <Link t0="/" className="logo">
          <img src={logo} alt="logo" className="crop-logo"></img>
        </Link>
      </div>

      <div className="center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
