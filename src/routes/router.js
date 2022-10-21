import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import BookingDetails from "../Components/Pages/BookingDetails/BookingDetails";
import LogIn from "../Components/Pages/LogIn/LogIn";
import { Pricing } from "../Components/Pages/Pricing/Pricing";
import SignUp from "../Components/Pages/SignUp/SignUP";
import Payment from "../Components/Payment/Payment";
import Profile from "../Components/Profile/Profile";
import Root from "../Layout/Root";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("https://beyond-the-horizon-server.vercel.app/places"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookingDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://beyond-the-horizon-server.vercel.app/bookingDetails/${params.id}`
          ),
        element: <BookingDetails></BookingDetails>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/payment",
        loader: () =>
          fetch("https://beyond-the-horizon-server.vercel.app/hotels"),
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);
