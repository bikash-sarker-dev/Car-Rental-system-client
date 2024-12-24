import React from "react";

const CardRecent = ({ car }) => {
  return (
    <div className="card group bg-base-100 transition duration-200  rounded-none hover:shadow-xl border border-neutral-200">
      <figure className="relative">
        <img
          src={car?.photo}
          alt="Shoes"
          className="transition duration-500 ease-out group-hover:scale-125"
        />
        <span className="absolute right-0 bottom-0 bg-car-primary py-2 px-4 font-semibold text-xl text-base-100 tracking-wider">
          ${car?.price}/day
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {car?.carModel}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Registration Number: {car?.registrationNumber}</p>
        <p>Availability: {car?.availability}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline"> Car Details</div>
        </div>
      </div>
    </div>
  );
};

export default CardRecent;
