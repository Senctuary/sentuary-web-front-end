import React, { useEffect, useState } from "react";
import "./styles/AdminDashboard.css";
import axios from "axios";
import AdminHeader from "../common/AdminHeader";
import ProductCard from "../common/card/ProductCard";
import OrderCard from "../common/card/OrderCard";
import { TabView, TabPanel } from "primereact/tabview";
import { Link } from "react-router-dom";
import ValueGraph from "./dashboard/ValueGraph";
import OrdersChart from "./dashboard/OrdersChart";
import { set } from "date-fns";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const apiUrl = process.env.REACT_APP_API_DOMAIN_LOCAL + "api/products";

// const productAPIUrl = "https://6520dfdb906e276284c4c0db.mockapi.io";
// const orderAPIUrl = "https://6526477e917d673fd76beff8.mockapi.io";

const AdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plantQuantity, setPlantQuantity] = useState(0);
  const [vaseQuantity, setVaseQuantity] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [deletedProductQuantity, setDeletedProductQuantity] = useState(0);
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [handleDeleteProductState, setHandleDeleteProductState] = useState(false);
  const [handleHardDeleteProductState, setHandleHardDeleteProductState] = useState(false);

  const getPlants = () => {
    axios
      .get(`${API_DOMAIN}api/products`)
      .then((response) => {
        // console.log(response.data);
        const plants = response.data.filter((plant) => {
          return (
            (plant.category === "Cactus" || plant.category === "Succulent") &&
            plant.isDeleted === false
          );
        });
        setPlants(plants);
        setPlantQuantity(plants.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVases = () => {
    axios
      .get(`${API_DOMAIN}api/products`)
      .then((response) => {
        const vases = response.data.filter((vase) => {
          return vase.category === "Vase";
        });
        setVases(vases);
        setVaseQuantity(vases.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrders = () => {
    axios
      .get(`${API_DOMAIN}api/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
        setOrderQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDeletedProducts = () => {
    axios
      .get(`${API_DOMAIN}api/products`)
      .then((response) => {
        // console.log(response.data);
        const products = response.data.filter((product) => {
          return product.isDeleted === true;
        });
        setDeletedProducts(products);
        setDeletedProductQuantity(products.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await fetch(apiUrl + `/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtToken,
        },
      });
      if (response.ok) {
        console.log("Product deleted");
        const updatedPlants = plants.map((plant) => {
          if (plant.id === productId) {
            return { ...plant, isDeleted: true };
          }
          return plant;
        });
  
        const updatedVases = vases.map((vase) => {
          if (vase.id === productId) {
            return { ...vase, isDeleted: true };
          }
          return vase;
        });
  
        setPlants(updatedPlants);
        setVases(updatedVases);
        setHandleDeleteProductState(!handleDeleteProductState);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleHardDeleteProduct = async (productId) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await fetch(apiUrl + `/harddelete/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwtToken,
        },
      });
      if (response.ok) {
        console.log("Product deleted");
        const updatedDeletedProducts = deletedProducts.filter(
          (deletedProduct) => {
            return deletedProduct.id !== productId;
          }
        );
        setDeletedProducts(updatedDeletedProducts);
        setHandleHardDeleteProductState(!handleHardDeleteProductState);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getPlants();
    getVases();
    getOrders();
    getDeletedProducts();
  }, [handleDeleteProductState, handleHardDeleteProductState]);

  return (
    <div className="admin-dashboard">
      <AdminHeader title="Admin Dashboard" />
      <div className="admin-dashboard-content">
        <TabView
          className="vertical-tabs"
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          orientation="left"
        >
          <TabPanel header="Dashboard">
            <div>
              <h1>Dashboard</h1>
              <ValueGraph />
              <OrdersChart />
            </div>
          </TabPanel>
          {/* PLANTS */}
          <TabPanel header="Plants">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <h1 style={{ width: "fit-content" }}>Plants</h1>
                <Link className="button" to={"/admin/add-product?type=plants"}>
                  New
                </Link>
              </div>
              <p>Current plant number: {plantQuantity}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {plants.map((plant) => {
                return (
                  <ProductCard
                    key={plant.id}
                    product={plant}
                    onDelete={() => handleDeleteProduct(plant.id)}
                    showButtons={true}
                  />
                );
              })}
            </div>
          </TabPanel>

          {/* VASES */}
          <TabPanel header="Vases">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <h1 style={{ width: "fit-content" }}>Vases</h1>
                <Link className="button" to={"/admin/add-product?type=vases"}>
                  New
                </Link>
              </div>
              <p>Current vase number: {vaseQuantity}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {vases.map((vase) => {
                return (
                  <ProductCard
                    key={vase.id}
                    product={vase}
                    onDelete={() => handleDeleteProduct(vase.id)}
                    showButtons={true}
                  />
                );
              })}
            </div>
          </TabPanel>

          {/* ORDERS */}
          <TabPanel header="Orders">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <h1 style={{ width: "fit-content" }}>Orders</h1>
              </div>
              <p>Current vase number: {orderQuantity}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              {orders.map((orders) => {
                return <OrderCard key={orders.id} order={orders} />;
              })}
            </div>
          </TabPanel>

          {/* DELETED PRODUCTS */}
          <TabPanel header="Delete Products">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <h1 style={{ width: "fit-content" }}>Deleted Products</h1>
              </div>
              <p>Current deleted products number: {deletedProductQuantity}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {deletedProducts.map((deletedProduct) => {
                return (
                  <ProductCard
                    key={deletedProduct.id}
                    product={deletedProduct}
                    onHardDelete={() =>
                      handleHardDeleteProduct(deletedProduct.id)
                    }
                    showButtons={false}
                  />
                );
              })}
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default AdminDashboard;
