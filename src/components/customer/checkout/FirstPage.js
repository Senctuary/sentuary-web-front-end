import React from "react";
import { Outlet } from "react-router";
import SubHeader from "../../common/SubHeader";

const cartItems = localStorage.getItem("cartItems");
//Get the cart items from LS or API.
// Then GET item information from API View a product detail

// {
//   "cartItems": [
//     {
//       "id": "123e",
//       "name": "Nike Slim Shirt",
//       "quantity": 10,
// }
// ]
// }

const FirstPage = () => {
  return (
    <div className="firstpage-container">
      <SubHeader title="Add info" progressBar="inline-block" />
      <h2>Order Summary</h2>

      <Outlet />
    </div>
  );
};

export default FirstPage;
