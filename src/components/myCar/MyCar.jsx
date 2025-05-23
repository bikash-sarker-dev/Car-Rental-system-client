import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UpdateCar from "./UpdateCar";

const MyCar = () => {
  const { user, setLoading } = useAuth();
  const axiosInstance = useAxiosSecure();
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
    axiosInstance.get(`/car?email=${user?.email}`).then((res) => {
      setMyCars(res.data);
    });
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
          .delete(
            `https://car-rental-server-sage.vercel.app/delete/${deleteId}`
          )
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

  const addCarLinkFunction = () => {
    return document.getElementById("on_modal").showModal();
  };
  setTimeout(addCarLinkFunction, 5000);

  return (
    <div>
      <div className="container">
        <div className="mb-10 bg-car-default p-4 ">
          <select
            defaultValue="Car Sorting or filter?"
            className="select select-bordered w-full max-w-xs bg-car-background"
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
              <tr className="bg-car-accent hidden py-2 sm:block text-car-text font-bold text-[15px]">
                <th>ON</th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Daily Rental Price</th>
                <th>Availability</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {myCars.length === 0 ? (
              <>
                <dialog id="on_modal" className="modal ">
                  <div className="modal-box text-center py-12">
                    <h3 className="font-bold text-lg">
                      If no cars are added !
                    </h3>
                    <p className="py-4">
                      Press the user to add a car with a link to the "Add Car"
                      button on click.
                    </p>

                    <div className="modal-action justify-center ">
                      <Link
                        to="/carAdd"
                        className="btn bg-car-primary text-car-white"
                      >
                        Add Car
                      </Link>
                      <form method="dialog">
                        <button className="btn bg-[#dc2626] text-car-white">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            ) : (
              <tbody>
                {/* row 1 */}
                {myCars.map((car, i) => (
                  <tr
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className=" flex sm:flex-none  flex-col sm:flex-row bg-car-info my-5 sm:bg-car-white"
                    key={car?._id}
                  >
                    <td>{i + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  sm:h-12 sm:w-16 h-52 w-80">
                            <img
                              src={car?.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <strong className="sm:hidden"> Car Modal: </strong>{" "}
                      {car?.carModel}
                    </td>
                    <td>
                      {" "}
                      <strong className="sm:hidden"> Price: </strong> $
                      {car?.price ? `${car?.price} /day` : "not fond"}
                    </td>
                    <td>
                      {" "}
                      <strong className="sm:hidden">
                        {" "}
                        Availability:{" "}
                      </strong>{" "}
                      {car?.availability}
                    </td>
                    <td>
                      {" "}
                      <strong className="sm:hidden"> Date: </strong>{" "}
                      {car?.date ? car?.date : "not Available"}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          document.getElementById("update_Id").showModal();
                          handleUpdateData(car?._id);
                        }}
                        className="btn bg-car-secondary text-car-white hover:text-[#000] text-2xl mx-1"
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
            )}
          </table>
        </div>
      </div>
      <UpdateCar upDateId={upDateId} setIs={setIs} />
    </div>
  );
};

export default MyCar;
