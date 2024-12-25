import React from "react";
import AddCarForm from "../components/addCar/AddCarForm";
import PageHead from "../components/headers/pageHead/PageHead";

const CarAddPage = () => {
  return (
    <section>
      <PageHead title="Add Car Page" />
      <div className="container ">
        <AddCarForm />
      </div>
    </section>
  );
};

export default CarAddPage;
