import React from "react";
import AllCarAvailable from "../components/allCarAvailable/AllCarAvailable";
import PageHead from "../components/headers/pageHead/PageHead";

const CarAvailablePage = () => {
  return (
    <div>
      <PageHead title="Car Available Page" />
      <AllCarAvailable />
    </div>
  );
};

export default CarAvailablePage;
