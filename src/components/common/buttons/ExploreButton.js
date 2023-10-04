import React from "react";
import "../styles/Buttons.css";
import "font-awesome/css/font-awesome.min.css";

const ExploreButton = (props) => {
  return (
    <div>
      <button id="explore-btn">
        {props.title}
        <i className={props.rightIcon} style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}></i>
        {props.showMinus ? (
          <>
            <i className="fa fa-plus" style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}></i>
            <i className="fa fa-minus" style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}></i>
          </>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default ExploreButton;
