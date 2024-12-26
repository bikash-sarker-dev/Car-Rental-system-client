import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

const TopSubNavbar = () => {
  const { user, accountLogout } = useAuth();
  const [currentDateTime, setCurrentDateTime] = useState(moment());
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleLogout = () => {
    accountLogout()
      .then(() => {
        toast.success("Your are Account LogOut");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="bg-car-primary">
      <div className="container">
        <div className="sm:flex justify-between py-3 text-center">
          <div>
            <p className="text-car-white font-semibold">
              <span>Date: {currentDateTime.format("DD-MM-YYYY ")}</span>
              <span>Time: {currentDateTime.format(" hh:mm:ss A")}</span>
            </p>
          </div>
          <div className="space-x-4 mt-2 sm:mt-0">
            {user && user?.email ? (
              <button
                onClick={handleLogout}
                className="font-medium text-base-100 btn btn-sm btn-outline rounded-3xl min-h-7 h-7 tracking-wider"
              >
                LOGOUT
              </button>
            ) : (
              <>
                <Link
                  className="font-medium text-base-100 tracking-wider btn btn-sm btn-outline rounded-3xl min-h-7 h-7"
                  to="/login"
                >
                  LOGIN
                </Link>
                <Link
                  className="font-medium text-base-100 tracking-wider  btn btn-sm btn-outline rounded-3xl min-h-7 h-7"
                  to="/register"
                >
                  REGISTER
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSubNavbar;
