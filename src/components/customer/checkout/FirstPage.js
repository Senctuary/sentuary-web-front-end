import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import "./styles/FirstPage.css";
import SubHeader from "../../common/SubHeader";
import ProductCardOrder from "../../common/productCards/productCardOrder";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
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
  const [requestBody, setRequestBody] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cartItems);
    console.log(cartItems);

    // Calculate the total price
    if (cartItems) {
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
    }
  }, []);

  let navigateNext = () => {
    // Get the current route
    let currentRoute = window.location.pathname;
    console.log(currentRoute);
    if (currentRoute.includes("contact")) {
      navigate("/checkout/payment", { state: { requestBody: requestBody, totalPrice: totalPrice } });
    } else if (currentRoute.includes("payment")) {
      let fullRequestBody = localStorage.getItem("fullRequestBody");
      makeOrder(fullRequestBody)
        .then(() => {
          navigate("/successful");
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    }
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const handleContactData = (data) => {
    // Do something with the data, such as saving it to the state or performing an action.
    console.log("Contact data: ", data);
    let tmp = { ...data, productIds };
    setRequestBody(tmp);
    console.log("Half-Request body: ", requestBody);
  };

  let makeOrder = (body) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_DOMAIN}/order`, body)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            console.log("Order was successful:", response.data);
            localStorage.removeItem("cart"); // Remove the cart from LS
            resolve(response); // Resolve the promise for a successful order
          } else {
            console.log("Order failed with status code:", response.status);
            reject(new Error("Order failed")); // Reject the promise for a failed order
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          reject(error); // Reject the promise for other errors
        });
    });
  };

  return (
    <div>
      <SubHeader title="Thêm thông tin" progressBar="inline-block" />

      <div className="firstpage-container grid grid-nogutter">
        <h2 style={{ width: "100%" }}>Đơn hàng gồm:</h2>
        {/* Display choosen products */}
        <div className="products-container col-12 md:col-6">
          {cartItems != null ? (
            cartItems.map((item) => {
              return (
                <ProductCardOrder
                  image={item.avatar}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })
          ) : (
            <></>
          )}

          <h2>Tổng giá ước tính: {totalPrice}đ</h2>
        </div>
        <div className="contact-inputs-container col-12 md:col-6">
          <Outlet context={[handleContactData]} />
        </div>
        <div className="buttons-container">
          <Button
            label="Quay lại"
            className="back-button"
            icon="pi pi-arrow-left"
            iconPos="left"
            onClick={navigateBack}
            severity="secondary"
          />
          <Button
            label="Tiếp tục"
            className="next-button"
            icon="pi pi-arrow-right"
            iconPos="right"
            onClick={navigateNext}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
