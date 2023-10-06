import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import "./styles/FirstPage.css";
import SubHeader from "../../common/SubHeader";
import ProductCardOrder from "../../common/productCards/productCardOrder";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

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
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productIds, setProductIds] = useState([]);
  const navigate = useNavigate();
  let itemSample = [
    {
      id: "123e",
      name: "Cactus",
      price: 1000,
      quantity: 10,
    },
    {
      id: "123a",
      name: "Lovely vase",
      price: 2300,
      quantity: 10,
    },
  ];
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemSample));
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(cartItems);
    console.log(cartItems);

    // Calculate the total price
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    let productId = [];
    cartItems.reduce((accumulator, item) => {
      return productId.push(item.id);
    }, 0);

    setTotalPrice(total);
    setProductIds(productId);
    console.log(productIds);
  }, []);

  let navigateNext = () => {
    // Get the current route
    let currentRoute = window.location.pathname;
    console.log(currentRoute);
    if (currentRoute.includes("contact")) {
      navigate("/checkout/payment");
    } else if (currentRoute.includes("payment")) {
      navigate("/checkout/successful");
    }
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <SubHeader title="Add info" progressBar="inline-block" />
      <h2>Order Summary</h2>

      <div className="firstpage-container grid grid-nogutter">
        {/* Display choosen products */}
        <div className="products-container col-12 md:col-6">
          {cartItems != null ? (
            cartItems.map((item) => {
              return (
                <ProductCardOrder
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })
          ) : (
            <></>
          )}

          <h2>{totalPrice}</h2>
        </div>
        <div className="contact-inputs-container col-12 md:col-6">
          <Outlet />
        </div>
      </div>
      <div className="buttons-container">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          iconPos="left"
          onClick={navigateBack}
          severity="secondary"
        />
        <Button
          label="Next"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={navigateNext}
        />
      </div>
    </div>
  );
};

export default FirstPage;
