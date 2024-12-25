import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const MyBooking = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    async function getBooking() {
      let { data } = await axios.get(
        `http://localhost:5000/car-booking?email=${user?.email}`
      );
      setBooking(data);
    }
    getBooking();
  }, []);

  console.log(booking);

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
            .patch(`http://localhost:5000/car-booking/${id}`, statusInfo)
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
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

  const handleCancelBooking = (id) => {
    console.log(id);
    let statusInfo = {
      status: "canceled",
    };

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
            .patch(`http://localhost:5000/car-booking/${id}`, statusInfo)
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
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

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-car-secondary text-car-white font-bold text-[15px]">
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
              <tr key={car?._id} className="hover">
                <td>{i + 1}</td>
                <td>
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
                <td>{car?.carModel}</td>
                <td>${car?.price}</td>
                <td>{car?.bookingDate}</td>
                <td>
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
                <td>
                  <button className="btn btn-sm bg-car-primary text-car-white hover:text-[#000] text-sm mx-1">
                    Modify Date
                  </button>
                  <button
                    onClick={() => handleCancelBooking(car?._id)}
                    className="btn btn-sm bg-[#dc2626] text-car-white hover:text-[#000] text-sm mx-1"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
