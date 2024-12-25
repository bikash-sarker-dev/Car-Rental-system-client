import React from "react";
import { Link } from "react-router-dom";

const GridCard = ({ car }) => {
  return (
    <div className="card group bg-base-100 transition duration-200  rounded-none hover:shadow-xl border border-neutral-200">
      <figure className="relative">
        <img
          src={car?.photo}
          alt="Shoes"
          className="transition duration-500 ease-out group-hover:scale-125 h-[230px]"
        />
        <span className="absolute right-0 bottom-0 bg-car-primary py-2 px-4 font-semibold text-xl text-base-100 tracking-wider">
          ${car?.price}/day
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{car?.carModel}</h2>
        <p>Registration Number: {car?.registrationNumber}</p>
        <p>Availability: {car?.availability}</p>
        <p>Date: {car?.date ? car?.date : "not found"} </p>

        <div className="card-actions justify-end  ">
          <Link
            to={`/details/${car?._id}`}
            className="btn btn-sm   btn-outline border-car-primary text-car-primary hover:bg-car-primary hover:text-car-white hover:border-car-primary"
          >
            Booking Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
