import React from "react";
import "../styles/Card.css";
import { Card } from "primereact/card";

const ProductCard = ({product}) => {
  const header = (
    <img style={{width: "15.4375rem", height: "17.875rem", padding: "20px"}} alt="Card" src={product.image} />
);

  return (
    <Card
      title={product.name}
      header={header}
      className="product-card lg:w-30rem"
    >
      <p className="m-0">
      ₫{product.price} <br />
      Quantity: {product.quantity}
      </p>
    </Card>
  );
};

export default ProductCard;
