import React from "react";
import "./styles/SubHeader.css";

const SubHeader = (props) => {
  return (
    <div className="subHeader-container">
      <div className="title">{props.title}</div>
      <div
        className="progress-bar-container"
        style={{ display: `${props.progressBar}` }}
      >
        <span>Shipping</span>
        <i className="fa fa-chevron-right"></i>
        <span>Delivery</span>
        <i className="fa fa-chevron-right"></i>
        <span>Payment</span>
      </div>
    </div>
  );
};

export default SubHeader;
