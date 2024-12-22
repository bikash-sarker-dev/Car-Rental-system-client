import React from "react";

const CardRecent = () => {
  return (
    <div className="card group bg-base-100 transition duration-200  rounded-none hover:shadow-xl border border-neutral-100">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="transition duration-500 ease-out group-hover:scale-125"
        />
        <span className="absolute right-0 bottom-0 bg-car-primary py-2 px-4 font-semibold text-xl text-base-100 tracking-wider">
          $45/day
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Availability:</p>
        <p>Date Posted:</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CardRecent;
