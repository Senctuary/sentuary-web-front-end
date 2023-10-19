import React from "react";
import "../styles/Buttons.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const SeeMoreButton = () => {
  let nav = useNavigate();
  return (
    <div>
      <Button
        id="see-more-btn"
        onClick={() => {
          nav("/products");
        }}
      >
        See more
        <i
          className="fa fa-arrow-right"
          style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}
        ></i>
      </Button>
    </div>
  );
};

export default SeeMoreButton;
