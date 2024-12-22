import React from "react";

const SectionHeadTitle = ({ title, description }) => {
  return (
    <div className="mb-14">
      <h2 className="text-4xl text-center font-bold tracking-wider">{title}</h2>
      <p className=" text-center text-neutral-600 tracking-[0.5px] max-w-2xl mx-auto mt-3">
        {description}
      </p>
    </div>
  );
};

export default SectionHeadTitle;
