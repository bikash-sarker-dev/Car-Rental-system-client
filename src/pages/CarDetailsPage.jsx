import React from "react";
import DetailsCar from "../components/details/DetailsCar";
import TapHead from "../components/headers/tapHeading/TapHead";

const CarDetailsPage = () => {
  return (
    <div>
      <TapHead title="Car | Details" />
      <DetailsCar />
    </div>
  );
};

export default CarDetailsPage;
