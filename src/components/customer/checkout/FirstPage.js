import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import "./styles/FirstPage.css";
import "./styles/CustomToast.css"
import SubHeader from "../../common/SubHeader";
import ProductCardOrder from "../../common/productCards/productCardOrder";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast } from "primereact/toast";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN_LOCAL;

const FirstPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setproducts] = useState([]);
  const [requestBody, setRequestBody] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useRef(null);

  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  };

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cartItems);
    console.log(cartItems);

    // Calculate the total price
    if (cartItems) {
      const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      let productsObject = [];
      cartItems.reduce((accumulator, item) => {
        return productsObject.push({
          productId: item.id,
          quantity: item.quantity,
        });
      }, 0);

      setTotalPrice(total);
      setproducts(productsObject);
      console.log(products);
    }
  }, []);

  let navigateNext = () => {
    // Get the current route
    let currentRoute = window.location.pathname;
    console.log(currentRoute);
    if (currentRoute.includes("contact")) {
      navigate("/checkout/payment", {
        state: { requestBody: requestBody, totalPrice: totalPrice },
      });
    } else if (currentRoute.includes("payment")) {
      setLoading(true);
      let fullRequestBody = localStorage.getItem("fullRequestBody");
      makeOrder(fullRequestBody)
        .then(() => {
          setLoading(false);
          navigate("/successful");
        })
        .catch((error) => {
          setLoading(false);
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
    let tmp = { ...data, products };
    setRequestBody(tmp);
    console.log("Half-Request body: ", requestBody);
  };

  let makeOrder = (body) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_DOMAIN}api/orders`, body, {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        })
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
      <Toast ref={toast} />
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
            loading={loading}
          />
          {/* <Button
            onClick={() => showToast("info", "Test", "Message Content")}
            label="ShowToast"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
