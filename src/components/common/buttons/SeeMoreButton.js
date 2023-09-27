import React from "react";
import "../styles/SeeMoreButton.css";
import 'font-awesome/css/font-awesome.min.css';

const AddToCartButton = () => {
  return (
    <div>
      <button id="see-more-btn">
        See more 
        <i className="fa fa-arrow-right" style={{marginLeft: "0.5rem", color: "#1E1E1E"}}></i>
      </button>
    </div>
  );
};

export default AddToCartButton;
