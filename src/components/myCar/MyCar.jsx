import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import UpdateCar from "./UpdateCar";

const MyCar = () => {
  const { user } = useAuth();
  const [myCars, setMyCars] = useState([]);
  const [upDateId, setUpDateId] = useState("");
  const [is, setIs] = useState(false);

  useEffect(() => {
    async function getMyCar() {
      let { data } = await axios.get(
        `http://localhost:5000/car?email=${user?.email}`
      );

      setMyCars(data);
    }
    getMyCar();
  }, [user?.email, is]);

  const handleUpdateData = (id) => {
    setUpDateId(id);
  };

  return (
    <div>
      <div className="container">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-car-secondary text-car-white font-bold text-[15px]">
                <th>ON</th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Daily Rental Price</th>
                <th>Availability</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCars.map((car, i) => (
                <tr key={car?._id}>
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
                  <td>${car?.price} /day</td>
                  <td>{car?.availability}</td>
                  <td>{car?.date}</td>
                  <td>
                    <button
                      onClick={() => {
                        document.getElementById("update_Id").showModal();
                        handleUpdateData(car?._id);
                      }}
                      className="btn bg-car-primary text-car-white hover:text-[#000] text-2xl mx-1"
                    >
                      <MdOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleMyCarDelete(car?._id)}
                      className="btn bg-[#dc2626] text-car-white hover:text-[#000] text-2xl mx-1"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpdateCar upDateId={upDateId} setIs={setIs} />
    </div>
  );
};

export default MyCar;
