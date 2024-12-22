import React from "react";
import { Link } from "react-router-dom";

const TopSubNavbar = () => {
  return (
    <div className="bg-car-primary">
      <div className="container">
        <div className="flex justify-between py-3">
          <div>date</div>
          <div className="space-x-4">
            <Link
              className="font-medium text-base-100 btn btn-sm btn-outline rounded-3xl min-h-7 h-7"
              to="/login"
            >
              LOGIN
            </Link>
            <Link
              className="font-medium text-base-100  btn btn-sm btn-outline rounded-3xl min-h-7 h-7"
              to="/register"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSubNavbar;
