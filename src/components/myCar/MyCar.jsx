import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import UpdateCar from "./UpdateCar";

const MyCar = () => {
  const { user } = useAuth();
  const [myCars, setMyCars] = useState([]);
  const [sorting, setSorting] = useState("");
  const [upDateId, setUpDateId] = useState("");
  const [is, setIs] = useState(false);

  const handleChangeSorting = (e) => {
    let order = e.target.value;
    setSorting(e.target.value);
    let copyArray = [...myCars];
    if (order === "asc-date") {
      let aseOder = copyArray.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setMyCars(aseOder);
    }
    if (order === "des-date") {
      let aseOder = copyArray.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setMyCars(aseOder);
    }
    if (order === "asc-price") {
      let aseOder = copyArray.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      setMyCars(aseOder);
    }
    if (order === "des-price") {
      let aseOder = copyArray.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      setMyCars(aseOder);
    }
  };

  useEffect(() => {
    async function getMyCar() {
      let { data } = await axios.get(
        `http://localhost:5000/car?email=${user?.email}`,
        { withCredentials: true }
      );

      setMyCars(data);
    }
    getMyCar();
  }, [user?.email, is, upDateId]);

  const handleUpdateData = (id) => {
    setUpDateId(id);
  };

  const handleMyCarDelete = (deleteId) => {
    setIs(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/delete/${deleteId}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setIs(true);
          });
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="mb-10">
          <select
            defaultValue="Car Sorting or filter?"
            className="select select-bordered w-full max-w-xs"
            onChange={handleChangeSorting}
          >
            <option disabled>Car Sorting or filter?</option>
            <option value="des-date">Newest First</option>
            <option value="asc-date">Oldest First</option>
            <option value="des-price">Highest First</option>
            <option value="asc-price">Lowest First</option>
          </select>
        </div>
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
