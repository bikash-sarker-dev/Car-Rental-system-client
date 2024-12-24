import React from "react";

const ListCart = ({ car }) => {
  return (
    <div className="card mb-5 card-side flex items-center   rounded-none border border-base-300 bg-base-100 shadow-xl ">
      <div>
        <figure>
          <img src={car?.photo} alt="Movie" className="w-96 h-60" />
        </figure>
      </div>

      <div className="card-body">
        <h2 className="card-title">{car?.carModel}</h2>
        <p>Registration Number: {car?.registrationNumber}</p>
        <p>Availability: {car?.availability}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-md  btn-outline border-car-primary text-car-primary hover:bg-car-primary hover:text-car-white hover:border-car-primary">
            Car Details
          </button>
          <button className="btn btn-md   btn-outline border-car-primary text-car-primary hover:bg-car-primary hover:text-car-white hover:border-car-primary">
            Car Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
