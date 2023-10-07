import React, { useEffect, useState } from "react";
import axios from "axios";
import Swiper from 'swiper';

// const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_DOMAIN = "https://6520dfdb906e276284c4c0db.mockapi.io";

const CustomizeScreen = () => {
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);

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

  return <div>CustomizeScreen</div>;
};

export default CustomizeScreen;
