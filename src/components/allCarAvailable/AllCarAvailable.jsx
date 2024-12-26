import axios from "axios";
import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import GridCard from "./GridCard";
import ListCart from "./ListCart";
import SearchAndsort from "./SearchAndsort";

const AllCarAvailable = () => {
  const [allCar, setAllCar] = useState([]);
  const [gridAndList, setGridAndList] = useState(true);

  useEffect(() => {
    async function getAllData() {
      let { data } = await axios.get(
        "https://car-rental-server-sage.vercel.app/car"
      );
      setAllCar(data);
    }
    getAllData();
  }, []);

  return (
    <div>
      <div className="container">
        <SearchAndsort setAllCar={setAllCar} allCar={allCar} />
        <div className="flex justify-between my-10">
          <h2 className="text-xl font-bold">{gridAndList ? "Grid" : "List"}</h2>
          <div>
            {gridAndList ? (
              <button
                onClick={() => setGridAndList(!gridAndList)}
                className="text-2xl"
              >
                <TfiLayoutGrid3Alt />
              </button>
            ) : (
              <button
                onClick={() => setGridAndList(!gridAndList)}
                className="text-2xl"
              >
                <FaList />
              </button>
            )}
          </div>
        </div>

        {gridAndList ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCar.map((car) => (
              <GridCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div>
            {allCar.map((car) => (
              <ListCart key={car._id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCarAvailable;
