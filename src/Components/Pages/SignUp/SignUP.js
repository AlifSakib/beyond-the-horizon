import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";
const SignUP = () => {
  const { createUser, updateUserDetails, verifyEmail, logOutUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handlSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName: name };

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        verifyEmail()
          .then(() => {
            logOutUser();
            // navigate("/");
            toast.success("Verification Email Sent!");
          })
          .catch((error) => {
            console.error(error);
          });
        updateUserDetails(profile)
          .then((result) => {})
          .catch((error) => {
            console.error(error);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="mx-auto space-y-8 container mt-24">
      <div className="text-5xl font-bold">
        <h1>Signup</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className=" flex justify-around items-center w-96 py-2 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer bg-blue-50 ease ">
          <FaFacebook className="text-blue-800  text-start text-2xl"></FaFacebook>
          <p className="text-center text-sm text-gray-700">
            Continue with Facebook
          </p>
        </div>
        <div className=" flex justify-around items-center w-96 py-2 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer bg-blue-50 ease ">
          <FaTwitter className="text-sky-400  text-start text-2xl"></FaTwitter>
          <p className="text-center text-sm text-gray-700 pr-6">
            Continue with Twitter
          </p>
        </div>
        <div className=" flex justify-around items-center w-96 py-2 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer bg-blue-50 ease ">
          <FaGoogle className="text-red-800  text-start text-2xl"></FaGoogle>
          <p className="text-center text-sm text-gray-700 pr-5">
            Continue with Google
          </p>
        </div>
      </div>
      <div className="relative w-9/12 mx-auto text-center">
        <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
          OR
        </span>
        <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
      </div>
      <div className="text-start ">
        <form
          onSubmit={handlSubmit}
          className="flex flex-col items-center space-y-6 text-sm"
          action=""
        >
          <label className="">
            <span className="text-gray-700 dark:text-neutral-200 text-start">
              Name
            </span>
            <input
              type="text"
              name="name"
              className="block w-96 border border-blue-200 focu bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 outline-none"
              placeholder="Your Name"
            />
          </label>
          <label className="">
            <span className="text-gray-700 dark:text-neutral-200 text-start">
              Email address
            </span>
            <input
              type="email"
              name="email"
              className="block w-96 border border-blue-200 focu bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 outline-none"
              placeholder="example@example.com"
            />
          </label>
          <label className="">
            <span className="text-gray-700 dark:text-neutral-200 text-start">
              Password
            </span>

            <input
              type="password"
              name="password"
              className="block w-96 border border-blue-200 focu bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1 outline-none"
              placeholder="password must be 6 character or more"
            />
          </label>
          <button
            className=" bg-blue-700 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 
            text-white w-96 hover:bg-green-500 
            "
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="text-center mt-10 text-gray-700">
          <p>
            Already have an account ?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 text-blue-700 hover:text-violet-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
