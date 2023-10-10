import React, { useEffect, useState } from "react";
import "./styles/AdminDashboard.css";
import axios from "axios";
import AdminHeader from "../common/AdminHeader";
import ProductCard from "../common/buttons/ProductCard";
import { TabView, TabPanel } from "primereact/tabview";
import { Link } from "react-router-dom";

const apiUrl = "https://6520dfdb906e276284c4c0db.mockapi.io";

const AdminDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plantQuantity, setPlantQuantity] = useState(0);
  const [vaseQuantity, setVaseQuantity] = useState(0);
  const [plants, setPlants] = useState([]);
  const [vases, setVases] = useState([]);

  const getPlants = () => {
    axios
      .get(apiUrl + "/plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVases = () => {
    axios
      .get(apiUrl + "/vases")
      .then((response) => {
        setVases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPlantQuantity = () => {
    axios
      .get(apiUrl + "/plants")
      .then((response) => {
        setPlantQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVaseQuantity = () => {
    axios
      .get(apiUrl + "/vases")
      .then((response) => {
        setVaseQuantity(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPlantQuantity();
    getVaseQuantity();
    getPlants();
    getVases();
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
                <button className="button"><Link to={"/admin/add-product"}>New</Link></button>
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
          <TabPanel header="Vases">
            <div>
              <h1>Vases</h1>
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
          <TabPanel header="Orders">
            <h2>Content of Tab 3</h2>
            <ProductCard />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default AdminDashboard;
