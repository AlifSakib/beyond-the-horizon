import React from "react";
import { FaHeart, FaMapMarkerAlt, FaShare, FaStar } from "react-icons/fa";
const Description = () => {
  return (
    <div className="w-9/12 mx-auto border-4 border-slate-200 rounded-lg">
      <div className="py-4">
        <div className="flex justify-between px-10">
          <p className="bg-emerald-200 text-emerald-600 rounded-full px-4">
            Wooden house
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <FaShare></FaShare>
            <p>Share</p>
            <FaHeart></FaHeart>
            <p>Save</p>
          </div>
        </div>
        <div className="text-start pl-4 text-3xl my-4">
          <p>Beach House in Collingwood</p>
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
              <p>Tokyo, Japan</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg pl-4 text-start text-gray-600 my-4">
            Hosted By David Lim
          </p>
        </div>
        <div className="my-4 mx-4 rounded-full border-2 border-slate-400">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Description;
