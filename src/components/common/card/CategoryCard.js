import React, { useState, useEffect } from "react";
import "../styles/Card.css";

const CategoryCard = ({ title, imageSrc }) => {
  return (
    <div className="category-card">
      <img
        className="category-card__image"
        src={imageSrc}
        alt="Categories plants or vase"
      />

      <div className="card-body">
        <h3 className="card-title" style={{ marginTop: "1rem" }}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
