import moment from "moment";
import { Link } from "react-router-dom";

const CardRecent = ({ car }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card group bg-car-info  transition duration-200  rounded-none hover:shadow-xl border border-car-default shadow-md"
    >
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

        <p>Date Posted: {moment(car?.date).startOf("day").fromNow()}</p>

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

export default CardRecent;
