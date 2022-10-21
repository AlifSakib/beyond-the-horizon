import React from "react";

const Hotels = ({ hotel }) => {
  const { image_url } = hotel;
  return (
    <div className="mb-10 border border-violet-600 rounded-md">
      <div>
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={image_url}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Galaxies Orion
        </p>
        <p className="text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.
        </p>
      </div>
    </div>
  );
};

export default Hotels;
