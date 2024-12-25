import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

const UpDateForm = ({ upDateId, setIs }) => {
  const [defaultValue, setDefaultValue] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    async function previousValue() {
      let { data } = await axios.get(
        `http://localhost:5000/update/${upDateId}`
      );
      setDefaultValue(data);
    }
    previousValue();
  }, [upDateId]);

  const handleUpdateCarSubmit = (e) => {
    setIs(false);
    e.preventDefault();
    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData.entries());
    const { ...upData } = newObject;
    upData.features = upData.features.split(",");
    upData.bookingCount = 0;
    upData.date = startDate;

    axios
      .put(`http://localhost:5000/update/${upDateId}`, upData)
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Data Update");
        }
        setIs(true);
      });

    document.getElementById("update_Id").close();
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateCarSubmit} className="card-body">
          {/* row 1 */}
          <div className="flex gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Car Model</span>
              </label>
              <input
                type="text"
                name="carModel"
                defaultValue={defaultValue?.carModel}
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
                defaultValue={defaultValue?.registrationNumber}
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
                defaultValue={defaultValue?.brand}
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
                defaultValue={defaultValue?.price}
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
                defaultValue={defaultValue?.availability}
                className="select select-bordered w-full "
              >
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
                defaultValue={defaultValue?.photo}
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
                defaultValue={defaultValue?.location}
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
                  ( Write each features in a new line ){" "}
                </mark>
              </span>
            </label>
            <textarea
              placeholder="Write each features in a new line"
              name="features"
              defaultValue={defaultValue?.features}
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
              defaultValue={defaultValue?.description}
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

export default UpDateForm;
