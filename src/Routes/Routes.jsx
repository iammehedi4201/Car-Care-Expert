/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import CartDetails from "../Pages/CartDetails/CartDetails/CartDetails";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path:"/checkout/:id",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes> ,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <CartDetails></CartDetails>
          </PrivateRoutes>
        ),
      },
      {
        path:"/serviceDetails/:id",
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      }
    ],
  },
]);
