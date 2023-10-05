import React, { useState, useEffect } from "react";
import "../styles/Card.css";

const CategoryCard = ({title}) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch a random image from Unsplash
    const fetchRandomImage = async () => {
      try {
        const topic = "plant"; // Search query

        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${topic}&client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg`
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
  return (
    <div className="category-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img className="category-card__image" src={image} alt="Random Unsplash Image" />
      )}
      <div className="card-body">
        <h3 className="card-title" style={{marginTop: "1rem"}}>{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
