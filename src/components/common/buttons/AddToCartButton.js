import React, { useState } from "react";
import "../styles/Buttons.css";
import PopupCard from "../card/PopupCard";
import { Button } from "primereact/button";

const updateCartNumber = (product) => {
    let productInitialQuantity = 1;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
      product.quantity = productInitialQuantity;
    cart.push({ ...product });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
    // Throw an event to update the cart number in the navigation bar
    window.dispatchEvent(new Event("cartUpdated"));
};

const AddToCartButton = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    updateCartNumber(product);
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Button id="add-to-cart-btn" onClick={handleButtonClick}>
        Thêm vào giỏ
      </Button>

      {showPopup && <PopupCard />}
    </div>
  );
};

export { AddToCartButton, updateCartNumber };
