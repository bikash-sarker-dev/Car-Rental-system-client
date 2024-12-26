import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const AddCarForm = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  let userInfo = {
    name: user?.displayName,
    email: user?.email,
    photoUrl: user?.photoURL,
  };

  const handleAddCarSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData.entries());
    const { ...carData } = newObject;
    carData.features = carData.features.split(",");
    carData.bookingCount = 0;
    carData.author = userInfo;
    carData.date = startDate;
    carData.bookingStatus = "";

    axios
      .post("https://car-rental-server-sage.vercel.app/car", carData)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully ",
            text: "the car rental data submit",
            icon: "success",
          });
        }
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-14">
        <form onSubmit={handleAddCarSubmit} className="card-body">
          {/* row 1 */}
          <div className="flex gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Car Model</span>
              </label>
              <input
                type="text"
                name="carModel"
                placeholder="Enter cat model"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">
                  Vehicle Registration Number
                </span>
              </label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Enter Vehicle Registration Number"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Enter cat brand"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Date</span>
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="flex gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Daily Rental Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter Daily Rental Price<"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Availability</span>
              </label>
              <select
                name="availability"
                defaultValue="select option"
                className="select select-bordered w-full "
              >
                <option disabled>select option</option>
                <option>YES</option>
                <option>NO</option>
              </select>
            </div>
          </div>
          {/* row 3 */}
          <div className="flex gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Photo url</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter Daily Rental Price<"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row 4 */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">
                Features{" "}
                <mark className="text-[12px]">
                  {" "}
                  ( Write each features in a comma (,) is must be required ){" "}
                </mark>
              </span>
            </label>
            <textarea
              placeholder="Write each features in a new line"
              name="features"
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
          </div>
          {/* row 5 */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="the car relate description"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarForm;
