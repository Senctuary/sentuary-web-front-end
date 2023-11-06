import React from "react";
import "./styles/Testimonial.css";
import TestimonialCarousel from "../common/slideshow/Carousel";

const Testimonial = () => {
  return (
    <div className="testimonial"  style={{maxWidth: "1280px"}}>
      <div className="testimonial-title">
        <h1>Khách hàng nói gì về 
        <br></br>
        SENIK?</h1>
      </div>
      <div className="testimonial-container">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
