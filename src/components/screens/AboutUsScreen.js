import React from "react";
import "./styles/AboutUsScreen.css";
import { Link } from "react-router-dom";

const logo = require("../../assets/images/logo.png");
function AboutUsScreen() {
  return (
    <div className="about-us-screen-container">
      <div className="content">
        <h3>Chúng tôi là Senik</h3>
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="logo"
            className="crop-logo"
            style={{ maxWidth: "40vw" }}
          ></img>
          <h3>"Ươm mầm phong cách, đổi mới cuộc sống"</h3>
        </Link>
        <p>
          Senik là một công ty bán cây cảnh cho phép tuỳ chỉnh chậu cây theo
          phong cách cá nhân.
        </p>
        <hr />
        <p>
          Đến với chúng mình, bạn sẽ tìm thấy những điều thú vị và thư sản trong
          những cây sen. Chúng mình mang đến cho bạn những hình ảnh tuyệt đẹp
          nhất và những lời khuyên hữu ích để bạn trải nghiệm tốt nhất khi tham
          gia cùng chúng mình.
        </p>
      </div>

      <small>
        Một sản phẩm của nhóm IELTS10.9 thuộc môn EXE101, EXE201 (Experiential
        Entrepreneurship_Trải nghiệm khởi nghiệp) - ĐH FPT TP. HCM
      </small>
      <p></p>
      <small>IELTS10.9 - 2023</small>
    </div>
  );
}

export default AboutUsScreen;
