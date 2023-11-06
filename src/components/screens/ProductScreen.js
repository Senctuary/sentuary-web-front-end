import React, { useEffect, useState } from "react";
import "./styles/ProductScreen.css";
import { DataView } from "primereact/dataview";
import Card from "../common/card/Card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dropdown } from "primereact/dropdown";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [listToDisplay, setListToDisplay] = useState([]);

  const fetchCategories = () => {
    fetch(`${API_DOMAIN}api/products/categories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((categoryData) => {
        setCategories(categoryData);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  // Fetch the list of products from your API and set them in state
  const fetchProducts = () => {
    setLoading(true);
    fetch(`${API_DOMAIN}api/products`)
      .then((response) => {
        setLoading(false);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((productData) => {
        setLoading(false);
        console.log(productData);
        setProducts(productData);
        setListToDisplay(productData);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching products:", error);
      });
  };

  const card = (product) => {
    return <Card product={product}></Card>;
  };

  const changeProductList = (category) => {
    let tmp = [];
    products.map((product) => {
      if (
        category === "" ||
        product.category.toUpperCase().includes(category)
      ) {
        tmp.push(product);
        setListToDisplay(tmp);
      }
      setListToDisplay(tmp);
      return true;
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div className="products-screen-container">
      <h2>Our products</h2>
      <div className="col-12">
        <Dropdown
          value={selectedCategory}
          options={[
            { label: "All Categories", value: "" }, // Added option for All Categories
            ...categories.map((category) => ({
              label: category.name,
              value: category.name.toUpperCase(),
            })),
          ]}
          onChange={(e) => {
            setSelectedCategory(e.value);
            console.log("Filter: ", e);
            changeProductList(e.value);
          }}
          placeholder="All Categories"
        />

        {loading === true ? (
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="4"
            fill="var(--primary-color)"
            animationDuration=".5s"
          />
        ) : (
          <></>
        )}

        <DataView
          value={listToDisplay}
          itemTemplate={card}
          paginator
          rows={6}
        />
      </div>
    </div>
  );
}

export default ProductScreen;
