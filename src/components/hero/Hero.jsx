import React from "react";
import { Link } from "react-router-dom";
import herogifFle from "../../assets/images/Carpool-amico.png";

const Hero = () => {
  return (
    <div
      className="hero md:min-h-[750px] bg-right  "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>

      <div className="hero-content text-neutral-content flex-col-reverse lg:flex-row justify-start items-start w-full">
        <div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="max-w-2xl text-center md:text-left py-24"
          >
            <h3 className="uppercase tracking-[3px] text-car-background  font-semibold text-xl">
              buy or Sell your vehicles
            </h3>
            <h1 className="mb-5 text-5xl  md:text-7xl font-extrabold text-car-background leading-[60px] md:leading-[90px] my-6 tracking-[3px]">
              Drive Your <span className="text-car-accent"> Dreams</span> Today!
            </h1>

            <Link
              to=""
              className="  py-4 rounded-md inline-block bg-car-accent border-none  text-car-background mt-5   font-semibold uppercase tracking-[2px] px-8"
            >
              Call To Action
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-8 lg:mt-0"
        >
          <img
            className="lg:max-w-xl mx-auto"
            src={herogifFle}
            alt="not support file"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
