import React from "react";
import { Outlet } from "react-router";

const FirstPage = () => {
  return (
    <div>
      <h1>FirstPage</h1>
      <Outlet />
    </div>
  );
};

export default FirstPage;
