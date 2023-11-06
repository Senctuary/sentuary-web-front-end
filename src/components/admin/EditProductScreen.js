import React, { useState, useEffect } from "react";
import "./styles/EditProductScreen.css";
import "font-awesome/css/font-awesome.min.css";
import ProductCard from "../common/card/ProductCard";
import AdminHeader from "../common/AdminHeader";
import PopupCard from "../common/card/PopupCard";
import { useParams } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/products";


const EditProductScreen = () => {
  const { productId } = useParams();

  const [showPopup, setShowPopup] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    category: 0,
    price: 0,
    quantity: 0,
    image: "",
    description: "",
    status: 0,
  });

  const convertCategoryType = (category) => {
    let id = 0;
    categories.map((item) => {
      if (item.name === category) {
        id = item.id;
      }
      return item.id;
    });
    return id;
  };

  const convertStatusType = (stat) => {
    let id = 0;
    status.map((item) => {
      if (item.name === stat) {
        id = item.id;
        return item.id;
      }
      return item.id;
    });
    return id;
  };

  useEffect(() => {
    // Fetch product data by productId and set it to productData4

    const fetchProductData = async () => {
      try {
        const response = await fetch(apiUrl + `/${productId}`);
        if (response.ok) {
          const product = await response.json();
          setProductData({
            ...product,
            category: convertCategoryType(product.category),
            status: convertStatusType(product.status),
          });
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, [productId]);

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

  const [categories] = useState([
    {
      id: 0,
      name: "Cactus",
    },
    {
      id: 1,
      name: "Succulent",
    },
    {
      id: 2,
      name: "Vase",
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
      name: productData.name,
      image: productData.image,
      description: productData.description,
      price: parseFloat(productData.price),
      quantity: parseInt(productData.quantity, 10),
      category: productData.category,
      status: productData.status,
    };
    // Send an API request to update the product
    const jwtToken = localStorage.getItem("jwtToken");
    fetch(apiUrl + `/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwtToken,
      },
      body: JSON.stringify(dataToSave),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product updated successfully.");
          setShowPopup(!showPopup);
        } else {
          console.error("Failed to update product.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="edit-product">
      <AdminHeader title="Edit Product" />
      <div className="edit-product-container">
        <div className="edit-product-form">
          <h1>Edit Product</h1>
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
            {productData.category === 2 ? (
              <></>
            ) : (
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
            )}

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

            {/* STATUS */}
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
      
      {showPopup && <PopupCard />}
    </div>
  );
};

export default EditProductScreen;
