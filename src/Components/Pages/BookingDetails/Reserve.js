import React from "react";
import { Link } from "react-router-dom";
import image1 from "./assets/image-1.jpeg";
const Reserve = () => {
  return (
    <div class="max-w-xs overflow-hidden  text-gray-800 rounded-lg  shadow-2xl dark:bg-gray-800">
      <div class="px-4 py-2">
        <h1 class="text-3xl font-bold  uppercase dark:text-white">
          Beach House
        </h1>
        <p class="  text-sm  dark:text-gray-400 mt-3">
          We give you the best payment experience with 100% security
        </p>
      </div>

      <img class="object-cover w-full h-48 mt-2" src={image1} alt="NIKE AIR" />

      <div class="flex items-center justify-between px-4 py-2">
        <h1 class="text-lg font-bold ">
          $129<span className="font-normal text-gray-600">/night</span>
        </h1>
        <Link to="/payment">
          <button class="px-6 py-2 text-xs font-semibold  uppercase transition-colors duration-300 transform  rounded bg-violet-700 text-white ">
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reserve;
