import React from "react";
import "./styles/OrderDetail.css";
import OrderDetailCard from "../common/card/OrderCard";
import AdminHeader from "../common/AdminHeader";
import { Card } from "primereact/card";
import { useLocation } from "react-router-dom";

const defaultImage = require("../../assets/images/succulent.jpg");

const OrderDetail = () => {
  const order = useLocation().state?.order;

  const header = (product) => {
    return (
      <img
        style={{ width: "15.4375rem", height: "17.875rem", padding: "20px" }}
        alt="Card"
        src={product.image || defaultImage}
      />
    );
  };

  return (
    <div className="container">
      <AdminHeader title="Order Detail" />
      <div className="order-detail">
        <div className="order-info">
          <label style={{fontSize: "30px", color: "black"}}>Order Information: </label>
          <OrderDetailCard order={order} showButton={false} />
        </div>
        <div className="products-info">
        <label style={{fontSize: "30px", color: "black"}}>Bought Products: </label>
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
    </div>
  );
};

export default OrderDetail;
