import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const FormHeading = ({ title }) => {
  return (
    <div className="container text-center mt-32 mb-20">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="sm:space-x-6 my-5">
        <button className="btn btn-outline rounded-3xl border-car-primary  text-car-primary hover:bg-car-primary hover:border-car-primary  ">
          {" "}
          <FcGoogle className="text-lg" /> Sign Up with Google
        </button>
        <button className="btn btn-outline border-car-primary rounded-3xl text-car-primary hover:bg-car-primary hover:border-car-primary  mt-4  sm:mt-0">
          {" "}
          <FaGithub className="text-lg text-black" /> Sign Up with Github
        </button>
      </div>
    </div>
  );
};

export default FormHeading;
