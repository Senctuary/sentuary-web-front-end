import React from "react";
import "./styles/SubHeader.css";

const AdminHeader = (props) => {
  return (
    <div className="subHeader-container" style={{width: "100%"}}>
      <div className="title">{props.title}</div>
    </div>
  )
}

export default AdminHeader