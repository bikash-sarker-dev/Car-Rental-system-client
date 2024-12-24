import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";
import CardRecent from "./CardRecent";

let sectionTitleContent = {
  title: "Recent Cars",
  description:
    "Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat",
};

const RecentCarList = () => {
  const [recentCar, setRecentCar] = useState([]);

  useEffect(() => {
    getRecentData();
  }, []);

  async function getRecentData() {
    const { data } = await axios.get("http://localhost:5000/recent-car");
    setRecentCar(data);
  }

  return (
    <section className="my-32">
      <div className="container">
        <SectionHeadTitle
          title={sectionTitleContent.title}
          description={sectionTitleContent.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCar.map((car) => (
            <CardRecent key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCarList;
