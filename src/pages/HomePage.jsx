import React from "react";
import Hero from "../components/hero/Hero";
import ChooseUs from "../components/home/chooseUs/ChooseUs";
import RecentCarList from "../components/home/RecentList/RecentCarList";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <RecentCarList />
    </div>
  );
};

export default HomePage;
