import React from "react";
import offer2 from "../../../assets/images/logo/offcer2.jpg";
import offer1 from "../../../assets/images/logo/offer1.jpg";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";

const Offers = () => {
  return (
    <div>
      <SectionHeadTitle title="Special Offers"></SectionHeadTitle>
      <div className="container ">
        <div className="md:flex gap-6 mb-32">
          <div className="w-1/2">
            <img className="w-full" src={offer1} alt="" />
            <div className="flex mt-3">
              <button className="btn bg-car-primary w-1/2">Learn More</button>
              <button className="btn bg-car-primary  w-1/2">Booking</button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={offer2} alt="" />
            <div className="flex mt-3 ">
              <button className="btn bg-car-primary w-1/2">Learn More</button>
              <button className="btn bg-car-primary w-1/2">Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;