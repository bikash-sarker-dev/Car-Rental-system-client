import Lottie from "lottie-react";
import React from "react";
import LoadingSpinner from "../assets/lottieFile/loading.json";

const LoadingPage = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-24 lg:w-36">
        <Lottie animationData={LoadingSpinner} loop={true} />
      </div>
    </div>
  );
};

export default LoadingPage;
