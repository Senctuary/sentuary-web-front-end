import React from "react";
import "./styles/Footer.css";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import shopee from "../../assets/images/shopee.svg";
import { Link } from "react-router-dom";
const logo = require("../../assets/images/logo.png");

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container" style={{ maxWidth: "1280px" }}>
        <div className="frame">
          <div className="footer-title">
            <Link to="/" className="logo">
              <h1 style={{ margin: "0 0 -1rem 0" }}>
                <img
                  src={logo}
                  alt="logo"
                  className="crop-logo"
                  style={{ maxWidth: "13rem" }}
                ></img>
              </h1>
            </Link>
            <p className="p">Ươm mầm phong cách, đổi mới cuộc sống</p>
          </div>

          <div className="frame-2">
            <div className="img-wrapper">
              <a
                href="https://www.facebook.com/SenikCorp"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="facebook" alt="Facebook" src={facebook} />
              </a>
            </div>
            <div className="img-wrapper">
              {" "}
              <a
                href="https://www.instagram.com/senik.cor"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="instagram" alt="Instagram" src={instagram} />
              </a>
            </div>
            {/* <div className="img-wrapper">
              <img className="shopee" alt="Shopee" src={shopee} />
            </div> */}
          </div>
        </div>

        <div className="frame-3">
          <div className="information">
            <div className="text-wrapper-1">Thông tin</div>
            <div className="text-wrapper">
              <Link to="/about">Về chúng tôi</Link>
            </div>
            <div className="text-wrapper">
              <Link to="/products">Sản phẩm</Link>
            </div>
            <div className="text-wrapper">Blog</div>
          </div>
          <div className="information">
            <div className="text-wrapper-1">Công ty</div>
            <div className="text-wrapper">Cộng đồng</div>
            <div className="text-wrapper">Nghề nghiệp</div>
            <div className="text-wrapper">Câu chuyện</div>
          </div>
          <div className="information">
            <div className="text-wrapper-1">Liên hệ</div>
            <div className="text-wrapper">ĐH</div>
            <div className="text-wrapper">FPT</div>
            <div className="text-wrapper">TP. HCM</div>
          </div>
        </div>
      </div>
      <p className="all-right-reserve">
        SENIK - ALL Right Reserved 2023
      </p>
    </div>
  );
};
