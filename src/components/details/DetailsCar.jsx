import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import PageHead from "../headers/pageHead/PageHead";

const DetailsCar = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const detailsData = useLoaderData();

  let { _id: carId } = detailsData;

  const newCarData = {
    carId: carId,
    adminName: user?.displayName,
    adminEmail: user?.email,
    bookingStatus: "confirmed",
    bookingStartDate: startDate,
    bookingEndDate: endDate,
    ...detailsData,
  };
  delete newCarData._id;
  delete newCarData.bookingCount;

  const handleBooking = () => {
    document.getElementById("dateModal").showModal();
  };

  const dateModify = () => {
    document.getElementById("dateModal").close();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be booking Now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            "https://car-rental-server-sage.vercel.app/car-booking",
            newCarData,
            {
              withCredentials: true,
            }
          )
          .then(({ data }) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Successfully  !",
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
      <PageHead title={"Details Page"} />
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
      <dialog id="dateModal" className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center my-5">
            Please select Date{" "}
          </h3>
          <div className="flex justify-between  h-[300px]">
            <div>
              <h3>Star Date</h3>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <h3>End Date</h3>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={dateModify}
              className="btn bg-car-primary text-car-white"
            >
              Save Date
            </button>
            <form method="dialog">
              <button className="btn bg-[#dc2626] text-car-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default DetailsCar;
