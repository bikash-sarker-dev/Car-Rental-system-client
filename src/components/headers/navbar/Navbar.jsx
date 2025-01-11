import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import UserIcons from "../../../assets/images//Icons/userIcon.png";
import Logo from "../../../assets/images/logo/carLogo.png";
import { useAuth } from "../../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  let Links = (
    <>
      <li>
        <NavLink className="font-medium text-base" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-base" to="/car-available">
          Car Available
        </NavLink>
      </li>
      {user && user.email && (
        <>
          {" "}
          <li>
            <NavLink className="font-medium text-base" to="/carAdd">
              Add Car{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="font-medium text-base" to="/my-car">
              {" "}
              My Car{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="font-medium text-base" to="/my-booking">
              My Booking
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={`${
        scroll
          ? "sticky w-full bg-car-primary text-car-background py-2"
          : "my-4"
      }`}
    >
      <div className="container">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-car-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {Links}
              </ul>
            </div>
            <div className="">
              <img className="w-40" src={Logo} alt="project logo" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div className="navbar-end">
            {user && user?.email ? (
              <div>
                <Tooltip anchorSelect=".my-anchor-element" place="left">
                  {user?.displayName}
                </Tooltip>
                <div className="avatar my-anchor-element">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full border-2 border-car-primary ">
                    <img
                      src={user?.photoURL}
                      alt="profile picture not support"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <img src={UserIcons} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
