import React from "react";
import ExploreButton from "../buttons/ExploreButton";
import "../styles/ProductCardOrder.css";

const ProductCardOrder = () => {
  return (
    <div class="productCardContainer">
      <img
        class="thumbnail"
        src="https://via.placeholder.com/183x222"
        alt="the plant"
      />
      <div class="informationContainer">
        <h3 class="name">Natural Plants</h3>
        <p class="price">₫ 62,000</p>
        <p class="quantity">Quantity: 220</p>
        <div class="buttonsContainer">
          <ExploreButton title='Edit'></ExploreButton>
          <i className="fa fa-trash" style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}></i>          
        </div>
      </div>
    </div>
  );
};

export default ProductCardOrder;
