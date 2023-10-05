import React from "react";
import "../styles/Navigation.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const logo = require("../../../assets/images/logo.png");

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="left">
        <span>SENIK</span>
      </span>

      <span className="center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </span>

      <span className="right">
        <div className="profile-btn">
          <Link
          to={"/checkout/contact"}
            className="shopping-cart-btn"
            style={{ margin: "0 10px 5px 15px" }}
          >
            <i className="fa fa-shopping-cart" style={{ color: "#1E1E1E" }}></i>
          </Link>

          <button className="user-btn" style={{ margin: "0 0 5px 15px" }}>
            <i className="fa fa-user" style={{ color: "#1E1E1E" }}></i>
          </button>
        </div>
        <div className="menu-btn">
          <button className="bars-btn" style={{ margin: "0 0 5px 15px" }}>
            <i className="fa fa-bars" style={{ color: "#1E1E1E" }}></i>
          </button>
        </div>
      </span>
    </nav>
  );
};

export default Navigation;
