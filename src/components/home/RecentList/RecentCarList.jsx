import React from "react";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";
import CardRecent from "./CardRecent";

let sectionTitleContent = {
  title: "Recent Cars",
  description:
    "Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat",
};

const RecentCarList = () => {
  return (
    <section className="my-32">
      <div className="container">
        <SectionHeadTitle
          title={sectionTitleContent.title}
          description={sectionTitleContent.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
        </div>
      </div>
    </section>
  );
};

export default RecentCarList;
