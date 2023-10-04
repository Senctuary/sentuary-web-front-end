import React from "react";
import { Outlet } from "react-router";
import SubHeader from "../../common/SubHeader";

const FirstPage = () => {
  return (
    <div className="firstpage-container">
      <SubHeader title="Add info" progressBar="inline-block"/>
      <h1>FirstPage</h1>
      <Outlet />
    </div>
  );
};

export default FirstPage;
