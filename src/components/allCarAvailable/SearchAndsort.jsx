import axios from "axios";
import { useEffect, useState } from "react";

const SearchAndsort = ({ allCar, setAllCar }) => {
  const [search, setsearch] = useState("");
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  useEffect(() => {
    async function getAllData() {
      let { data } = await axios.get(
        `https://car-rental-server-sage.vercel.app/search?search=${search}`
      );
      setAllCar(data);
    }
    getAllData();
  }, [search]);

  const handleChangeSorting = (e) => {
    let order = e.target.value;

    let copyArray = [...allCar];
    if (order === "asc-date") {
      let aseOder = copyArray.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setAllCar(aseOder);
    }
    if (order === "des-date") {
      let aseOder = copyArray.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setAllCar(aseOder);
    }
    if (order === "asc-price") {
      let aseOder = copyArray.sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      setAllCar(aseOder);
    }
    if (order === "des-price") {
      let aseOder = copyArray.sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      setAllCar(aseOder);
    }
  };
  return (
    <div className=" sm:flex justify-between mt-10">
      <div className=" sm:w-1/2">
        <label className="input input-bordered max-w-sm flex items-center gap-2">
          <input
            onChange={handleSearch}
            type="search"
            className="grow "
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className=" sm:w-1/2 md:flex mt-3 md:mt-0 gap-5 justify-end">
        <div>
          <div className="mb-10 w-full">
            <select
              defaultValue="Car Sorting or filter?"
              className="select select-bordered w-full "
              onChange={handleChangeSorting}
            >
              <option disabled>Car Sorting or filter?</option>
              <option value="des-date">Newest First</option>
              <option value="asc-date">Oldest First</option>
              <option value="des-price">Highest First</option>
              <option value="asc-price">Lowest First</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndsort;
