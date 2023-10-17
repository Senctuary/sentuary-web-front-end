import React from "react";
import ExploreButton from "../buttons/ExploreButton";
import "../styles/ProductCardOrder.css";

const ProductCardOrder = (props) => {
  const removeItem = (id) => {
    console.log('remove item', id);
    props.removeItem(id);
  };
  return (
    <div class="productCardContainer">
      <img
        class="thumbnail"
        src={props.image}
        alt="the plant"
        style={{ width: "183px", height: "222px" }}
      />
      {/* https://via.placeholder.com/183x222 */}
      <div class="informationContainer">
        <h3 class="name">{props.name}</h3>
        <p class="price">{props.price}</p>
        <p class="quantity">Số lượng: {props.quantity}</p>
        <div class="buttonsContainer">
          <ExploreButton displayBtn="none" title={props.title}></ExploreButton>
          <i
            onClick={() => removeItem(props.id)}
            className="fa fa-trash"
            style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCardOrder;
