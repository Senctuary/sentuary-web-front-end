import React, { useState } from "react";
import ProductCard from "../common/buttons/ProductCard";

const AddProductScreen = () => {
    const [productData, setProductData] = useState({
        name: "",
        price: 0,
        quantity: 0,
        image: "", // You can initialize it with an empty string
        description: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      };
    
      const handleImageUpload = (e) => {
        // Handle image upload here and set the image URL or file in productData.image
        const file = e.target.files[0]; // Assuming you're using a file input
        if (file) {
          // You can upload the file to your server or convert it to a data URL
          // For simplicity, let's assume you set it as a data URL
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setProductData({
              ...productData,
              image: reader.result,
            });
          };
        }
      };
    
      return (
        <div>
          <h2>Add New Product</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*" // Set the accepted file types
                onChange={handleImageUpload}
              />
            </div>
          </form>
          <ProductCard product={productData} />
        </div>
      );
};
export default AddProductScreen;
