import React, { useEffect, useState } from "react";
import "./styles/ProductHighlight.css";
import Card from "../common/card/Card";
import SeeMoreButton from "../common/buttons/SeeMoreButton";
const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

const ProductHighlight = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from your API here and set them in state
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_DOMAIN}api/products`);

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
    <div className="product-highlight grid grid-nogutter">
      <div className="product-highlight__title col-12  lg:col-2">
        <h2>Sản phẩm hàng đầu</h2>
        <p
          style={{
            marginBottom: "1rem",
            color: "#B6B5B5",
          }}
        >
          Cách dễ nhất để có cuộc sống khỏe mạnh là mua những loại cây bạn yêu
          thích
        </p>
        <SeeMoreButton />
      </div>
      <div className="product-highlight__gallery col-12  lg:col-10">
        <div class="grid grid-nogutter">
          {products.slice(0, 6).map((product) => (
            <div
              className="card-container col-12 md:col-6 lg:col-4"
              key={product.id}
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
