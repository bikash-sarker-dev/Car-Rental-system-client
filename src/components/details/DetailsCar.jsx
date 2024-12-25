import axios from "axios";
import moment from "moment";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const DetailsCar = () => {
  const { user } = useAuth();
  const detailsData = useLoaderData();
  let { _id: carId } = detailsData;

  const newCarData = {
    carId: carId,
    adminName: user?.displayName,
    adminEmail: user?.email,
    bookingStatus: "pending",
    bookingDate: moment(new Date()).format("DD-MM-YYYY HH:mm"),
    ...detailsData,
  };
  delete newCarData._id;
  delete newCarData.bookingCount;

  const handleBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be booking Now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, booking Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/car-booking", newCarData)
          .then(({ data }) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Confirmation  !",
                text: "Your are car booking already completed",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <section className="">
      <div
        style={{
          background: `url(https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-bottom py-32 bg-blend-overlay text-center "
      >
        <h2 className="text-5xl font-bold text-clip text-car-white">
          Details Review
        </h2>
      </div>
      <div className="hero min-h-screen container">
        <div className="flex-col my-20">
          <img
            src={detailsData?.photo}
            className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
          />
          <div>
            <h1 className="text-4xl font-bold">{detailsData?.carModel}</h1>
            <div className="max-w-2xl flex  mt-3">
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                Author: {detailsData?.author?.name}
              </p>
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                Email: {detailsData?.author?.email}
              </p>
            </div>
            <div className="max-w-2xl flex  mt-4">
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                date or time:
              </p>
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                location: {detailsData?.location}
              </p>
            </div>
            <div className="max-w-2xl flex  mt-4">
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                availability: {detailsData?.availability}
              </p>
              <p className="text-gray-500 flex-1 mt-2 font-medium">
                BookingCount: {detailsData?.bookingCount}
              </p>
            </div>
            <p className="text-gray-500 flex-1 mt-4 font-bold flex items-center gap-5">
              Rating:
            </p>
            <p className="text-gray-500  mt-4 font-bold">
              Price : ${detailsData?.price} / day
            </p>
            <div>
              <p className="text-gray-500  mt-4 font-bold">Features :</p>
              <ul>
                {detailsData?.features.map((feature, i) => (
                  <li className="ml-5" key={feature}>
                    {i + 1} . {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="py-6 max-w-3xl">{detailsData?.description}</p>
            {user && user?.email && (
              <button
                onClick={handleBooking}
                className="btn bg-car-primary hover:bg-car-secondary my-8 px-10"
              >
                Booking Now
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCar;
