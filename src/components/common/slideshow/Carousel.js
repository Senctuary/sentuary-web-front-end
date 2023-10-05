import React, { useState } from 'react';

const Carousel = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
    const goToSlide = (index) => {
      setCurrentSlideIndex(index);
    };
  
    const prevSlide = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="slideshow">
        <button onClick={prevSlide}>Previous</button>
        <div className="slide-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlideIndex ? 'active' : ''}`}>
              {slide.content}
            </div>
          ))}
        </div>
        <button onClick={nextSlide}>Next</button>
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentSlideIndex ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  

export default Carousel;
