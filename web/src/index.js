import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlightTour from "./Components/ChooseTour/FlightTour";
import BusTour from "./Components/ChooseTour/BusTour";
import Dir from "./Components/ChooseTour/Dir";
import Signin from "./Components/Signin";


import Payment from "./Components/ChooseTour/Payment";
import Signup from "./Components/ChooseTour/form/signup";
import Forgotpass from "./Components/ChooseTour/form/forgotpass";
import Sendcode from "./Components/ChooseTour/form/sendcode";
import Resetpass from "./Components/ChooseTour/form/resetpass";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flightTour",
    element: <FlightTour />,
  },
  {
    path: "/bustTour",
    element: <BusTour />,
  },
  {
    path: "/diraction",
    element: <Dir />,
  },
  {
    path: "/paynow",
    element: <Payment />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/sendcode",
    element: <Sendcode />,
  },
 
  {
    path: "/forgotpass",
    element: <Forgotpass />,
  },
 
  {
    path: "/resetpass",
    element: <Resetpass />,
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
reportWebVitals();
