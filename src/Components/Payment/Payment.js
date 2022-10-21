import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Hotels from "../Pages/Hotels/Hotels";
import image from "./image 1.png";

const Payment = () => {
  const hotels = useLoaderData();
  const handleConfirm = () => {
    toast.success("Payment Successfull");
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div>
          {hotels.map((hotel, index) => (
            <Hotels hotel={hotel} key={index}></Hotels>
          ))}
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
          <div className="mt-10">
            <button
              onClick={handleConfirm}
              className=" bg-blue-700 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 
            text-white w-96 hover:bg-green-500 
            "
              type="submit"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
