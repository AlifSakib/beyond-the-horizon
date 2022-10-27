import React, { useContext } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { PlacesContext } from "../../../Layout/Root";
const Cover = ({ place }) => {
  const places = useContext(PlacesContext);
  return (
    <div className="w-9/12 mx-auto">
      <AwesomeSlider className="h-[600px]">
        <div data-src={places[0].image_url}></div>
        <div data-src={places[1].image_url}></div>
        <div data-src={places[2].image_url}></div>
        <div data-src={places[3].image_url}></div>
      </AwesomeSlider>
    </div>
  );
};

export default Cover;
