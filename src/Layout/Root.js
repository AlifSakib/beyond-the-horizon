import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

export const PlacesContext = createContext();
const Root = () => {
  const places = useLoaderData();
  return (
    <div>
      <PlacesContext.Provider value={places}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </PlacesContext.Provider>
    </div>
  );
};

export default Root;
