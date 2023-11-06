import React from "react";
import "./styles/Categories.css";
import CategoryCard from "../common/card/CategoryCard";
import ExploreButton from "../common/buttons/ExploreButton";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  let nav = useNavigate();
  return (
    <div className="categories">
      <div className="categories-title">
        <h1>Các chủng loại</h1>
        <p style={{ color: "#1E1E1E80" }}>
          Đặt hàng ngay và chiêm ngưỡng vẻ đẹp của thiên nhiên
        </p>
      </div>
      <div className="category-card-container">
        <div style={{ position: "relative", top: "-5rem", left: "2rem" }}>
          <CategoryCard
            title="Sen đá"
            imageSrc="https://lh3.googleusercontent.com/pw/ADCreHfhvlYL3o1prYyfuKUsR1qwC-M75xzbipEqfJ6GWAuNzFcVT-hzwifre9s-jlmZUGsgGEpT4Zm2tmQ2NqsvJi9pAqDs99B9FnfYuItY0k9uqA6RRenwJiVDsNKZn-z09_1Jftv-crB1yPxXsOwzdWB8xQ=w958-h719-s-no-gm?authuser=0"
          />
        </div>

        <div>
          <CategoryCard
            title="Xương rồng"
            imageSrc="https://lh3.googleusercontent.com/pw/ADCreHfhwVI08VkR8zeH-gAd_VR0iPnzWw34ir0N6yQdHoOceMhzoT-s57OcnKClbwT327hBu7BYaU3Q0pRJoTJvsxZpzHC3MNf7TPwDk-orBAP6DgvDGFuKa-0pCw3DTXCE9Z8-xZjQtgOXEKNfApuXmM2vqw=w958-h719-s-no-gm?authuser=0"
          />
        </div>

        <div style={{ position: "relative", top: "-5rem", right: "2rem" }}>
          <CategoryCard
            title="Chậu"
            imageSrc="https://lh3.googleusercontent.com/pw/ADCreHfKVX9coHR6wJXTQWsEj1HAiL9J0ifZsg6dBQzFrCBwfIoZbDUrhl3M2-lQj8ceyw0cZ3eqmfQQH7imnMhARuF9B5r-fGvJmdBYRTnoUANKSUoWBwl8FSowHlvzLfVJSi_4__Dn-Zlf_MMnafScM6JhRQ=w958-h719-s-no-gm?authuser=0"
          />
        </div>

        <div className="explore-btn">
          <p
            style={{
              width: "19.3125rem",
              color: "#1E1E1E80",
              marginBottom: "1rem",
            }}
          >
            Đặt hàng ngay và chiêm ngưỡng vẻ đẹp của thiên nhiên
          </p>
          <Button
            id="explore-btn"
            onClick={() => {
              nav("/products");
            }}
          >
            Khám phá ngay
            <i
              className="fa fa-arrow-right"
              style={{ marginLeft: "0.5rem", color: "#1E1E1E" }}
            ></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
