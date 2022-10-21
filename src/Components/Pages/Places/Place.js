import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Place = ({ place }) => {
  const { id, location, image_url } = place;

  return (
    <div>
      <Link to={`/bookingDetails/${id}`} aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={image_url}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100 text-yellow-500">
              {location}
            </p>
            <p className="text-sm tracking-wide text-gray-300 text-start">
              Painted between 1503 and 1517, Da Vinci’s alluring portrait has
              been dogged by two questions since the day it was made: Who’s the
              subject and why is she smiling?
            </p>
            <div className="absolute bottom-10 w-full text-center bg-violet-500 rounded-l-md py-1 hover:bg-violet-600 text-white">
              <button className="flex  items-center text-center space-x-2 pl-6">
                <p>Book Now</p> <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Place;
