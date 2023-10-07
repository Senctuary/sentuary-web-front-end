import React, { useState } from "react"; 
import "../styles/Buttons.css";
import PopupCard from "../card/PopupCard";

const AddToCartButton = (hidePopup) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(!showPopup); 
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

export default AddToCartButton;
