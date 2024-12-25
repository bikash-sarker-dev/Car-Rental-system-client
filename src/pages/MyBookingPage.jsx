import React from "react";
import PageHead from "../components/headers/pageHead/PageHead";
import MyBooking from "../components/myBooking/MyBooking";

const MyBookingPage = () => {
  return (
    <div>
      <PageHead title="My Booking Page" />
      <div className="my-32">
        <MyBooking />
      </div>
    </div>
  );
};

export default MyBookingPage;
