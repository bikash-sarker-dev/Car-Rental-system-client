import React from "react";
import TapHead from "../components/headers/tapHeading/TapHead";
import Hero from "../components/hero/Hero";
import ChooseUs from "../components/home/chooseUs/ChooseUs";
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
    </div>
  );
};

export default HomePage;
