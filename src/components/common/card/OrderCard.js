import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/orders";

const OrderDetailCard = ({ order }) => {
  const [options] = useState([
    {
      id: 0,
      name: "Waiting",
    },
    {
      id: 1,
      name: "Confirmed",
    },
    {
      id: 2,
      name: "Shipping",
    },
    {
      id: 3,
      name: "Success",
    },
    {
      id: 4,
      name: "Cancel",
    },
  ]);

  const convertStatusType = (stat) => {
    let id = 0;
    options.map((item) => {
      if (item.name === stat) {
        id = item.id;
      }
      return item.id;
    });
    return id;
  };

  const [orderStatus, setOrderStatus] = useState(0);

  const handleSelectChange = (e) => {
    // console.log("STATUS: " + e.target.value);
    const id = e.target.value;
    setOrderStatus(id);
    // console.log("CHANGED STATUS: " + orderStatus);
    // updateOrderStatus(order.id);
  };

  const updateOrderStatus = async (orderId) => {
    const dataToSave = [
      {
        op: "replace",
        path: "/status",
        value: orderStatus,
      },
    ];
    const jwtToken = localStorage.getItem("jwtToken");
    fetch(apiUrl + `/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
      body: JSON.stringify(dataToSave),
    })
      .then((response) => {
        if (response.ok) {
          // console.log("Product updated successfully.");
          setOrderStatus(orderStatus);
          // console.log(dataToSave);
          // console.log(response);
        } else {
          console.error("Failed to update product.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    updateOrderStatus(order.id);
  }, [order.id]);

  useEffect(() => {
    updateOrderStatus(order.id);
  }, [order.id, orderStatus]);

  const timeConverter = (timeString) => {
    const date = new Date(timeString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based, so add 1
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "8px",
        background: "rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="order-information">
        <p>
          Order ID: <strong>{order.id}</strong>
        </p>
        <p>
          Customer name: <strong>{order.customerName}</strong>
        </p>
        <p>
          Total price: <strong>{order.totalMoney} VND</strong>
        </p>
        <p>
          Total quantity: <strong>{order.totalQuantity}</strong>
        </p>
        <p>
          Phone: <strong>{order.phoneNumber}</strong>
        </p>
        <p>
          Email: <strong>{order.email}</strong>
        </p>
        <p>
          Address: <strong>{order.address}</strong>
        </p>
        <p>
          Ship date: <strong>{timeConverter(order.shippedDate)}</strong>
        </p>
        <p>
          Payment method: <strong>{order.paymentMethod}</strong>
        </p>
        {/* <p>
          Status: <strong>{orderStatus}</strong>
        </p> */}
      </div>
      <div
        className="order-action"
        style={{
          marginTop: "30px",
          borderTop: "solid 1px #1E1E1E",
          padding: "10px",
        }}
      >
        <div
          className="status-card flex justify-content-center"
          style={{ margin: "20px" }}
        >
          <label htmlFor="item" style={{ fontSize: "20px" }}>
            Status
          </label>
          <select
            id="item"
            name="item"
            style={{ marginLeft: "10px" }}
            value={orderStatus}
            onChange={handleSelectChange}
          >
            {options.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link className="detail-button" to={"/admin/order-detail"}>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailCard;
