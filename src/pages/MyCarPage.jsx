import React from "react";
import PageHead from "../components/headers/pageHead/PageHead";
import TapHead from "../components/headers/tapHeading/TapHead";
import MyCar from "../components/myCar/MyCar";

const MyCarPage = () => {
  return (
    <div>
      <TapHead title="Car | MyCar" />
      <PageHead title="My Car Page" />
      <div className="my-32">
        <MyCar />
      </div>
    </div>
  );
};

export default MyCarPage;
