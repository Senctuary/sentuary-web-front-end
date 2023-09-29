import React from "react";
import { useState } from "react";
import "../styles/Buttons.css";
import "font-awesome/css/font-awesome.min.css";

const QuantityAdjustButton = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  };

  return (
    <div className="quantity-adjust-btn">
      <button id="decrement-quantity-btn">
        <i
          className="fa fa-minus"
          style={{ margin: "0.5rem", color: "#1E1E1E" }}
          onClick={decrementQuantity}
        ></i>
      </button>
      <span style={{width: "max-content"}}>{quantity}</span>
      <button id="increment-quantity-btn">
        <i
          className="fa fa-plus"
          style={{ margin: "0.5rem", color: "#1E1E1E" }}
          onClick={incrementQuantity}
        ></i>
      </button>
    </div>
  );
};

export default QuantityAdjustButton;
