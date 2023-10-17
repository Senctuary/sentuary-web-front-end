import React from "react";
import "./styles/Banner.css";
import { InputText } from "primereact/inputtext";

const rightArrow = require("../../assets/images/right-arrow.png");
const leftArrow = require("../../assets/images/left-arrow.png");
const cactusHighlight = require("../../assets/images/cactus-highlight.png");

const Banner = () => {
  return (
    <div className="banner-container">
      <div class="text-element">
        <h1>Get your dream plant</h1>
        <div class="intro-elements">
          <span style={{ fontSize: "18.4px" }}>
            <p style={{ fontSize: "38.4px", margin: "0" }}>20+</p> 
            Plants species
          </span>
          <div
            style={{
              margin: "0 30px",
              width: "0.0625rem",
              height: "4rem",
              backgroundColor: "#1E1E1E",
            }}
          ></div>
          <span style={{ fontSize: "18.4px" }}>
            <p style={{ fontSize: "38.4px", margin: "0" }}>100+</p> 
            Customers
          </span>
        </div>
        <div class="search-elements">
          <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText placeholder="What are you looking for?" />
          </span>
        </div>
      </div>
      <div class="image-elements">
        <div class="animated-element">
          <img
            style={{
              height: "100px",
              position: "relative",
              left: "200px",
              top: "100px",
            }}
            src={rightArrow}
            alt="Animate arrow"
          />
        </div>
        <img className='banner-picture' src={cactusHighlight} alt="Senik banner" />
        <div class="animated-element">
          <img
            style={{ height: "100px", position: "relative", left: "-200px" }}
            src={leftArrow}
            alt="Animate arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
