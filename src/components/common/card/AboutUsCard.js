import React from "react";
import "../styles/Card.css";
import "font-awesome/css/font-awesome.min.css";

const AboutUsCard = ({title, description, icon}) => {
  return (
    <div className="AboutUsCard">
      <div className="AboutUsCard__icon">
        <i id="icon" className={`fa fa-3x fa-${icon}`} style={{ color: "#1E1E1E" }}></i>
      </div>

      <div className="AboutUsCard__description">
        <h3>{title}</h3>
        <p style={{color: "#9d9d9d"}}>{description}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
