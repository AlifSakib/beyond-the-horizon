import React from "react";
import toast from "react-hot-toast";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import Hotels from "../Pages/Hotels/Hotels";

const Payment = () => {
  const position = [23.75, 90.44];
  const hotels = useLoaderData();
  const handleConfirm = () => {
    toast.success("Payment Successfull");
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div>
          {hotels.map((hotel, index) => (
            <Hotels hotel={hotel} key={index}></Hotels>
          ))}
        </div>
        <div>
          <div>
            <MapContainer
              className="h-[350px]"
              center={[23.750747, 90.4405]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[23.750747, 90.4405]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="mt-10">
            <button
              onClick={handleConfirm}
              className=" bg-blue-700 relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 
            text-white w-96 hover:bg-green-500 
            "
              type="submit"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
