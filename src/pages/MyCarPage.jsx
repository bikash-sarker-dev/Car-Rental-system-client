import React from "react";
import PageHead from "../components/headers/pageHead/PageHead";
import MyCar from "../components/myCar/MyCar";

const MyCarPage = () => {
  return (
    <div>
      <PageHead title="My Car Page" />
      <div className="my-32">
        <MyCar />
      </div>
    </div>
  );
};

export default MyCarPage;
