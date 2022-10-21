import React from "react";
import {
  FaBath,
  FaBed,
  FaHeart,
  FaMapMarkerAlt,
  FaRestroom,
  FaShare,
  FaStar,
  FaUser,
} from "react-icons/fa";
const Description = () => {
  return (
    <div className=" border-4 border-slate-200 rounded-lg">
      <div className="py-4">
        <div className="flex justify-between px-10">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Beyound Horizon
          </p>
          <div className="flex items-center space-x-4 text-sm text-violet-600">
            <FaShare></FaShare>
            <p>Share</p>
            <FaHeart></FaHeart>
            <p>Save</p>
          </div>
        </div>
        <div className="text-start pl-4 text-3xl my-4 text-gray-600">
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
        <div>
          <div className="bg-slate-300 h-1 mx-6 bg"></div>
        </div>
        <div className="text-start flex space-x-10 mt-5 pl-4">
          <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm">
            <p>
              <FaUser></FaUser>
            </p>
            <p>6 Guest</p>
          </div>
          <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm">
            <p>
              <FaBed></FaBed>
            </p>
            <p>3 Bed</p>
          </div>
          <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm">
            <p>
              <FaBath></FaBath>
            </p>
            <p>3 Bath</p>
          </div>
          <div className="flex justify-center items-center  space-x-3 text-gray-600 text-sm">
            <p>
              <FaRestroom></FaRestroom>
            </p>
            <p>2 Rest Room</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
