import Lottie from "lottie-react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginLottieData from "../../assets/lottieFile/carLogon.json";
import { useAuth } from "../../hooks/useAuth";
import FormHeading from "./FormHeading";

const LoginForm = () => {
  const [passShow, setPassShow] = useState(false);
  const { loginAccount, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    loginAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("login");
        toast.success("Your are Login Successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/invalid-credential")) {
          toast.warn("the Email and password not match. please try again .");
          setLoading(false);
        }
      });
  };
  return (
    <section className="my-24">
      <div className="container">
        <div className="  md:flex gap-5 items-center ">
          <div className="md:w-1/2">
            <Lottie animationData={loginLottieData} loop={true} />
          </div>
          <div className=" md:w-1/2 shadow-xl ">
            <div className="mt-10">
              <FormHeading title="Log In to your Account" />
            </div>

            <div className=" card bg-base-100 dark:bg-slate-600 w-full rounded-none   max-w-xl mx-auto mb-32 ">
              <form
                onSubmit={handleLoginSubmit}
                className="card-body p-3 md:p-10 "
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-gray-200">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="p-3 border-b text-gray-900 focus:outline-none focus:border-sky-500   focus:ring-sky-500"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text   dark:text-gray-200">
                      Password
                    </span>
                  </label>
                  <input
                    type={passShow ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="p-3 border-b focus:outline-none focus:border-sky-500 text-gray-900 focus:ring-sky-500"
                    required
                  />
                  <div className="absolute  right-5 top-9 dark:top-12 ">
                    <span onClick={() => setPassShow(!passShow)}>
                      {" "}
                      {passShow ? (
                        <FaRegEyeSlash className="text-2xl text-car-primary hover:text-car-secondary " />
                      ) : (
                        <FaRegEye className="text-2xl text-gray-900 text-car-primary hover:text-car-secondary" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-car-primary hover:bg-car-secondary text-car-white tracking-wider">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mb-6">
                <p className="text-gray-500 dark:text-white">
                  New User ?{" "}
                  <Link
                    className="text-blue-600 dark:text-orange-600 font-semibold underline"
                    to="/register"
                  >
                    SIGN UP HERE
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
