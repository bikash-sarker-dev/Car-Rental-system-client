import React from "react";

const AddCarForm = () => {
  const handleAddCarSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData.entries());
    const { ...carData } = newObject;
    carData.features = carData.features.split("\n");

    console.log(carData);
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
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
                  ( Write each features in a new line ){" "}
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
