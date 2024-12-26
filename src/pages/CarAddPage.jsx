import React from "react";
import AddCarForm from "../components/addCar/AddCarForm";
import PageHead from "../components/headers/pageHead/PageHead";
import TapHead from "../components/headers/tapHeading/TapHead";

const CarAddPage = () => {
  return (
    <section>
      <TapHead title="Car | Add" />
      <PageHead title="Add Car Page" />
      <div className="container ">
        <AddCarForm />
      </div>
    </section>
  );
};

export default CarAddPage;
