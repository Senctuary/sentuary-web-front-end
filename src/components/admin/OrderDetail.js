import React from "react";
import "./styles/OrderDetail.css";
import OrderDetailCard from "../common/card/OrderCard";
import AdminHeader from "../common/AdminHeader";
import "font-awesome/css/font-awesome.min.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";

const defaultImage = require("../../assets/images/succulent.jpg");
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/orders";

const OrderDetail = () => {
  const order = useLocation().state?.order;
  const nav = useNavigate();

  const header = (product) => {
    return (
      <img
        style={{ width: "15.4375rem", height: "17.875rem", padding: "20px" }}
        alt="Card"
        src={product.image || defaultImage}
      />
    );
  };

  const handleDeleteOrder = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await fetch(`${apiUrl}/${order.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => {
          console.log(response);
          nav("/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      console.log("Error in deleting order");
      alert("Error in deleting order");
      return;
    }
  };

  return (
    <div className="container">
      <AdminHeader title="Order Detail" />
      <div className="order-detail-container">
        <div className="order-detail">
          <div className="order-info">
            <label style={{ fontSize: "30px", color: "black" }}>
              Order Information:{" "}
            </label>
            <OrderDetailCard order={order} showButton={false} />
          </div>
          <div className="products-info">
            <label style={{ fontSize: "30px", color: "black" }}>
              Bought Products:{" "}
            </label>
            {order.products.map((product) => (
              <Card
                title={product.name ? product.name : "Product name"}
                header={header(product)}
                className="product-card lg:w-30rem"
              >
                <p className="m-0">
                  ₫{product.unitPrice} <br />
                  Quantity: {product.quantity}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <Button
          icon={<i className="fa fa-trash" />}
          label="Delete Order"
          className="back-button"
          onClick={handleDeleteOrder}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
