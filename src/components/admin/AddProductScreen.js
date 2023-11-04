import React, { useState } from "react";
import "./styles/AddProductScreen.css";
import "font-awesome/css/font-awesome.min.css";
import ProductCard from "../common/card/ProductCard";
import AdminHeader from "../common/AdminHeader";
import { useLocation } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/products";

const AddProductScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productType = queryParams.get("type");

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: 0,
    quantity: 0,
    image: "",
    description: "",
    status: "active",
  });

  const [plantCategories] = useState([
    {
      id: 0,
      name: "Cactus",
    },
    {
      id: 1,
      name: "Succulent",
    },
  ]);

  const [status] = useState([
    {
      id: 0,
      name: "Active",
    },
    {
      id: 1,
      name: "Inactive",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
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

  const handleImageUrlBlur = () => {
    const imageUrl = productData.image;
    if (imageUrl) {
      setProductData({
        ...productData,
        image: imageUrl,
      });
    }
  };

  const handleSave = () => {
    const dataToSave = {
      ...productData,
      price: parseFloat(productData.price),
      quantity: parseInt(productData.quantity, 10),
      category: parseInt(productData.category, 10),
      status: parseInt(productData.status, 10),
    };
    if (productType === "plants" || productType === "vases") {
      const jwtToken = localStorage.getItem("jwtToken");
      console.log(jwtToken);
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + jwtToken,
        },
        body: JSON.stringify(dataToSave),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="add-product">
      <AdminHeader title="Add New Product" />
      <div className="add-product-container">
        <div className="add-product-form">
          <h1>Product</h1>
          <form>
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                placeholder="Product Name"
                onChange={handleInputChange}
              />
            </div>

            {/* CATEGORY */}
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {plantCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* PRICE */}
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
              />
            </div>

            {/* QUANTITY */}
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleInputChange}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                value={productData.status}
                onChange={handleInputChange}
              >
                <option value="">Select a Status</option>
                {status.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* IMAGE */}
            <div className="form-group">
              <label htmlFor="image">Image (URL or Upload):</label>
              <input
                type="text"
                id="image"
                name="image"
                value={productData.image}
                placeholder="Image URL or Upload Image"
                onChange={handleInputChange}
                onBlur={handleImageUrlBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fileUpload">Or Upload Image:</label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <button id="save-btn" type="button" onClick={handleSave}>
                Save
                <i
                  className="fa fa-arrow-down"
                  style={{ color: "#1E1E1E" }}
                ></i>
              </button>
            </div>
          </form>
        </div>
        <div className="preview-product">
          <h1 style={{ marginLeft: "1rem" }}>Preview</h1>
          <ProductCard product={productData} showButtons={true} />
        </div>
      </div>
    </div>
  );
};
export default AddProductScreen;
