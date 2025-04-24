import React from "react";
import price from "../../../assets/images/Icons/iconPrice2.png";
import booking from "../../../assets/images/Icons/iconProccess.png";
import support from "../../../assets/images/Icons/iconSupport.png";
import variety from "../../../assets/images/Icons/iconWide.png";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";

let sectionTitleContent = {
  title: "Why Choose Us?",
  description:
    "Highlight your platform's unique selling points to build trust and draw user interested",
};

const ChooseUs = () => {
  return (
    <section className="my-28 " data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <SectionHeadTitle
          title={sectionTitleContent.title}
          description={sectionTitleContent.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
          <div className="card bg-car-info  shadow-md text-car-text rounded-md hover:bg-car-secondary transition-all duration-300">
            <div className="card-body items-center text-center">
              <img className="" src={variety} alt="" />

              <h2 className="card-title">Wide Variety of Cars</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* one  */}
          <div className="card bg-car-info  shadow-md text-car-text rounded-md hover:bg-car-secondary transition-all duration-300">
            <div className="card-body items-center text-center">
              <img src={price} alt="" />
              <h2 className="card-title">Aordable Prices</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* two  */}
          <div className="card bg-car-info  shadow-md text-car-text rounded-md hover:bg-car-secondary transition-all duration-300">
            <div className="card-body items-center text-center">
              <img src={booking} alt="" />
              <h2 className="card-title">Easy Booking Process</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          {/* three  */}
          <div className="card bg-car-info  shadow-md text-car-text rounded-md hover:bg-car-secondary transition-all duration-300">
            <div className="card-body items-center text-center">
              <img src={support} alt="" />
              <h2 className="card-title">Customer Support</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
