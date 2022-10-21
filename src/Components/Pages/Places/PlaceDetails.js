import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlacesContext } from "../../../Layout/Root";
import Place from "./Place";
const PlaceDetails = () => {
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/bookingDetails");
  };
  const places = useContext(PlacesContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4 font-Poppins">
            Have stories to tell not
            <br className="hidden md:block" />
            stuff to show.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Class is dead", says Foucault; however, according to Reicher, it is
          not so much class that is dead, but rather the absurdity, and some
          would say the paradigm, of class. However, the subject is interpolated
          into a postpatriarchialist dialectic theory that includes
          consciousness as a totality.
        </p>
      </div>

      <div
        className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6
      sm:grid-cols-2"
      >
        {places.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </div>
  );
};

export default PlaceDetails;
