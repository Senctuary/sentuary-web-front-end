import React from "react";
import AboutUsCard from "../common/card/AboutUsCard";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">
        <h1>Về chúng tôi</h1>
        <p>Đặt hàng ngay và chiêm ngưỡng vẻ đẹp của thiên nhiên</p>
      </div>
      <div className="about-us">
        <AboutUsCard
          title="Đa dạng loại cây"
          description="Chúng tôi cung cấp nhiều loại sen đá và xương rồng với đa dạng biến thể đẹp mê hồn"
          icon="pagelines"
        />
        <AboutUsCard
          title="Giao hàng nhanh chóng & miễn phí"
          description="Sau ít nhất 4 ngày, tuyệt tác của tự nhiên sẽ được trên tay bạn. Luôn miễn phí trong khu vực Thủ Đức."
          icon="shopping-bag"
        />
        <AboutUsCard
          title="Hỗ trợ thân thiện"
          description="Đội ngũ nhân viên CSKH thân thiện luôn sẵn sàng hỗ trợ bạn"
          icon="phone"
        />
      </div>
    </div>
  );
};

export default AboutUs;
