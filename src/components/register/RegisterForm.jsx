import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import registerLottieFile from "../../assets/lottieFile/register.json";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm = () => {
  const [passShow, setPassShow] = useState(false);
  const { createNewAccount, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    // const obj = Object.fromEntries(formData.entries());

    let name = formData.get("username");
    let photo = formData.get("photo");
    let email = formData.get("email");
    let password = formData.get("password");

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
    if (!validation.test(password)) {
      toast.warn(
        "the password must be at least 6 character, must be Uppercase and Lowercase "
      );
      return;
    }
    console.log({ name, photo, email, password });

    // create a New user
    createNewAccount(email, password)
      .then((result) => {
        const user = result.user;

        // user name or photo update
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success(
              "Successfully registration done. Please Login and enjoy your application. "
            );
            console.log(user);
            navigate("/login");
          })
          .catch((error) => {
            const errorMessage = error.message;

            console.log(errorMessage);
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        if (errorMessage.includes("auth/email-already-in-use")) {
          alert("yes");
          toast.warn("the Email already used. please give you new email.");
        }
        console.log(errorMessage);
      });
  };
  return (
    <section className="py-28 bg-car-info">
      <ToastContainer />
      <div className="container">
        <div className="md:flex gap-5">
          <div className="md:w-1/2">
            <Lottie animationData={registerLottieFile} loop={true} />
          </div>
          <div className="md:w-1/2">
            <div className="card  w-full dark:bg-slate-600 shrink-0 shadow-2xl  mx-auto ">
              <form
                onSubmit={handleRegisterSubmit}
                className="card-body px-3 md:px-10"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-gray-200">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    className="p-3 border-b bg-car-info text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-gray-200">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    placeholder="Enter photo url"
                    className="p-3 border-b bg-car-info text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-gray-200">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="p-3 border-b bg-car-info text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text dark:text-gray-200">
                      Password
                    </span>
                  </label>
                  <input
                    type={passShow ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="p-3 border-b bg-car-info text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
                    required
                  />
                  <div className="absolute  right-5  dark:top-12 top-9 ">
                    <span
                      className="cursor-pointer"
                      onClick={() => setPassShow(!passShow)}
                    >
                      {" "}
                      {passShow ? (
                        <FaRegEyeSlash className="text-2xl text-gray-900 text-car-primary hover:text-car-secondary" />
                      ) : (
                        <FaRegEye className="text-2xl text-gray-900 text-car-primary hover:text-car-secondary" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-car-primary hover:bg-car-secondary text-car-white tracking-wider">
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center mb-6">
                <p className="text-gray-500 dark:text-white ">
                  Already have an account ?{" "}
                  <Link
                    className="text-blue-600 font-semibold dark:text-orange-600  underline"
                    to="/login"
                  >
                    LOGIN HERE
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

export default RegisterForm;
