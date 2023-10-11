import React, { useEffect, useState } from "react";
import "./styles/AdminDashboard.css";
import axios from "axios";
import AdminHeader from "../common/AdminHeader";
import ProductCard from "../common/card/ProductCard";
import OrderCard from "../common/card/OrderCard";
import { TabView, TabPanel } from "primereact/tabview";
import { Link } from "react-router-dom";

const productAPIUrl = "https://6520dfdb906e276284c4c0db.mockapi.io";
const orderAPIUrl = "https://6526477e917d673fd76beff8.mockapi.io"

const AdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plantQuantity, setPlantQuantity] = useState(0);
  const [vaseQuantity, setVaseQuantity] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);
  const [orders, setOrders] = useState([]);

  const getPlants = () => {
    axios
      .get(productAPIUrl + "/plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVases = () => {
    axios
      .get(productAPIUrl + "/vases")
      .then((response) => {
        setVases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrders = () => {
    axios
      .get(orderAPIUrl + "/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPlantQuantity = () => {
    axios
      .get(productAPIUrl + "/plants")
      .then((response) => {
        setPlantQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVaseQuantity = () => {
    axios
      .get(productAPIUrl + "/vases")
      .then((response) => {
        setVaseQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrderQuantity = () => {
    axios
      .get(orderAPIUrl + "/orders")
      .then((response) => {
        setOrderQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPlantQuantity();
    getVaseQuantity();
    getOrderQuantity();
    getPlants();
    getVases();
    getOrders();
  }, []);

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
                return <ProductCard key={plant.id} product={plant} />;
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
                return <ProductCard key={vase.id} product={vase} />;
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
        </TabView>
      </div>
    </div>
  );
};

export default AdminDashboard;
