import React, { useEffect, useState } from "react";
import "./styles/ProductHighlight.css";
import Card from "../common/card/Card";
import SeeMoreButton from '../common/buttons/SeeMoreButton'

const ProductHighlight = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from your API here and set them in state
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://6517ea9d582f58d62d3539b9.mockapi.io/product"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productData = await response.json();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-highlight">
      <div className='product-highlight__title'>
        <h2>Best Selling Plants</h2>
        <p style={{fontSize: "0.85rem", marginBottom: "1rem", color: "#B6B5B5"}}>Easiest way to healthy life by buying your favorite plants</p>
        <SeeMoreButton />
      </div>
      <div className='product-highlight__gallery'>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductHighlight;
