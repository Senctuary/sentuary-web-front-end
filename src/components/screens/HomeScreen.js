import React, { useEffect, useState } from "react";
import "./styles/HomeScreen.css";
import "../common/styles/Buttons.css";

import Banner from "../home/Banner";
import ProductHighlight from "../home/ProductHighlight";
import AboutUs from "../home/AboutUs";
import Categories from "../home/Categories";
import Testimonial from "../home/Testimonial";
import { Footer } from "../common/Footer";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const HomeScreen = () => {
  const nav = useNavigate();
  const [visible, setVisible] = useState(false);
  const displayDialog = () => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  };

  useEffect(() => {
    displayDialog();
  }, []);

  return (
    <div className="home-screen">
      <div className="notification-container">
        <Dialog
          header="Cây là bạn"
          visible={visible}
          style={{ width: "50vw" }}
          dismissableMask={true}
          onHide={() => setVisible(false)}
        >
          <p className="m-0 pb-4">
            Còn gì tuyệt vời hơn việc có thể tự chọn cho mình cây và chậu riêng
            biệt.
          </p>
          <Button id="see-more-btn" onClick={() => nav('/customize/1')}>Thử ngay</Button>
        </Dialog>
      </div>
      <Banner />
      <ProductHighlight />
      <AboutUs />
      <Categories />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomeScreen;
