import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBooking = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [booking, setBooking] = useState([]);
  const [dateId, setDateId] = useState("");
  const [isUp, setIsUp] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    axiosInstance
      .get(`/car-booking?email=${user?.email}`)
      .then((res) => setBooking(res.data));
  }, [isUp, user?.email]);

  let handleChangeUpdateStatus = (e, id) => {
    console.log(e.target.value, id);
    let statusInfo = {
      status: e.target.value,
    };

    try {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be booking changing ( ${statusInfo.status} )`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "NO",
        confirmButtonText: "YES",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(
              `https://car-rental-server-sage.vercel.app/car-booking/${id}`,
              statusInfo
            )
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
                setIsUp(!isUp);
                Swal.fire({
                  title: "Successfully",
                  text: `Your booking has been changing ( ${statusInfo.status} )`,
                  icon: "success",
                });
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  let statusInfo = {
    status: "canceled",
  };
  const handleCancelBooking = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be booking cancel",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "NO",
        confirmButtonText: "YES",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(
              `https://car-rental-server-sage.vercel.app/car-booking/${id}`,
              statusInfo
            )
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
                setIsUp(!isUp);
                console.log("yes", !isUp);
                Swal.fire({
                  title: "Canceled!",
                  text: "Your booking has been canceled",
                  icon: "success",
                });
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateModify = (id) => {
    setEndDate("");
    setStartDate("");
    document.getElementById("dateModal").showModal();
    setDateId(id);
  };

  const dateModify = () => {
    let dateInfo = {
      startDate,
      endDate,
      accountLogOut,
    };
    try {
      document.getElementById("dateModal").close();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be booking date modify",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancel",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(
              `https://car-rental-server-sage.vercel.app/booking-date/${dateId}`,
              dateInfo
            )
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
                setIsUp(!isUp);
                console.log("yes", !isUp);
                Swal.fire({
                  title: "Successfully!",
                  text: "Your has been booking date modify",
                  icon: "success",
                });
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="overflow-x-auto mb-24 table-modify">
        <table className="table  ">
          {/* head */}
          <thead>
            <tr className="bg-car-secondary hidden sm:block text-car-white font-bold text-[15px]">
              <th>ON</th>
              <th>Car Image</th>
              <th>Car Model</th>
              <th>Total Price</th>
              <th>Booking Date</th>
              <th>Booking Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((car, i) => (
              <tr
                data-aos="fade-up"
                data-aos-duration="2000"
                key={car?._id}
                className="hover flex sm:flex-none  flex-col sm:flex-row bg-neutral-100 my-5 sm:bg-car-white"
              >
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">NO</p>
                  <p>{i + 1}</p>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Car Image</p>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  h-12 w-16">
                        <img
                          src={car?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Car Model</p>
                  <p>{car?.carModel}</p>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Daily Rental Price</p>
                  <p>${car?.price}</p>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Availability</p>
                  <p>{i + 1}</p>
                </td>
                <td className="flex sm:flex-none justify-between items-center sm:text-center ">
                  <p className="sm:hidden font-bold">Date</p>
                  <div>
                    <p>
                      {moment(car?.bookingStartDate).format(
                        "DD-MM-YYYY HH:mm A"
                      )}
                    </p>
                    <p className=" font-bold">To</p>
                    <p>
                      {" "}
                      {moment(car?.bookingEndDate).format("DD-MM-YYYY HH:mm A")}
                    </p>
                  </div>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Booking status</p>
                  <select
                    onChange={(e) => handleChangeUpdateStatus(e, car._id)}
                    defaultValue={car?.bookingStatus || "Change status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change status</option>
                    <option>confirmed</option>
                    <option>pending</option>
                    <option>canceled</option>
                  </select>
                </td>
                <td className="flex sm:flex-none justify-between items-center ">
                  <p className="sm:hidden font-bold">Action</p>
                  <div>
                    <button
                      onClick={() => handleDateModify(car._id)}
                      className="btn btn-sm bg-car-primary text-car-white hover:text-[#000] text-sm mx-1"
                    >
                      Modify Date
                    </button>
                    <button
                      onClick={() => handleCancelBooking(car?._id)}
                      className="btn btn-sm bg-[#dc2626] text-car-white hover:text-[#000] text-sm mx-1"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="dateModal" className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-center my-5">Date Modify</h3>
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
    </div>
  );
};

export default MyBooking;
