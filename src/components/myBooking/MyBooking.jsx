import axios from "axios";
import { useEffect, useState } from "react";
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

  return <div>MyBooking</div>;
};

export default MyBooking;
