import React from "react";
import { NavLink } from "react-router-dom";
import UserIcons from "../../../assets/images//Icons/userIcon.png";
import Logo from "../../../assets/images/logo/carLogo.png";

const Navbar = () => {
  let Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/carAvailable">Car Available</NavLink>
      </li>
      <li>
        <NavLink to="/addCar">Add Car </NavLink>
      </li>
      <li>
        <NavLink to="/nyCar"> My Car </NavLink>
      </li>
      <li>
        <NavLink to="/myBooking">My Booking</NavLink>
      </li>
    </>
  );
  return (
    <div className="container">
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <a className="">
            <img src={UserIcons} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
