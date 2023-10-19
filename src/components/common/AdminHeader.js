import React from "react";
import "./styles/SubHeader.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const AdminHeader = (props) => {

  const nav = useNavigate();

  const handleLogout = () => {  
    localStorage.removeItem("jwtToken");
    nav("/login");
  }

  return (
    <div className="subHeader-container" style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <div className="title">{props.title}</div>
      <Button className="logout-button" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default AdminHeader