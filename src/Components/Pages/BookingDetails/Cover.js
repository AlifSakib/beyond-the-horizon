import React, { useContext } from "react";
import { PlacesContext } from "../../../Layout/Root";
const Cover = ({ place }) => {
  const places = useContext(PlacesContext);
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 row-span-2 ">
          <img className=" rounded-lg" src={places[0].image_url} alt="" />
        </div>
        <div className="grid gap-2">
          <img className=" rounded-lg" src={places[1].image_url} alt="" />
          <img className=" rounded-lg" src={places[2].image_url} alt="" />
        </div>
        <div className="grid gap-2">
          <img className=" rounded-lg" src={places[3].image_url} alt="" />
          <img className=" rounded-lg" src={places[4].image_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
