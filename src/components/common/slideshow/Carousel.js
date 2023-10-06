import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import TestimonialCard from "../card/TestimonialCard";
import "../styles/Carousel.css";

function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials data or set it manually
    const testimonialsData = [
      {}, // TestimonialCard 1
      {}, // TestimonialCard 2
      {}, // TestimonialCard 3
    ];
    setTestimonials(testimonialsData);
  }, []);

  const testimonialTemplate = (testimonial) => {
    return (
      <div className="testimonial-card-wrapper">
        <div className="testimonial-card-item">
          <TestimonialCard />
        </div>
      </div>
    );
  };

  return (
    <div className="testimonial-carousel">
      <Carousel
        value={testimonials}
        numScroll={1}
        numVisible={2}
        responsiveOptions={[
          {
            breakpoint: "1199px",
            numVisible: 1,
            numScroll: 1,
          },
          {
            breakpoint: "991px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "767px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
        // circular
        // autoplayInterval={3000}
        itemTemplate={testimonialTemplate}
      />
    </div>
  );
}

export default TestimonialCarousel;
