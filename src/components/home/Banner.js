import React from "react";
import "./styles/Banner.css";
import "../common/styles/Buttons.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const rightArrow = require("../../assets/images/right-arrow.png");
const leftArrow = require("../../assets/images/left-arrow.png");
const cactusHighlight = require("../../assets/images/cactus-highlight.png");

const Banner = () => {
  const nav = useNavigate();
  return (
    <div className="banner-container">
      <div class="text-element">
        <h1>Chọn cây của riêng bạn</h1>
        <div class="intro-elements">
          <span style={{ fontSize: "18.4px" }}>
            <p style={{ fontSize: "38.4px", margin: "0" }}>20+</p>
            Giống cây
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
            Khách hàng
          </span>
        </div>
        <div class="search-elements">
          {/* <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText placeholder="What are you looking for?" />
          </span> */}
          <div className="pt-4">
            <Button
              id="explore-btn"
              className="grow-shrink-element"
              onClick={() => nav("/customize/1")}
            >
              Chọn cây riêng
              <i
                className="fa fa-arrow-right"
                style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}
              ></i>
            </Button>
          </div>
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
        <img
          className="banner-picture"
          src={cactusHighlight}
          alt="Senik banner"
        />
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
