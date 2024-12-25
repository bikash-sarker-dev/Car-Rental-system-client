import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import errorLottieFIle from "../assets/lottieFile/error.json";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="w-72">
          <Lottie animationData={errorLottieFIle} loop={true} />
        </div>

        <p className="text-4xl font-extrabold">Page is Not Found</p>
        <Link to="/" className="btn bg-car-primary mt-6 text-car-white">
          back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
