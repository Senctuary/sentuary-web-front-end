import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import { Link, useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/orders";

const OrderDetailCard = ({ order, showButton }) => {
  const nav = useNavigate();
  console.log(order.id + ": " + order.status);
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

  const [updatedOrder, setUpdatedOrder] = useState(order);

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

  const handleSelectChange = (e) => {
    const id = e.target.value;
    updateOrderStatus(order.id, id);
  };

  const getOrder = async () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await fetch(apiUrl + `/${order.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.ok) {
        const order = await response.json();
        console.log(order);
        setUpdatedOrder(order);
      } else {
        console.log("Error getting order");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateOrderStatus = async (orderId, statusId) => {
    const dataToSave = [
      {
        op: "replace",
        path: "/status",
        value: statusId,
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
          console.log("Product updated successfully.");
          getOrder();
        } else {
          console.error("Failed to update product.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const timeConverter = (timeString) => {
    const date = new Date(timeString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based, so add 1
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  const handleOnClick = () => {
    nav("/admin/order-detail", {
      state: {
        order: updatedOrder,
      },
    });
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
          Order ID: <strong>{updatedOrder.id}</strong>
        </p>
        <p>
          Customer name: <strong>{updatedOrder.customerName}</strong>
        </p>
        <p>
          Total price: <strong>{updatedOrder.totalMoney} VND</strong>
        </p>
        <p>
          Total quantity: <strong>{updatedOrder.totalQuantity}</strong>
        </p>
        <p>
          Phone: <strong>{updatedOrder.phoneNumber}</strong>
        </p>
        <p>
          Email: <strong>{updatedOrder.email}</strong>
        </p>
        <p>
          Address: <strong>{updatedOrder.address}</strong>
        </p>
        <p>
          Ship date: <strong>{timeConverter(updatedOrder.shippedDate)}</strong>
        </p>
        <p>
          Payment method: <strong>{updatedOrder.paymentMethod}</strong>
        </p>
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
            value={convertStatusType(updatedOrder.status)}
            onChange={handleSelectChange}
          >
            <option value="">{order.status}</option>
            {(options
              .filter((item) => {
                return item.id !== convertStatusType(order.status);
              }))
              .map((status) => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
          </select>
        </div>
        {showButton ? (
          <div>
            <button className="detail-button" onClick={handleOnClick}>
              Detail
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderDetailCard;
