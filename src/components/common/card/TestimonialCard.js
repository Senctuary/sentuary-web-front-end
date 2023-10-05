import React from "react";
import "../styles/Card.css";
import vectorImage from "../../../assets/images/vector.svg";
import customerImage from "../../../assets/images/test-customer-image-removebg.png";
import starImage from "../../../assets/images/star-fill.svg";

const TestimonialCard = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <div className="overlap-group">
          <p className="text-wrapper">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="group">
            <div className="div">
              <img className="vector" alt="Vector" src={vectorImage} />
              <img
                className="unsplash-pjw"
                alt="Unsplash pjw"
                src={customerImage}
              />
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper-2">John Doe</div>
          <div className="text-wrapper-3">Youtuber</div>
        </div>
        <div className="div-3">
          <img className="star-fill" alt="Star fill" src={starImage} />
          <div className="text-wrapper-2">4.5</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
