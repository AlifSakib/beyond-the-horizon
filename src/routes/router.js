import { createBrowserRouter } from "react-router-dom";
import BookingReview from "../Components/BookingReview/BookingReview";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Pages/LogIn/LogIn";
import SignUp from "../Components/Pages/SignUp/SignUP";
import Root from "../Layout/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: <BookingReview></BookingReview>,
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
