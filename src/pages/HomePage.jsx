import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import Hero from "../components/hero/Hero";
import ChooseUs from "../components/home/chooseUs/ChooseUs";
import Offers from "../components/home/offers/Offers";
import RecentCarList from "../components/home/RecentList/RecentCarList";
import Testimonials from "../components/home/testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <TapHead title="Car | Home" />
      <Hero />
      <ChooseUs />
      <RecentCarList />
      <Testimonials />
      <Offers />
    </div>
  );
};

export default HomePage;
