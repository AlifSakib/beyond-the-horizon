import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
const Description = ({ place }) => {
  const { location, title } = place;
  console.log(place);
  return (
    <div className=" border-2 border-teal-600 rounded-lg">
      <div className="py-4">
        <div className="flex justify-between px-10">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Beyound Horizon
          </p>
        </div>
        <div className="text-start pl-4 text-xl my-4 text-gray-600">
          <p>{title}</p>
        </div>
        <div className=" flex  space-x-6 items-center px-4 text-gray-600">
          <div className="flex space-x-3 ">
            <div className="text-orange-300 text-lg">
              <FaStar></FaStar>
            </div>
            <div>
              <p>(112)</p>
            </div>
          </div>
          <div>.</div>
          <div className="flex space-x-3 ">
            <div className="text-green-300 text-lg">
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg pl-4 text-start text-violet-600 my-4">
            Hosted By Beyond Horizon
          </p>
        </div>
        <div>
          <div className="bg-slate-300 h-1 mx-6 bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Description;
