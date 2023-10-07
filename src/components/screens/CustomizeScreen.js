import React, { useEffect, useState } from "react";
import "./styles/CustomizeScreen.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";

// const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_DOMAIN = "https://6520dfdb906e276284c4c0db.mockapi.io";

const CustomizeScreen = () => {
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);
  const navigate = useNavigate();

  let getPlants = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_DOMAIN}/plants`)
        .then((response) => {
          if (response) {
            setPlants(response.data);
            console.log(plants);
          }
        })
        .catch((error) => {
          throw error;
        });
    });
  };

  let getVases = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_DOMAIN}/plants`)
        .then((response) => {
          if (response) {
            setVases(response.data);
            console.log(vases);
          }
        })
        .catch((error) => {
          throw error;
        });
    });
  };

  useEffect(() => {
    getPlants();
    getVases();
  }, []);

  let navigateNext = () => {
    // Navigate to the Checkout page
    navigate("/checkout/contact");
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const paginationSwipe = {
    clickable: true,
    dynamicBullets: true,
  };

  const plantSwiperParams = {
    grabCursor: true,
    pagination: paginationSwipe,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    modules: [Pagination],
  };

  return (
    <div>
      <div className="buttons-container">
        <Button
          label="Back"
          icon="pi pi-arrow-left"
          iconPos="left"
          onClick={navigateBack}
          severity="secondary"
        />
        <Button
          label="Next"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={navigateNext}
        />
      </div>

      <div className="content-container grid grid-nogutter">
        <div className="preview-container col-12 md:col-3"></div>
        <div className="choose-container col-12 md:col-9">
          <div className="plants-container">
            <label>Các loại cây</label>
            <Swiper {...plantSwiperParams} className="plantsSwiper">
              {plants.map((plant) => (
                <SwiperSlide key={plant.id}>
                  <div>
                    <img src={plant.image} alt={plant.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="vases-container">
            <label>Các loại chậu</label>
            <Swiper {...plantSwiperParams} className="vasesSwiper">
              {vases.map((vase) => (
                <SwiperSlide key={vase.id}>
                  <div>
                    <img src={vase.image} alt={vase.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="stickers-container">
        {/* <label>Các loại nhãn dán</label> */}
      </div>
    </div>
  );
};

export default CustomizeScreen;
