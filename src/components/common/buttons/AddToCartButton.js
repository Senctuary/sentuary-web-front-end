import React, { useState } from "react";
import "../styles/Buttons.css";
import PopupCard from "../card/PopupCard";

const updateCartNumber = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const AddToCartButton = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    updateCartNumber(product);
    setShowPopup(!showPopup);
    // Throw an event to update the cart number in the navigation bar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div>
      <button id="add-to-cart-btn" onClick={handleButtonClick}>
        Add to cart
      </button>

      {showPopup && <PopupCard />}
    </div>
  );
};

export { AddToCartButton, updateCartNumber };
