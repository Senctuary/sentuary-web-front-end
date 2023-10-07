import React, { useState } from "react";
import "../styles/Card.css";
import xSquare from "../../../assets/images/x-square.png";

const PopupCard = () => {
  const [hidePopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(true); 
  };

  return (
    <div className={`notification-popup${hidePopup ? " hidden" : ""}`}>
      <div className="popup-content">
        <div className="x-square">
          <button className="x-square-btn" onClick={handleClosePopup}>
            <img className="img" alt="X square" src={xSquare} />
          </button>
        </div>
        <div className="frame">
          <div className="div-wrapper">
            Successfully
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
