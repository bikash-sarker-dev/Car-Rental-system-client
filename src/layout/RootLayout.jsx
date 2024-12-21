import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/headers/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>this is footer</footer>
    </div>
  );
};

export default RootLayout;
