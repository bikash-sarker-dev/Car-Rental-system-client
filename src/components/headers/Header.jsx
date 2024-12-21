import React from "react";
import Navbar from "./navbar/Navbar";
import TopSubNavbar from "./navbar/TopSubNavbar";

const Header = () => {
  return (
    <header>
      <TopSubNavbar />
      <Navbar />
    </header>
  );
};

export default Header;
