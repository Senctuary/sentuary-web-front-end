import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import { AddToCartButton } from "../buttons/AddToCartButton";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setImage(product.image);
    setLoading(false);
  }, [product]);

  let handleCustomize = () => {
    navigate(`/customize/${product.id}`);
  };

  return (
    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          className="image"
          src={image}
          alt={product.name}
          onClick={handleCustomize}
        />
      )}
      <div className="card-body">
        <p className="card-title">{product.name}</p>
        <p className="card-price">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </p>
        <AddToCartButton product={product} />{" "}
        {/* Ensure that you pass the product here */}
      </div>
    </div>
  );
};

export default Card;
