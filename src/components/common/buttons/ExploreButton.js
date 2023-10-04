import React from "react";
import "../styles/Buttons.css";
import 'font-awesome/css/font-awesome.min.css';

const ExploreButton = () => {
  return (
    <div>
      <button id="explore-btn">
        Explore 
        <i className="fa fa-arrow-right" style={{marginLeft: "0.5rem", color: "#1E1E1E"}}></i>
        <i className="fa fa-plus" style={{marginLeft: "0.5rem", color: "#1E1E1E"}}></i>
        <i className="fa fa-minus" style={{marginLeft: "0.5rem", color: "#1E1E1E"}}></i>
      </button>
    </div>
  );
};

export default ExploreButton;
