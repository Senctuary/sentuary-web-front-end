import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import AddToCartButton from "../buttons/AddToCartButton";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch a random image from Unsplash
    const fetchRandomImage = async () => {
      try {
        const topic = "cactus"; // Search query

        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=cactus&client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        console.log(response);
        const imageData = await response.json();
        console.log(imageData);
        setImage(imageData.urls.regular);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  let handleCustomize = () => {
    navigate(`/customize/${props.id}`);
  };
  return (
    <div className="card" onClick={handleCustomize}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img className="image" src={image} alt="Random Unsplash Image" />
      )}
      <div className="card-body">
        <p className="card-title">Cactus</p>
        <p className="card-price">$20</p>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default Card;
