import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

const TopSubNavbar = () => {
  const { user, accountLogout } = useAuth();
  const navigate = useNavigate();

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
        <div className="flex justify-between py-3">
          <div>date</div>
          <div className="space-x-4">
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
