import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[750px] bg-right  "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content justify-start items-start w-full">
        <div className="max-w-2xl">
          <h3 className="uppercase tracking-[3px]  font-semibold text-xl">
            buy or Sell your vehicles
          </h3>
          <h1 className="mb-5 text-7xl font-extrabold leading-[90px] my-6 tracking-[3px]">
            Drive Your Dreams Today!
          </h1>

          <button className="btn  btn-outline border-[#ccc] text-[#fff] mt-5 rounded-none font-semibold uppercase tracking-[2px] px-8">
            Call To Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
