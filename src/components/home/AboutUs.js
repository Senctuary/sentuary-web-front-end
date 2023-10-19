import React from "react";
import AboutUsCard from "../common/card/AboutUsCard";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">
        <h1>About us</h1>
        <p>Order now and appreciate the beauty of nature</p>
      </div>
      <div className="about-us">
        <AboutUsCard
          title="Large Assortment"
          description="we offer many different types of products with fewer variations in each category."
          icon="pagelines"
        />
        <AboutUsCard
          title="Fast & Free Shipping"
          description="4-day or less delivery time, free shipping and an expedited delivery option."
          icon="shopping-bag"
        />
        <AboutUsCard
          title="24/7 Support"
          description="answers to any business related inquiry 24/7 and in real-time."
          icon="phone"
        />
      </div>
    </div>
  );
};

export default AboutUs;
