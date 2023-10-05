import React from "react";
import Carousel from "../common/slideshow/Carousel";
import TestimonialCard from "../common/card/TestimonialCard";
import "./styles/Testimonial.css";

const Testimonial = () => {
    const testimonialItems = [
        <TestimonialCard key={1} />,
        <TestimonialCard key={2} />,
        <TestimonialCard key={3} />,
        // Add more TestimonialCard components as needed
      ];
  return (
    <div>
      <div className="testimonial-container">
        <h1>What customers say about SENIK? </h1>
        <div className="testimonial-cards">
            <Carousel slides={testimonialItems}/>
          {/* <TestimonialCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
