import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../hooks/useAuth";

const FormHeading = ({ title }) => {
  const provider = new GoogleAuthProvider();
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("login successfully ");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="container text-center mt-32 mb-20">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="sm:space-x-6 my-5">
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline rounded-3xl border-car-primary  text-car-primary hover:bg-car-primary hover:border-car-primary  "
        >
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
