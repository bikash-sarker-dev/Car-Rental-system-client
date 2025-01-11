import React from "react";
import { Link } from "react-router-dom";

const ListCart = ({ car }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card mb-5 md:card-side sm:flex items-center   rounded-none border border-car-default bg-car-info shadow-md "
    >
      <figure>
        <img
          src={car?.photo}
          alt="Movie"
          className="sm:w-96 sm:h-60 p-4 sm:pl-4"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{car?.carModel}</h2>
        <p>Registration Number: {car?.registrationNumber}</p>
        <p>Availability: {car?.availability}</p>
        <p>price: ${car?.price} /day</p>
        <p>Date: {car?.date ? car?.date : "not found"} </p>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${car?._id}`}
            className="btn btn-md  mt-3  btn-outline border-car-primary text-car-primary hover:bg-car-primary hover:text-car-white hover:border-car-primary"
          >
            Booking Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
