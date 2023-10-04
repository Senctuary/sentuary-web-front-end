import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="left">
        <button>Login</button>
      </span>

      <span className="center">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </span>

      <span className="right">
        <button>Other</button>
      </span>
    </nav>
  );
};

export default Navigation;