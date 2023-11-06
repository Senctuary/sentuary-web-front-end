import React from "react";
import "../styles/Card.css";
import { Card } from "primereact/card";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const defaultImage = require("../../../assets/images/succulent.jpg");

const ProductCard = ({ product, showButtons, onDelete, onHardDelete }) => {
  const header = (
    <img
      style={{ width: "15.4375rem", height: "17.875rem", padding: "20px" }}
      alt="Card"
      src={product.image || defaultImage}
    />
  );

  return (
    <Card
      title={product.name ? product.name : "Product name"}
      header={header}
      className="product-card lg:w-30rem"
    >
      <p className="m-0">
        ₫{product.price} <br />
        Quantity: {product.quantity}
      </p>
      {showButtons ? (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1rem",
          }}
        >
          <button className="button">
            <Link
              style={{ textDecoration: "none", color: "#1E1E1E" }}
              to={`/admin/edit-product/${product.id}`}
            >
              Edit
            </Link>
          </button>
          <button className="button delete-button" onClick={onDelete}>
            <i className="fa fa-trash" />
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "space-between",
            marginTop: "1rem",
            flexDirection: "column",  
          }}
        >
          <button className="button">
            <Link
              style={{ textDecoration: "none", color: "#1E1E1E" }}
              to={`/admin/edit-product/${product.id}`}
            >
              Restore
            </Link>
          </button>
          <button className="button delete-button" onClick={onHardDelete}>
            <i className="fa fa-trash" /> Permanently delete
          </button>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
