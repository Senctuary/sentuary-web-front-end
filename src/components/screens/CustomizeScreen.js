import React, { useEffect, useRef, useState } from "react";
import "./styles/CustomizeScreen.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";
import { updateCartNumber } from "../common/buttons/AddToCartButton";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
// const API_DOMAIN = "https://6520dfdb906e276284c4c0db.mockapi.io";

const CustomizeScreen = () => {
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  let getPlants = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_DOMAIN}api/products`)
        .then((response) => {
          if (response) {
            let filteredPlants = response.data.filter(
              (plant) => !plant.category.toUpperCase().includes("VASE")
            );
            setPlants(filteredPlants);
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
        .get(`${API_DOMAIN}api/products`)
        .then((response) => {
          if (response) {
            let filteredVases = response.data.filter((vase) =>
              vase.category.toUpperCase().includes("VASE")
            );

            setVases(filteredVases);
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

  const plantsSwiperRef = useRef(null);
  const vasesSwiperRef = useRef(null);

  const getCurrentPlantContent = () => {
    const activeSwiper = plantsSwiperRef.current;
    if (!activeSwiper) {
      return null;
    }

    const activeIndex = activeSwiper.swiper.activeIndex;

    if (activeSwiper.classList.contains("plantsSwiper")) {
      console.log(plants[activeIndex]);
      return plants[activeIndex];
    }
    return null;
  };
  const getCurrentVaseContent = () => {
    const activeSwiper = vasesSwiperRef.current;
    if (!activeSwiper) {
      return null;
    }

    const activeIndex = activeSwiper.swiper.activeIndex;

    if (activeSwiper.classList.contains("vasesSwiper")) {
      return vases[activeIndex];
    }
    return null;
  };

  let navigateNext = () => {
    // Add plant, vase to cart
    updateCartNumber(getCurrentPlantContent());
    updateCartNumber(getCurrentVaseContent());
    // Navigate to the Checkout page
    navigate("/checkout/contact");
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const paginationSwipe = {
    clickable: true,
  };

  const plantSwiperParams = {
    grabCursor: true,
    pagination: paginationSwipe,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    modules: [Pagination],
    onSlideChange: (swiper) => {
      // Update the current slide index when the slide changes
      setCurrentSlideIndex(swiper.activeIndex);
    },
  };

  return (
    <div className="customize-container">
      <div className="buttons-container">
        <Button
          label="Back"
          className="back-button"
          icon="pi pi-arrow-left"
          iconPos="left"
          onClick={navigateBack}
          severity="secondary"
        />
        <Button
          label="Next"
          className="next-button"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={navigateNext}
        />
      </div>

      <div className="content-container grid grid-nogutter">
        <div className="preview-container col-12 md:col-3">
          {/* <span>{getCurrentPlantContent()?.image}</span> */}
          <img
            className="choosen-plant-pic"
            src={getCurrentPlantContent()?.image}
            alt={getCurrentPlantContent()?.name}
            style={{ display: "block", width: "70%", height: "30%" }}
          />

          <img
            className="choosen-plant-pic"
            src={getCurrentVaseContent()?.image}
            alt={getCurrentVaseContent()?.name}
            style={{ display: "block", width: "70%", height: "30%" }}
          />
        </div>
        <div className="choose-container col-12 md:col-9">
          <div className="plants-container">
            <label>Các loại cây</label>
            <Swiper
              {...plantSwiperParams}
              className="plantsSwiper"
              id="plantsSwiper"
              ref={plantsSwiperRef}
            >
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
            <Swiper
              {...plantSwiperParams}
              className="vasesSwiper"
              id="vasesSwiper"
              ref={vasesSwiperRef}
            >
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
