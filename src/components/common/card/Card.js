import React, { useState, useEffect } from "react";

const Card = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch a random image from Unsplash
    const fetchRandomImage = async () => {
      try {
        const topic = "cactus"; // Search query

        const response = await fetch(
            'https://api.unsplash.com/photos/random?query=cactus&client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg'
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
    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={image} alt="Random Unsplash Image" />
      )}
    </div>
  );
};

export default Card;
