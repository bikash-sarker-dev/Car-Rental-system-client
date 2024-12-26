import React from "react";
import AllCarAvailable from "../components/allCarAvailable/AllCarAvailable";
import PageHead from "../components/headers/pageHead/PageHead";
import TapHead from "../components/headers/tapHeading/TapHead";

const CarAvailablePage = () => {
  return (
    <div>
      <TapHead title="Car | Available" />
      <PageHead title="Car Available Page" />
      <AllCarAvailable />
    </div>
  );
};

export default CarAvailablePage;
