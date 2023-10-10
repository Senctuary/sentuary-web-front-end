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
        <span>Thông tin liên hệ</span>
        <i className="fa fa-chevron-right"></i>
        {/* <span>TT giao hàng</span>
        <i className="fa fa-chevron-right"></i> */}
        <span>Thanh toán</span>
      </div>
    </div>
  );
};

export default SubHeader;
