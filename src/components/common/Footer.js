import React from "react";
import "./styles/Footer.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import shopee from "../../assets/images/shopee.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="frame">
        <div className="footer-title">
          <h1 style={{ margin: "0 0 -1rem 0" }}>SENIK</h1>
          <p className="p">We help you find your dream plant</p>
        </div>
        <div className="frame-2">
          <div className="img-wrapper">
            <img className="facebook" alt="Facebook" src={facebook} />
          </div>
          <div className="img-wrapper">
            <img className="instagram" alt="Instagram" src={instagram} />
          </div>
          <div className="img-wrapper">
            <img className="shopee" alt="Shopee" src={shopee} />
          </div>
        </div>
      </div>

      <div className="frame-3">
        <div className="information">
          <div className="text-wrapper-2">Information</div>
          <div className="text-wrapper-3">About</div>
          <div className="text-wrapper-3">Product</div>
          <div className="text-wrapper-3">Blog</div>
        </div>
        <div className="information">
          <div className="text-wrapper-2">Company</div>
          <div className="text-wrapper-3">Community</div>
          <div className="text-wrapper-3">Career</div>
          <div className="text-wrapper-3">Our story</div>
        </div>
        <div className="information">
          <div className="text-wrapper-2">Contact</div>
          <div className="text-wrapper-3">Getting Started</div>
          <div className="text-wrapper-3">Pricing</div>
          <div className="text-wrapper-3">Resources</div>
        </div>
      </div>

      <p className="text-wrapper-4">
        2023 all Right Reserved Term of use GREENMIND
      </p>
    </div>
  );
};
