import React from "react";
import image1 from "./assets/image-1.jpeg";
import image2 from "./assets/image-2.jpeg";
import image3 from "./assets/image-3.jpeg";
const Cover = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 row-span-2 ">
          <img className=" rounded-lg" src={image1} alt="" />
        </div>
        <div className="grid gap-2">
          <img className=" rounded-lg" src={image2} alt="" />
          <img className=" rounded-lg" src={image3} alt="" />
        </div>
        <div className="grid gap-2">
          <img className=" rounded-lg" src={image2} alt="" />
          <img className=" rounded-lg" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
